/**
 * STATE OF PROTOCOL - CENTRAL DATA REPOSITORY v1.1.0
 * Authority: S.O.P Foundation / Sovereign Data Intelligence
 * Optimization: Zero-Latency Metadata Mapping | Hybrid Auth Support
 */

const WSE_DATABASE = {
    // 1. Klasifikasi Protokol & Skema Warna Institutional
    categories: [
        { id: 'ind', name: 'SOVEREIGN INDIVIDUAL', color: '#ffffff' },  // Putih
        { id: 'com', name: 'COMMERCIAL ENTITY', color: '#3b82f6' },     // Biru
        { id: 'corp', name: 'MULTINATIONAL CORP', color: '#a855f7' },    // Ungu
        { id: 'inst', name: 'FINANCIAL INSTITUTION', color: '#10b981' }, // Hijau
        { id: 'gov', name: 'GOVERNMENTAL BODY', color: '#ef4444' },      // Merah
        { id: 'lab', name: 'RESEARCH LABORATORY', color: '#f59e0b' }     // Amber
    ],
    
    // 2. Database Entiti Global & Tempatan (Untuk Simulasi Audit Domain)
    entities: [
        // --- SEKTOR CORPORATE & TECH ---
        { name: 'Shift_Dev Labs', type: 'corp', ssl: 'A+', devCount: 124, integrity: 0.98 },
        { name: 'Neural-Sync Systems', type: 'corp', ssl: 'A+', devCount: 89, integrity: 0.95 },
        { name: 'Apex Digital Assets', type: 'com', ssl: 'A', devCount: 42, integrity: 0.88 },
        { name: 'Cyberdyne Architecture', type: 'corp', ssl: 'A', devCount: 215, integrity: 0.91 },
        { name: 'WSE_Foundation Mainframe', type: 'corp', ssl: 'A+', devCount: 10, integrity: 1.00 },
        
        // --- SEKTOR INSTITUTION & FINANCE ---
        { name: 'Global Tech Institute', type: 'inst', ssl: 'A+', devCount: 512, integrity: 0.99 },
        { name: 'Sovereign Wealth Node', type: 'inst', ssl: 'A', devCount: 230, integrity: 0.92 },
        { name: 'Institutional Crypto Index', type: 'inst', ssl: 'A+', devCount: 156, integrity: 0.97 },
        
        // --- SEKTOR KERAJAAN & MALAYSIA (LOCAL NODES) ---
        { name: 'MDEC Neural Core', type: 'gov', ssl: 'A+', devCount: 340, integrity: 0.99 },
        { name: 'CyberSecurity MY Node', type: 'gov', ssl: 'A+', devCount: 112, integrity: 1.00 },
        { name: 'Putrajaya Digital Gateway', type: 'gov', ssl: 'A', devCount: 85, integrity: 0.94 },
        { name: 'Central Data Authority', type: 'gov', ssl: 'A+', devCount: 1024, integrity: 1.00 },
        
        // --- SEKTOR R&D & RESEARCH ---
        { name: 'Protocol Research Group', type: 'lab', ssl: 'B+', devCount: 15, integrity: 0.85 },
        { name: 'Quantum Ledger Lab', type: 'lab', ssl: 'A', devCount: 24, integrity: 0.96 },
        { name: 'MIMOS Intelligence Unit', type: 'lab', ssl: 'A', devCount: 78, integrity: 0.93 },
        
        // --- SEKTOR INDIVIDUAL & PRIVATE ---
        { name: 'Private Node: Alpha-7', type: 'ind', ssl: 'B', devCount: 1, integrity: 0.76 },
        { name: 'Ghost_Protocol 0x', type: 'ind', ssl: 'A', devCount: 3, integrity: 0.89 },
        { name: 'Independent Validator', type: 'ind', ssl: 'B+', devCount: 1, integrity: 0.82 },
        { name: 'Sovereign ID: 69-Shift', type: 'ind', ssl: 'A', devCount: 1, integrity: 0.94 }
    ],

    // 3. Status Operasi (Dinamik untuk UI)
    statusOptions: [
        'ACTIVE / OPERATIONAL', 
        'SYNCHRONIZING NODES...', 
        'ENCRYPTED LAYER 7', 
        'ISOLATED NODE (SECURE)',
        'PROTOCOL v1.1 ACTIVE',
        'VERIFYING SOVEREIGNTY...'
    ],

    // 4. Metadata Sistem (Piawaian S.O.P)
    metadata: {
        // Menjana masa sync semasa dalam format yang bersih (HH:MM:SS)
        lastGlobalSync: new Date().toLocaleTimeString('en-GB', { hour12: false }) + " UTC",
        protocolVersion: "1.1.0-stable",
        networkStrength: "OPTIMAL (99.9%)",
        securityStandard: "S.O.P END-TO-END ENCRYPTION"
    }
};

// 5. Verification Log
console.log(`%c S.O.P DATABASE v${WSE_DATABASE.metadata.protocolVersion} LOADED `, "background: #111; color: #00ff41; font-weight: bold; border: 1px solid #00ff41;");
