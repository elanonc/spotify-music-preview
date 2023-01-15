import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ListTrack } from "../pages/ListTrack/ListTrack";

export function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-track" element={<ListTrack />} />
      </Routes>
    </BrowserRouter>
  )
}