import React from "react";

const PromocionApp = () => {
    return (
        <div className="container-fluid fondoRojo">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={"images/landing_page_image-croped-5-1.png"} alt="" width={320} />
                    </div>
                    <div className="col-md-6 d-flex align-items-end">
                        <div>
                            <h3 className="fs-1">Descarga la App y disfruta mucho más por menos</h3>
                            <p>
                                <a href="https://play.google.com/store/apps/details?id=com.nosmk.burgerking" target={"_blank"} rel={"noreferrer"}><img src={"images/google_play.png"} alt={"app_android"} width={135} height={45} /> </a>
                                <a href="https://apps.apple.com/us/app/burger-king-mexico/id1457228152" target={"_blank"} rel={"noreferrer"}><img src={"images/app__store.png"} alt={"app_ios"} width={135} height={45} /> </a>
                                <a href="https://appgallery.huawei.com/#/app/C102495773" target={"_blank"} rel={"noreferrer"}><img src={"images/exploralo-appgallery.png"} alt={"app_gallery"} width={135} height={45} /> </a>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum laudantium obcaecati cum ratione deleniti doloremque consequuntur ducimus? Culpa, vitae. Nobis voluptatem esse eveniet quis facilis accusamus debitis temporibus deleniti iste.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromocionApp;