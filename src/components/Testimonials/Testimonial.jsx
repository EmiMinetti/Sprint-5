const Testimonial = (props) => {
    return <div className="testInd">
        <div>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        </div>
        <div className="datosTest">
            <img className="imgTest" src={props.image} alt="" />
            <div >
                <p className="nameTest"><b>{props.name}</b></p>
                <p className="titleTest">Founder & CEO, Huddle</p>
            </div>
        </div>
    </div>
}
export default Testimonial