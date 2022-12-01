import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid fondoMarron">
            <div className="container py-5">
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <img src={"images/Logo-3.svg"} alt="burguer-king-footer" width={192} />
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://facebook.com/"} target={"_blank"} rel={"noreferrer"} className={"me-3"}><img src="images/Facebook.svg" alt="facebook" width={24} /></a>
                            <a href={"https://instagram.com/"} target={"_blank"} rel={"noreferrer"} className={"me-3"}><img src="images/Instagram.svg" alt="instagram" width={24} /></a>
                            <a href={"https://youtube.com/"} target={"_blank"} rel={"noreferrer"} className={"me-3"}><img src="images/Youtube.svg" alt="youtube" width={24} /></a>
                            <a href={"https://twitter.com/"} target={"_blank"} rel={"noreferrer"} className={"me-3"}><img src="images/Twitter.svg" alt="twitter" width={24} /></a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Footer;