import React ,{useContext}from 'react';
import "./Home.scss";
import Title from '../../Compoent/title/title';
import PostItem from '../../Compoent/RecentBlog/recent';
import AllBlog from '../../Compoent/AllBolg/allPostItem';
import { DarkModeContext } from '../../Compoent/DarkValue/DarkModeContext';
import ListPage from '../../Compoent/listPage/listPage';
function Home() {
  const { darkMode } = useContext(DarkModeContext);
  let namePage = "home"
  return (
    <>
      <div className={darkMode ? "home-dark dark-mode" : "home-light"}>
        <Title namePage={namePage} />
        <PostItem />
        <AllBlog />
        <ListPage/>
      </div>
    </>
  );
}

export default Home;