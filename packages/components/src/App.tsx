import { Header } from "components";
// import { AppTheme } from "./components/app-theme";
// import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    // <ThemeProvider theme={AppTheme}>
      <Header
        text={"Tech | Varsity Clinic"}
        toggles={["Manager", "Admin", "Provider", "Client"]}
      />
    // </ThemeProvider>
  );
};

export default App;
