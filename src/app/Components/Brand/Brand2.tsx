"use client"
import React, { useState, useEffect } from 'react';

const Brand2 = () => {
    const [titleAnimation, setTitleAnimation] = useState(false);
    const [brandAnimations, setBrandAnimations] = useState([false, false, false, false, false, false, false, false]);

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

    useEffect(() => {
        // 检查是否为手机端
        const isMobile = window.innerWidth <= 768;
        
        // 在手机端立即显示所有品牌logo
        if (isMobile) {
            setBrandAnimations([true, true, true, true, true, true, true, true]);
        }
        
        // 创建 IntersectionObserver 来检测元素是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !titleAnimation) {
                    // 元素进入视口时开始动画序列
                    setTimeout(() => setTitleAnimation(true), 100);
                    
                    // 在手机端立即显示所有品牌logo，在桌面端使用动画
                    if (isMobile) {
                        setBrandAnimations([true, true, true, true, true, true, true, true]);
                    } else {
                        // 品牌logo动画 - 依次显示，创造波浪效果
                        setTimeout(() => setBrandAnimations([true, false, false, false, false, false, false, false]), 300);
                        setTimeout(() => setBrandAnimations([true, true, false, false, false, false, false, false]), 500);
                        setTimeout(() => setBrandAnimations([true, true, true, false, false, false, false, false]), 700);
                        setTimeout(() => setBrandAnimations([true, true, true, true, false, false, false, false]), 900);
                        setTimeout(() => setBrandAnimations([true, true, true, true, true, false, false, false]), 1100);
                        setTimeout(() => setBrandAnimations([true, true, true, true, true, true, false, false]), 1300);
                        setTimeout(() => setBrandAnimations([true, true, true, true, true, true, true, false]), 1500);
                        setTimeout(() => setBrandAnimations([true, true, true, true, true, true, true, true]), 1700);
                    }
                }
            },
            { threshold: 0.3 } // 当30%的元素可见时触发
        );

        // 观察整个section元素
        const sectionElement = document.querySelector('.agk-client');
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
                
                @keyframes brandLogoAppear {
                    0% { 
                        opacity: 0; 
                        transform: translateY(40px) scale(0.8) rotate(-10deg); 
                    }
                    50% { 
                        opacity: 0.7; 
                        transform: translateY(20px) scale(0.9) rotate(-5deg); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0) scale(1) rotate(0deg); 
                    }
                }
                
                @keyframes brandLogoFloat {
                    0%, 100% { 
                        transform: translateY(0px); 
                    }
                    50% { 
                        transform: translateY(-5px); 
                    }
                }
                
                @keyframes brandLogoGlow {
                    0%, 100% { 
                        filter: brightness(1) drop-shadow(0 0 0px rgba(106, 71, 237, 0)); 
                    }
                    50% { 
                        filter: brightness(1.1) drop-shadow(0 0 10px rgba(106, 71, 237, 0.3)); 
                    }
                }
                
                /* 手机端响应式布局 */
                @media (max-width: 768px) {
                    /* 标题在手机端的优化 */
                    .section-title {
                        margin-bottom: 30px !important;
                    }
                    
                    .section-title h2 {
                        font-size: 2rem !important;
                        line-height: 1.2 !important;
                    }
                    
                    .section-title .sub-title {
                        font-size: 1rem !important;
                    }
                    
                    /* 品牌logo在手机端的布局 */
                    .agenko-client-item {
                        margin-bottom: 20px !important;
                        padding: 15px !important;
                        text-align: center !important;
                    }
                    
                    .client-image {
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;
                        min-height: 80px !important;
                    }
                    
                    .client-image img {
                        max-width: 100% !important;
                        height: auto !important;
                        max-height: 60px !important;
                        object-fit: contain !important;
                    }
                    
                    /* 确保logo在手机端可见 */
                    .agenko-client-item {
                        opacity: 1 !important;
                        transform: none !important;
                        animation: none !important;
                    }
                    
                    /* 调整列布局在手机端 */
                    .col-sm-6 {
                        width: 50% !important;
                    }
                    
                    /* 确保容器在手机端有合适的间距 */
                    .container {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                    
                    /* 调整section的内边距 */
                    .agk-client {
                        padding-top: 80px !important;
                        padding-bottom: 80px !important;
                    }
                }
                
                /* 超小屏幕的优化 */
                @media (max-width: 480px) {
                    .col-sm-6, .col-xs-12 {
                        width: 100% !important;
                    }
                    
                    .agenko-client-item {
                        margin-bottom: 15px !important;
                    }
                    
                    .client-image img {
                        max-height: 50px !important;
                    }
                    
                    /* 确保在超小屏幕上logo居中显示 */
                    .agenko-client-item {
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;
                    }
                }
            `}</style>
            <section className="agk-client gray-dark pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_zoomIn" style={{
                                animation: titleAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                                opacity: titleAnimation ? 1 : 0,
                                transform: titleAnimation ? 'translateY(0)' : 'translateY(30px)'
                            }}>
                                <span className="sub-title" style={{
                                    animation: titleAnimation ? 'slideInLeft 0.8s ease-out' : 'none',
                                    opacity: titleAnimation ? 1 : 0,
                                    transform: titleAnimation ? 'translateX(0)' : 'translateX(-50px)'
                                }}>Our Client</span>
                                <h2 style={{
                                    animation: titleAnimation ? 'slideInRight 0.8s ease-out' : 'none',
                                    opacity: titleAnimation ? 1 : 0,
                                    transform: titleAnimation ? 'translateX(0)' : 'translateX(50px)'
                                }}>Our Client</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {brandContent.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                                <div className="agenko-client-item style-one pf_fadeup" style={{
                                    animationName: brandAnimations[i] ? 'brandLogoAppear, brandLogoFloat, brandLogoGlow' : 'none',
                                    animationDuration: brandAnimations[i] ? '1s, 3s, 4s' : '0s',
                                    animationTimingFunction: brandAnimations[i] ? 'ease-out, ease-in-out, ease-in-out' : 'ease',
                                    animationIterationCount: brandAnimations[i] ? '1, infinite, infinite' : '1',
                                    animationDelay: brandAnimations[i] ? `${i * 0.1}s, ${i * 0.1}s, ${i * 0.1}s` : '0s',
                                    opacity: brandAnimations[i] ? 1 : 0,
                                    transform: brandAnimations[i] ? 'translateY(0) scale(1) rotate(0deg)' : 'translateY(40px) scale(0.8) rotate(-10deg)'
                                }}>
                                    <div className="client-image">
                                        <img src={item.img} alt="client img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
            </section>
        </>
    );
};

export default Brand2;