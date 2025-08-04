"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const HeroBanner2 = () => {
    const [displayText1, setDisplayText1] = useState('');
    const [displayText2, setDisplayText2] = useState('');
    const [displayText3, setDisplayText3] = useState('');
    const [displayParagraph, setDisplayParagraph] = useState('');
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);
    const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
    const [isTyping1, setIsTyping1] = useState(false);
    const [isTyping2, setIsTyping2] = useState(false);
    const [isTyping3, setIsTyping3] = useState(false);
    const [isTypingParagraph, setIsTypingParagraph] = useState(false);
    const [shakeAnimation, setShakeAnimation] = useState(false);
    const [imageAnimation, setImageAnimation] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const fullText1 = "Think Global";
    const fullText2 = "Execute";
    const fullText3 = "Korean";
    const fullParagraph = "K1 Research is Seoul's premier Web3 market intelligence and localization partner, providing comprehensive solutions for global projects entering Korea's dynamic blockchain ecosystem. Powered by Klein Labs.";

    useEffect(() => {
        // 创建 IntersectionObserver 来检测元素是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    // 设置动画已播放标志，防止重复播放
                    setHasAnimated(true);
                    
                    // 元素进入视口时开始动画
                    setIsTyping1(true);
                    typeText(fullText1, setDisplayText1, setCurrentIndex1, () => {
                        setIsTyping1(false);
                    });
                    
                    // 第一个文字完成后，开始第二个文字
                    setTimeout(() => {
                        setIsTyping2(true);
                        typeText(fullText2, setDisplayText2, setCurrentIndex2, () => {
                            setIsTyping2(false);
                        });
                    }, 500); // 500ms延迟
                    
                    // 第二个文字完成后，开始第三个文字
                    setTimeout(() => {
                        setIsTyping3(true);
                        typeText(fullText3, setDisplayText3, setCurrentIndex3, () => {
                            setIsTyping3(false);
                        });
                    }, 1000); // 1000ms延迟
                    
                    // 段落动画从0秒开始，调整速度与标题动画同时结束
                    setIsTypingParagraph(true);
                    // 计算段落动画速度：标题约1800ms，段落约150字符，需要约12ms/字符
                    const paragraphSpeed = Math.floor(1800 / fullParagraph.length);
                    typeText(fullParagraph, setDisplayParagraph, setCurrentParagraphIndex, () => {
                        setIsTypingParagraph(false);
                    }, paragraphSpeed);
                    
                    // 文字动画完成后触发抖动动画
                    setTimeout(() => {
                        setShakeAnimation(true);
                        setTimeout(() => {
                            setShakeAnimation(false);
                        }, 1000); // 1秒后停止抖动
                    }, 2000); // 2秒后开始抖动
                    
                    // 图片渐变动画，在抖动动画完成后开始
                    setTimeout(() => {
                        setImageAnimation(true);
                    }, 3000); // 3秒后开始图片动画
                }
            },
            { threshold: 0.3 } // 当30%的元素可见时触发
        );

        // 观察整个section元素
        const sectionElement = document.querySelector('.agk-hero');
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, [hasAnimated]);

    const typeText = (text, setDisplay, setIndex, onComplete, speed = 100) => {
        if (setIndex(0) >= text.length) {
            onComplete();
            return;
        }

        const interval = setInterval(() => {
            setIndex(prevIndex => {
                if (prevIndex >= text.length) {
                    clearInterval(interval);
                    onComplete();
                    return prevIndex;
                }
                setDisplay(text.slice(0, prevIndex + 1));
                return prevIndex + 1;
            });
        }, speed); // 可调节速度
    };

    return (
        <>
            <style jsx>{`
                @keyframes blink {
                    0%, 50% { border-color: transparent; }
                    51%, 100% { border-color: #6A47ED; }
                }
                
                @keyframes shake {
                    0% { transform: rotate(0deg); }
                    10% { transform: rotate(-5deg); }
                    20% { transform: rotate(5deg); }
                    30% { transform: rotate(-3deg); }
                    40% { transform: rotate(3deg); }
                    50% { transform: rotate(-2deg); }
                    60% { transform: rotate(2deg); }
                    70% { transform: rotate(-1deg); }
                    80% { transform: rotate(1deg); }
                    90% { transform: rotate(-0.5deg); }
                    100% { transform: rotate(0deg); }
                }
                
                @keyframes fadeIn {
                    0% { opacity: 0; transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1); }
                }
                
                /* 手机端响应式布局 */
                @media (max-width: 768px) {
                    .hero-content {
                        flex-direction: column !important;
                        gap: 30px !important;
                    }
                    
                    .hero-content h1 {
                        width: 100% !important;
                        text-align: center !important;
                        margin-bottom: 20px !important;
                    }
                    
                    .hero-content .text-box {
                        width: 100% !important;
                        text-align: center !important;
                    }
                    
                    .hero-content .text-box p {
                        width: 100% !important;
                        margin: 0 auto !important;
                        text-align: center !important;
                    }
                    
                    .hero-content .hero-button {
                        text-align: center !important;
                        margin-top: 20px !important;
                    }
                    
                    /* 服务列表在手机端的布局 */
                    .service-list {
                        margin-bottom: 30px !important;
                    }
                    
                    .service-list li {
                        margin-bottom: 15px !important;
                    }
                    
                    .agenko-iconic-box {
                        padding: 15px !important;
                    }
                    
                    /* 图片在手机端的布局 */
                    .hero-image {
                        margin-top: 20px !important;
                    }
                    
                    .hero-image img {
                        width: 100% !important;
                        height: auto !important;
                    }
                    
                    /* 确保动画在手机端正常工作 */
                    .text-anm {
                        width: 100% !important;
                        text-align: center !important;
                    }
                    
                    /* 调整按钮在手机端的样式 */
                    .theme-btn {
                        display: inline-block !important;
                        margin: 0 auto !important;
                    }
                    
                    /* 确保服务列表在手机端垂直排列 */
                    .service-list {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 15px !important;
                    }
                    
                    .service-list li {
                        width: 100% !important;
                    }
                }
                }
            `}</style>
            <section className="agk-hero">
        <div className="hero-wrapper-two">
            <div className="shape shape-one"><span><Image className="rotate360" src="/assets/images/digital-agency/hero/shape/shape1.png" alt="img" width={50} height={50}   /></span></div>
            {/* <div className="shape shape-two"><span><Image className="animate-float-bob-y " src="/assets/images/digital-agency/hero/shape/shape2.png" alt="img" width={40} height={80}   /></span></div> */}
            <div className="shape circle-one"><span></span></div>
            <div className="shape circle-two"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content" style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
                                                         <h1 style={{ width: '100%' }}>
                                 <span className="text-anm" style={{ 
                                     display: 'block',
                                     overflow: 'hidden',
                                     borderRight: isTyping1 ? '2px solid #6A47ED' : 'none',
                                     animation: isTyping1 ? 'blink 0.75s step-end infinite' : 'none',
                                     width: '100%',
                                     position: 'relative',
                                     minHeight: '1.2em'
                                 }}>
                                     <span style={{ visibility: displayText1 ? 'visible' : 'hidden' }}>
                                         {displayText1}
                                     </span>
                                     <span style={{ 
                                         position: 'absolute',
                                         left: 0,
                                         top: 0,
                                         visibility: 'hidden',
                                         width: '100%'
                                     }}>
                                         {fullText1}
                                     </span>
                                 </span>
                                 <span className="text-anm" style={{ 
                                     display: 'block',
                                     overflow: 'hidden',
                                     borderRight: isTyping2 ? '2px solid #6A47ED' : 'none',
                                     animation: isTyping2 ? 'blink 0.75s step-end infinite' : 'none',
                                     width: '100%',
                                     position: 'relative',
                                     minHeight: '1.2em'
                                 }}>
                                     <span style={{ visibility: displayText2 ? 'visible' : 'hidden' }}>
                                         {displayText2}
                                     </span>
                                     <span style={{ 
                                         position: 'absolute',
                                         left: 0,
                                         top: 0,
                                         visibility: 'hidden',
                                         width: '100%'
                                     }}>
                                         {fullText2}
                                     </span>
                                 </span>
                                 <span className="text-anm" style={{ 
                                     display: 'block',
                                     overflow: 'hidden',
                                     borderRight: isTyping3 ? '2px solid #6A47ED' : 'none',
                                     animation: isTyping3 ? 'blink 0.75s step-end infinite' : 'none',
                                     width: '100%',
                                     position: 'relative',
                                     minHeight: '1.2em'
                                 }}>
                                     <span style={{ visibility: displayText3 ? 'visible' : 'hidden' }}>
                                         {displayText3}
                                     </span>
                                     <span style={{ 
                                         position: 'absolute',
                                         left: 0,
                                         top: 0,
                                         visibility: 'hidden',
                                         width: '100%'
                                     }}>
                                         {fullText3}
                                     </span>
                                 </span>
                             </h1>
                                                         <div className="text-box pf_fadeup">
                                 <p style={{ 
                                     width: '100%', 
                                     margin: '0 auto', 
                                     padding: '0', 
                                     wordWrap: 'break-word', 
                                     overflowWrap: 'break-word',
                                     position: 'relative',
                                     minHeight: '4em',
                                     textAlign: 'left'
                                 }}>
                                     <span style={{ 
                                         visibility: displayParagraph ? 'visible' : 'hidden',
                                         borderRight: isTypingParagraph ? '2px solid #6A47ED' : 'none',
                                         animation: isTypingParagraph ? 'blink 0.75s step-end infinite' : 'none'
                                     }}>
                                         {displayParagraph}
                                     </span>
                                     <span style={{ 
                                         position: 'absolute',
                                         left: 0,
                                         top: 0,
                                         visibility: 'hidden',
                                         width: '100%',
                                         color:'#505050'

                                     }}>
                                         {fullParagraph}
                                     </span>
                                 </p>
                                <div className="hero-button">
                                    <Link href="https://x.com/K1_Research" className="theme-btn style-one">
                                        <span className="text-flip">
                                            <span className="text">LEARN MORE</span>
                                            <span className="text">LEARN MORE</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <ul className="service-list pf_fadeup">
                            <li>
                                
                                <Link href="/" className="agenko-iconic-box style-one" style={{
                                    animation: shakeAnimation ? 'shake 1s ease-in-out' : 'none',
                                    transformOrigin: 'center'
                                }}>
                                    <div className="icon">
                                    <i className="bi bi-browser-edge"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Media Delivery And Offline Advertising</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/" className="agenko-iconic-box style-one" style={{
                                    animation: shakeAnimation ? 'shake 1s ease-in-out' : 'none',
                                    transformOrigin: 'center'
                                }}>
                                    <div className="icon">
                                    <i className="bi bi-code-square"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">In-depth Research Report</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/" className="agenko-iconic-box style-one" style={{
                                    animation: shakeAnimation ? 'shake 1s ease-in-out' : 'none',
                                    transformOrigin: 'center'
                                }}>
                                    <div className="icon">
                                    <i className="bi bi-lightbulb"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Event Planning and OTC</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link href="/" className="agenko-iconic-box style-one" style={{
                                    animation: shakeAnimation ? 'shake 1s ease-in-out' : 'none',
                                    transformOrigin: 'center'
                                }}>
                                    <div className="icon">
                                    <i className="bi bi-megaphone"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Korean KOLs And Community Resources</h4>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        
                        <div className="hero-image style-one pf_fadeup" style={{
                            animation: imageAnimation ? 'fadeIn 1.5s ease-out' : 'none',
                            opacity: imageAnimation ? 1 : 0,
                            transform: imageAnimation ? 'scale(1)' : 'scale(0.9)'
                        }}>
                            <img src="/images/880_460.png" alt="Hero Image" />
                        </div>
                    </div>
                </div>
                         </div>
         </div>
     </section>
     </>
     );
 };

export default HeroBanner2;