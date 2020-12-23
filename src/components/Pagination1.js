import React from "react";
import styles from "../styles/Pagination.module.css"
import {useHistory} from "react-router-dom"

const Pagination = ({ lastPage, setPage}) =>{
  const history = useHistory()
    const pageNumbers = []    
    
    for(let i = 1; i < lastPage + 1; i++){
      pageNumbers.push(i)
    }    
  
    const handlePaginate = (numPage) => {      
      history.push(`properties?page=${numPage}`)
      setPage(numPage);        
    };
    const goPrevious = () =>{
      
    }
    
    return (
      <div>
        <button 
          onClick={goPrevious}
          className={styles.paginationButton}>
          &laquo;
        </button>
        {pageNumbers.map(number => 
          <button onClick={()=> handlePaginate(number)} 
          className={styles.paginationButton} key={number}>
            {number}
          </button>)}
      </div>
    );
  
}
export default Pagination;