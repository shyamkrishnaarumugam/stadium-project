import {React} from "react";
import Footer from "./Footer";
import NavItems from "./NavItems";

const Message = () => {

    const buttonClicked =()=>{
        window.location.href="https://api.whatsapp.com"
    }

    return (
        <div>
           
            <NavItems/>
            <div className="dark-mode spacer">
                
                <div className="spacer" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <img className="whatsappPic mx-5" src={require("../images/conversation.png")} alt="nothing"/>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <button onClick={()=>buttonClicked()}  style={{backgroundColor:"black",border:"none"}}><img className="Whatpic mx-5" src={require("../images/whatsapp.png")} alt="nothing"/></button>
                    <p>Click for whatsapp</p>
                </div>
                </div>


            </div>
            <Footer/>
        </div>
            )
}
export default Message;