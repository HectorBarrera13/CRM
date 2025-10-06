import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./mainPages/HomePage";
import PatientsPage from "./mainPages/PatientsPage";
import CalendarPage from "./mainPages/CalendarPage";
import StaffPage from "./mainPages/StaffPage";
import LoginPage from "./mainPages/LoginPage";
import ChartsPage from "./mainPages/ChartsPage";
import PaymentPage from "./mainPages/PaymentPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setLoginError("");

    // Simulate API call
    setTimeout(() => {
      // Demo authentication logic
      if (email === "admin@sofdent.com" && password === "demo123") {
        setIsAuthenticated(true);
        setLoginError("");
      } else {
        setLoginError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("Home");
    setLoginError("");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "Patients":
        return <PatientsPage />;
      case "Calendar":
        return <CalendarPage />;
      case "Staff":
        return <StaffPage />;
      case "Payment":
        return <PaymentPage />;
      case "Charts":
        return <ChartsPage />;
      default:
        return <HomePage />;
    }
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return (
      <LoginPage
        onLogin={handleLogin}
        isLoading={isLoading}
        error={loginError}
      />
    );
  }

  // Show main application if authenticated
  return (
    <Layout
      onNavigate={handleNavigation}
      currentPage={currentPage}
      onLogout={handleLogout}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;
