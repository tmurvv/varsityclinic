import './App.css'
import {Header} from "@varsityclinic/components";

function App() {
  return (
    <>
        <Header text="Admin | Varsity Clinic" toggles={["Provider", "Client"]} />
    </>
  )
}

export default App
