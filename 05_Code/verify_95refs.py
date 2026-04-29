"""Verify 95 references via Crossref API — reads refs_95.json, searches Crossref, compares metadata."""
import sys, json, urllib.request, urllib.parse, time, re

sys.stdout.reconfigure(encoding='utf-8')
USER_AGENT = "ResearchVault/1.0 (mailto:research@example.com)"
JSON_PATH = r"D:\research\ResearchVault\05_Code\refs_95.json"

def load_refs():
    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)

def search_crossref(title, author_surname, rows=5):
    """Search Crossref by title + author surname."""
    query = title[:200]
    if author_surname:
        query = f"{author_surname} {query}"
    url = f"https://api.crossref.org/works?query={urllib.parse.quote(query)}&rows={rows}"
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read()).get('message', {}).get('items', [])
    except Exception as e:
        return [{"_error": str(e)}]

def search_crossref_title_only(title, rows=5):
    """Search Crossref by title only (for Chinese etc.)."""
    url = f"https://api.crossref.org/works?query.bibliographic={urllib.parse.quote(title[:200])}&rows={rows}"
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read()).get('message', {}).get('items', [])
    except Exception as e:
        return [{"_error": str(e)}]

def get_author_surname(ref_authors):
    """Extract first author surname for search boost."""
    parts = re.split(r'[,;]|\bet al\.?', ref_authors, flags=re.IGNORECASE)
    for p in parts[:2]:
        p = p.strip()
        if p:
            words = p.split()
            if words:
                return words[-1]
    return ''

def extract_crossref_info(work):
    """Extract standard fields from a Crossref work item."""
    title = work.get('title', [''])[0] if work.get('title') else ''
    subtitle = work.get('subtitle', [''])[0] if work.get('subtitle') else ''
    if subtitle and subtitle not in title:
        title = f"{title}: {subtitle}"

    authors_list = []
    for a in work.get('author', []):
        family = a.get('family', '')
        given = a.get('given', '')
        if family:
            authors_list.append(f"{family}, {given}" if given else family)
    author_str = '; '.join(authors_list[:5])
    if len(authors_list) > 5:
        author_str += ' et al.'

    container = ''
    ct = work.get('container-title', [])
    if ct:
        container = ct[0]

    pub_date = (work.get('published-print', {}) or work.get('published-online', {}) or
                work.get('issued', {}) or work.get('created', {}))
    pub_parts = pub_date.get('date-parts', [[None]])[0]
    year = str(pub_parts[0]) if pub_parts[0] else '?'

    doi = work.get('DOI', '')
    vol = work.get('volume', '') or ''
    issue = work.get('issue', '') or ''
    page = work.get('page', '') or work.get('article-number', '') or ''

    return {
        'title': title, 'authors': author_str, 'container': container,
        'volume': str(vol), 'issue': str(issue), 'pages': str(page),
        'year': year, 'doi': doi, 'type': work.get('type', ''),
        'score': work.get('score', 0)
    }

def normalize(t):
    """Normalize text for comparison."""
    t = t.lower().strip()
    t = re.sub(r'[^a-z0-9一-鿿぀-ゟ゠-ヿ]', '', t)
    t = re.sub(r'\s+', ' ', t)
    return t[:80]

def compare_metadata(ref, ci):
    """Compare claimed ref metadata with Crossref info. Returns list of (field, message)."""
    issues = []

    # Title comparison
    rt = normalize(ref['title'])
    ct = normalize(ci['title'])
    if rt and ct:
        if rt[:50] != ct[:50] and rt[:30] not in ct and ct[:30] not in rt:
            issues.append(('title', f"标题不一致: 声称=\"{ref['title'][:80]}...\" vs Crossref=\"{ci['title'][:80]}...\""))

    # Year comparison
    if ref['year'] and ci['year'] and ci['year'] != '?' and ref['year'] != ci['year']:
        issues.append(('year', f"年份: 声称={ref['year']}, Crossref={ci['year']}"))

    # Journal comparison
    if ref['type'] == 'journal' and ref['journal'] and ci['container']:
        rj = normalize(ref['journal'])
        cj = normalize(ci['container'])
        if rj[:30] != cj[:30] and rj[:20] not in cj and cj[:20] not in rj:
            issues.append(('journal', f"期刊: 声称=\"{ref['journal']}\" vs Crossref=\"{ci['container']}\""))

    # Volume
    if ref['volume'] and ci['volume'] and str(ref['volume']) != str(ci['volume']):
        issues.append(('volume', f"卷: 声称={ref['volume']}, Crossref={ci['volume']}"))

    # Issue
    if ref['issue'] and ci['issue'] and str(ref['issue']) != str(ci['issue']):
        issues.append(('issue', f"期: 声称={ref['issue']}, Crossref={ci['issue']}"))

    # Pages (check start page)
    if ref['pages'] and ci['pages']:
        p_start = ref['pages'].split('-')[0].split(',')[0].strip()
        ci_start = ci['pages'].split('-')[0].strip()
        if p_start != ci_start:
            issues.append(('pages', f"页码: 声称={ref['pages']}, Crossref={ci['pages']}"))

    return issues

def run():
    refs = load_refs()
    results = []

    for ref in refs:
        rid = ref['id']
        title_short = ref['title'][:70]
        print(f"[{rid:3d}/95] {title_short}...", end=' ', flush=True)

        surname = get_author_surname(ref['authors'])

        # Try combined search first
        items = search_crossref(ref['title'], surname)
        if not items or '_error' in items[0]:
            items = search_crossref_title_only(ref['title'])

        if not items or '_error' in items[0]:
            print("NOT FOUND")
            results.append({'ref': ref, 'crossref': None, 'status': 'NOT_FOUND', 'issues': []})
            time.sleep(0.12)
            continue

        # Score candidate matches
        best_item = None
        best_score = -1
        ref_title_norm = normalize(ref['title'])

        for item in items[:5]:
            info = extract_crossref_info(item)
            score = 0
            ci_norm = normalize(info['title'])

            if ref_title_norm[:60] == ci_norm[:60]:
                score += 50
            elif ref_title_norm[:40] in ci_norm or ci_norm[:40] in ref_title_norm:
                score += 30
            elif ref_title_norm[:30] == ci_norm[:30]:
                score += 15

            if ref['year'] and info['year'] == ref['year']:
                score += 20

            if ref['journal'] and info['container']:
                rj = normalize(ref['journal'])
                cj = normalize(info['container'])
                if rj[:25] == cj[:25]:
                    score += 15

            # Bonus for good Crossref score
            score += min(info.get('score', 0) / 10, 5)

            if score > best_score:
                best_score = score
                best_item = info

        if best_score < 20:
            print(f"LOW MATCH (score={best_score:.0f})")
            results.append({'ref': ref, 'crossref': best_item, 'status': 'LOW_MATCH', 'issues': []})
        else:
            issues = compare_metadata(ref, best_item)
            if issues:
                print(f"FOUND ({len(issues)} issue(s))")
                results.append({'ref': ref, 'crossref': best_item, 'status': 'ISSUES', 'issues': issues})
            else:
                print(f"MATCH OK (score={best_score:.0f})")
                results.append({'ref': ref, 'crossref': best_item, 'status': 'OK', 'issues': []})

        time.sleep(0.12)

    # ── Save JSON results ──
    json_out = r"D:\research\ResearchVault\05_Code\verify_95refs_results.json"
    with open(json_out, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"\nJSON results saved to {json_out}")

    # ── Generate Obsidian report ──
    generate_report(results)

def generate_report(results):
    now = time.strftime('%Y-%m-%d')
    ok_count = sum(1 for r in results if r['status'] == 'OK')
    issues_count = sum(1 for r in results if r['status'] == 'ISSUES')
    nf_count = sum(1 for r in results if r['status'] in ('NOT_FOUND', 'LOW_MATCH'))
    n = len(results)

    out = []
    out.append("---")
    out.append("tags: [meta-research, citation-verification, Crossref, lit-review]")
    out.append(f"created: {now}")
    out.append("---")
    out.append("")
    out.append("# 95 篇参考文献 Crossref 核查报告")
    out.append("")
    out.append("## 核查背景")
    out.append("")
    out.append(f"- **核查工具**: Crossref REST API (https://api.crossref.org/works)")
    out.append(f"- **核查时间**: {now}")
    out.append(f"- **核查方法**: 标题+作者搜索 Crossref，逐条比对元数据")
    out.append(f"- **核查范围**: 19 篇中文文献 + 76 篇英文文献")
    out.append("")
    out.append("## 总体结果")
    out.append("")
    out.append(f"| 指标 | 数值 |")
    out.append(f"|------|------|")
    out.append(f"| 核查总数 | {n} 篇 |")
    out.append(f"| 完全匹配 | **{ok_count} 篇** ({100*ok_count/n:.1f}%) |")
    out.append(f"| 有差异需核查 | **{issues_count} 篇** ({100*issues_count/n:.1f}%) |")
    out.append(f"| 未找到/低匹配 | **{nf_count} 篇** ({100*nf_count/n:.1f}%) |")
    out.append("")
    out.append("## 一、完全验证通过")
    out.append("")
    ok_items = [r for r in results if r['status'] == 'OK']
    if ok_items:
        out.append("| # | 引用 | 期刊 | 卷(期):页码 | 年份 | DOI |")
        out.append("|---|------|------|------------|------|-----|")
        for r in ok_items:
            ref = r['ref']
            ci = r['crossref']
            rid = ref['id']
            auth_short = ref['authors'][:50]
            j = ci['container'] or ref['journal']
            v = ci['volume'] or ref['volume']
            iss = ci['issue'] or ref['issue']
            p = ci['pages'] or ref['pages']
            v_str = f"{v}({iss})" if v and iss else (v or '')
            y = ci['year'] or ref['year']
            doi = ci['doi'] or ''
            out.append(f"| {rid} | {auth_short} ({y}) | {j} | {v_str}:{p} | {y} | {doi} |")
    out.append("")
    out.append("## 二、存在差异的文献")
    out.append("")
    issue_items = [r for r in results if r['status'] == 'ISSUES']
    if issue_items:
        for r in issue_items:
            ref = r['ref']
            ci = r['crossref']
            rid = ref['id']
            out.append(f"### [{rid}] {ref['title'][:80]}")
            out.append("")
            out.append(f"- **声称作者**: {ref['authors']}")
            out.append(f"- **声称期刊**: {ref['journal']}, {ref['year']}, {ref['volume']}({ref['issue']}):{ref['pages']}")
            out.append(f"- **Crossref 记录**:")
            out.append(f"  - 标题: {ci['title'][:120]}")
            out.append(f"  - 作者: {ci['authors'][:120]}")
            out.append(f"  - 期刊: {ci['container']}")
            out.append(f"  - 卷/期/页码: {ci['volume']}({ci['issue']}):{ci['pages']}")
            out.append(f"  - 年份: {ci['year']}")
            out.append(f"  - DOI: {ci['doi']}")
            out.append(f"- **差异项**:")
            for field, desc in r['issues']:
                out.append(f"  - ⚠️ [{field}] {desc}")
            out.append("")
    else:
        out.append("无差异项。")
        out.append("")
    out.append("")
    out.append("## 三、未找到或低匹配的文献")
    out.append("")
    nf_items = [r for r in results if r['status'] in ('NOT_FOUND', 'LOW_MATCH')]
    if nf_items:
        out.append("以下文献在 Crossref 中未找到精确匹配，建议通过 CNKI、万方、Google Scholar 等数据库进一步验证。")
        out.append("")
        for r in nf_items:
            ref = r['ref']
            ci = r['crossref']
            rid = ref['id']
            status = r['status']
            out.append(f"### [{rid}] {ref['title'][:80]}")
            out.append("")
            out.append(f"- **作者**: {ref['authors']}")
            out.append(f"- **期刊/来源**: {ref['journal']}, {ref['year']}, {ref['volume']}({ref['issue']}):{ref['pages']}")
            out.append(f"- **类型**: {ref['type']}")
            out.append(f"- **状态**: {status}")
            if ci:
                out.append(f"- **最佳 Crossref 匹配**: {ci['title'][:100]} | {ci['container']} | {ci['year']} | DOI: {ci['doi']}")
            out.append("")
    else:
        out.append("无未找到文献。")
        out.append("")
    out.append("")
    out.append("## 四、分类统计")
    out.append("")
    ch_ok = sum(1 for r in results if r['ref']['id'] <= 19 and r['status'] == 'OK')
    ch_iss = sum(1 for r in results if r['ref']['id'] <= 19 and r['status'] == 'ISSUES')
    ch_nf = sum(1 for r in results if r['ref']['id'] <= 19 and r['status'] in ('NOT_FOUND', 'LOW_MATCH'))
    en_ok = sum(1 for r in results if r['ref']['id'] > 19 and r['status'] == 'OK')
    en_iss = sum(1 for r in results if r['ref']['id'] > 19 and r['status'] == 'ISSUES')
    en_nf = sum(1 for r in results if r['ref']['id'] > 19 and r['status'] in ('NOT_FOUND', 'LOW_MATCH'))
    out.append(f"| 类型 | 总数 | 通过 | 差异 | 未找到 |")
    out.append(f"|------|------|------|------|--------|")
    out.append(f"| 中文 [1]-[19] | 19 | {ch_ok} | {ch_iss} | {ch_nf} |")
    out.append(f"| 英文 [20]-[95] | 76 | {en_ok} | {en_iss} | {en_nf} |")
    out.append(f"| **合计** | **95** | **{ok_count}** | **{issues_count}** | **{nf_count}** |")
    out.append("")
    out.append("## 五、核查局限")
    out.append("")
    out.append("- 中文文献在 Crossref 覆盖率有限，部分期刊未注册 DOI 或元数据不完整，建议通过 CNKI/万方 补充核查")
    out.append("- 报告/新闻/书籍等非期刊文献在 Crossref 注册不完整")
    out.append("- 作者姓名的特殊字符（如 ü, ö, ñ, ş）在各系统中拼写可能不一致")
    out.append("- online-first 出版模式可能导致引用年份与印刷年份存在差异")
    out.append("")

    report_path = r"D:\research\ResearchVault\00_Inbox\lit-review-95refs_Crossref核查报告.md"
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))
    print(f"Report saved to {report_path}")
    print(f"Summary: {ok_count} OK | {issues_count} issues | {nf_count} not found")

if __name__ == '__main__':
    run()
