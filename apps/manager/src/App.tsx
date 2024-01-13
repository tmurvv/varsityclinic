import './App.css'
import {Header} from "@varsityclinic/components";

function App() {
  return (
    <>
        <Header text="Manager | Varsity Clinic" toggles={["Admin", "Provider", "Client"]} />
    </>
  )
}

export default App
