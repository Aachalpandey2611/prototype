import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

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
    // Static prototype — no real API
    const mockUsers = {
      'admin@campus.edu':   { id: 'admin_123',   name: 'Dr. Alexander Vance', email: 'admin@campus.edu',   role: 'admin',   campusId: 'CC-ADMIN-001' },
      'student@campus.edu': { id: 'student_123', name: 'Alex Rivera',         email: 'student@campus.edu', role: 'student', campusId: 'CC-STU-9042'  },
    };
    const user = mockUsers[email];
    if (user) {
      const token = 'mock-jwt-token-' + Date.now();
      localStorage.setItem('cc_token', token);
      localStorage.setItem('cc_user', JSON.stringify(user));
      setToken(token);
      setUser(user);
      return { success: true, token, user };
    }
    return { success: false, message: 'Invalid credentials' };
  }, []);

  const register = useCallback(async (formData) => {
    // Static prototype — simulate successful registration
    const user = { id: 'new_' + Date.now(), name: formData.name, email: formData.email, role: 'student', campusId: 'CC-STU-NEW1' };
    const token = 'mock-jwt-token-' + Date.now();
    localStorage.setItem('cc_token', token);
    localStorage.setItem('cc_user', JSON.stringify(user));
    setToken(token);
    setUser(user);
    return { success: true, token, user };
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
