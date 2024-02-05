import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SingleVideo from "./pages/SingleVideo"

function App() {
  return (
    <main>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/video/:id' element={<SingleVideo />}/>
        </Routes>
       </BrowserRouter>
    </main>
  )
}

export default App
