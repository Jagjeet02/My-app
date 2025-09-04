"use client";
import Link from "next/link";

export default function Login() {
    return(
        <div className="signup_container login_container">
            <form action="" className="signup_form login_form">
              <Link href="./"><h4 className="login">Sign Up</h4></Link>
              <h4 className="signup_head">Login</h4>
              <div className="form_inputs">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
              </div>
              <Link href="./welcome"><button className="signup_btn primary_btn">Login</button></Link>
              <span className="or-line">OR</span>
              <div className="other_signup_options">
                <Link href=""><img src="" alt="" /></Link>
                <Link href=""><img src="" alt="" /></Link>
                <Link href=""><img src="" alt="" /></Link>
              </div>
            </form>
        </div>
    );
}