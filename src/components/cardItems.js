import buyHome from "../images/buying-a-home-1520951943.png"
import sellHome from "../images/sell-rent-property-img.png"
import inspectHome from "../images/inspect_property.png"

const cardItems = [
    {
        title: "Buy a home",
        image: buyHome,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugit!",
        btn_text: "Buy Now",
        btnLink: '/properties'
    },
    {
        title: "Sell a home",
        image: sellHome,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugit!",
        btn_text: "Sell Now",
        btnLink: '/sell'
    },
    {
        title: "Inspect a home",
        image: inspectHome,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugit!",
        btn_text: "Inspect Now",
        btnLink: '/inspect'
    }
]

export default cardItems