import Testimonial from "./Testimonial"
import ff1 from "../../assets/profile-1.jpg"
import ff2 from "../../assets/profile-2.jpg"
import ff3 from "../../assets/profile-3.jpg"

const Testimonials = () => {
    return <div className="testiCont" id="myTeam">
        <div className="contenidoEdit" >    
            <Testimonial image={ff1} name={"Satish Patel"} />
            <Testimonial image={ff2} name={"Bruce McKenzie"} />
            <Testimonial image={ff3} name={"Iva Boyd"} />
        </div>
    </div>
    
}

export default Testimonials