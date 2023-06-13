import Button from "../Button"

const Hero = () => {
    return <div className="heroStyle">
        <div className="contenedorHero">
            <img className="imageHero" src="../public/images/illustration-intro.png" alt="" />
            <div className="textosHero">
                <h1 id="txtPrincipalHero">All your files in one secure location, accesible anywhere.</h1>
                <p id="txtSecundarioHero">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            </div>
            <Button clase={"btnHero"} text={"Get Started"} />
        </div>
    </div>
    
}

export default Hero