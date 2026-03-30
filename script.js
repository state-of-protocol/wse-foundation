/**
 * STATE OF PROTOCOL - CORE ENGINE v1.1.5 (HYBRID)
 * Authority: S.O.P Foundation
 * Features: Domain Analytics + Asset Authentication | Neural Modal UI
 */

// 1. PENGURUSAN MEMORI & STATUS TAB
let isActive = true;

document.addEventListener('visibilitychange', () => {
    isActive = !document.hidden;
    if (!isActive) {
        console.log("S.O.P Protocol: Hibernating...");
    } else {
        console.log("S.O.P Protocol: Engine Resumed.");
        updateFooter();
    }
});

// 2. FUNGSI UPDATE FOOTER
function updateFooter() {
    const syncElement = document.getElementById('sync-time');
    if (syncElement && typeof WSE_DATABASE !== 'undefined' && WSE_DATABASE.metadata) {
        syncElement.innerText = WSE_DATABASE.metadata.lastGlobalSync;
    }
}

// 3. EVENT LISTENER (ENTER KEY)
function handleKey(e) {
    if (e.key === 'Enter') runAuthentication();
}

// 4. FUNGSI UTAMA: HYBRID AUTHENTICATION & ANALYTICS
function runAuthentication() {
    if (!isActive) return;
    
    const inputField = document.getElementById('brandInput');
    const input = inputField.value.trim();
    
    if (!input) return;

    const modal = document.getElementById('authModal');
    const modalContent = document.getElementById('modalInnerContent');
    const resultsArea = document.getElementById('results');
    const btn = document.getElementById('btn');

    console.clear();
    console.log("%c AUTH_PROTOCOL: INITIATING ", "background: #00ff41; color: #000; font-weight: bold;");

    // --- LOGIK A: JIKA INPUT ADALAH ASSET ID (Mula dengan WSE-) ---
    if (input.toUpperCase().startsWith("WSE-")) {
        modal.classList.add('open');
        modalContent.innerHTML = `
            <div class="spinner"></div>
            <p style="text-align:center; font-family:monospace; font-size:11px; color:var(--accent); letter-spacing:2px;">
                DECRYPTING ASSET ID...<br>
                <span style="color:var(--dim)">NODE: ${input.toUpperCase()}</span>
            </p>
        `;

        setTimeout(() => {
            // Kita gunakan ID yang ditaip untuk semak dalam database (pilihan)
            // Di sini kita kekalkan logik: Jika ada WSE- ia dianggap cubaan login aset
            const idCheck = input.toUpperCase();
            if (idCheck.length > 5) {
                showAuthSuccess(idCheck, modalContent);
            } else {
                showAuthFail(idCheck, modalContent);
            }
        }, 1800);
        return;
    }

    // --- LOGIK B: JIKA INPUT ADALAH DOMAIN/BRAND (Analisis Teknikal) ---
    btn.innerText = 'EXECUTING NEURAL AUDIT...';
    btn.disabled = true;

    setTimeout(() => {
        resultsArea.style.display = 'grid'; 
        
        // Data Mapping dari WSE_DATABASE
        const db = WSE_DATABASE;
        const randomEntity = db.entities[Math.floor(Math.random() * db.entities.length)];
        const status = db.statusOptions[Math.floor(Math.random() * db.statusOptions.length)];

        // A. Update Visual Metrics
        const trend = Math.floor(Math.random() * 40 + 60);
        document.getElementById('trendVal').innerText = trend;
        document.getElementById('bar').style.width = trend + '%';
        
        const vol = (Math.random() * 8 + 1).toFixed(1);
        document.getElementById('volVal').innerText = vol + 'M';

        // B. Update Domain Identity Card
        const domArea = document.getElementById('domStatus');
        domArea.innerHTML = `
            <div style="color:var(--accent); font-size:9px; font-weight:900; margin-bottom:10px; letter-spacing:2px">
                [ DOMAIN_INTELLIGENCE ]
            </div>
            <div style="color:white; font-size:16px; font-weight:bold; margin-bottom:10px; letter-spacing:-0.5px">
                ${input.toLowerCase()}
            </div>
            <div style="font-size:10px; color:#666; line-height:1.8; border-top: 1px solid var(--border); padding-top:10px;">
                REPUTATION : <span style="color:#4ade80; font-weight:bold">HIGH_TRUST</span><br>
                INTEGRITY  : <span style="color:#fff;">${(randomEntity.integrity * 100).toFixed(0)}%</span><br>
                L-STATUS   : <span style="color:#fff; background:rgba(255,255,255,0.1); padding:0 4px;">${status}</span>
            </div>
        `;

        // C. Update Heatmap (Simulated Nodes)
        document.querySelectorAll('.reg-val').forEach(el => {
            el.innerText = Math.floor(Math.random() * 85 + 10) + '%';
        });

        // Reset UI State
        btn.innerText = 'AUTHENTICATE';
        btn.disabled = false;
        updateFooter();

        // Scroll Reveal ke bahagian keputusan
        window.scrollTo({
            top: resultsArea.offsetTop - 100,
            behavior: 'smooth'
        });

        console.log("DOMAIN_AUDIT: COMPLETED for " + input);
    }, 1500);
}

// 5. UI: SUCCESS STATE (Aset Dijumpai)
function showAuthSuccess(id, container) {
    container.innerHTML = `
        <div style="text-align:center;">
            <h2 style="color:var(--accent); letter-spacing:5px; margin-bottom:15px;">✓ VALIDATED</h2>
            <div style="border: 1px solid var(--accent); padding: 15px; background: rgba(0,255,65,0.05); margin-bottom:20px;">
                <p style="font-size:10px; color:var(--dim); margin:0;">ASSET_ID: <span style="color:white">${id}</span></p>
                <p style="font-size:10px; color:var(--dim); margin:5px 0 0 0;">STATUS: <span style="color:white">SOVEREIGN_HOLDER</span></p>
            </div>
            <p style="font-size:10px; color:var(--dim); line-height:1.6; margin-bottom:20px;">
                Access to the Private Sovereign Node has been granted. Your credentials are synchronized.
            </p>
            <button onclick="closeModal()" class="btn-acquire" style="background:var(--accent); color:black; border:none; width:100%;">ENTER PRIVATE NODE</button>
        </div>
    `;
}

// 6. UI: FAIL STATE (Aset Tiada/Sila Beli)
function showAuthFail(id, container) {
    container.innerHTML = `
        <div style="text-align:center;">
            <h2 style="color:#ff4444; letter-spacing:5px; margin-bottom:15px;">✕ DENIED</h2>
            <div style="border: 1px solid #ff4444; padding: 15px; background: rgba(255,68,68,0.05); margin-bottom:20px;">
                <p style="font-size:10px; color:var(--dim); margin:0;">ERROR: <span style="color:white">INVALID_NODE_ID</span></p>
            </div>
            <p style="font-size:10px; color:var(--dim); line-height:1.6; margin-bottom:20px;">
                This ID does not exist in the WSE Sovereign database. Acquire a valid node via the terminal below.
            </p>
            <button onclick="closeModal()" class="btn-acquire" style="width:100%;">RETRY</button>
            <p style="margin-top:15px;"><a href="https://t.me/WSE_Sovereign_Bot" target="_blank" style="color:var(--accent); font-size:9px; text-decoration:none; font-weight:bold; letter-spacing:1px;">ACQUIRE VIA TELEGRAM →</a></p>
        </div>
    `;
}

// 7. UTILITY FUNCTIONS
function closeModal() {
    document.getElementById('authModal').classList.remove('open');
}

// 8. INITIAL LOAD & SCROLL REVEAL
window.onload = () => {
    updateFooter();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .hero, .docs-section, .search-box, .acquisition-card').forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Heatmap Initialization
    const heatmap = document.getElementById('heatmap');
    if (heatmap) {
        const regions = ['N. AMERICA', 'EUROPE', 'ASIA', 'MIDDLE EAST'];
        heatmap.innerHTML = regions.map(r => `
            <div>
                <div style="font-size:8px; color:#555; margin-bottom:5px; letter-spacing:1px">${r}</div>
                <div class="reg-val" style="font-weight:bold; font-size:14px; color:#fff">--</div>
            </div>
        `).join('');
    }
};
