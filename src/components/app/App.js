import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "../../layouts/MainLayOut";
import Home from "../../pages/Home";
import { useEffect, useState } from "react";
import NotFound from "../../pages/NotFound";
import axios from "axios";
import data from "../../data/base";

  const App = () => {
    const [baza, setBaza] = useState([]),
          [foiz, setFoiz] = useState(0)    

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut completed={foiz} />}>
            <Route index element={<Home baza={baza} setBaza={setBaza} data={data} setFoiz={setFoiz} foiz={foiz} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

export default App