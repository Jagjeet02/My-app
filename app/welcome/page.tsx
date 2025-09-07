import Link from "next/link"; 

export default function welcome(){
    return(
        <div className="welcome_container">
          <div className="welcome_box">
            <h2>Welcome to</h2>
            <div className="logo">
              <img src="./logo.png" alt="Logo" />
            </div>
            <h4>Your Dukaan, your rules - let's get started!</h4>
            <Link href="./home" className="choose_button"><button className="primary_btn">Let's Go</button></Link>
          </div>
        </div>
    );
}