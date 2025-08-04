import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About1 = () => {
    return (
        <section className="agk-about pt-130 pb-80">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20">
                            <span className="sub-title">About K1 Research</span>
                            <h2>The K-Factor in Web3</h2>
                        </div>
                        <p>Headquartered in Gangnam-gu, Seoul, K1 Research is a research-driven one-stop solution provider for Web3 Korean market, providing consulting and implementation services for global projects entering the Korean market. The service content covers localized operations, financing, user growth, brand marketing, business development, offline events, large-scale events and event sponsorship in the Korean market, and is your best partner to enter the Korean market. The K1 core team is a senior expert with many years of experience in Web3 in Korea, and has served many well-known projects. Key supporters of K1 Research include Klein Labs, Aquarius Capital.</p>
                    <div className="agk-button mb-30">
                        <Link href="https://x.com/K1_Research" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">LEARN MORE</span>
                                <span className="text">LEARN MORE</span>
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">100</span>+</h2>
                                    <p>Deep web3 research report</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">50</span>+</h2>
                                    <p>In-depth cooperative customers</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                        <Image src="/assets/images/digital-agency/about/about1.jpg" alt="img" width={440} height={532}   />
                        </div>
                        <div className="agenko-experince-box style-one">
                            <h2><span>K1</span></h2>
                            <p>Korea</p>
                            <p>Keystone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;