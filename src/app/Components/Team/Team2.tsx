import Image from 'next/image';
import React from 'react';

const Team2 = () => {

    const teamContent = [
        {img:'/images/team/1.webp', name:'Naback', title:"Co-Founder & Strategic Partnerships", content:"As one of Korea's most respected KOL ecosystem veterans and co-founder of the renowned Dokdo DAO Alpha community, Naback leads a team of 15+ community managers while maintaining advisor relationships with emerging influencers. With 7+ years of community management and KOL financing expertise, Naback has successfully executed Korean market campaigns for 30+ projects including degendog, dmail, revox, and edgenteach, building an unparalleled global network in the process.",instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/images/team/2.jpeg', name:'Bbangz',title:"Marketing Director & Campaign Strategist", content:"A Korean Web3 marketing specialist with 4+ years of intensive industry experience, Bbangz has spearheaded Korean market expansion for 15+ global Web3 projects including PARTICLE NETWORK, Farcana, Vana, and Catizen. Her expertise spans full-cycle promotion from project inception through post-TGE optimization, complemented by extensive Web2 marketing experience in sports sponsorships, exhibition management, and large-scale music festival collaborations including World DJ Festival partnerships.",instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/images/team/3.jpeg', name:'Maria',title:"Chief Technology Officer & Growth Strategist", content:"Seoul National University Computer Science Master's graduate and 8-year Web3 serial entrepreneur, Maria brings a unique technical-to-marketing perspective as a growth and brand strategy expert. Fluent in Chinese, English, and Korean with multiple international patents, Maria specializes in driving global project expansion while maintaining deep technical understanding that enables sophisticated industry analysis and culturally-intelligent localization strategies.",instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="agk-team">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50 pf_zoomIn">
                        <span className="sub-title">Our Team</span>
                        <h2>Success Stories From K1 Research</h2>
                    </div>
                </div>
            </div>
            <div className="row">
            {teamContent.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="agenko-team-item style-two mb-40 pf_fadeup">
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
    );
};

export default Team2;