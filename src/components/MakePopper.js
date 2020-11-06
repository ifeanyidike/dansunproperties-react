import React from "react"
import { Button } from "@material-ui/core"
import styles from "../styles/properties.module.css"

const MakePopper = ({ title, children, popperClick, popper, buttonWidth, divWidth }) => {

    const handlePopperClick = (e) => {

        popperClick()
    }

    return (
        <div className={styles.makepopper}>
            <Button style={{width: buttonWidth}} onClick={handlePopperClick} >
                {title}
            </Button>
            <div className={styles.popper} style={{ 
                display: popper ? "block" : "none", width: divWidth }}>
                {children}
            </div>
        </div>
    )
}

export default MakePopper
