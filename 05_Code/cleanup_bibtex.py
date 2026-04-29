"""Clean up references.bib — fix encoding issues, duplicate keys, and metadata errors."""
import sys
sys.stdout.reconfigure(encoding='utf-8')

PATH = r'D:\research\ResearchVault\output\references.bib'

with open(PATH, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = []

# 1. &amp; → \& (HTML entity in journal names)
count = content.count('&amp;')
if count:
    content = content.replace('&amp;', r'\&')
    fixes.append(f"Replaced {count} instances of &amp; → \\&")

# 2. Fix duplicate citation key: [13] Nagarajan & Bassok vs [15] Nagarajan & Sošić
# [13] = Nagarajan & Bassok (Management Science, assembly problem)
old_key_13 = "@article{Nagarajan_2008, title={A Bargaining Framework in Supply Chains"
new_key_13 = "@article{NagarajanBassok_2008, title={A Bargaining Framework in Supply Chains"
if old_key_13 in content:
    content = content.replace(old_key_13, new_key_13)
    fixes.append("Renamed [13] Nagarajan_2008 → NagarajanBassok_2008")
else:
    fixes.append("WARNING: Could not find [13] Nagarajan & Bassok key pattern")

# [15] = Nagarajan & Sošić (EJOR, game-theoretic review)
old_key_15 = "@article{Nagarajan_2008, title={Game-theoretic analysis of cooperation"
new_key_15 = "@article{NagarajanSosic_2008, title={Game-theoretic analysis of cooperation"
if old_key_15 in content:
    content = content.replace(old_key_15, new_key_15)
    fixes.append("Renamed [15] Nagarajan_2008 → NagarajanSosic_2008")
else:
    fixes.append("WARNING: Could not find [15] Nagarajan & Sosic key pattern")

# 3. Fix Myerson (1984) title typo: "imcomplete" → "incomplete"
old_myerson = "Cooperative games with imcomplete information"
new_myerson = "Cooperative games with incomplete information"
if old_myerson in content:
    content = content.replace(old_myerson, new_myerson)
    fixes.append("Fixed Myerson (1984) title: imcomplete → incomplete (Crossref metadata error)")
else:
    fixes.append("WARNING: Could not find Myerson title typo")

# 4. Nash (1950) pages: {155} → {155–162}
old_nash_pages = "title={The Bargaining Problem}, volume={18}, ISSN={0012-9682}, url={http://dx.doi.org/10.2307/1907266}, DOI={10.2307/1907266}, number={2}, journal={Econometrica}, publisher={JSTOR}, author={Nash, John F.}, year={1950}, month=Apr, pages={155}"
new_nash_pages = "title={The Bargaining Problem}, volume={18}, ISSN={0012-9682}, url={http://dx.doi.org/10.2307/1907266}, DOI={10.2307/1907266}, number={2}, journal={Econometrica}, publisher={JSTOR}, author={Nash, John F.}, year={1950}, month=Apr, pages={155–162}"
if old_nash_pages in content:
    content = content.replace(old_nash_pages, new_nash_pages)
    fixes.append("Fixed Nash (1950) pages: 155 → 155–162")
else:
    fixes.append("WARNING: Could not find Nash page pattern")

# 5. Clean citation key for [3] Kök et al.
old_kok_key = "@article{K_k_2020,"
new_kok_key = "@article{Kok_2020,"
if old_kok_key in content:
    content = content.replace(old_kok_key, new_kok_key)
    fixes.append("Renamed [3] K_k_2020 → Kok_2020")
else:
    fixes.append("WARNING: Could not find Kok key pattern")

# 6. [36] Ghamkhari: year 2017 → 2016 (user's LR uses 2016 consistently)
old_ghamkhari_year = "title={Energy Portfolio Optimization of Data Centers}, volume={8}, ISSN={1949-3061}, url={http://dx.doi.org/10.1109/tsg.2015.2510428}, DOI={10.1109/tsg.2015.2510428}, number={4}, journal={IEEE Transactions on Smart Grid}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Ghamkhari, Mahdi and Wierman, Adam and Mohsenian-Rad, Hamed}, year={2017}, month=July, pages={1898–1910}"
new_ghamkhari_year = "title={Energy Portfolio Optimization of Data Centers}, volume={8}, ISSN={1949-3061}, url={http://dx.doi.org/10.1109/tsg.2015.2510428}, DOI={10.1109/tsg.2015.2510428}, number={4}, journal={IEEE Transactions on Smart Grid}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Ghamkhari, Mahdi and Wierman, Adam and Mohsenian-Rad, Hamed}, year={2016}, month=July, pages={1898–1910}"
if old_ghamkhari_year in content:
    content = content.replace(old_ghamkhari_year, new_ghamkhari_year)
    fixes.append("Fixed [36] Ghamkhari: year 2017 → 2016 (per user's LR; online-first convention)")
else:
    fixes.append("WARNING: Could not find Ghamkhari year pattern")

# Also update Ghamkhari citation key from _2017 to _2016
old_ghamkhari_key = "@article{Ghamkhari_2017,"
new_ghamkhari_key = "@article{Ghamkhari_2016,"
if old_ghamkhari_key in content:
    content = content.replace(old_ghamkhari_key, new_ghamkhari_key)
    fixes.append("Renamed [36] Ghamkhari_2017 → Ghamkhari_2016")
else:
    fixes.append("WARNING: Could not find Ghamkhari key pattern")

# Update header comment about Ghamkhari
old_note = "%   [36] Ghamkhari et al. → 2016 retained (online-first, internal consistency)"
new_note = "%   [36] Ghamkhari et al. → 2016 (user's LR convention; Crossref print year is 2017, changed to 2016)"
if old_note in content:
    content = content.replace(old_note, new_note)
    fixes.append("Updated Ghamkhari year header note")

# Write cleaned file
with open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleanup complete:")
for fix in fixes:
    print(f"  ✓ {fix}")

# Final verification
print(f"\nFinal verification:")
print(f"  &amp; remaining: {content.count('&amp;')}")
print(f"  Duplicate Nagarajan_2008 keys: {content.count('@article{Nagarajan_2008,')}")
print(f"  'imcomplete' remaining: {content.count('imcomplete')}")
print(f"  Nash pages=155 only: {content.count('pages={155}')}")
