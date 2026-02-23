import React from 'react'

const Cards = () => {
  return (
    <div className='cards'>
        <div className="top">
            <img src="" alt="" />
            <button>Save</button>
        </div>
        <div className="center">
            <div className="companyName">
                <h3></h3>
                <span className='datePosted'></span>
            </div>
            <div className="position">
                <h2></h2>
                <div className="jobType">
                    <div className="tag1"></div>
                    <div className="tag2"></div>
                </div>
            </div>
            <div className="bottom">
                <div className="payment">
                    <h4></h4>
                    <p></p>
                </div>
                <button className="apply">Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards