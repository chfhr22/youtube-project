import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'
import Channel from './pages/Channel'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/youtuber" element={<Youtuber />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App