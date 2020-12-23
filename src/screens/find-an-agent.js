import React, {useState, useEffect} from "react"
import Meta from "../components/Meta"
import styles from "../styles/agent.module.css"
import Agent from "../components/Agent"
import axios from "axios"
import Loader from "../components/ProgressCircle"

const FindAnAgent = () => {
    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(false)
    const API_URL = "https://dansun-server.herokuapp.com"
    
    useEffect(()=>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const getAgents = async() =>{
            setLoading(true)
            const {data} = await axios.get(`${API_URL}/agents`, config)
            setAgents(data)
            setLoading(false)
        }
        getAgents()
        
    }, [])
    console.log(agents)
    
    return (
        <div>
            <Meta title="Find Dansun Properties Agents" />
            <div className={styles.topagents}>    
                <div>
                    <h2>Dansun Agents</h2>
                    <hr />
                </div>
            </div>            
            {
                loading ? <Loader />
                :
                <div className={styles.agents}>
                     {agents && agents.map(agent => (
                        <Agent 
                            key={agent._id} 
                            name={agent.name} 
                            phoneNo={agent.phoneNo}
                            email={agent.email}
                            location={agent.location}  
                            image = {agent.image && agent.image.url}  
                            alt = {agent.image && agent.image.alternativeText}                         
                        />
                    ))}                              
                </div>
            }
        </div>

    )
}

export default FindAnAgent