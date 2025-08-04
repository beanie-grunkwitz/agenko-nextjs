import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import About1 from '../Components/About/About1';
import Services2 from '../Components/Services/Services2';
import Project2 from '../Components/Project/Project2';
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre';
import Process2 from '../Components/Process/Process2';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Faq1 from '../Components/Faq/Faq1';
import Team2 from '../Components/Team/Team2';
import Brand2 from '../Components/Brand/Brand2';
import Blog2 from '../Components/Blog/Blog2';

const page = () => {
    return (
        <div>
            <div id="home">
                <HeroBanner2></HeroBanner2>
            </div>
            <div id="about">
                <About1></About1>
            </div>
            <div id="service">
                <Services2></Services2>
            </div>
            <div id="client">
                <Blog2></Blog2>   
            </div>
            <div id="team">
                <Team2></Team2>
            </div>
            <WhoWeAre></WhoWeAre>
            <Process2></Process2>
            <Testimonial2></Testimonial2>
            <Faq1></Faq1>

            <Brand2></Brand2>  
            <div id="contact"></div>
        </div>
    );
};

export default page;