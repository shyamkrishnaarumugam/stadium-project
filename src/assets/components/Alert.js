import {React} from "react";
import Footer from "./Footer";
import NavItems from "./NavItems";
import { Container } from "react-bootstrap";

const Alert = () => {
    return (
        <div>
           
            <NavItems/>
            <Container className="dark-mode">
                <table>
                    <tr>
                        <td>Alert</td>
                    </tr>
                </table>
            </Container>
            <Footer/>
        </div>
            )
}
export default Alert;