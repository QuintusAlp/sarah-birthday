import { BrowserRouter, Routes, Route } from "react-router-dom";

import Schedule from "./Schedule";
import CatBox from "./CatBox";
import GiftGuessing from "./GiftGuessing";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatBox />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/giftGuessing" element={<GiftGuessing />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
