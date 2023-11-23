import React from 'react'
import './Works.css'
import Portfolio3 from '../../assets/portfolio3.jpg'
import Portfolio4 from '../../assets/portfolio4.jpg'
import Portfolio5 from '../../assets/portfolio5.jpg'

const Works = () => {
  return (
    <section id="works">
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am exited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={Portfolio5} alt="" className='worksImg'/>
            <img src={Portfolio3} alt="" className='worksImg'/>
            <img src={Portfolio4} ali="" className='worksImg'/>
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works