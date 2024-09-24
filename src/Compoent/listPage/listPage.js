import React from 'react';
import "./listPage.scss"

function ListPage() {
    return (
        <>
        <div className='pagination'>
            <p className='pagination__move'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow-left">
                        <path id="Icon" d="M15.8334 9.99984H4.16675M4.16675 9.99984L10.0001 15.8332M4.16675 9.99984L10.0001 4.1665" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
                Previous</p>
            <span className='pagination__list1'>1</span>
            <span className='pagination__list'>2</span>
            <span className='pagination__list'>3</span>
            <span className='pagination__list'>...</span>
            <span className='pagination__list'>8</span>
            <span className='pagination__list'>9</span>
            <span className='pagination__list'>10</span>
            <p className='pagination__move'>Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow-right">
                        <path id="Icon" d="M4.16675 9.99984H15.8334M15.8334 9.99984L10.0001 4.1665M15.8334 9.99984L10.0001 15.8332" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </p>
        </div>
        </>
    );
}

export default ListPage;