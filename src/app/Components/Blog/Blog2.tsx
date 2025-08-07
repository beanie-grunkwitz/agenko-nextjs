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
        {img:'/assets/images/digital-agency/blog/blog1.jpg', time: "April 21st, 2025", link: "https://mirror.xyz/kleinlabs.eth/z42bRcIRj_wPV_XXqNlCLNh1X8MqCRoLuuRJX6WuplU", title:'2024 CEX Listing Effect Report',authorImg:'/images/logo.png', bgImg: '/images/report-1.png'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg',time: "June 20th, 2025",link: "https://mirror.xyz/kleinlabs.eth/_MGTVfTgp1-JqJaqsa5SrGdjVXq44YQJH2vb5F3p2a4", title:'South Korea Crypto Insight: A Market Fueled by the Kimchi Premium?',authorImg:'/images/logo.png', bgImg: '/images/report-2.png'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg',time: "June 3rd, 2025",link: "https://mirror.xyz/kleinlabs.eth/f-M8QqM2bxDndUjvEgafBqdmbUn1zwKHBdJURt1EH5c", title:'Strong faith after: why SUI still has long-term growth potential',authorImg:'/images/logo.png', bgImg: '/images/report-3.png'},
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

                .blog-card {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    height: 220px;
                    min-height: 220px;
                    display: flex;
                    align-items: center;
                }

                .blog-card .post-inner-wrap {
                    display: flex !important;
                    flex-direction: row !important;
                    justify-content: space-between !important;
                    align-items: center !important;
                    height: 100% !important;
                    width: 100% !important;
                    padding: 20px !important;
                }

                .blog-card .author-item {
                    display: flex !important;
                    align-items: center !important;
                    width: 25% !important;
                    flex-shrink: 0 !important;
                }

                .blog-card .author-thumb {
                    margin-right: 10px !important;
                }

                .blog-card .author-info {
                    display: flex !important;
                    flex-direction: column !important;
                }

                .blog-card .author-info span {
                    font-size: 12px !important;
                    color: #808080 !important;
                    margin-bottom: 2px !important;
                }

                .blog-card .author-info h4 {
                    margin: 0 !important;
                    font-size: 14px !important;
                }

                .blog-card .post-content {
                    flex: 1 !important;
                    padding: 0 20px !important;
                    text-align: left !important;
                }

                .blog-card .post-content .title {
                    margin-bottom: 5px !important;
                }

                .blog-card .post-content .title a {
                    color: inherit !important;
                    text-decoration: none !important;
                }

                .blog-card .post-categories {
                    margin-bottom: 5px !important;
                }

                .blog-card .post-categories a {
                    color: #6A47ED !important;
                    text-decoration: none !important;
                    font-size: 12px !important;
                }

                .blog-card .post-date {
                    display: flex !important;
                    align-items: center !important;
                    font-size: 12px !important;
                    color: #808080 !important;
                    width: 25% !important;
                    justify-content: flex-end !important;
                    flex-shrink: 0 !important;
                }

                .blog-card .post-date i {
                    margin-right: 5px !important;
                }

                .blog-card .post-date a {
                    color: inherit !important;
                    text-decoration: none !important;
                }

                .blog-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }

                .blog-card .hover-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    opacity: 0;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    height: 100%;
                }

                .blog-card:hover .hover-overlay {
                    opacity: 1;
                }

                .blog-card .hover-overlay::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.3);
                    z-index: -1;
                }

                .read-more-btn {
                    background: #6A47ED;
                    color: black;
                    padding: 12px 24px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    border: none;
                }

                .read-more-btn:hover {
                    background: #6A47ED;
                    transform: scale(1.05);
                    color: black;
                    text-decoration: none;
                }

                /* 响应式高度调整 */
                @media (max-width: 768px) {
                    .blog-card {
                        height: auto;
                        min-height: 200px;
                    }

                    .blog-card .post-inner-wrap {
                        flex-direction: column !important;
                        justify-content: flex-start !important;
                        align-items: flex-start !important;
                        padding: 15px !important;
                        gap: 8px !important;
                    }

                    .blog-card .author-item {
                        width: 100% !important;
                        margin-bottom: 5px !important;
                    }

                    .blog-card .post-content {
                        width: 100% !important;
                        padding: 0 !important;
                        text-align: left !important;
                    }

                    .blog-card .post-content .title {
                        margin-bottom: 3px !important;
                    }

                    .blog-card .post-categories {
                        margin-bottom: 3px !important;
                    }

                    .blog-card .post-date {
                        width: 100% !important;
                        justify-content: flex-start !important;
                        margin-top: 5px !important;
                    }

                    .blog-card .hover-overlay {
                        display: none !important;
                    }

                    .blog-card:hover {
                        transform: none !important;
                        box-shadow: none !important;
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
                        <div className="agenko-blog-item style-one mb-40 pf_fadeup blog-card" style={{ 
                            padding: '5px',
                            animation: blogAnimations[i] ? 'blogCardAppear 0.8s ease-out' : 'none',
                            opacity: blogAnimations[i] ? 1 : 0,
                            transform: blogAnimations[i] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                        }}>
                            <div className="post-inner-wrap">
                                <div className="author-item">
                                    <div className="author-thumb">
                                        <Image src={item.authorImg} alt="Author Image" width={50} height={50} />
                                    </div>
                                    <div className="author-info">
                                        <span>Posted By</span>
                                        <h4>K1 Research</h4>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h3 className="title"><a href={item.link}>{item.title}</a></h3>
                                    <div className="post-categories">
                                        <a href={item.link}>Mirror</a>
                                    </div>
                                </div>
                                <div className="post-date">
                                <i className="bi bi-calendar-check"></i>
                                    <a href="#">{item.time}</a>
                                </div>
                            </div>
                            
                            {/* Hover Overlay with Background Image */}
                            <div 
                                className="hover-overlay"
                                style={{
                                    backgroundImage: `url(${item.bgImg})`
                                }}
                            >
                                <a href={item.link} className="read-more-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                    <div className="row mb-40" style={{marginTop: '-70px'}}>
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