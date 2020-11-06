import React, { useState, useEffect } from 'react'
import axios from "axios"
import { usePaystackPayment } from 'react-paystack';
import {Button } from "@material-ui/core"


const PayStackPayment = ({ amount, propertyId }) => {
    const API_URL = "https://dansun-server.herokuapp.com"
    
    const [key, setKey] = useState("")
    useEffect(() => {
        const getKey = async () => {
            const {data: clientKey} = await axios.get(
                `${API_URL}/routespaystacks?_id=5fa2d63a9772591feca0856c`
              )
            setKey(clientKey[0].name)
        }
        getKey()
        
    }, [key])
    console.log("amount", amount)

    const config = {
        reference: (new Date()).getTime(),
        email: "dansunproperties@gmail.com",
        amount: parseInt(amount) *100,
        publicKey: key,
    };

    const PayStackHooks = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <Button
                    type='button'

                    className='btn btn-block btn-success'
                    onClick={() => {
                        initializePayment(onSuccess, onClose)
                    }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png"
                        alt="Pay with Paystack" width="40%" />

                </Button>

            </div>
        );
    };


    const onSuccess = (reference) => {
        const paymentOutcome = {
            paymentMethod: 'PayStack',
            taxPrice: 0,
            totalPrice: amount,
            isPaid: true,
            paidAt: (new Date()).getTime(),
            paymentResult:{
                id: reference.trxref,
                status: reference.status,
            }            
        }

        const authConfig = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        axios
        .post(`${API_URL}/orders`, paymentOutcome, authConfig)
        .then(({data}) => console.log(data))
        .catch(err => console.log(err))
        
        axios.put(`${API_URL}/properties/${propertyId}`, {status: 'sold'}, authConfig)
    }

    const onClose = (ref) => console.log(ref)

    return (
        <div>
            <PayStackHooks />
        </div>
    )
}

export default PayStackPayment