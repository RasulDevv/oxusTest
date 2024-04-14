import { useState } from "react"
import Card from "../components/card/Card"
import Start from "../components/Start/Start"
import Finish from "../components/finish/Finish"

const Home = ({setBaza,baza,data,loading,setFoiz,foiz}) => {
  const [baseIndex, setBaseIndex] = useState(-1),
        [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [phoneNumber, setPhoneNumber] = useState("")
  return (
    <>
        {baseIndex == -1 ? (
          <Start baza={baza} setBaseIndex={setBaseIndex} name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        ) : !loading ? data[baseIndex] ? (
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
                data={data}
                name={name} 
                setName={setName} 
                email={email} 
                setEmail={setEmail} 
                phoneNumber={phoneNumber} 
                setPhoneNumber={setPhoneNumber}
              />
            ))}
          </div>
        ) : <Finish />
        : <div>home Loading...</div>}
    </>
  )
}

export default Home
