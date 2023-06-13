import Signup from "./Signup"

const Footer = () => {
    return <div className="footerContenedor">
        <div className="dataFooter">        
            <Signup/>
            <div className="fyloCont"><img className="logoFyloFoot" src="icons/logo.svg" alt="" /></div>
            <div className="textDataFooter">
                <div className="locationSect">
                    <div><img className="iconLorem" src="icons/icon-location.svg" alt="" /></div>
                    <p className="marginOff">Lorem ipsum dolor sit amte, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="misContactos">
                    <div className="contactoSect"><img className="iconFoot" src="icons/icon-phone.svg" alt="" /><p className="marginOff">+1-543-123-4567 </p></div>
                    
                    <div className="contactoSect"><img className="iconFoot" src="icons/icon-email.svg" alt="" /><p className="marginOff">example@fylo.com </p></div>
                </div>
                <div className="menuFooter">
                    <p className="marginOff">About Us</p>
                    <p>Jobs </p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div className="menuFooter">
                    <p className="marginOff">Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className="iconosRedes">
                    <img className="iconsThree" src="icons/fb.png" alt="" />
                    <img className="iconsThree" src="icons/tt.png" alt="" />
                    <img className="iconsThree" src="icons/ig.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    
}

export default Footer