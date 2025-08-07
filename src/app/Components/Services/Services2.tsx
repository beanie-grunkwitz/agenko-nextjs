"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Services2 = () => {
    const [titleAnimation, setTitleAnimation] = useState(false);
    const [subtitleAnimation, setSubtitleAnimation] = useState(false);
    const [paragraphAnimation, setParagraphAnimation] = useState(false);
    const [cardAnimations, setCardAnimations] = useState([false, false, false, false, false, false]);

         useEffect(() => {
         // 检查是否为手机端
         const isMobile = window.innerWidth <= 768;
         
         // 在手机端立即显示所有内容
         if (isMobile) {
             setTitleAnimation(true);
             setSubtitleAnimation(true);
             setParagraphAnimation(true);
             setCardAnimations([true, true, true, true, true, true]);
         }
         
         // 创建 IntersectionObserver 来检测元素是否进入视口
         const observer = new IntersectionObserver(
             ([entry]) => {
                 if (entry.isIntersecting && !titleAnimation) {
                     // 元素进入视口时开始动画序列
                     setTimeout(() => setTitleAnimation(true), 100);
                     setTimeout(() => setSubtitleAnimation(true), 300);
                     setTimeout(() => setParagraphAnimation(true), 500);
                     
                     // 在手机端立即显示所有内容，在桌面端使用动画
                     if (isMobile) {
                         setTitleAnimation(true);
                         setSubtitleAnimation(true);
                         setParagraphAnimation(true);
                         setCardAnimations([true, true, true, true, true, true]);
                     } else {
                         // 卡片动画 - 依次显示
                         setTimeout(() => setCardAnimations([true, false, false, false, false, false]), 700);
                         setTimeout(() => setCardAnimations([true, true, false, false, false, false]), 900);
                         setTimeout(() => setCardAnimations([true, true, true, false, false, false]), 1100);
                         setTimeout(() => setCardAnimations([true, true, true, true, false, false]), 1300);
                         setTimeout(() => setCardAnimations([true, true, true, true, true, false]), 1500);
                         setTimeout(() => setCardAnimations([true, true, true, true, true, true]), 1700);
                     }
                 }
             },
             { threshold: 0.3 } // 当30%的元素可见时触发
         );

        // 观察整个section元素
        const sectionElement = document.querySelector('.agk-services');
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
                         transform: translateY(40px) scale(0.95); 
                     }
                     100% { 
                         opacity: 1; 
                         transform: translateY(0) scale(1); 
                     }
                 }
                 
                 .responsive-card {
                     display: flex;
                     flex-direction: row;
                     align-items: flex-start;
                     gap: 30px;
                 }
                 
                 .responsive-title {
                     flex: 0 0 50%;
                     max-width: 30%;
                 }
                 
                 .responsive-content {
                     flex: 1;
                     min-width: 0;
                     max-width: 70%;
                 }
                 
                 @media (max-width: 768px) {
                     .responsive-card {
                         flex-direction: column !important;
                         width: 100% !important;
                         display: flex !important;
                         opacity: 1 !important;
                         transform: none !important;
                     }
                     
                     .responsive-title {
                         flex: 1 !important;
                         max-width: 100% !important;
                         width: 100% !important;
                         opacity: 1 !important;
                     }
                     
                     .responsive-content {
                         max-width: 100% !important;
                         width: 100% !important;
                         flex: 1 !important;
                         opacity: 1 !important;
                     }
                     
                                      /* 确保卡片在手机端始终可见 */
                 .agenko-card-item.responsive-card {
                     opacity: 1 !important;
                     transform: none !important;
                     animation: none !important;
                 }
                 
                                   /* 强制显示所有卡片在手机端 */
                  @media (max-width: 768px) {
                      .agenko-card-item {
                          opacity: 1 !important;
                          transform: none !important;
                          animation: none !important;
                          display: block !important;
                      }
                      
                      .pf_fadeup {
                          opacity: 1 !important;
                          transform: none !important;
                      }
                      
                      /* 确保标题和段落在手机端可见 */
                      .section-title {
                          opacity: 1 !important;
                          transform: none !important;
                          animation: none !important;
                      }
                      
                      .text-box {
                          opacity: 1 !important;
                          transform: none !important;
                          animation: none !important;
                      }
                      
                      /* 调整标题在手机端的布局 */
                      .section-title h2 {
                          font-size: 2rem !important;
                          line-height: 1.2 !important;
                          text-align: center !important;
                      }
                      
                      .section-title .sub-title {
                          font-size: 1rem !important;
                          text-align: center !important;
                      }
                      
                      /* 调整段落在手机端的布局 */
                      .text-box p {
                          font-size: 1rem !important;
                          line-height: 1.6 !important;
                          text-align: center !important;
                      }
                      
                      /* 调整列布局在手机端 */
                      .col-lg-7, .col-lg-5 {
                          width: 100% !important;
                          margin-bottom: 30px !important;
                      }
                      
                      /* 确保容器在手机端有合适的间距 */
                      .container {
                          padding-left: 15px !important;
                          padding-right: 15px !important;
                      }
                      
                      /* 调整section的内边距 */
                      .agk-services {
                          padding-top: 80px !important;
                          padding-bottom: 80px !important;
                      }
                  }
                 }
            `}</style>
            <section className="agk-services gray-dark pt-130 pb-100">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    
                                    <div className="section-title mb-65 pf_fadeup" style={{
                                        animation: titleAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                                        opacity: titleAnimation ? 1 : 0,
                                        transform: titleAnimation ? 'translateY(0)' : 'translateY(30px)'
                                    }}>
                                        <span className="sub-title" style={{
                                            animation: subtitleAnimation ? 'slideInLeft 0.8s ease-out' : 'none',
                                            opacity: subtitleAnimation ? 1 : 0,
                                            transform: subtitleAnimation ? 'translateX(0)' : 'translateX(-50px)'
                                        }}>Our Services</span>
                                        <h2 style={{
                                            animation: titleAnimation ? 'slideInRight 0.8s ease-out' : 'none',
                                            opacity: titleAnimation ? 1 : 0,
                                            transform: titleAnimation ? 'translateX(0)' : 'translateX(50px)'
                                        }}>From Alpha 
                                            to Action.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="text-box mb-60 pf_fadeup" style={{
                                        animation: paragraphAnimation ? 'fadeInUp 0.8s ease-out' : 'none',
                                        opacity: paragraphAnimation ? 1 : 0,
                                        transform: paragraphAnimation ? 'translateY(0)' : 'translateY(30px)'
                                    }}>
                                        <p>We are a research-driven consultancy that transforms global blockchain projects into Korean market success stories through our comprehensive suite of localization, marketing, and strategic services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    
                                                                         <div className="agenko-card-item style-one mb-30 pf_fadeup responsive-card" style={{ 
                                                                             animation: cardAnimations[0] ? 'cardAppear 0.8s ease-out' : 'none',
                                                                             opacity: cardAnimations[0] ? 1 : 0,
                                                                             transform: cardAnimations[0] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                                                                         }}>
                                         <div className="card-title responsive-title">
                                             <div className="sn-number">01</div>
                                             <h3 className="title">Deep Research Report & Premium Localization</h3>
                                         </div>
                                         <div className="responsive-content">
                                             <p>Our flagship research reports deliver comprehensive analysis of project potential and tokenomics, tailored for Korean market sensibilities. We provide institutional-grade competitive analysis based on market trends and user sentiment. We create culturally intelligent content adaptation for media that authentically resonates with Korean Web3 culture.</p>
                                         </div>
                                     </div>
                                </div>
                                <div className="col-lg-12">
                                   
                                                                         <div className="agenko-card-item style-one mb-30 pf_fadeup responsive-card" style={{ 
                                                                             animation: cardAnimations[1] ? 'cardAppear 0.8s ease-out' : 'none',
                                                                             opacity: cardAnimations[1] ? 1 : 0,
                                                                             transform: cardAnimations[1] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                                                                         }}>
                                         <div className="card-title responsive-title">
                                             <div className="sn-number">02</div>
                                             <h3 className="title">Top KOLs and Community Resources</h3>
                                         </div>
                                         <div className="responsive-content">
                                             <p>Leverage our network of 500+ premium Korean Web3 KOLs, orchestrating sophisticated campaigns including exclusive reviews, AMAs, and social media amplification. We execute high-impact online events including Twitter Spaces and gamified community challenges. Our collaborative approach creates viral amplification effects that maximize project visibility and credibility within Korean crypto communities.</p>
                                         </div>
                                     </div>
                                </div>
                                <div className="col-lg-12">
                                                                         <div className="agenko-card-item style-one mb-30 pf_fadeup responsive-card" style={{ 
                                                                             animation: cardAnimations[2] ? 'cardAppear 0.8s ease-out' : 'none',
                                                                             opacity: cardAnimations[2] ? 1 : 0,
                                                                             transform: cardAnimations[2] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                                                                         }}>
                                         <div className="card-title responsive-title">
                                             <div className="sn-number">03</div>
                                             <h3 className="title">Viral Marketing & Media Relations Excellence</h3>
                                         </div>
                                         <div className="responsive-content">
                                             <p>Amplify project exposure through targeted campaigns on Korea&apos;s premier online communities including Coinpan, Cobak, Blind, DC Inside, and Theqoo. We create compelling viral content and implement hashtag strategies that generate sustained discussion and organic growth. Seamlessly integrate with Korea&apos;s top blockchain and technology media outlets including TokenPost, Naver, Blockmedia, and Coinness. We provide comprehensive press release creation, distribution, and interview coordination, establishing authoritative thought leadership through strategic research publication timing.</p>
                                         </div>
                                     </div>
                                </div>
                                <div className="col-lg-12">
                                                                                                                                                                                                                                                                                                       <div className="agenko-card-item style-one mb-30 pf_fadeup responsive-card" style={{ 
                                                                                        animation: cardAnimations[3] ? 'cardAppear 0.8s ease-out' : 'none',
                                                                                        opacity: cardAnimations[3] ? 1 : 0,
                                                                                        transform: cardAnimations[3] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                                                                                    }}>
                                           <div className="card-title responsive-title">
                                               <div className="sn-number">04</div>
                                               <h3 className="title">Full-Cycle TGE Campaign Management</h3>
                                           </div>
                                           <div className="responsive-content">
                                               <p>Comprehensive token generation event marketing strategy across three phases: 1.Stealth viral marketing and strategic hype building before TGE; 2. Concentrated AMA scheduling and Twitter trending campaigns in TGE Period; 3. Community stabilization and user incentive programs after TGE. Execute OTC token sales targeting Korean investors through our network of VCs and high-net-worth individuals, providing secure intermediation services for optimal capital efficiency.</p>
                                           </div>
                                       </div>
                                </div>
                                                                <div className="col-lg-12">
                                                                                                                                                                                                                                                                                                         <div className="agenko-card-item style-one mb-30 pf_fadeup responsive-card" style={{ 
                                                                                         animation: cardAnimations[4] ? 'cardAppear 0.8s ease-out' : 'none',
                                                                                         opacity: cardAnimations[4] ? 1 : 0,
                                                                                         transform: cardAnimations[4] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                                                                                     }}>
                                            <div className="card-title responsive-title">
                                                <div className="sn-number">05</div>
                                                <h3 className="title">Premium Event Production & Sports Marketing</h3>
                                            </div>
                                            <div className="responsive-content">
                                                <p>Leverage our proven experience with major cultural events like World DJ Festival to create impactful Web3 experiences. We execute high-profile meetups, airdrops, and NFT showcases that convert Web2 audiences into Web3 participants. Develop strategic partnerships with K-League football and Korean sports leagues, enhancing brand visibility through stadium sponsorships and live event activations.</p>
                                            </div>
                                        </div>
                                </div>
                                                                <div className="col-lg-12">
                                                                                                                                                                                                                                                                                                         <div className="agenko-card-item style-one mb-30 pf_fadeup responsive-card" style={{ 
                                                                                         animation: cardAnimations[5] ? 'cardAppear 0.8s ease-out' : 'none',
                                                                                         opacity: cardAnimations[5] ? 1 : 0,
                                                                                         transform: cardAnimations[5] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                                                                                     }}>
                                            <div className="card-title responsive-title">
                                                <div className="sn-number">06</div>
                                                <h3 className="title">Strategic Outdoor Media & Digital Advertising</h3>
                                            </div>
                                            <div className="responsive-content">
                                                <p>Deploy impactful visual campaigns across Seoul&apos;s prime digital real estate including department stores, landmark buildings, and subway networks. Our media strategy maximizes brand exposure among Korea&apos;s most affluent and tech-savvy demographics, establishing strong visual brand presence through strategic outdoor media placement.</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    );
};

export default Services2;