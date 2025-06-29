import { ThemeProvider } from "@/components/theme-provider"
import LandingPage from "./pages/LandingPage/LandingPage"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LandingPage />
    </ThemeProvider>
  )
}

export default App;
