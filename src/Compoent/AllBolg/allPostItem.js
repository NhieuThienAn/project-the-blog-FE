import React, { useContext } from 'react';
import "./allPostItem.scss";
import { DarkModeContext } from '../DarkValue/DarkModeContext';

import img1 from "../../assest/All/Image.png";
import img2 from "../../assest/All/Image2.png";
import img3 from "../../assest/All/Image3.png";
import img4 from "../../assest/All/Image4.png";
import img5 from "../../assest/All/Image5.png";
import img6 from "../../assest/All/Image6.png";

const postItems = [
  {
    img: img1,
    date: "Sunday, 1 Jan 2023",
    heading: "Bill Walsh leadership lessons",
    detail: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    types: ["Leadership", "Management", "Presentation"]
  },
  {
    img: img2,
    date: "Sunday, 1 Jan 2023",
    heading: "PM mental models",
    detail: "Mental models are simple expressions of complex processes or relationships.",
    types: ["Product", "Management", "Presentation"]
  },
  {
    img: img3,
    date: "Sunday, 1 Jan 2023",
    heading: "What is Wireframing?",
    detail: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    types: ["Design", "Research", "Presentation"]
  },
  {
    img: img4,
    date: "Sunday, 1 Jan 2023",
    heading: "How collaboration makes us better designers",
    detail: "Collaboration can make our teams stronger, and our individual designs better.",
    types: ["Leadership", "Management", "Presentation"]
  },
  {
    img: img5,
    date: "Sunday, 1 Jan 2023",
    heading: "Our top 10 Javascript frameworks to use",
    detail: "JavaScript frameworks make development easy with extensive features and functionalities.",
    types: ["Software Development", "Management", "Presentation"]
  },
  {
    img: img6,
    date: "Sunday, 1 Jan 2023",
    heading: "Podcast: Creating a better CX Community",
    detail: "Starting a community doesn't need to be complicated, but how do we make it better?",
    types: ["Community", "Customer Experience", "Podcast"]
  }
];

function renderHeading(heading, darkMode) {
  const svgStroke = darkMode ? "white" : "#1A1A1A";

  return (
    <p className="postAllItem__heading">
      {heading}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke={svgStroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </p>
  );
}

function AllBlog(props) {
  const { darkMode } = useContext(DarkModeContext);
  const pageStyle = props.page === 'detailBlog' ? 'Chas__Detail' : 'Chas';

  return (
    <>
      <h2 className={props.page === "detailBlog" ? "none" : ""}>{props.title}</h2>
      <div className={pageStyle}>
        {postItems.map((item, index) => (
          <div className="postAllItem" key={index}>
            <img className="postAllItem__picture" src={item.img} alt="a" />
            <p className="postAllItem__author">{item.date}</p>
            {renderHeading(item.heading, darkMode)}
            <p className="postAllItem__txtdetail">{item.detail}</p>
            {item.types.map((type, index) => (
              <span className="postAllItem__type" key={index}>{type}</span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBlog;