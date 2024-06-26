import "./Card.css";
import axios from "axios";

const TOKEN = "7144071754:AAF3G9NG5j3MQuXNRNQdAGggfU-xEj12_IE",
  CHAT_id = -1002145202503,
  URi__API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const Card = ({image, desc, baza, setBaza, id, baseIndex, setBaseIndex, setFoiz, foiz, data, name, setName, email, setEmail, phoneNumber, setPhoneNumber}) => {
    const f = () => {
        setBaza([...baza, {imgName: `00${id[1]}-${id[3]}`, desc: desc}])
        setBaseIndex(baseIndex + 1)
        setFoiz(p => p + 100 / data.length)
        if(Math.floor(foiz) === Math.floor(100 - 100 / data.length)) {
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
        }
    }
    return <div className="card" onClick={f}>
        <img className="card__pic" src={image} alt="picture" />
        <p className="card__title">{desc}</p>
    </div>
}

export default Card
