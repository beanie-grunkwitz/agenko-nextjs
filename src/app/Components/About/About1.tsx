"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const About1 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const counter1Ref = useRef(null);
    const counter2Ref = useRef(null);

    useEffect(() => {
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
            if (counter1Ref.current) {
                observer1.unobserve(counter1Ref.current);
            }
            if (counter2Ref.current) {
                observer2.unobserve(counter2Ref.current);
            }
        };
    }, [isVisible1, isVisible2]);

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
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                        <Image src="/images/440_532.png" alt="img" width={440} height={532}   />
                        </div>
                        <div className="agenko-experince-box style-one">
                            <p style={{ fontSize: '1.5rem', textAlign:'left', fontWeight: '600' }}>K1</p>
                            <p style={{ fontSize: '1.5rem', textAlign:'left', fontWeight: '600' }}>Korea</p>
                            <p style={{ fontSize: '1.5rem', textAlign:'left', fontWeight: '600' }}>Keystone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;