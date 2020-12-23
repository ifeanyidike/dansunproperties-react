import React from 'react'
import ReactPaginate from 'react-paginate';
import {useHistory} from "react-router-dom"
import "../styles/Pagination.css"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Paginate = ({count, setPage}) => {
    const history = useHistory()
    
    const handlePaginate = (e) => {        
        console.log("value", e.selected)
        history.push(`properties?page=${e.selected + 1}`)
        setPage(e.selected + 1);        
    };
    return (
        <ReactPaginate
            previousLabel={<ChevronLeftIcon />}
            nextLabel={<ChevronRightIcon />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={count}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePaginate}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}                
        />
        
    )
}

export default Paginate
