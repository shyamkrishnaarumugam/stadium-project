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
            <div className="dark-mode">
                
                <img className="whatsappPic mx-5" src={require("../images/conversation.png")}/>
                <div>
                    <button onClick={()=>buttonClicked()}  style={{backgroundColor:"black",border:"none"}}><img className="Whatpic mx-5" src={require("../images/whatsapp.png")}/></button>
                </div>


            </div>
            <Footer/>
        </div>
            )
}
export default Message;