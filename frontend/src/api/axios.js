import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api";

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

// Attach JWT or use mock adapter for static showcase
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("cc_token");
  
  if (token && token.startsWith("mock-")) {
    config.adapter = (config) => {
      let mockData = { success: true };
      const url = config.url || "";
      
      // Smart mock responses based on route
      if (url.includes("/wallet") && !url.includes("all")) mockData.wallet = { balance: 5240, monthlyInflow: 3500, monthlyOutflow: 1260 };
      else if (url.includes("/wallet/all")) mockData = { success: true, wallets: [] };
      
      if (url.includes("/transactions")) mockData = { success: true, transactions: [], transaction: { amount: 100, status: 'completed' }, users: [] };
      
      if (url.includes("/admin/stats")) mockData.stats = { totalUsers: 142, totalTransactions: 5240, grossVolume: 245000, successRate: 99.8, activeNodes: 1204, systemIntegrity: 99.9, monthlyData: [], volumeByType: [] };
      else if (url.includes("/admin/users")) mockData = { success: true, users: [], total: 0, page: 1 };
      else if (url.includes("/admin/transactions")) mockData = { success: true, transactions: [], total: 0 };
      
      if (url.includes("/recurring")) mockData.recurring = [];
      if (url.includes("/notifications")) mockData = { success: true, notifications: [], unreadCount: 0 };
      if (url.includes("/insights/weekly")) mockData = { success: true, weekly: [], byCategory: [] };
      if (url.includes("/insights/monthly")) mockData.monthly = { sent: [], received: [] };

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: mockData, status: 200, statusText: "OK", headers: {}, config, request: {} });
        }, 300); // slight fake delay for realism
      });
    };
  } else if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 globally
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const token = localStorage.getItem("cc_token");
    if (err.response?.status === 401 && (!token || !token.startsWith("mock-"))) {
      localStorage.removeItem("cc_token");
      localStorage.removeItem("cc_user");
      window.location.href = "/";
    }
    return Promise.reject(err);
  },
);

export default api;
