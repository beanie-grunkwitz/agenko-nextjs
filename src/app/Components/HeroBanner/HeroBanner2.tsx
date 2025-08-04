"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const HeroBanner2 = () => {
    const [displayText1, setDisplayText1] = useState('');
    const [displayText2, setDisplayText2] = useState('');
    const [displayParagraph, setDisplayParagraph] = useState('');
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
    const [isTyping1, setIsTyping1] = useState(false);
    const [isTyping2, setIsTyping2] = useState(false);
    const [isTypingParagraph, setIsTypingParagraph] = useState(false);

    const fullText1 = "Think Global Execute";
    const fullText2 = "Korean";
    const fullParagraph = "K1 Research is Seoul's premier Web3 market intelligence and localization partner, providing comprehensive solutions for global projects entering Korea's dynamic blockchain ecosystem. Powered by Klein Labs.";

    useEffect(() => {
        // 同时开始所有动画
        if (!isTyping1) {
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
            
            // 段落动画从0秒开始，调整速度与标题动画同时结束
            setIsTypingParagraph(true);
            // 计算段落动画速度：标题约1800ms，段落约150字符，需要约12ms/字符
            const paragraphSpeed = Math.floor(1800 / fullParagraph.length);
            typeText(fullParagraph, setDisplayParagraph, setCurrentParagraphIndex, () => {
                setIsTypingParagraph(false);
            }, paragraphSpeed);
        }
    }, []);

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
                                     minHeight: '2.3em'
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
                             </h1>
                                                         <div className="text-box pf_fadeup">
                                 <p style={{ 
                                     width: '120%', 
                                     marginLeft: 'auto', 
                                     marginRight: '0', 
                                     paddingRight: '0', 
                                     wordWrap: 'break-word', 
                                     overflowWrap: 'break-word',
                                     position: 'relative',
                                     minHeight: '4em'
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
                                         width: '100%'
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
                    <div className="col-lg-4">
                        <ul className="service-list pf_fadeup">
                            <li>
                                
                                <Link href="/" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-browser-edge"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Media Delivery And Offline Advertising</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-code-square"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">In-depth Research Report</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-lightbulb"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Event Planning and OTC</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link href="/" className="agenko-iconic-box style-one">
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
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
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