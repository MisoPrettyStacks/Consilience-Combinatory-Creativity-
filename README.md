# Consilience Lab

A public research and brainstorm hub for building an agentic AI oriented
around **consilience** (unity of knowledge across disciplines) and
**combinatory creativity** (Boden's framework for novel value from
recombining familiar ideas). Curated publications, open suggestions from
the AI collaborator, and an honest work-in-progress showcase — built using free forever and freemium resources,
in public.

**Live site project building in public:** [GitHub Page.](https://misoprettystacks.github.io/Consilience-Combinatory-Creativity-/)

## Consilience Alpha Engine

The **Consilience Alpha Engine** is a decision-support and strategy R&D tool designed to generate original trading and investment theses. It is not a live-trading executor; all trade signals must route to a human-approval step before any real order would ever be placed.

**Live dashboard link:** (NOT LIVE DATA YET) https://misoprettystacks.github.io/Consilience-Combinatory-Creativity-/dashboard.html

### Philosophy & Methodology

The core concept behind the Consilience Alpha Engine is to operationalize E.O. Wilson's **consilience** (cross-domain evidence convergence) and Margaret Boden's **combinatory creativity** (novel recombination of existing concepts) to generate genuinely original investment strategies. This methodology explicitly seeks to discover non-obvious connections between disparate data domains to identify novel "latent variables" that drive market behavior, rather than relying on scraped or copied strategies.

### Human-Approval Gate

A critical design principle is the mandatory human-approval gate. The system acts as a research assistant, proposing well-defined, falsifiable hypotheses. However, no automated trading or real-money order execution is permitted. All generated trade signals, position sizing logic, and risk parameters are strictly theoretical and require explicit human review and sign-off before any action in a live market.

### Limitations

*   **Backtested Performance**: All performance metrics derived from historical simulations (backtests) are indicative only and do not guarantee future results. Market conditions, data availability, and unforeseen events can significantly impact real-world outcomes.
*   **No Live Trading**: This tool is for research and development only. It is explicitly designed *without* any connection to live broker APIs or real order execution.
*   **Data Dependence**: The quality and novelty of generated hypotheses are directly dependent on the breadth and fidelity of the ingested data.

### Backtesting Library Choice: `vectorbt`

For the `Backtest` module, `vectorbt` has been selected for its high performance, flexibility, and suitability for vectorized backtesting. Key advantages include:
*   **Speed**: Its vectorized nature allows for extremely fast backtesting over large datasets.
*   **Flexibility**: It supports a wide range of custom metrics, indicators, and strategy logic, which is crucial for evaluating novel combinatorial strategies.
*   **Scalability**: It can efficiently handle multiple strategies and configurations, making it well-suited for a research engine that generates numerous hypotheses.

## Project Structure

- `index.html` — the whole site (single file: HTML + CSS, no build step)
- `LICENSE.md` — usage terms (all rights reserved by default; see the
  License section on the site itself for a plain-language summary)

## Status

Early. The site currently documents the research foundation, the plan, and experimental builds —
the agent architecture build will be documented. See the "the project"
section on the site for what's actually in motion.

## Contributing / reuse

This is a personal research project working in the open, not an
open-source project accepting contributions or free reuse. See
`LICENSE.md` for what is and isn't permitted, and how to request
permission for anything beyond reading and citing.
