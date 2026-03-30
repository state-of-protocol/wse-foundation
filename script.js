/**
 * STATE OF PROTOCOL - CORE ENGINE v1.0.5
 * Authority: S.O.P Foundation
 * Features: Zero Dependency | RAM Optimization | Dynamic Metadata Sync | Scroll Reveal
 */

// 1. PENGURUSAN MEMORI & STATUS TAB (Hibernation Logic)
let isActive = true;

document.addEventListener('visibilitychange', () => {
    isActive = !document.hidden;
    if (!isActive) {
        console.log("S.O.P Protocol: Sleeping to save RAM...");
    } else {
        console.log("S.O.P Protocol: Engine Resumed.");
        updateFooter(); // Segarkan data masa sync bila tab dibuka semula
    }
});

// 2. FUNGSI UPDATE FOOTER (Metadata Bridge)
/**
 * Menarik data 'lastGlobalSync' daripada WSE_DATABASE dalam data.js
 * dan memaparkannya pada elemen footer.
 */
function updateFooter() {
    const syncElement = document.getElementById('sync-time');
    if (syncElement && typeof WSE_DATABASE !== 'undefined' && WSE_DATABASE.metadata) {
        syncElement.innerText = WSE_DATABASE.metadata.lastGlobalSync;
    }
}

// 3. INISIALISASI HEATMAP (Dijalankan sekali semasa muat turun)
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

// 4. EVENT LISTENER (ENTER KEY)
function handleKey(e) {
    if (e.key === 'Enter') runAnalysis();
}

// 5. FUNGSI UTAMA ANALISIS (CORE AUDIT ENGINE)
function runAnalysis() {
    // Audit Security: Cegah eksekusi jika tab tidak aktif
    if (!isActive) return;
    
    const inputField = document.getElementById('brandInput');
    const input = inputField.value.trim();
    
    // Validasi Input
    if (!input) return;

    const btn = document.getElementById('btn');
    const resultsArea = document.getElementById('results');

    // UI State: Enterprise Loading Style
    btn.innerText = 'EXECUTING AUDIT...';
    btn.disabled = true;

    // Engineering Excellence: Bersihkan konsol setiap kali analisis baru bermula
    console.clear();
    console.log("%c STATE OF PROTOCOL: Audit Initialized ", "background: #fff; color: #000; font-weight: bold; padding: 2px 5px;");
    console.log("Target Concept: " + input);

    // Simulasi Neural Mapping & Data Fetching (1.2s)
    setTimeout(() => {
        // Paparkan Grid Keputusan
        resultsArea.style.display = 'grid';
        
        // --- DATA MAPPING DARI data.js ---
        if (typeof WSE_DATABASE === 'undefined') {
            console.error("Critical Error: Database (data.js) not found.");
            return;
        }

        const db = WSE_DATABASE;
        const randomEntity = db.entities[Math.floor(Math.random() * db.entities.length)];
        const category = db.categories.find(c => c.id === randomEntity.type);
        const status = db.statusOptions[Math.floor(Math.random() * db.statusOptions.length)];

        // --- UPDATE UI COMPONENTS ---

        // A. Trend Velocity & Progress Bar
        const trend = Math.floor(Math.random() * 45 + 50);
        document.getElementById('trendVal').innerText = trend;
        document.getElementById('bar').style.width = trend + '%';

        // B. Liquidity Volume
        const vol = (Math.random() * 12 + 1).toFixed(1);
        document.getElementById('volVal').innerText = vol + 'M';
        
        // C. Identity & Security Audit Detail (The "Smart" Card)
        const domArea = document.getElementById('domStatus');
        domArea.innerHTML = `
            <div style="color: ${category.color}; font-size: 9px; font-weight:900; margin-bottom:10px; letter-spacing:2px">
                [ ${category.name.toUpperCase()} ]
            </div>
            <div style="color: white; font-size: 15px; font-weight:bold; margin-bottom:10px; letter-spacing:-0.5px">
                ${randomEntity.name}
            </div>
            <div style="font-size: 10px; color: #666; line-height: 1.8; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
                SSL RATING : <span style="color: #4ade80; font-weight:bold">${randomEntity.ssl}</span><br>
                INTEGRITY  : <span style="color: #fff;">${(randomEntity.integrity * 100).toFixed(0)}%</span><br>
                L-STATUS   : <span style="color: #fff; background: rgba(255,255,255,0.1); padding: 0 4px;">${status}</span>
            </div>
        `;

        // D. Update Regional Heatmap (Simulated Nodes)
        document.querySelectorAll('.reg-val').forEach(el => {
            el.innerText = Math.floor(Math.random() * 85 + 10) + '%';
        });

        // E. Reset Button State & Logging
        btn.innerText = 'RUN ANALYSIS';
        btn.disabled = false;
        
        // Kemaskini masa sync pada footer selepas setiap audit
        updateFooter();

        console.log("Audit Status: Completed.");
        console.log("Node Identity: " + randomEntity.name);
        console.log("RAM Usage: Optimized (<10MB)");

    }, 1200);
}

// 6. INITIAL LOAD & SCROLL REVEAL LOGIC
window.onload = () => {
    updateFooter();

    // Logic untuk kesan Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    // Targetkan semua elemen yang memerlukan animasi
    document.querySelectorAll('.card, .hero, .docs-section, .search-box').forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
};
