import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Read from localStorage immediately on mount
  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("cc_token") : null;
  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem("cc_user") : null;

  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [token, setToken] = useState(storedToken);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Just mark loading as done
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    if (data.success) {
      localStorage.setItem("cc_token", data.token);
      localStorage.setItem("cc_user", JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
    }
    return data;
  }, []);

  const register = useCallback(async (formData) => {
    const { data } = await api.post("/auth/register", formData);
    if (data.success) {
      localStorage.setItem("cc_token", data.token);
      localStorage.setItem("cc_user", JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
    }
    return data;
  }, []);

  const mockLogin = useCallback((type) => {
    const mockUser =
      type === "admin"
        ? {
            id: "admin_123",
            name: "Dr. Alexander Vance",
            email: "admin@campus.edu",
            role: "admin",
            campusId: "CC-ADMIN-001",
          }
        : {
            id: "student_123",
            name: "Alex Rivera",
            email: "student@campus.edu",
            role: "student",
            campusId: "CC-STU-9042",
          };
    const mockToken = "mock-jwt-token-" + Date.now();
    localStorage.setItem("cc_token", mockToken);
    localStorage.setItem("cc_user", JSON.stringify(mockUser));
    setToken(mockToken);
    setUser(mockUser);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("cc_token");
    localStorage.removeItem("cc_user");
    setToken(null);
    setUser(null);
  }, []);

  const isAdmin = user?.role === "admin";
  const isStudent = user?.role === "student";

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        mockLogin,
        register,
        logout,
        isAdmin,
        isStudent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
