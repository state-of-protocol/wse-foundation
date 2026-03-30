/**
 * WSE FOUNDATION - CORE ENGINE
 * Feature: Dynamic Data Mapping, Heatmap Rendering, & Predictive Logic.
 */

// 1. Inisialisasi Heatmap (Dijalankan sebaik sahaja fail dimuatkan)
const regions = ['N. AMERICA', 'EUROPE', 'ASIA', 'MIDDLE EAST'];
const heatmapContainer = document.getElementById('heatmap');

if (heatmapContainer) {
    regions.forEach(r => {
        heatmapContainer.innerHTML += `
            <div>
                <div style="font-size:8px; color:#555; margin-bottom:5px; letter-spacing:1px">${r}</div>
                <div class="reg-val" style="font-weight:bold; font-size:14px; color:#fff">--</div>
            </div>
        `;
    });
}

// 2. Event Listener untuk Input (Enter Key)
function handleKey(e) {
    if (e.key === 'Enter') runAnalysis();
}

// 3. Fungsi Utama Analisis
function runAnalysis() {
    const input = document.getElementById('brandInput').value;
    if (!input) return;

    const btn = document.getElementById('btn');
    const resultsArea = document.getElementById('results');

    // UI State: Loading
    btn.innerText = 'FETCHING DATA...';
    btn.disabled = true;

    // Simulate Network & Neural Processing Delay
    setTimeout(() => {
        // Paparkan Grid Keputusan
        resultsArea.style.display = 'grid';
        
        // --- LOGIK DATA DARI data.js ---
        // Pilih Entity secara Rawak dari WSE_DATABASE (data.js)
        const randomEntity = WSE_DATABASE.entities[Math.floor(Math.random() * WSE_DATABASE.entities.length)];
        const category = WSE_DATABASE.categories.find(c => c.id === randomEntity.type);
        const status = WSE_DATABASE.statusOptions[Math.floor(Math.random() * WSE_DATABASE.statusOptions.length)];

        // --- UPDATE UI COMPONENT ---

        // A. Trend Velocity & Progress Bar
        const trend = Math.floor(Math.random() * 45 + 50);
        document.getElementById('trendVal').innerText = trend;
        document.getElementById('bar').style.width = trend + '%';

        // B. Social/Asset Volume
        const vol = (Math.random() * 12 + 1).toFixed(1);
        document.getElementById('volVal').innerText = vol + 'M';
        
        // C. Domain & Audit Details (The "Smart" Part)
        const domArea = document.getElementById('domStatus');
        domArea.innerHTML = `
            <div style="color: ${category.color}; font-size: 9px; font-weight:900; margin-bottom:8px; letter-spacing:1px">
                [ ${category.name} ]
            </div>
            <div style="color: white; font-size: 14px; font-weight:bold; margin-bottom:8px">
                ${randomEntity.name}
            </div>
            <div style="font-size: 10px; color: #666; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.05); pt-5">
                SSL RATING : <span style="color: #4ade80; font-weight:bold">${randomEntity.ssl}</span><br>
                ENGAGEMENT : ${randomEntity.devCount} NODES<br>
                L-STATUS   : <span style="color: #d4af37">${status}</span>
            </div>
        `;

        // D. Update Heatmap Values
        document.querySelectorAll('.reg-val').forEach(el => {
            el.innerText = Math.floor(Math.random() * 85 + 10) + '%';
        });

        // Reset Button State
        btn.innerText = 'RUN ANALYSIS';
        btn.disabled = false;

    }, 1200);
}
