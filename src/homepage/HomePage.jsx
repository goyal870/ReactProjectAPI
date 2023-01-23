import {Link} from "react-router-dom"
import './HomePage.css';


function LandingPageButton() {

    return <Link to="/about" class="nav-link">
        <button class="btn btn-primary" role="button" > 
            <span style={{"font-size": "24px"}}>
                Become-a-Master
            </span>
        </button>
        {/* <div><img src="ches.jpg"></img></div> */}
    </Link>
}

function LandingFrameMessage() {

    const style = {
        margin: "0%",
        padding: "5% 20% 20% 5%",
        
    }

    return <div style={style}>
        
        <div style={{"font-size": "90px"}}>
            <h1>Hello chessmasters!!!</h1>
        </div>
        
        <div style={{"font-size": "36px"}}>
            <h2>Take your chess game to the next level </h2>
            
        </div>

        <br />

        <LandingPageButton />

    </div>
}

function LandingFrame() {
    const style = {

        "background-image": `url("images/chesss.png")`,
        "background-repeat": "no-repeat",
        "background-size":"cover",
        position: "fixed",
        height: "450px",
        width: "100%",
        padding:"10px",
        margin:"0px"
    }

    return <div style={style}>
        <LandingFrameMessage />        
    </div>
}

function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}

export default HomePage