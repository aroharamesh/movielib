import React, { Component } from 'react';

// _ is the common convention, 
// lodash is the optimised version of a popular JS library called underscore
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
    
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    console.log(currentPage);
    // [1, 2, 3].map()
    // [1... pagesCount].map()
    // const pagesCount = itemsCount / pageSize;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    // console.log(pagesCount);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1); // this returns an array
    return <nav>
        <ul className="pagination">
            {pages.map(page => (
                //  <li key={page} className="page-item">
                <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                     <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
                </li>
            ))}
           
        </ul>
    </nav>;
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired

}
 




export default Pagination;