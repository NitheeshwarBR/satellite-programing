import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Main from "./pages/main/Main"

import "./App.css"
function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="section-2" >
          <Header />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
