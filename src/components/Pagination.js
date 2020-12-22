import React, {useState} from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css"; // import css

const PaginationControl = ({totalPages, currentPage, changeCurrentPage}) =>{
    
  
    return (
      <div>
        <Pagination
          theme="bootstrap"
          currentPage={currentPage}
          totalPages={totalPages}
          changeCurrentPage={changeCurrentPage}
        />
        <h2>current Page:{currentPage}</h2>
      </div>
    );
  
}
export default PaginationControl;