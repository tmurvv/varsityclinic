import './App.css'
import {Header} from "@varsityclinic/components";
// import {AppTheme} from "./app-theme";
// import {ThemeProvider} from "@mui/material";

function App() {
  return (
    // <ThemeProvider theme={AppTheme}>
        <Header text="Admin | Varsity Clinic" toggles={["Provider", "Client"]} />
    // </ThemeProvider>
  )
}

export default App
