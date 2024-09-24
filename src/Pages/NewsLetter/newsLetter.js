import React,{useContext} from 'react';
import EmailInput from '../../Compoent/Email/email';
import AllBlog from '../../Compoent/AllBolg/allPostItem';
import { DarkModeContext } from '../../Compoent/DarkValue/DarkModeContext';
function Newsletter() {
  const { darkMode } = useContext(DarkModeContext);
  const pageNewLetter = "NewLetter";
  return (
    <>
      <div className={darkMode ? "home-dark dark-mode" : "home-light"}>
        <EmailInput/>
        <AllBlog pageNewLetter={pageNewLetter}/>
      </div>
    </>
  );
}

export default Newsletter;