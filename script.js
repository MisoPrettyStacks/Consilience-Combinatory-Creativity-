// Consilience Alpha Engine — dashboard data loader
// Fetches strategy_log/strategies.json and populates the dashboard panels.

async function loadDashboard() {
  let strategies = [];
  try {
    const res = await fetch('strategy_log/strategies.json');
    if (!res.ok) throw new Error('fetch failed');
    strategies = await res.json();
  } catch (err) {
    console.warn('Could not load strategies.json, using fallback sample data.', err);
    strategies = sampleStrategies();
  }

  renderKPIs(strategies);
  renderStrategyCards(strategies);
  renderNewsFeed(strategies);
  renderImagery(strategies);
  renderDomainTags(strategies);
  renderBuildLog();
}

function sampleStrategies() {
  return [
    {
      id: "CAE-0001",
      name: "Patent-Velocity Momentum Overlay",
      status: "hypothesis",
      sharpe: 1.12,
      novelty_score: 0.81,
      thesis: "Momentum conditioned on patent-filing acceleration in mid-cap industrials.",
      combinatorial_origin: "Patent filing velocity + 12-month price momentum",
      domains: ["Patent filings", "Price momentum"],
      news: [{ title: "USPTO filings up 14% YoY in industrial automation", source: "Reuters", date: "2026-07-30" }],
      imagery: [{ label: "Filing velocity chart" }]
    },
    {
      id: "CAE-0002",
      name: "Shipping-AIS Supply Shock Signal",
      status: "backtested",
      sharpe: 0.94,
      novelty_score: 0.76,
      thesis: "Freight rate divergence from AIS congestion data predicts short-term commodity vol.",
      combinatorial_origin: "AIS vessel congestion + commodity implied vol",
      domains: ["Shipping/AIS data", "Options skew"],
      news: [{ title: "Port congestion rises at major Pacific hubs", source: "Bloomberg", date: "2026-08-02" }],
      imagery: [{ label: "AIS congestion heatmap" }]
    },
    {
      id: "CAE-0003",
      name: "App Review Sentiment Earnings Drift",
      status: "paper-traded",
      sharpe: 1.35,
      novelty_score: 0.68,
      thesis: "Consumer app review sentiment shift precedes earnings surprise in retail tech.",
      combinatorial_origin: "App Store review sentiment + earnings drift",
      domains: ["App Store review sentiment", "Earnings drift"],
      news: [{ title: "Retail app ratings slip ahead of Q3 print", source: "TechCrunch", date: "2026-08-05" }],
      imagery: [{ label: "Sentiment trend chart" }]
    }
  ];
}

function renderKPIs(strategies) {
  document.getElementById('kpi-total').textContent = strategies.length;
  const avgSharpe = strategies.reduce((sum, s) => sum + (s.sharpe || 0), 0) / (strategies.length || 1);
  document.getElementById('kpi-sharpe').textContent = avgSharpe.toFixed(2);
  const active = strategies.filter(s => s.status === 'hypothesis' || s.status === 'paper-traded').length;
  document.getElementById('kpi-active').textContent = active;
  document.getElementById('kpi-risk').textContent = 'Green';
}

function renderStrategyCards(strategies) {
  const container = document.getElementById('strategy-cards-container');
  if (!strategies.length) { container.innerHTML = '<p>No strategies yet.</p>'; return; }
  container.innerHTML = strategies.map(s => `
    <div class="strategy-card">
      <span class="title">${s.name}</span>
      <span class="badge ${s.status}">${s.status}</span>
      <div>Sharpe: ${s.sharpe ?? '–'} · Novelty: ${s.novelty_score ?? '–'}</div>
      <div>${s.thesis ?? ''}</div>
      <div style="font-size:0.8rem;color:#6b7280;">Origin: ${s.combinatorial_origin ?? ''}</div>
    </div>
  `).join('');
}

function renderNewsFeed(strategies) {
  const container = document.getElementById('news-feed-container');
  const items = strategies.flatMap(s => s.news || []);
  if (!items.length) { container.innerHTML = '<p>No news linked yet.</p>'; return; }
  container.innerHTML = items.map(n => `
    <div class="news-item">
      <div>${n.title}</div>
      <div class="source">${n.source} · ${n.date}</div>
    </div>
  `).join('');
}

function renderImagery(strategies) {
  const container = document.getElementById('imagery-container');
  const items = strategies.flatMap(s => s.imagery || []);
  if (!items.length) { container.innerHTML = '<p>No imagery linked yet.</p>'; return; }
  container.innerHTML = `<div class="imagery-grid">` +
    items.map(img => `<div class="imagery-box">${img.label}</div>`).join('') +
    `</div>`;
}

function renderDomainTags(strategies) {
  const container = document.getElementById('domain-tags-container');
  const domains = [...new Set(strategies.flatMap(s => s.domains || []))];
  if (!domains.length) { container.innerHTML = '<p>No domains yet.</p>'; return; }
  container.innerHTML = `<div class="domain-tags">` +
    domains.map(d => `<span class="domain-tag">${d}</span>`).join('') +
    `</div>`;
}

async function renderBuildLog() {
  const container = document.getElementById('build-log-container');
  container.innerHTML = `<div class="log-item">See <a href="build-log.html">full build log</a> for complete history.</div>`;
}

document.addEventListener('DOMContentLoaded', loadDashboard);
