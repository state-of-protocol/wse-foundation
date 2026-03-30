const regions = ['N. AMERICA', 'EUROPE', 'ASIA', 'MIDDLE EAST'];

// Render Heatmap placeholders
const heatmap = document.getElementById('heatmap');
regions.forEach(r => {
    heatmap.innerHTML += `
        <div>
            <div style="font-size:8px; color:#555; margin-bottom:5px">${r}</div>
            <div class="reg-val" style="font-weight:bold; font-size:14px">--</div>
        </div>
    `;
});

function handleKey(e) {
    if (e.key === 'Enter') runAnalysis();
}

function runAnalysis() {
    const input = document.getElementById('brandInput').value;
    if (!input) return;

    const btn = document.getElementById('btn');
    btn.innerText = 'SCANNING...';
    btn.disabled = true;

    // Simulate Network Delay (1.2s)
    setTimeout(() => {
        document.getElementById('results').style.display = 'grid';
        
        // Random Data
        const trend = Math.floor(Math.random() * 45 + 50);
        const vol = (Math.random() * 12 + 1).toFixed(1);
        const isAvail = Math.random() > 0.4;

        // UI Updates
        document.getElementById('trendVal').innerText = trend;
        document.getElementById('bar').style.width = trend + '%';
        document.getElementById('volVal').innerText = vol + 'M';
        
        const dom = document.getElementById('domStatus');
        dom.innerText = isAvail ? 'AVAILABLE' : 'TAKEN';
        dom.style.color = isAvail ? '#4ade80' : '#f87171';

        // Update Heatmap
        document.querySelectorAll('.reg-val').forEach(el => {
            el.innerText = Math.floor(Math.random() * 80 + 10) + '%';
        });

        btn.innerText = 'RUN ANALYSIS';
        btn.disabled = false;
    }, 1200);
}
