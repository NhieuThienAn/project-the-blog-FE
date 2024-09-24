import React, { useContext } from 'react';
import './recent.scss';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkValue/DarkModeContext';
import renderPosts from '../Post/postPage';

const posts = [
  {
    image: require("../../assest/Recent/Image.png"),
    date: "Sunday, 1 Jan 2023",
    title: "UX review presentations",
    details: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["Design", "Research", "Presentation"]
  },
  {
    image: require("../../assest/Recent/Image2.png"),
    date: "Sunday, 1 Jan 2023",
    title: "Migrating to Linear 101",
    details: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    tags: ["Design", "Research"]
  },
  {
    image: require("../../assest/Recent/Image3.png"),
    date: "Sunday, 1 Jan 2023",
    title: "Building your API Stack",
    details: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...",
    tags: ["Design", "Research"]
  },
  {
    image: require("../../assest/Recent/Image4.png"),
    date: "Sunday, 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    details: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    tags: ["Design", "Interface"]
  }
];

function renderLink(title, darkMode) {
  const headingStyle = darkMode ? 'postItem__heading-dark' : 'postItem__heading-light';

  return (
    <Link to="/detailBlog" className={headingStyle}>
      {title}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke={darkMode ? "white" : "#1A1A1A"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function RecentPosts(props) {
  const { darkMode } = useContext(DarkModeContext);
  const postItemStyle = props.page === 'detailBlog' ? 'detailBlog' : 'postItem';

  return (
    <>
      <h2>Recent Blog</h2>
      {renderPosts(posts, darkMode, props.page, postItemStyle, renderLink, null, props.title)}
    </>
  );
}

export default RecentPosts;