"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
            <footer className="agenko-footer gray-dark pt-130 primary-black-bg">
                    <div className="shape shape-one"><span><Image className="rotate360" src="/assets/images/creative-agency/footer/element1.png" alt="Shape" width={50} height={50} /></span></div>
                    <div className="shape shape-two"><span><Image className="rotate360" src="/assets/images/creative-agency/footer/element2.png" alt="Shape" width={50} height={50} /></span></div>
                    <div className="shape shape-blur_one"><span></span></div>
                    <div className="shape shape-blur_two"><span></span></div>
                    
                    <div className="footer-widget-area pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    
                                    <div className="footer-widget footer-about-widget mb-40 pf_fadeup">
                                        <div className="footer-content">
                                            {/* <div className="footer-logo"> */}
                                                <a href="#"> <Image src="/images/light-logo.png" alt="img" width={151} height={40} style={{marginBottom:5}}   /></a>
                                            {/* </div> */}
                                            <p>K1 Research is Seoul's premier Web3 market intelligence and localization partner, providing comprehensive solutions for global projects entering Korea's dynamic blockchain ecosystem. Powered by Klein Labs.</p>
                                                                                         <form onSubmit={handleSubscribe}>
                                                 <div className="form-group">
                                                     <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                                                     <label><i className="far fa-envelope"></i></label>
                                                     <button type="submit" className="theme-btn style-two">Subscribe</button>
                                                 </div>
                                             </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-5">
                                            
                                            <div className="footer-widget footer-nav-widget mb-40 pf_fadeup">
                                                <div className="footer-content mb-35">
                                                    <h4 className="widget-title">Our Link</h4>
                                                    <ul className="footer-nav">
                                                        <li>
                                                            <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                                                Home
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                                                About
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#service" onClick={(e) => { e.preventDefault(); document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                                                Service
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#client" onClick={(e) => { e.preventDefault(); document.getElementById('client')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                                                Client
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#team" onClick={(e) => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                                                Team
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                                                Contact
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                           
                                            <div className="footer-widget footer-contact-widget mb-40 pf_fadeup">
                                                <div className="footer-content">
                                                    <h4 className="widget-title">Contact</h4>
                                                    <div className="content mb-20">
                                                        <h6>Email</h6>
                                                        <p><a href="mailto:info@k1research.com">info@k1research.com</a></p>
                                                    </div>
                                                    <div className="content mb-20">
                                                        <h6>Binance Square</h6>
                                                        <p><a href="https://app.binance.com/uni-qr/cpro/K1_Research" target="_blank" rel="noopener noreferrer">https://app.binance.com/uni-qr/cpro/K1_Research</a></p>
                                                    </div>
                                                    <div className="content mb-20">
                                                        <h6>Telegram Channel</h6>
                                                        <p><a href="https://t.me/k1_research" target="_blank" rel="noopener noreferrer">https://t.me/k1_research</a></p>
                                                    </div>
                                                    <div className="content">
                                                        <h6>X (Twitter)</h6>
                                                        <p><a href="https://x.com/k1_research" target="_blank" rel="noopener noreferrer">https://x.com/k1_research</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright">
                        <div className="container">

                            <div className="copyright-text">
                                <p>&copy; 2025 <span>K1 Research</span> - All Rights Reserved.</p>
                            </div>

                        </div>
                                         </div>
                     
                     {/* Subscription Success Popup */}
                     {showPopup && (
                         <div style={{
                             position: 'fixed',
                             top: '50%',
                             left: '50%',
                             transform: 'translate(-50%, -50%)',
                             backgroundColor: '#6A47ED',
                             color: 'white',
                             padding: '20px 30px',
                             borderRadius: '10px',
                             zIndex: 9999,
                             boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                             animation: 'fadeInOut 3s ease-in-out'
                         }}>
                             <div style={{ textAlign: 'center' }}>
                                 <i className="bi bi-check-circle" style={{ fontSize: '24px', marginBottom: '10px', display: 'block' }}></i>
                                 <strong>Subscription successfully!</strong>
                             </div>
                         </div>
                     )}
                 </footer>
    );
};

export default Footer;