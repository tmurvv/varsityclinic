
// import {AppTheme} from "./app-theme";
// import { ThemeProvider } from "@mui/material";
import {Header} from "@varsityclinic/components";


const App = () => {
    return (
        // <ThemeProvider theme={AppTheme}>
            <Header
                text={"Tech | Varsity Clinic"}
                toggles={["Provider", "Client"]}
            />
        // </ThemeProvider>
    );
};

export default App;
