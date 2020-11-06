import React from "react"
import Meta from "../components/Meta"
import styles from "../styles/agent.module.css"
import Agent from "../components/Agent"

const FindAnAgent = () => {
    return (
        <div className={styles.agents}>
            <h2>Dansun Agents</h2>
            <Agent />
            <Agent />
            <Agent />
            <Agent />
            <Agent />
        </div>

    )
}

export default FindAnAgent