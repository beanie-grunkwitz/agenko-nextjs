"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Team2 = () => {
    const [titleAnimation, setTitleAnimation] = useState(false);
    const [teamAnimations, setTeamAnimations] = useState([false, false, false]);

    const teamContent = [
        {img:'/images/team/1.webp', name:'Naback', title:"Co-Founder & Strategic Partnerships", content:"As one of Korea's most respected KOL ecosystem veterans and co-founder of the renowned Dokdo DAO Alpha community, Naback leads a team of 15+ community managers while maintaining advisor relationships with emerging influencers. With 7+ years of community management and KOL financing expertise, Naback has successfully executed Korean market campaigns for 30+ projects including degendog, dmail, revox, and edgenteach, building an unparalleled global network in the process.",instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/images/team/2.jpeg', name:'Bbangz',title:"Marketing Director & Campaign Strategist", content:"A Korean Web3 marketing specialist with 4+ years of intensive industry experience, Bbangz has spearheaded Korean market expansion for 15+ global Web3 projects including PARTICLE NETWORK, Farcana, Vana, and Catizen. Her expertise spans full-cycle promotion from project inception through post-TGE optimization, complemented by extensive Web2 marketing experience in sports sponsorships, exhibition management, and large-scale music festival collaborations including World DJ Festival partnerships.",instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/images/team/3.jpeg', name:'Maria',title:"Chief Technology Officer & Growth Strategist", content:"Seoul National University Computer Science Master's graduate and 8-year Web3 serial entrepreneur, Maria brings a unique technical-to-marketing perspective as a growth and brand strategy expert. Fluent in Chinese, English, and Korean with multiple international patents, Maria specializes in driving global project expansion while maintaining deep technical understanding that enables sophisticated industry analysis and culturally-intelligent localization strategies.",instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    useEffect(() => {
        // 创建 IntersectionObserver 来检测元素是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !titleAnimation) {
                    // 元素进入视口时开始动画序列
                    setTimeout(() => setTitleAnimation(true), 100);
                    // 团队成员卡片动画 - 依次显示
                    setTimeout(() => setTeamAnimations([true, false, false]), 300);
                    setTimeout(() => setTeamAnimations([true, true, false]), 500);
                    setTimeout(() => setTeamAnimations([true, true, true]), 700);
                }
            },
            { threshold: 0.3 } // 当30%的元素可见时触发
        );

        // 观察整个section元素
        const sectionElement = document.querySelector('.agk-team');
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
                
                @keyframes teamCardAppear {
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
            <section className="agk-team">
            <div className="container-fluid">
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
                            }}>Our Team</span>
                            <h2 style={{
                                animation: titleAnimation ? 'slideInRight 0.8s ease-out' : 'none',
                                opacity: titleAnimation ? 1 : 0,
                                transform: titleAnimation ? 'translateX(0)' : 'translateX(50px)'
                            }}>Success Stories From K1 Research</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                {teamContent.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-team-item style-two mb-40 pf_fadeup" style={{
                            animation: teamAnimations[i] ? 'teamCardAppear 0.8s ease-out' : 'none',
                            opacity: teamAnimations[i] ? 1 : 0,
                            transform: teamAnimations[i] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
                        }}>
                            <div className="member-image nft-card">
                            <Image src={item.img} alt="img" width={100} height={100} className="nft-image rounded-full" />
                            </div>
                            <div className="member-info">
                                <h4 className="title">{item.name}</h4>
                                <h5 className="title-subtitle my-2">{item.title}</h5>
                                <p className="position smaller-content">{item.content}</p>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
        </>
    );
};

export default Team2;