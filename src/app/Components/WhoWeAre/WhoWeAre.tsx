"use client"
import React, { useState, useEffect } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import Link from 'next/link';
import Image from 'next/image';

const WhoWeAre = () => {

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
        const [textAnimation, setTextAnimation] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };

        useEffect(() => {
            // 创建 IntersectionObserver 来检测元素是否进入视口
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !textAnimation) {
                        // 元素进入视口时开始动画
                        setTimeout(() => setTextAnimation(true), 200);
                    }
                },
                { threshold: 0.3 } // 当30%的元素可见时触发
            );

            // 观察整个section元素
            const sectionElement = document.querySelector('.agk-who-we');
            if (sectionElement) {
                observer.observe(sectionElement);
            }

            return () => {
                if (sectionElement) {
                    observer.unobserve(sectionElement);
                }
            };
        }, [textAnimation]);

    return (
        <>
            <style jsx>{`
                @keyframes fadeInUp {
                    0% { 
                        opacity: 0; 
                        transform: translateY(50px); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes textReveal {
                    0% { 
                        opacity: 0; 
                        transform: translateY(100px) scale(0.8); 
                    }
                    50% { 
                        opacity: 0.5; 
                        transform: translateY(50px) scale(0.9); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
                
                @keyframes glowPulse {
                    0%, 100% { 
                        text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                    }
                    50% { 
                        text-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
                    }
                }
                
                .big-text {
                    animation: ${textAnimation ? 'textReveal 1.2s ease-out' : 'none'};
                    opacity: ${textAnimation ? 1 : 0};
                    transform: ${textAnimation ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)'};
                }
            `}</style>
            <section className="agk-who-we pb-70">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            
                            <div className="agk-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-30">
                                    <span className="sub-title">What We Are</span>
                                    <h2>Your Trusted Agency for Digital Success</h2>
                                </div>
                                <ul className="check-list style-one mb-40">
                                    <li><i className="bi bi-check2-circle"></i>Passionate Problem-Solvers For Your Business</li>
                                    <li><i className="bi bi-check2-circle"></i>Business & Financial Creative Innovators</li>
                                    <li><i className="bi bi-check2-circle"></i>Provide National Trusted Client-Centered</li>
                                    <li><i className="bi bi-check2-circle"></i>Perfect & Modern Work Results-Driven</li>
                                    <li><i className="bi bi-check2-circle"></i>National Client Meet & Collaborative Partners</li>
                                </ul>
                                <div className="agk-button">
                                    <Link href="/pricing" className="theme-btn style-one">
                                        <span className="text-flip">
                                            <span className="text">LEARN MORE</span>
                                            <span className="text">LEARN MORE</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            
                            <div className="agk-play-image-box mb-50 pf_fadeup">
                                <div className="agk-image style-four">
                                    <Image src="/assets/images/digital-agency/features/who1.jpg" className="rounded-2" alt="img" width={743} height={501}   />
                                    <div onClick={handelClick} className="play-box">
                                        <a className="video-popup"><i className="bi bi-play-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="big-text text-center mt-80 pt-70">
                            <h2 className="text-anm-two">SEOUL TO SUCCESS</h2>
                        </div>
                    </div>
                </div>
                {/* <VideoModal
                    isTrue={toggle}
                    iframeSrc={iframeSrc}
                    handelClose={handelClose}        
                ></VideoModal>                         */}
            </section>
        </>
    );
};

export default WhoWeAre;