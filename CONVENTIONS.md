# Build Conventions

## Documentation Requirement
Every time you (Aider) make a change, addition, fix, or improvement to this project, you MUST also update the 
documentation page at `index.html` in the same commit. Do not skip this, even for small changes.

For each change, append a new entry to the documentation section of index.html (do not overwrite prior entries) 
containing:
- Date and time of the change
- A short plain-English title for the change
- 2-4 sentences explaining what was built/changed and why, written for a general audience (not just code diffs)
- Which module(s) were touched (e.g., HypothesisEngine, StrategyLedger, Backtest)
- Any open questions, tradeoffs, or things still left to do as a result of this change

Keep entries in reverse-chronological order (newest at the top). Preserve the existing structure and styling of 
the page — only append new entries, never delete, rewrite, or restyle existing content unless explicitly asked.
