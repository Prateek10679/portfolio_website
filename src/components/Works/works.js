import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import Portfolio7 from '../../assets/portfolio-7.png';
import Portfolio8 from '../../assets/portfolio-8.png';


const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">The app design process begins with a deep understanding of the target audience. This involves researching the needs, preferences, and pain points of potential users. User personas can be created to represent different user types.</span>

        <div className="worksImgs">
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio2} alt="" className="worksImg" />
          <img src={Portfolio3} alt="" className="worksImg" />
          <img src={Portfolio4} alt="" className="worksImg" />
          <img src={Portfolio5} alt="" className="worksImg" />
          <img src={Portfolio6} alt="" className="worksImg" />
          <img src={Portfolio7} alt="" className="worksImg" />
          <img src={Portfolio8} alt="" className="worksImg" />
        </div>

        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works
