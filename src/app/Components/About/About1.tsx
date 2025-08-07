"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const About1 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [titleAnimation, setTitleAnimation] = useState(false);
    const [paragraphAnimation, setParagraphAnimation] = useState(false);
    const [buttonAnimation, setButtonAnimation] = useState(false);
    const [imageAnimation, setImageAnimation] = useState(false);
    const counter1Ref = useRef(null);
    const counter2Ref = useRef(null);

    useEffect(() => {
        // 创建 IntersectionObserver 来检测元素是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !titleAnimation) {
                    // 元素进入视口时开始动画序列
                    setTimeout(() => setTitleAnimation(true), 100);
                    setTimeout(() => setParagraphAnimation(true), 300);
                    setTimeout(() => setButtonAnimation(true), 500);
                    setTimeout(() => setImageAnimation(true), 700);
                }
            },
            { threshold: 0.3 } // 当30%的元素可见时触发
        );

        // 观察整个section元素
        const sectionElement = document.querySelector('.agk-about');
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        const observer1 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible1) {
                    setIsVisible1(true);
                    animateCount(100, setCount1);
                }
            },
            { threshold: 0.5 }
        );

        const observer2 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible2) {
                    setIsVisible2(true);
                    animateCount(50, setCount2);
                }
            },
            { threshold: 0.5 }
        );

        if (counter1Ref.current) {
            observer1.observe(counter1Ref.current);
        }
        if (counter2Ref.current) {
            observer2.observe(counter2Ref.current);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
            if (counter1Ref.current) {
                observer1.unobserve(counter1Ref.current);
            }
            if (counter2Ref.current) {
                observer2.unobserve(counter2Ref.current);
            }
        };
    }, [titleAnimation, isVisible1, isVisible2]);

    const animateCount = (target, setCount) => {
        const duration = 2000; // 2秒动画
        const steps = 60; // 60步
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
    };

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
                
                @keyframes fadeInScale {
                    0% { 
                        opacity: 0; 
                        transform: scale(0.9); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: scale(1); 
                    }
                }
            `}</style>
            <section className="agk-about pt-130 pb-80">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20" style={{
                            animation: titleAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                            opacity: titleAnimation ? 1 : 0,
                            transform: titleAnimation ? 'translateY(0)' : 'translateY(30px)'
                        }}>
                            <span className="sub-title">About K1 Research</span>
                            <h2>The K-Factor in Web3</h2>
                        </div>
                        <p style={{
                            animation: paragraphAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                            opacity: paragraphAnimation ? 1 : 0,
                            transform: paragraphAnimation ? 'translateY(0)' : 'translateY(30px)'
                        }}>K1 Research is a research-driven one-stop partner specializing in Web3 market entry for global projects targeting the Korean market. We offer end-to-end services including localized operations, financing, user acquisition, brand marketing, business development, and event management. Our core team consists of seasoned Web3 experts with extensive experience working with top-tier projects. Key partners include Klein Labs and Aquarius Capital.</p>
                    <div className="agk-button mb-30" style={{
                        animation: buttonAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                        opacity: buttonAnimation ? 1 : 0,
                        transform: buttonAnimation ? 'translateY(0)' : 'translateY(30px)'
                    }}>
                        <Link href="https://x.com/K1_Research" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">LEARN MORE</span>
                                <span className="text">LEARN MORE</span>
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            
                            <div className="agenko-counter-box style-one" ref={counter1Ref}>
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">{count1}+</span></h2>
                                    <p>Deep web3 research report</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            
                            <div className="agenko-counter-box style-one" ref={counter2Ref}>
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">{count2}+</span></h2>
                                    <p>In-depth cooperative customers</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup" style={{
                        animation: imageAnimation ? 'fadeInScale 1s ease-out' : 'none',
                        opacity: imageAnimation ? 1 : 0,
                        transform: imageAnimation ? 'scale(1)' : 'scale(0.9)'
                    }}>
                        <div className="agk-image">
                        <Image src="/images/440_532.png" alt="img" width={440} height={532}   />
                        </div>
                        {/* <div className="agenko-experince-box style-one">
                            <p style={{ fontSize: '1.5rem', textAlign:'left', fontWeight: '600' }}>K1.</p>
                            <p style={{ fontSize: '1.5rem', textAlign:'left', fontWeight: '600' }}>Korea.</p>
                            <p style={{ fontSize: '1.5rem', textAlign:'left', fontWeight: '600' }}>Keystone.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default About1;