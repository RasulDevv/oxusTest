import "./Navbar.css";
import logo from '../../images/logo-removebg-preview.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
    <div className='nav'>
    <a href="https://oxusuniversity.uz/">
        <img  className='logo' src={logo} alt="" />

    </a>
   
</div>
    </div>
  )
}

export default Navbar