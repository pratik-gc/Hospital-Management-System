import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingpage from "../images/group2.png"

function Mainpage(){

    return(

        <div>


            {/* <img href="landingpage" alt="img"></img>
             */}
             {/* <image href="landingpage"></image> */}
             <img src={landingpage} alt="jkl" style={{width:"100%"}}></img>
            {/* <Link to='/'>Back to List</Link> */}

        </div>

    );


}
export default Mainpage;