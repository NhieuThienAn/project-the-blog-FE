import React ,{useContext}from 'react';
import Title from '../../Compoent/title/title';
import img1 from "../../assest/ListItem/Image.png";
import img2 from "../../assest/ListItem/Image2.png";
import img3 from "../../assest/ListItem/Image3.png";
import img4 from "../../assest/ListItem/Image4.png";
import img5 from "../../assest/ListItem/Image5.png";
import "./project.scss"
import { DarkModeContext } from '../../Compoent/DarkValue/DarkModeContext';
function Project() {
  const { darkMode } = useContext(DarkModeContext);
  let namePage = "Project";
  return (
    <>
      <div className={darkMode ? 'BigPlan-dark dark-mode' : 'BigPlan-light'} >
        <Title namePage={namePage} />
          <h3>List Project</h3>
          <div className='ListCha'>
            <div className='Plan'>
              <img className='Plan__picture ' src={img1} alt="a" />
              <p className='Plan__heading'>User Experience Design Dashboard Hotel Management
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p className='Plan__txtdetail'>n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.</p>
              <span className='Plan__type purple'>Design</span>
              <span className='Plan__type blue'>Research  </span>
              <span className='Plan__type pink'>Presentation</span>
            </div>

            <div className='Plan'>
              <img className='Plan__picture ' src={img2} alt="a" />
              <p className='Plan__heading'>Bring of User Experience Design to Policy Making, How to Impact Society
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p className='Plan__txtdetail'>User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec</p>
              <span className='Plan__type blue'>Research</span>
              <span className='Plan__type pink'>Presentation</span>
            </div>
            
            <div className='Plan'>
              <img className='Plan__picture ' src={img3} alt="a" />
              <p className='Plan__heading'>UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p className='Plan__txtdetail'>There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems</p>
              <span className='Plan__type purple'>Design</span>
              <span className='Plan__type blue'>Research  </span>
              <span className='Plan__type pink'>Presentation</span>
              <span className='Plan__type blue'>Collaboration</span>
            </div>

            <div className='Plan'>
              <img className='Plan__picture ' src={img4} alt="a" />
              <p className='Plan__heading'>Icon Package of Slin Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p className='Plan__txtdetail'>An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design.</p>
              <span className='Plan__type purple'>Design</span>
              <span className='Plan__type blue'>Branding  </span>
              <span className='Plan__type pink'>Identity</span>
            </div>

            <div className='Plan'>
              <img className='Plan__picture ' src={img5} alt="a" />
              <p className='Plan__heading'>UX review presentations
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p className='Plan__txtdetail'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              <span className='Plan__type purple'>Design</span>
              <span className='Plan__type blue'>Research  </span>
              <span className='Plan__type pink'>Presentation</span>
            </div>  
          </div>
      </div>
    </>
  );
}

export default Project;