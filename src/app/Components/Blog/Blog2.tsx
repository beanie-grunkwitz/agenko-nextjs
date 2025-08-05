"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Blog2 = () => {
    const [titleAnimation, setTitleAnimation] = useState(false);
    const [buttonAnimation, setButtonAnimation] = useState(false);
    const [blogAnimations, setBlogAnimations] = useState([false, false, false]);

    const blogContent = [
        {img:'/assets/images/digital-agency/blog/blog1.jpg', time: "April 21st, 2025", link: "https://mirror.xyz/kleinlabs.eth/z42bRcIRj_wPV_XXqNlCLNh1X8MqCRoLuuRJX6WuplU", title:'2024 CEX Listing Effect Report',authorImg:'/images/logo.png'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg',time: "June 20th, 2025",link: "https://mirror.xyz/kleinlabs.eth/_MGTVfTgp1-JqJaqsa5SrGdjVXq44YQJH2vb5F3p2a4", title:'South Korea Crypto Insight: A Market Fueled by the Kimchi Premium?',authorImg:'/images/logo.png'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg',time: "June 3rd, 2025",link: "https://mirror.xyz/kleinlabs.eth/f-M8QqM2bxDndUjvEgafBqdmbUn1zwKHBdJURt1EH5c", title:'Strong faith after: why SUI still has long-term growth potential',authorImg:'/images/logo.png'},
      ]; 

      useEffect(() => {
        loadBackgroudImages();
    }, []);

    useEffect(() => {
        // 创建 IntersectionObserver 来检测元素是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !titleAnimation) {
                    // 元素进入视口时开始动画序列
                    setTimeout(() => setTitleAnimation(true), 100);
                    setTimeout(() => setButtonAnimation(true), 300);
                    // 博客卡片动画 - 依次显示
                    setTimeout(() => setBlogAnimations([true, false, false]), 500);
                    setTimeout(() => setBlogAnimations([true, true, false]), 700);
                    setTimeout(() => setBlogAnimations([true, true, true]), 900);
                }
            },
            { threshold: 0.3 } // 当30%的元素可见时触发
        );

        // 观察整个section元素
        const sectionElement = document.querySelector('.agk-blogs');
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
                
                @keyframes blogCardAppear {
                    0% { 
                        opacity: 0; 
                        transform: translateY(40px) scale(0.95); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
            `}</style>
            <section className="agk-blogs pt-130 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        
                        <div className="section-title mb-50 pf_fadeup" style={{
                            animation: titleAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                            opacity: titleAnimation ? 1 : 0,
                            transform: titleAnimation ? 'translateY(0)' : 'translateY(30px)'
                        }}>
                            <span className="sub-title" style={{
                                animation: titleAnimation ? 'slideInLeft 0.8s ease-out' : 'none',
                                opacity: titleAnimation ? 1 : 0,
                                transform: titleAnimation ? 'translateX(0)' : 'translateX(-50px)'
                            }}>Latest Report</span>
                            <h2 style={{
                                animation: titleAnimation ? 'slideInRight 0.8s ease-out' : 'none',
                                opacity: titleAnimation ? 1 : 0,
                                transform: titleAnimation ? 'translateX(0)' : 'translateX(50px)'
                            }}>Our Report</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="agk-button float-lg-end mb-60 pf_fadeup" style={{
                            animation: buttonAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                            opacity: buttonAnimation ? 1 : 0,
                            transform: buttonAnimation ? 'translateY(0)' : 'translateY(30px)'
                        }}>
                            <a href="https://mirror.xyz/kleinlabs.eth" className="theme-btn style-one">
                                <span className="text-flip">
                                    <span className="text">View All Reports</span>
                                    <span className="text">View All Reports</span>
                                </span>
                            </a>
                        </div>    
                    </div>
                </div>
                <div className="row">
                {blogContent.map((item, i) => (
                    <div key={i} className="col-lg-12">
                        <div className="agenko-blog-item style-one pf_fadeup" style={{ 
                            padding: '5px',
                            animation: blogAnimations[i] ? 'blogCardAppear 0.8s ease-out' : 'none',
                            opacity: blogAnimations[i] ? 1 : 0,
                            transform: blogAnimations[i] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                        }}>
                            <div className="post-inner-wrap" style={{ padding: '5px' }}>
                                <div className="author-item" style={{ padding: '2px' }}>
                                    <div className="author-thumb" style={{ padding: '2px' }}>
                                        <Image src={item.authorImg} alt="Author Image" width={50} height={50} />
                                    </div>
                                    <div className="author-info" style={{ padding: '2px' }}>
                                        <span>Posted By</span>
                                        <h4>K1 Research</h4>
                                    </div>
                                </div>
                                <div className="post-content" style={{ padding: '5px' }}>
                                    <h3 className="title"><Link href="/blog/blog-details">{item.title}</Link></h3>
                                    <div className="post-categories" style={{ padding: '2px' }}>
                                        <a href={item.link}>Mirror</a>
                                    </div>
                                </div>
                                <div className="post-date" style={{ padding: '2px' }}>
                                <i className="bi bi-calendar-check"></i>
                                    <a href="#">{item.time}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}

                    <div className="row mb-40">
                        <div className="col-lg-12 text-center">
                            <h2 style={{ 
                                fontSize: '28px', 
                                margin: '0', 
                                padding: '20px 0 0 0',
                                color: 'inherit'
                            }}>. . .</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Blog2;