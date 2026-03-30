/**
 * STATE OF PROTOCOL - CORE ENGINE v1.1.0
 * Authority: S.O.P Foundation
 * Features: Asset Authentication | Purchase Logic | Modal Terminal
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

// 4. FUNGSI UTAMA: AUTHENTICATION ENGINE
function runAuthentication() {
    if (!isActive) return;
    
    const inputField = document.getElementById('brandInput');
    const input = inputField.value.trim().toUpperCase();
    
    if (!input) return;

    // Trigger Modal & Loading State
    const modal = document.getElementById('authModal');
    const modalContent = document.getElementById('modalInnerContent');
    modal.classList.add('open');

    // UI: Loading Sequence
    modalContent.innerHTML = `
        <div class="spinner"></div>
        <p style="text-align:center; font-family:monospace; font-size:11px; color:var(--accent); letter-spacing:2px;">
            INITIATING NEURAL AUTHENTICATION...<br>
            <span style="color:var(--dim)">DECRYPTING: ${input}</span>
        </p>
    `;

    console.clear();
    console.log("%c AUTH_PROTOCOL: RUNNING ", "background: #00ff41; color: #000; font-weight: bold;");

    // Simulasi Server Response (1.5s)
    setTimeout(() => {
        // Logik Validasi Sederhana
        // Jika input bermula dengan "WSE-", kita anggap VALID untuk tujuan demo/estetik
        if (input.startsWith("WSE-")) {
            showAuthSuccess(input, modalContent);
        } else {
            showAuthFail(input, modalContent);
        }
    }, 1800);
}

// 5. UI: SUCCESS STATE
function showAuthSuccess(id, container) {
    container.innerHTML = `
        <div style="text-align:center;">
            <h2 style="color:var(--accent); letter-spacing:5px; margin-bottom:15px;">✓ VALIDATED</h2>
            <div style="border: 1px solid var(--accent); padding: 15px; background: rgba(0,255,65,0.05); margin-bottom:20px;">
                <p style="font-size:10px; color:var(--dim); margin:0;">ASSET_ID: <span style="color:white">${id}</span></p>
                <p style="font-size:10px; color:var(--dim); margin:5px 0 0 0;">STATUS: <span style="color:white">SOVEREIGN_HOLDER</span></p>
            </div>
            <p style="font-size:10px; color:var(--dim); line-height:1.6; margin-bottom:20px;">
                Your identity has been synchronized with the Foundation nodes. Access to private assets is now authorized.
            </p>
            <button onclick="closeModal()" class="btn-acquire" style="background:var(--accent); color:black; border:none;">ENTER PRIVATE NODE</button>
        </div>
    `;
    console.log("AUTHENTICATION: GRANTED");
}

// 6. UI: FAIL STATE
function showAuthFail(id, container) {
    container.innerHTML = `
        <div style="text-align:center;">
            <h2 style="color:#ff4444; letter-spacing:5px; margin-bottom:15px;">✕ DENIED</h2>
            <div style="border: 1px solid #ff4444; padding: 15px; background: rgba(255,68,68,0.05); margin-bottom:20px;">
                <p style="font-size:10px; color:var(--dim); margin:0;">ERROR: <span style="color:white">UNAUTHORIZED_ACCESS</span></p>
                <p style="font-size:10px; color:var(--dim); margin:5px 0 0 0;">REASON: <span style="color:white">NO_ASSET_FOUND_IN_NODE</span></p>
            </div>
            <p style="font-size:10px; color:var(--dim); line-height:1.6; margin-bottom:20px;">
                To acquire a valid Sovereign Asset ID, please sync with our acquisition terminal below or contact the Architect.
            </p>
            <button onclick="closeModal()" class="btn-acquire">RETRY AUTHENTICATION</button>
            <p style="margin-top:15px;"><a href="https://t.me/WSE_Sovereign_Bot" target="_blank" style="color:var(--accent); font-size:9px; text-decoration:none; font-weight:bold;">ACQUIRE ID VIA TELEGRAM →</a></p>
        </div>
    `;
    console.log("AUTHENTICATION: REJECTED");
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

    // Simulasi Heatmap Data (Tetap kekal untuk estetik)
    const heatmap = document.getElementById('heatmap');
    if (heatmap) {
        const regions = ['N. AMERICA', 'EUROPE', 'ASIA', 'MIDDLE EAST'];
        heatmap.innerHTML = regions.map(r => `
            <div>
                <div style="font-size:8px; color:#555; margin-bottom:5px; letter-spacing:1px">${r}</div>
                <div style="font-weight:bold; font-size:14px; color:#fff">${Math.floor(Math.random() * 80 + 20)}%</div>
            </div>
        `).join('');
    }
};
