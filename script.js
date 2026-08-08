// fetch data from StrategyLedger JSON
fetch('strategy_log/StrategyLedger.json')
    .then(response => response.json())
    .then(data => {
        // generate strategy cards
        const cardContainer = document.querySelector('.card-container');
        data.forEach(strategy => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${strategy.name}</h3>
                <p>Status: ${strategy.status}</p>
                <p>Sharpe Ratio: ${strategy.sharpeRatio}</p>
                <p>Novelty Score: ${strategy.noveltyScore}</p>
                <p>Thesis Summary: ${strategy.thesisSummary}</p>
            `;
            cardContainer.appendChild(card);
        });
    });

// fetch data from build-log.html
fetch('build-log.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const logContainer = document.querySelector('.log-container');
        logContainer.innerHTML = doc.querySelector('.wrap').innerHTML;
    });
