import data from "../../data/base";
import "./Card.css";

const Card = ({image, desc, baza, setBaza, id, baseIndex, setBaseIndex, setFoiz, foiz}) => {
    const f = () => {
        setBaza([...baza, {imgName: `00${id[1]}-${id[3]}`, desc: desc}])
        setBaseIndex(baseIndex + 1)
        setFoiz(foiz + 100 / data.length)
    }

    return <div className="card" onClick={f}>
            <img className="card__pic" src={image} alt="picture" />
            <p className="card__title">{desc}</p>
        </div>
}

export default Card
