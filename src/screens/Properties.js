import React,{ useEffect, useState } from 'react'
import Popper from "../components/MakePopper"
import styles from "../styles/properties.module.css"
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios"
import Card from "../components/PropertiesCards"
import Modal from "../components/Modal"
import RadioButton from "../components/RadioButton"
import PricesButton from "../components/PricesButton"
import PropertyTypeButton from "../components/PropertyTypeButton"
import BedBath from "../components/BedBath"
import CircularProgress from "../components/ProgressCircle"
import Pagination from '@material-ui/lab/Pagination';
import queryString from 'query-string'

const Properties = ({history, location}) => {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [properties, setProperties] = useState("")
    const [numOfProperties, setNumOfProperties] = useState(null)
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState("sale")
    const [minVal, setMinVal] = useState(0)
    const [maxVal, setMaxVal] = useState(1E20)    
    const [bed, setBed] = useState("")
    const [bath, setBath] = useState("")
  
    const perPage = 6
    const lastPage = Math.ceil(numOfProperties / perPage)
    const start = page === 1 ? 0 
                    : (page < lastPage) ? (page - 1) * perPage
                    : (lastPage - 1) * perPage
     
    const params = queryString.parse(location.search)
    let {q} = params        
    if(q === undefined){
        q = ' '
    }

    const statusState = (status === 'all') ? 'status= '  : `status=${status}`
        
    useEffect(()=>{
        const getProperties = async() =>{
            const API_URL = "https://dansun-server.herokuapp.com"
            setLoading(true)
            
            
            const {data: numProperties} = await axios.get(
                `${API_URL}/properties/count?_q=${q}&${statusState}&_where[price_gte]=${minVal}&_where[price_lte]=${maxVal}`
              ) 
            setNumOfProperties(numProperties)
            
            const {data} = await axios.get(
                `${API_URL}/properties?_q=${q}&${statusState}&_start=${start}&_limit=${perPage}&_where[price_gte]=${minVal}&_where[price_lte]=${maxVal}`
              )
            setProperties(data)
            
            setLoading(false)
        }
        getProperties()
        
    }, [q, start, status, minVal, maxVal])
    
    console.log(properties)
            
    const handleChange = (e, value) => {
        console.log("value", value)
        history.push(`properties?page=${value}`)
        setPage(value);        
      };
    
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        history.replace('/properties')
    };
    const [buyPopper, setBuyPopper] = useState(false)
    const [pricePopper, setPricePopper] = useState(false)
    const [bathPopper, setBathPopper] = useState(false)
    const [propertyPopper, setPropertyPopper] = useState(false)

    const handleBuyPopper = () => {
        setBuyPopper(!buyPopper)
        setPricePopper(false)
        setBathPopper(false)
        setPropertyPopper(false)
    }

    const handlePricePopper = () => {
        setBuyPopper(false)
        setPricePopper(!pricePopper)
        setBathPopper(false)
        setPropertyPopper(false)
    }

    const handleBathPopper = () => {
        setBuyPopper(false)
        setPricePopper(false)
        setBathPopper(!bathPopper)
        setPropertyPopper(false)
    }

    const handlePropertyPopper = () => {
        setBuyPopper(false)
        setPricePopper(false)
        setBathPopper(false)
        setPropertyPopper(!propertyPopper)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
                
        history.push(`/properties?q=${input}`)        
      }
    
    return (
        <>
            <div className={styles.properties}>
                <form className={styles.properties__search} onSubmit={handleSubmit}>
                    <input
                        className={styles.properties__searchInput}
                        type="text"
                        required
                        onChange={e => setInput(e.target.value)}
                        placeholder="Enter your location, city or state" />
                    <SearchIcon />
                </form>
                <div className={styles.properties__poppers}>
                    <Popper
                        title="Buy or Rent?"
                        popperClick={handleBuyPopper}
                        buttonWidth="150px"
                        divWidth="150%"
                        popper={buyPopper}>
                        
                            <RadioButton status={status} setStatus={setStatus} />
                    
                    </Popper>
                    <Popper
                        title="Price"
                        popperClick={handlePricePopper}
                        buttonWidth="150px"
                        divWidth="250%"
                        popper={pricePopper}>
                        
                        <PricesButton 
                            minVal={minVal} 
                            setMinVal={setMinVal}
                            maxVal={maxVal}
                            setMaxVal={setMaxVal}                                 
                        />
                        
                    </Popper>
                    {/* <Popper
                        title="Beds and Baths"
                        popperClick={handleBathPopper}
                        buttonWidth="150px"
                        divWidth="230%"
                        popper={bathPopper}>
                        <BedBath setBed={setBed} setBath={setBath} />
                        
                    </Popper> */}
                    <Popper
                        title="Property type"
                        popperClick={handlePropertyPopper}
                        popper={propertyPopper}
                        buttonWidth="140px"
                        divWidth="150%"
                        className="popper__last"
                    >
                        <PropertyTypeButton />
                    </Popper>
                </div>

            </div>
            <div className={styles.properties__listings}>            
            
                {                    
                    (loading || properties === undefined) && (
                        <CircularProgress />
                    )
                }
                
                {
                    properties && 
                    properties.map(property => (
                        <Card
                            key={property._id}
                            click={handleOpen}
                            id={property._id}
                            mainImage={property.mainImage}
                            location={property.location}
                            status={property.status}
                            price={property.price}
                            categories={property.categories}
                            features={property.features}
                        />
                    ))
                }
                {                    
                   (typeof properties !== "string") 
                        && (
                            (properties.length === 0) && 
                            <div className={styles.properties__status}><h1>No properties found!</h1></div>
                        )
                }

            </div>
            <Modal
                open={open}
                handleClose={handleClose}
            />
            
            <div>
            
            { (perPage < numOfProperties)  && (
                
                <Pagination 
                    className={styles.pagination}
                    count={lastPage} 
                    page={page} 
                    variant="outlined"
                    onChange={handleChange}
                 />                 
            ) }                                                
        </div>            
        </>


    )
}


export default Properties

