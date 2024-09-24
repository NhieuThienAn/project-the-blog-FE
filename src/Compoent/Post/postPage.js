import React from "react";

export default function renderPosts(items, darkMode, page, itemStyle, renderLink, renderHeading, pageTitle) {
  return (
    <>
      <h2 className={page === 'detailBlog' ? 'detailBlog' : ''}>
        {pageTitle}
      </h2>
      <div className={page === 'detailBlog' ? 'chaDetailBlog' : 'Cha'}>
        {items.map((item, index) => (
          <div className={itemStyle} key={index}>
            <img className="postItem__picture" src={item.image || item.img} alt="a" />
            <p className="postItem__author">{item.date}</p>
            {page === 'detailBlog'
              ? renderLink(item.title, darkMode)
              : (renderHeading ? renderHeading(item.heading, darkMode) : <p>{item.heading}</p>)}
            <p className="postItem__txtdetail">{item.details || item.detail}</p>
            <div className="postItem__type">
              {item.tags || item.types.map((tag, index) => (
                <span key={index} className={index % 2 === 0 ? 'purple' : 'pink'}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}