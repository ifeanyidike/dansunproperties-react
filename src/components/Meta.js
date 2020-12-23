import React from "react"
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (<Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
    </Helmet>
        
        
    )
}

Meta.defaultProps = {
    title: 'Welcome To Dansun Properties',
    description: 'Dansun properties Limited is the best real estate company in Nigeria. We deal on all kinds of properites from houses and flats to lands. Our properties are located in Lagos, Abuja, and Port Harcourt.',
    keywords: 'properties, houses, homes, lands, estates',
}

export default Meta

