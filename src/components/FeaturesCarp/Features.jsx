import Feature from "./Feature"
import f1 from "../../assets/icon-access-anywhere.svg"
import f2 from "../../assets/icon-security.svg"
import f3 from "../../assets/icon-collaboration.svg"
import f4 from "../../assets/icon-any-file.svg"


const Features = () => {
    return <div className="feacturesList" id="featuresDiv">
        <div className="sectionFeacture">
            <Feature image={f1} title={"Access your files, anywhere"} description={"The ability to use a smartphone, tablet, or computer to accces your account means your files follow you everywhere."} />
            <Feature image={f2} title={"Security you can trust"} description={"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."} />
        </div>
        <div className="sectionFeacture">
            <Feature image={f3} title={"Real-time collaboration"} description={"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachements required."} />
            <Feature image={f4} title={"Store any type of file"} description={"Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."} />
        </div>
    </div>
    
}

export default Features