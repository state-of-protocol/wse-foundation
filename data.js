// WSE FOUNDATION - CENTRAL DATA REPOSITORY
const WSE_DATABASE = {
    categories: [
        { id: 'ind', name: 'INDIVIDUAL', color: '#d4af37' },
        { id: 'com', name: 'COMPANY', color: '#3b82f6' },
        { id: 'corp', name: 'CORPORATE', color: '#a855f7' },
        { id: 'inst', name: 'INSTITUTION', color: '#ec4899' },
        { id: 'gov', name: 'GOVERNANCE', color: '#ef4444' }
    ],
    
    // Simulasi data pemilik/status
    entities: [
        { name: 'Shift_Dev Labs', type: 'corp', ssl: 'A+', devCount: 12 },
        { name: 'Global Tech Inst.', type: 'inst', ssl: 'A', devCount: 45 },
        { name: 'Private Node', type: 'ind', ssl: 'B', devCount: 1 }
    ],

    statusOptions: ['OPERATIONAL', 'MAINTENANCE', 'DECOMMISSIONED', 'ENCRYPTED']
};
