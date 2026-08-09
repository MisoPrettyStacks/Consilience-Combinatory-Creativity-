# Consilience Alpha Engine — Data Source Compendium

Reference list of real, verified data sources for wiring up the NewsIngestion
module and expanding domain_library.py. Compiled August 2026 — verify links
periodically since free-tier terms change.

## 1. Macroeconomic Data
- FRED (St. Louis Fed) — 800,000+ US economic time series, free API key. fred.stlouisfed.org
- World Bank Open Data — global development indicators, free. data.worldbank.org
- IMF Data Portal — SDMX 2.1/3.0 APIs, free. data.imf.org
- BLS (Bureau of Labor Statistics) — labor market data, free API key. bls.gov

## 2. Corporate Filings & Insider Activity
- SEC EDGAR — 10-K/10-Q/8-K filings + XBRL data, free, no key, 10 req/sec limit. sec.gov/edgar
- SEC Full-Text Search API — searchable filing text since 2001, free. efts.sec.gov
- Financial Modeling Prep (Ownership API) — insider + congressional trading, limited free tier. financialmodelingprep.com

## 3. Patents
- USPTO Open Data Portal — patent filings, PTAB decisions, citation API, free. data.uspto.gov

## 4. News & Media
- GDELT Project — global event/theme/sentiment data, free forever, no registration. gdeltproject.org
- NewsAPI.org — 100 req/day free, NON-COMMERCIAL USE ONLY. newsapi.org
- The Guardian API — free tier, full article text. open-platform.theguardian.com

## 5. Satellite Imagery & Geospatial
- Copernicus/Sentinel (ESA) — free optical + radar imagery. copernicus.eu
- USGS EarthExplorer/Landsat — free historical archive imagery. earthexplorer.usgs.gov
- NASA Worldview/Earthdata — free daily global coverage. earthdata.nasa.gov
- SkyFi Open Data — aggregates multiple free imagery sources into one API. skyfi.com

## 6. Shipping / Supply Chain (AIS)
- AISstream.io — free AIS vessel tracking API. aisstream.io
- AISHub — community AIS data sharing, free/limited. aishub.net

## 7. Market/Price Data
- Alpha Vantage — 25 req/day free, stocks/forex/crypto/fundamentals. alphavantage.co
- Finnhub — 60 calls/min free, free WebSocket streaming. finnhub.io
- Twelve Data — 800 calls/day free, most generous free tier. twelvedata.com
- Polygon.io — limited free tier, 1yr history only. polygon.io

## 8. Labor Market & Hiring Signals
- Adzuna API — free salary/job-count data, 16 countries. adzuna.com/api
- BLS JOLTS/OEWS — free aggregate labor survey data. bls.gov
- USAJOBS API — free US federal job postings. usajobs.gov
- TheirStack — 200 free credits/month. theirstack.com
- LinkUp — limited free access, employer-sourced postings. linkup.com

## 9. Litigation & Court Records
- CourtListener/RECAP (Free Law Project) — free federal court dockets, opinions, judges. courtlistener.com
- Harvard Caselaw Access Project — free, 6.5M+ decisions, 360 years of history. case.law
- PACER (official) — free account/opinions, $0.10/page for filings (waived under $30/quarter). pacer.uscourts.gov

## 10. Energy, Grid & Weather
- EIA Open Data — free official US energy statistics. eia.gov/opendata
- EIA Hourly Electric Grid Monitor — free hourly demand/generation data. eia.gov/electricity/gridmonitor
- IEA Weather for Energy Tracker — free weather-energy data, grid/country level. iea.org
- NOAA Physical Sciences Laboratory — free gridded climate data. psl.noaa.gov

## 11. Search & Social Sentiment
- Google Trends (pytrends, unofficial) — free, no key, search-interest data. pypi.org/project/pytrends
- Google Trends API (official alpha) — free, 5yr history, consistently scaled. developers.google.com
- StockTwits API — free, finance-specific social sentiment. stocktwits.com/developers
- Reddit API (PRAW) — free tier, subreddit sentiment. reddit.com/dev/api

## 12. Academic Research & Innovation Velocity
- Semantic Scholar Graph API — free, no key, 200M+ papers. api.semanticscholar.org
- arXiv API — free preprint metadata/text. arxiv.org/help/api
- OpenAlex API — free scholarly metadata. openalex.org
- CrossRef API — free DOI metadata. crossref.org
- CORE API — free preprint/postprint repository data. core.ac.uk

## 13. Crypto & Digital Assets
- CoinGecko API — free, 18,000+ assets. coingecko.com/api
- CoinMarketCap API — free tier, snapshot data only. coinmarketcap.com/api

## 14. Broader Aggregators
- Nasdaq Data Link (Quandl) — freemium, open datasets from govs/central banks. data.nasdaq.com

---

## Mapping to domain_library.py

| Domain in domain_library.py | Real source(s) |
|---|---|
| Patent filing velocity | USPTO Open Data Portal |
| Shipping/AIS data | AISstream.io |
| Congressional/insider trading | FMP Ownership API |
| Satellite imagery | Copernicus/Sentinel, SkyFi |
| Macro/economic backdrop | FRED, World Bank |
| News/event sentiment | GDELT (primary), NewsAPI (supplementary) |
| Price/market data | Twelve Data, Finnhub |
| SEC filing language/events | SEC EDGAR Full-Text Search |
| Labor mobility | Adzuna, USAJOBS, TheirStack |
| Litigation data | CourtListener/RECAP |
| Power grid load data | EIA Grid Monitor |
| Search-trend velocity | Google Trends (pytrends) |
| Academic preprint velocity | arXiv, Semantic Scholar |
| Weather/climate | IEA Weather Tracker, NOAA PSL |
| Social network sentiment | StockTwits, Reddit API |

## Status
46 verified, currently-active free/freemium sources as of August 2026.
Not yet researched: real estate data, retail foot traffic, consumer spending
panels, forex-specific feeds, agricultural/commodity data, EPA/environmental
compliance data, FAA flight data, telecom/broadband data.
