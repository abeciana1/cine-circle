import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '@/src/pages/Home'
import SiteWideNav from '@/src/components/navigation'

function App() {
  return (
    <>
      <Router>
        <SiteWideNav />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
