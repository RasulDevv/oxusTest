import "./Footer.css";
import logo from '../../images/logo-removebg-preview.png'
import inst from '../../images/sss-removebg-preview.png'
import tg from '../../images/tt-removebg-preview.png'
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="footer__content">
          <a href="https://oxusuniversity.uz/">
            <img className='footer__logo' src={logo} alt="" />

          </a>

        </div>

      </div>
    </div>
  )
}

export default Footer
