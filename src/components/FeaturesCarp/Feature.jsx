const Feature = (props) => {
    return <div className="featureStyle">
        <div><img src={props.image} alt="" /></div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>

    </div>
    
}
export default Feature
