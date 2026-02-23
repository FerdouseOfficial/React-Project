import React from 'react'

const Cards = (props) => {
  return (
    <div className='cards'>
        <div className="top">
            <img src={props.brandLogo} alt={props.brandLogo} />
            <button>Save
                <i className="fa-regular fa-bookmark"></i>
            </button>
        </div>
        <div className="center">
            <div className="companyName">
                <h3>{props.companyName}</h3> 
                <span className='datePosted'>{props.datePosted}</span>
            </div>
            <div className="position">
                <h2>{props.jobPosition}</h2>
                <div className="jobType">
                    <button className="tag1">{props.tag1}</button>
                    <button className="tag2">{props.tag2}</button>
                </div>
            </div>
            <div className="bottom">
                <div className="payment">
                    <h4 className='pay'>{props.payments}</h4>
                    <p className='location'>{props.location}</p>
                </div>
                <button className="apply">Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards