import { useState } from "react";
import "./Start.css";
import axios from "axios";
import fnshloogo from '../../images/logo.png'

const TOKEN = "7144071754:AAF3G9NG5j3MQuXNRNQdAGggfU-xEj12_IE",
  CHAT_id = -1002145202503,
  URi__API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const Start = ({ baza, setBaseIndex }) => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [phoneNumber, setPhoneNumber] = useState(""),
    [ogox, setOgox] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    
    if (name == "" || phoneNumber.length < 9) setOgox("ism va telefon raqam kiriting!!!")
    else {
      let arr = []
      baza.forEach(element => {
        arr.push({ [element.imgName]: element.desc })
      });
      const messagee = { name, email, phoneNumber, baza: arr } // telegramga yuboriladigan object

      axios.post(URi__API, {
        chat_id: CHAT_id,
        parse_mode: 'html',
        text: messagee
      })

      setName('')
      setEmail('')
      setPhoneNumber('')
      setBaseIndex(p => p + 1)
    }
  }
  return <div className="">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title">
      <img src={fnshloogo} className="form__text"/>
      </div>
      <div className="form__content">
    
      <label htmlFor="name" className="label">
        <span>  ismingizni kiriting</span>
        <input id="name" className="form__input" placeholder="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label htmlFor="email" className="label">
        <span>Email kiriting</span>

        <input id="email" className="form__input" placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label htmlFor="num" className="label">
        <span>telefon raqamingiz</span>
        <input id="num" className="form__input" placeholder="phone number" type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <button className="form__btn">send</button>
      </div>
      {name == "" || phoneNumber.length < 9 ? <div className="error"><h4 className="err">{ogox}</h4></div> : ""}
    </form>
  </div>
}

export default Start