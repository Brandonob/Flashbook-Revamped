import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'

function App() {

  return (
    <Router>
      <div id="appContainer">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/groups" element={<GroupsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

// Dummy components for tabs example
function HomePage() { return <div>Home</div> }
function VideoPage() { return <div>Video</div> }
function MarketplacePage() { return <div>Marketplace</div> }
function GroupsPage() { return <div>Groups</div> }

export default App
