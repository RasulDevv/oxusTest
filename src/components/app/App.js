import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "../../layouts/MainLayOut";
import Home from "../../pages/Home";
import { useEffect, useState } from "react";
import NotFound from "../../pages/NotFound";

  const App = () => {
    const [baza, setBaza] = useState([]),
          [data, setData] = useState([]),
          [foiz, setFoiz] = useState(0)
    useEffect(() => {
      async function AA() {
        await fetch("https://raw.githubusercontent.com/RasulDevv/oxusData/master/data.json")
          .then(res => res.json())
          .then(dat => setData(dat.data))
          .catch(err => console.log(err))
      }
      AA()
    }, [])
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