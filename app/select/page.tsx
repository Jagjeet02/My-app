import Link from "next/link";

export default function select(){
    return (
        <div className="selection_container">
            <div className="selection_box">
                <h4>Are you a?</h4>
                <Link href="./welcome" className="choose_button">
                    <button className="primary_btn">Customers</button>
                </Link>
                <span className="or-line">OR</span>
                <Link href="./welcome" className="choose_button">
                    <button className="primary_btn">Shopkeeper</button>
                </Link>
            </div>
        </div>
    );
}