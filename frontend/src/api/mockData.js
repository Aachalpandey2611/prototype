// ============================================================
// CampusChain — Central Static Mock Data Store
// All pages pull from here. No real API calls needed.
// ============================================================

const now = Date.now();
const d = (daysAgo) => new Date(now - daysAgo * 86400000).toISOString();

export const MOCK_USERS = [
  { _id: 'u1', name: 'Dr. Alexander Vance', email: 'admin@campus.edu', role: 'admin',   campusId: 'CC-ADMIN-001', isActive: true,  balance: 18500.00 },
  { _id: 'u2', name: 'Alex Rivera',         email: 'student@campus.edu',role: 'student', campusId: 'CC-STU-9042', isActive: true,  balance: 5240.50  },
  { _id: 'u3', name: 'Sarah Jensen',        email: 'sarah@campus.edu',  role: 'student', campusId: 'CC-STU-7741', isActive: true,  balance: 3120.00  },
  { _id: 'u4', name: 'John Smith',          email: 'john@campus.edu',   role: 'student', campusId: 'CC-STU-8823', isActive: true,  balance: 8450.75  },
  { _id: 'u5', name: 'Emma Wilson',         email: 'emma@campus.edu',   role: 'student', campusId: 'CC-STU-6612', isActive: true,  balance: 2890.00  },
  { _id: 'u6', name: 'Campus Vendor',       email: 'vendor@campus.edu', role: 'vendor',  campusId: 'CC-VND-0012', isActive: true,  balance: 22100.00 },
  { _id: 'u7', name: 'Marcus Lee',          email: 'marcus@campus.edu', role: 'student', campusId: 'CC-STU-5501', isActive: false, balance: 0        },
  { _id: 'u8', name: 'Priya Sharma',        email: 'priya@campus.edu',  role: 'student', campusId: 'CC-STU-4498', isActive: true,  balance: 1760.00  },
];

export const MOCK_TRANSACTIONS = [
  { _id: 'tx1', senderId: { _id:'u2', name:'Alex Rivera',    email:'student@campus.edu' }, receiverId: { _id:'u3', name:'Sarah Jensen',  email:'sarah@campus.edu' }, amount:150.00, type:'p2p',    status:'completed', note:'Lunch split',       txHash:'0xa1b2c3d4e5f60001aabbccdd112233445566778899aabbccddeeff00112233444', blockIndex:1001, prevHash:'0x000000', createdAt: d(1) },
  { _id: 'tx2', senderId: { _id:'u4', name:'John Smith',     email:'john@campus.edu'    }, receiverId: { _id:'u2', name:'Alex Rivera',   email:'student@campus.edu'}, amount:500.00, type:'p2p',    status:'completed', note:'Project funds',     txHash:'0xa1b2c3d4e5f60002aabbccdd112233445566778899aabbccddeeff00112233455', blockIndex:1002, prevHash:'0xa1b2c3d4e5f60001', createdAt: d(2) },
  { _id: 'tx3', senderId: { _id:'u2', name:'Alex Rivera',    email:'student@campus.edu' }, receiverId: { _id:'u6', name:'Campus Vendor', email:'vendor@campus.edu'  }, amount:85.50,  type:'qr',     status:'completed', note:'Cafeteria QR pay',  txHash:'0xa1b2c3d4e5f60003aabbccdd112233445566778899aabbccddeeff00112233466', blockIndex:1003, prevHash:'0xa1b2c3d4e5f60002', createdAt: d(3) },
  { _id: 'tx4', senderId: { _id:'u1', name:'Dr. Alexander Vance', email:'admin@campus.edu' }, receiverId: { _id:'u2', name:'Alex Rivera', email:'student@campus.edu' }, amount:2000.00, type:'topup', status:'completed', note:'Wallet Top-Up',     txHash:'0xa1b2c3d4e5f60004aabbccdd112233445566778899aabbccddeeff00112233477', blockIndex:1004, prevHash:'0xa1b2c3d4e5f60003', createdAt: d(4) },
  { _id: 'tx5', senderId: { _id:'u2', name:'Alex Rivera',    email:'student@campus.edu' }, receiverId: { _id:'u5', name:'Emma Wilson',  email:'emma@campus.edu'    }, amount:325.00, type:'p2p',    status:'completed', note:'Book money',        txHash:'0xa1b2c3d4e5f60005aabbccdd112233445566778899aabbccddeeff00112233488', blockIndex:1005, prevHash:'0xa1b2c3d4e5f60004', createdAt: d(5) },
  { _id: 'tx6', senderId: { _id:'u3', name:'Sarah Jensen',   email:'sarah@campus.edu'   }, receiverId: { _id:'u2', name:'Alex Rivera',  email:'student@campus.edu' }, amount:200.00, type:'p2p',    status:'completed', note:'Rent split',        txHash:'0xa1b2c3d4e5f60006aabbccdd112233445566778899aabbccddeeff00112233499', blockIndex:1006, prevHash:'0xa1b2c3d4e5f60005', createdAt: d(6) },
  { _id: 'tx7', senderId: { _id:'u2', name:'Alex Rivera',    email:'student@campus.edu' }, receiverId: { _id:'u6', name:'Campus Vendor', email:'vendor@campus.edu' }, amount:42.00,  type:'qr',     status:'completed', note:'Library payment',   txHash:'0xa1b2c3d4e5f60007aabbccdd112233445566778899aabbccddeeff00112233500', blockIndex:1007, prevHash:'0xa1b2c3d4e5f60006', createdAt: d(8) },
  { _id: 'tx8', senderId: { _id:'u2', name:'Alex Rivera',    email:'student@campus.edu' }, receiverId: { _id:'u8', name:'Priya Sharma', email:'priya@campus.edu'   }, amount:100.00, type:'recurring',status:'completed', note:'Weekly transfer',   txHash:'0xa1b2c3d4e5f60008aabbccdd112233445566778899aabbccddeeff00112233511', blockIndex:1008, prevHash:'0xa1b2c3d4e5f60007', createdAt: d(10) },
  { _id: 'tx9', senderId: { _id:'u1', name:'Dr. Alexander Vance', email:'admin@campus.edu' }, receiverId: { _id:'u3', name:'Sarah Jensen', email:'sarah@campus.edu' }, amount:1000.00, type:'topup', status:'completed', note:'Scholarship credit', txHash:'0xa1b2c3d4e5f60009aabbccdd112233445566778899aabbccddeeff00112233522', blockIndex:1009, prevHash:'0xa1b2c3d4e5f60008', createdAt: d(12) },
  { _id: 'tx10',senderId: { _id:'u4', name:'John Smith',     email:'john@campus.edu'    }, receiverId: { _id:'u6', name:'Campus Vendor', email:'vendor@campus.edu' }, amount:260.00, type:'qr',     status:'pending',   note:'Tech store QR',     txHash:'0xa1b2c3d4e5f60010aabbccdd112233445566778899aabbccddeeff00112233533', blockIndex:1010, prevHash:'0xa1b2c3d4e5f60009', createdAt: d(14) },
];

export const MOCK_WALLET = {
  _id: 'wallet_stu1',
  balance: 5240.50,
  monthlyInflow: 3500.00,
  monthlyOutflow: 1260.00,
  dailyLimit: 5000.00,
};

export const MOCK_RECURRING = [
  { _id: 'rec1', label: 'Weekly Allowance → Priya', receiverId: { name: 'Priya Sharma', email: 'priya@campus.edu' }, amount: 100.00, frequency: 'weekly',  active: true,  nextRun: d(-7)  },
  { _id: 'rec2', label: 'Monthly Dues → Campus Club', receiverId: { name: 'Campus Vendor', email: 'vendor@campus.edu' }, amount: 50.00, frequency: 'monthly', active: true,  nextRun: d(-30) },
  { _id: 'rec3', label: 'Study Group Fund',          receiverId: { name: 'Emma Wilson', email: 'emma@campus.edu' },    amount: 25.00, frequency: 'weekly',  active: false, nextRun: d(-7)  },
];

export const MOCK_NOTIFICATIONS = [
  { _id: 'n1', title: 'Payment Received',      body: 'You received $200.00 from Sarah Jensen',            type: 'transaction', read: false, createdAt: d(0.1) },
  { _id: 'n2', title: 'Payment Sent',          body: '$85.50 sent to Campus Vendor via QR',               type: 'transaction', read: false, createdAt: d(0.5) },
  { _id: 'n3', title: 'Wallet Topped Up',      body: 'Admin added $2,000.00 to your wallet',              type: 'system',      read: false, createdAt: d(1)   },
  { _id: 'n4', title: 'Recurring Payment Due', body: 'Weekly transfer to Priya Sharma is scheduled',      type: 'alert',       read: true,  createdAt: d(3)   },
  { _id: 'n5', title: 'Blockchain Synced',     body: 'Your transactions are anchored to block #1008',     type: 'system',      read: true,  createdAt: d(5)   },
  { _id: 'n6', title: 'Special Offer',         body: 'Campus café offering 20% off via CampusChain pay',  type: 'promo',       read: true,  createdAt: d(7)   },
];

export const MOCK_ADMIN_STATS = {
  totalUsers: 142,
  totalTransactions: 5240,
  grossVolume: 245800.00,
  successRate: 99.2,
  activeNodes: 1204,
  systemIntegrity: 99.98,
  monthlyData: [
    { month: 'Oct', volume: 18200, count: 380 },
    { month: 'Nov', volume: 22450, count: 461 },
    { month: 'Dec', volume: 19800, count: 412 },
    { month: 'Jan', volume: 31200, count: 652 },
    { month: 'Feb', volume: 28900, count: 598 },
    { month: 'Mar', volume: 36100, count: 743 },
  ],
  volumeByType: [
    { name: 'p2p',       value: 142000 },
    { name: 'topup',     value: 68000  },
    { name: 'qr',        value: 35800  },
  ],
};

export const MOCK_WEEKLY = [
  { day: 'Sun', spent: 42  },
  { day: 'Mon', spent: 125 },
  { day: 'Tue', spent: 88  },
  { day: 'Wed', spent: 210 },
  { day: 'Thu', spent: 65  },
  { day: 'Fri', spent: 310 },
  { day: 'Sat', spent: 150 },
];

export const MOCK_MONTHLY = [
  { month: 'Oct', spent: 820,  received: 1200 },
  { month: 'Nov', spent: 1050, received: 950  },
  { month: 'Dec', spent: 640,  received: 2000 },
  { month: 'Jan', spent: 1280, received: 1800 },
  { month: 'Feb', spent: 980,  received: 1100 },
  { month: 'Mar', spent: 1260, received: 3500 },
];

export const MOCK_BY_CATEGORY = [
  { name: 'p2p',      value: 1260 },
  { name: 'qr',       value: 450  },
  { name: 'recurring',value: 300  },
];

// Search mock users by name/email/campusId
export const searchUsers = (query, excludeEmail) => {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return MOCK_USERS.filter(u =>
    u.email !== excludeEmail &&
    (u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.campusId.toLowerCase().includes(q))
  ).slice(0, 5);
};
