import React from "react"
import Meta from "../components/Meta"
import styles from "../styles/agent.module.css"
import Agent from "../components/Agent"

const FindAnAgent = () => {
    return (
        <div>
            <div className={styles.topagents}>    
                <div>
                    <h2>Dansun Agents</h2>
                    <hr />
                </div>
            </div>            
            <div className={styles.agents}>
                <Agent />
                <Agent />
                <Agent />
                <Agent />
                <Agent />
            </div>
        </div>

    )
}

export default FindAnAgent