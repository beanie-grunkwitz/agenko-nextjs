"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Blog2 = () => {

    const blogContent = [
        {img:'/assets/images/digital-agency/blog/blog1.jpg', time: "April 21st, 2025", link: "https://mirror.xyz/kleinlabs.eth/z42bRcIRj_wPV_XXqNlCLNh1X8MqCRoLuuRJX6WuplU", title:'2024 CEX Listing Effect Report',authorImg:'/images/logo.png'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg',time: "June 20th, 2025",link: "https://mirror.xyz/kleinlabs.eth/_MGTVfTgp1-JqJaqsa5SrGdjVXq44YQJH2vb5F3p2a4", title:'South Korea Crypto Insight: A Market Fueled by the Kimchi Premium?',authorImg:'/images/logo.png'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg',time: "June 3rd, 2025",link: "https://mirror.xyz/kleinlabs.eth/f-M8QqM2bxDndUjvEgafBqdmbUn1zwKHBdJURt1EH5c", title:'Strong faith after: why SUI still has long-term growth potential',authorImg:'/images/logo.png'},
      ]; 

      useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="agk-blogs pt-130 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    
                    <div className="section-title mb-50 pf_fadeup">
                        <span className="sub-title">Latest Blog</span>
                        <h2>Our Blogs</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    
                    <div className="agk-button float-lg-end mb-60 pf_fadeup">
                        <a href="https://mirror.xyz/kleinlabs.eth" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">View All Blogs</span>
                                <span className="text">View All Blogs</span>
                            </span>
                        </a>
                    </div>    
                </div>
            </div>
            <div className="row">
            {blogContent.map((item, i) => (
                <div key={i} className="col-lg-12">
                    <div className="agenko-blog-item style-one mb-40 pf_fadeup" style={{ padding: '5px' }}>
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


            </div>
        </div>
    </section>
    );
};

export default Blog2;