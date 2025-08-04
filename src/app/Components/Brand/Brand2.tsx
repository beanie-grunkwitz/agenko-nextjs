import React from 'react';

const Brand2 = () => {

    const brandContent = [
        {img:'/images/client/Trusta.AI.svg'},
        {img:'/images/client/UXLink.svg'},
        {img:'/images/client/OKX.svg'},
        {img:'/images/client/ODOS.svg'},
        {img:'/images/client/Hashkey.svg'},
        {img:'/images/client/KiloEx.svg'},
        {img:'/images/client/Catizen.svg'},
        {img:'/images/client/Aethir.svg'},
      ];   

    return (
            <section className="agk-client gray-dark pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_zoomIn">
                                <span className="sub-title">Our Client</span>
                                <h2>Our Client</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {brandContent.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                <div className="agenko-client-item style-one pf_fadeup">
                                    <div className="client-image">
                                        <img src={item.img} alt="client img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default Brand2;