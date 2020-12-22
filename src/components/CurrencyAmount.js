import React from 'react'
import CurrencyFormat from 'react-currency-format'

const CurrencyAmount = ({item}) => {
    const amount = 
    <CurrencyFormat
        value={item}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₦'}
        renderText={value => <h2>{value}</h2>}
    />
    return (
        {amount}
    )
}

export default CurrencyAmount
