"use client"
import React, { useState, useEffect } from 'react';

const Process2 = () => {
    const [titleAnimation, setTitleAnimation] = useState(false);
    const [cardAnimations, setCardAnimations] = useState([false, false, false, false, false, false]);

    useEffect(() => {
        // 创建 IntersectionObserver 来检测元素是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !titleAnimation) {
                    // 元素进入视口时开始动画序列
                    setTimeout(() => setTitleAnimation(true), 200);
                    // 卡片动画 - 依次显示
                    setTimeout(() => setCardAnimations([true, false, false, false, false, false]), 400);
                    setTimeout(() => setCardAnimations([true, true, false, false, false, false]), 600);
                    setTimeout(() => setCardAnimations([true, true, true, false, false, false]), 800);
                    setTimeout(() => setCardAnimations([true, true, true, true, false, false]), 1000);
                    setTimeout(() => setCardAnimations([true, true, true, true, true, false]), 1200);
                    setTimeout(() => setCardAnimations([true, true, true, true, true, true]), 1400);
                }
            },
            { threshold: 0.3 } // 当30%的元素可见时触发
        );

        // 观察整个section元素
        const sectionElement = document.querySelector('.agk-work-process');
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, [titleAnimation]);

    return (
        <>
            <style jsx>{`
                @keyframes fadeInUp {
                    0% { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes slideInLeft {
                    0% { 
                        opacity: 0; 
                        transform: translateX(-50px); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
                
                @keyframes slideInRight {
                    0% { 
                        opacity: 0; 
                        transform: translateX(50px); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
                
                @keyframes cardAppear {
                    0% { 
                        opacity: 0; 
                        transform: translateY(40px) scale(0.9); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
                
                @keyframes iconBounce {
                    0%, 100% { 
                        transform: translateY(0); 
                    }
                    50% { 
                        transform: translateY(-5px); 
                    }
                }
                
                .agenko-iconic-box {
                    min-height: 120px !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: flex-start !important;
                    align-items: center !important;
                    text-align: center !important;
                    padding: 15px !important;
                    transition: all 0.3s ease;
                }
                
                .agenko-iconic-box:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .agenko-iconic-box .icon {
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    margin-bottom: 15px !important;
                    height: 40px !important;
                }
                
                .agenko-iconic-box .content {
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    text-align: center !important;
                    min-height: 50px !important;
                }
                
                .agenko-iconic-box .content p {
                    font-size: 12px !important;
                    line-height: 1.3 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    text-align: center !important;
                }
                
                .section-title {
                    animation: ${titleAnimation ? 'fadeInUp 0.8s ease-out' : 'none'};
                    opacity: ${titleAnimation ? 1 : 0};
                    transform: ${titleAnimation ? 'translateY(0)' : 'translateY(30px)'};
                }
                
                .section-title .sub-title {
                    animation: ${titleAnimation ? 'slideInLeft 0.8s ease-out' : 'none'};
                    opacity: ${titleAnimation ? 1 : 0};
                    transform: ${titleAnimation ? 'translateX(0)' : 'translateX(-50px)'};
                }
                
                .section-title h2 {
                    animation: ${titleAnimation ? 'slideInRight 0.8s ease-out' : 'none'};
                    opacity: ${titleAnimation ? 1 : 0};
                    transform: ${titleAnimation ? 'translateX(0)' : 'translateX(50px)'};
                }
                
                .text-box {
                    animation: ${titleAnimation ? 'fadeInUp 0.8s ease-out' : 'none'};
                    opacity: ${titleAnimation ? 1 : 0};
                    transform: ${titleAnimation ? 'translateY(0)' : 'translateY(30px)'};
                }
                
                .row + .row {
                    margin-top: 30px !important;
                }
                
                @media (max-width: 768px) {
                    .col-sm-12 {
                        margin-bottom: 20px !important;
                    }
                    
                    .col-sm-12:last-child {
                        margin-bottom: 0 !important;
                    }
                }
            `}</style>
            <section className="agk-work-process pt-130 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            
                            <div className="section-title mb-50 pf_fadeup">
                                <span className="sub-title">Our Services</span>
                                <h2>From Alpha to Action.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            
                            <div className="text-box mb-55 pf_fadeup">
                                <p>We are a research-driven consultancy that transforms global blockchain projects into Korean market success stories through our comprehensive suite of localization, marketing, and strategic services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            
                            <div className="agenko-iconic-box style-two pf_fadeup" style={{
                                animation: cardAnimations[0] ? 'cardAppear 0.8s ease-out' : 'none',
                                opacity: cardAnimations[0] ? 1 : 0,
                                transform: cardAnimations[0] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)'
                            }}>
                                <div className="icon">
                                <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <div className="content">
                                    <p>Deep Research Report & Premium Localization</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            
                            <div className="agenko-iconic-box style-two pf_fadeup" style={{
                                animation: cardAnimations[1] ? 'cardAppear 0.8s ease-out' : 'none',
                                opacity: cardAnimations[1] ? 1 : 0,
                                transform: cardAnimations[1] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)'
                            }}>
                                <div className="icon">
                                <i className="bi bi-people"></i>
                                </div>
                                <div className="content">
                                    <p>Top KOLs and Community Resources</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            
                            <div className="agenko-iconic-box style-two pf_fadeup" style={{
                                animation: cardAnimations[2] ? 'cardAppear 0.8s ease-out' : 'none',
                                opacity: cardAnimations[2] ? 1 : 0,
                                transform: cardAnimations[2] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)'
                            }}>
                                <div className="icon">
                                <i className="bi bi-megaphone"></i>
                                </div>
                                <div className="content">
                                    <p>Viral Marketing & Media Relations Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            
                            <div className="agenko-iconic-box style-two pf_fadeup" style={{
                                animation: cardAnimations[3] ? 'cardAppear 0.8s ease-out' : 'none',
                                opacity: cardAnimations[3] ? 1 : 0,
                                transform: cardAnimations[3] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)'
                            }}>
                                <div className="icon">
                                <i className="bi bi-graph-up"></i>
                                </div>
                                <div className="content">
                                    <p>Full-Cycle TGE Campaign Management</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            
                            <div className="agenko-iconic-box style-two pf_fadeup" style={{
                                animation: cardAnimations[4] ? 'cardAppear 0.8s ease-out' : 'none',
                                opacity: cardAnimations[4] ? 1 : 0,
                                transform: cardAnimations[4] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)'
                            }}>
                                <div className="icon">
                                <i className="bi bi-trophy"></i>
                                </div>
                                <div className="content">
                                    <p>Premium Event Production & Sports Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            
                            <div className="agenko-iconic-box style-two pf_fadeup" style={{
                                animation: cardAnimations[5] ? 'cardAppear 0.8s ease-out' : 'none',
                                opacity: cardAnimations[5] ? 1 : 0,
                                transform: cardAnimations[5] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)'
                            }}>
                                <div className="icon">
                                <i className="bi bi-display"></i>
                                </div>
                                <div className="content">
                                    <p>Strategic Outdoor Media & Digital Advertising</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Process2;