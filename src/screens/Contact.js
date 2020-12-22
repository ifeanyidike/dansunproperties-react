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
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CircularProgress from "../components/ProgressCircle"

export default function ContactForm() {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [message, setMessage] = useState("")
    const [displayMessage, setDisplayMessage] = useState("")
    const [contactState, setContactState] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const API_URL = "https://dansun-server.herokuapp.com"  
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setLoading(true)
        try {
            
            const contactBody = {
                firstName: fName,
                lastName: lName,
                email,
                phoneNo,
                message
            }
            
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            
            const res = await axios.post(`${API_URL}/contacts`, contactBody, config)
            
            if (res.status === 200){
                setDisplayMessage('Message Successfully Delivered')
                setContactState(true)
                setFName("")
                setLName("")
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
     <div className={styles.topimage}>    
        <div>
            <h2>Fill the contact form to get started</h2>    
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
                Contact Us
                </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={fName}
                        onChange={e => setFName(e.target.value)}
                        required
                        label="First name"
                        fullWidth
                        autoComplete="First name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={lName}
                        onChange={e => setLName(e.target.value)}
                        required
                        label="Last name"
                        fullWidth
                        autoComplete="Last name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PermIdentityIcon />
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