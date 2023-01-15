import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ListTrack } from "../pages/ListTrack/ListTrack";

export function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Home />
        </Route>
        <Route path="/list-track">
          <ListTrack />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}