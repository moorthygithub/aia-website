import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/img/course/course-2-1.jpg';
import avatarImg from '../../assets/img/course/ed-avata-1-1.png';
import shapeImg from '../../assets/img/course/ed-item-shape.png';
import RightArrowThin from '../SVG/RightArrowThin';


const SingleSixCourse = (props) => {
    const {
        itemClass,
        courseImage,
        thumbText,
        rating,
        price,
        title,
        lessonCount,
        duration,
        studentCount,
        authorAvatar,
        authorName,
        btnText,
      } = props;
    
      return (
        <div className={itemClass ? itemClass : 'it-course-item ed-course-style-2'}>
          {/* <div className="it-course-thumb mb-25 p-relative">
            <Link to="/course-details">
              <img src={courseImage ? courseImage : Image} alt="" />
            </Link>
            <div className="it-course-thumb-text">
              <span>{thumbText ? thumbText : 'Digital Marketing'}</span>
            </div>
          </div> */}
          <div className="it-course-content p-relative">
            <div className="it-course-rating mb-10 d-flex align-items-center justify-content-between">
              <div>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-regular fa-star"></i>
                <span>{rating ? rating : '4.5k'}</span>
              </div>
              <div className="it-course-price-box">
                <span>{price ? price : '$50.00'}</span>
              </div>
            </div>
            <h4 style={{
          fontSize: '17px',
        
        }} className="it-course-title pb-15">
              <Link to="/course-details">
                {title ? title : 'It Statistics Data Science And Business Analysis'}
              </Link>
            </h4>
            <div  style={{
          height:"13rem"
        }} className="it-course-info pb-15 mb-30 d-flex justify-content-between">
            <span className='px-2'>
            <ul >
              <li>70+ Hours of Recorded Video Lectures</li>
              <li>Gleim Practice Questions</li>
              <li>Gleim Mock Test</li>
              <li>Experienced & CIA Qualified Faculty</li>
             </ul>
            </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {/* <div className="it-course-author">
                <img src={authorAvatar ? authorAvatar : avatarImg} alt="" />
                <span>{authorName ? authorName : 'Samantha'}</span>
              </div> */}
              <div className="ed-course-price-box">
                <Link className="ed-course-btn" to="/course-details">
                  {btnText ? btnText : 'Enroll'}
                  <span>
                    <RightArrowThin />
                  </span>
                </Link>
              </div>
            </div>
            <div className="ed-course-shape">
              <img src={shapeImg} alt="" />
            </div>
          </div>
        </div>
      );
}

export default SingleSixCourse