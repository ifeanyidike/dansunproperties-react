import React, {useState, useEffect} from 'react';
import axios from "axios"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styles from "../styles/contact.module.css"
import Meta from "../components/Meta"
import Button from "@material-ui/core/Button"
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import CircularProgress from "../components/ProgressCircle"
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useLocation } from "react-router-dom"

export default function Inspect() {    
  
    const location = useLocation()
    const splittedPath = location.pathname.split(/\//)        
    const id = splittedPath[splittedPath.length - 1]
    
  
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [message, setMessage] = useState("")
    const [displayMessage, setDisplayMessage] = useState("")
    const [contactState, setContactState] = useState(false)
    const [loading, setLoading] = useState(false)
    const [property, setProperty] = useState([])
    
    const API_URL = "https://dansun-server.herokuapp.com"  
    useEffect(()=>{
      const getProperty = async()=>{
        const {data} = await axios.get(`${API_URL}/properties/${id}`)
        setProperty(data)
      }
      
      getProperty()
    },[id])
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setLoading(true)
        try {
            
            const inspectBody = {
                name,
                email,
                phoneNo,
                message,
                property
            }
            
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            
            const res = await axios.post(`${API_URL}/inspects`, inspectBody, config)
            
            if (res.status === 200){
                setDisplayMessage('Message Successfully Delivered')
                setContactState(true)
                setName("")
                setEmail("")
                setPhoneNo("")
                setMessage("")
                
            }
            
        } catch (error) {
            console.error(error)
            setDisplayMessage(error.message)
            setContactState(true)
        }
        setLoading(false)
        
    }        
   
return (    
 
 <div>
    <Meta title="Inspect Dansun Properties" />
     <div className={styles.topinspect}>    
        
        <div>
            <h2>Fill the form to inspect a property</h2>    
            <hr/>
        </div>
        
    </div>
    
    
    <div className={styles.contact}>    
        
    { loading ? <CircularProgress /> :
        (
        <>
        <div 
            style={{display: contactState? 'block' : 'none'}}
            className={styles.contactMessage}>
            <h2>{displayMessage}</h2>
            
            <Button onClick={() =>setContactState(false)}>Go Back</Button>
        </div>
        
        <form 
            style={{display: contactState? 'none' : 'block'}}
            className={styles.contactform} 
            onSubmit={handleSubmit}>
            <Typography variant="h4" gutterBottom>
                Inspect a Property
                </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        label="Full name"
                        fullWidth
                        autoComplete="Full name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        label="Email address"
                        type="email"
                        fullWidth
                        autoComplete="Email address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DraftsIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>                                
                
                <Grid item xs={12}>
                    <TextField
                        value={phoneNo}
                        onChange={e => setPhoneNo(e.target.value)}
                        label="Phone number"
                        fullWidth
                        type="tel"
                        autoComplete="Phone number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        value={property && property.categories &&
                            property.categories[0].name}                       
                        disabled
                        label="Property Type"                        
                        fullWidth
                        autoComplete="Property Type"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HomeWorkIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        value={property && property.location}                        
                        disabled
                        label="Property Location"                        
                        fullWidth
                        autoComplete="Property address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <RoomIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        value={property && `₦${property.price}`}
                        disabled
                        label="Property cost"                        
                        fullWidth
                        autoComplete="Property cost"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalOfferIcon />
                                </InputAdornment>
                            ),
                        }}
                    ></TextField>
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required
                        label="Drop your message here"
                        fullWidth
                        multiline
                        rows={8}
                        autoComplete="message"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MessageIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Button 
                type="submit"
                className={styles.submit} 
                variant="outlined" 
                color='secondary'>Submit</Button>
                
            </Grid>
            
        </form>        
        </>
        )
        
    }
                
 </div>        
 </div>
 
);
}