import { useState } from "react"
import Card from "../components/card/Card"
import Finish from "../components/finish/Finish"

const Home = ({setBaza,baza,data,loading,setFoiz,foiz}) => {
  const [baseIndex, setBaseIndex] = useState(0)
  return (
    <>
        {!loading ? data[baseIndex] ? (
          <div className="cards">
            {data[baseIndex].map(item => (
              <Card 
                key={item.id} 
                image={item.img} 
                desc={item.text} 
                baza={baza} 
                setBaza={setBaza} 
                id={item.id} 
                baseIndex={baseIndex} 
                setBaseIndex={setBaseIndex} 
                setFoiz={setFoiz}
                foiz={foiz}
              />
            ))}
          </div>
        ) : <Finish baza={baza} />
        : <div>home Loading...</div>}
    </>
  )
}

export default Home
