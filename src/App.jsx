import Detail from "./pages/detail"
import Results from "./pages/results"
import Feed from "./pages/feed"
import Header from "./components/header"
import { BrowserRouter,Route,Routes } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Feed/>} />
      <Route path="/watch" element={<Detail/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App