import React from 'react';
import "./title.scss"

function Title(props) {
    let titlePageName = "";
    let styleTitle ="styleTitle__font";
    if(props.namePage === "home")
    {
        titlePageName = "THE BLOG";
        styleTitle = "styleTitle__font "
    }
    if(props.namePage === "About")
    {
        titlePageName = "John Doe";
        styleTitle = "styleTitle__font About"
    }
    if(props.namePage === "Project"){
        titlePageName = "Project";
        styleTitle = "styleTitle__font Project"
    }
    return (
        <>
        <div className='styleTitle'>
            <p className={styleTitle}>{titlePageName}</p>
        </div>
        </>
    );
}

export default Title;
