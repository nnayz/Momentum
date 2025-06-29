import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import LandingPage from "./pages/LandingPage/LandingPage"
import Login from "./pages/Login"
import Features from "./pages/Features"
import Documentation from "./pages/Documentation"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
