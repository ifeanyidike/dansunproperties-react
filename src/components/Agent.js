import React from "react"
import styles from "../styles/agent.module.css"

const Agent = ({name, phoneNo, email, location, image, alt}) => {
    const avatarUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QBhMREhAQEhMQExASDxEPDREQEg4RFRMXFhUTFxUYHSghGBolHRMVITEhJSkrLi4uGB8zODYsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QANBABAAEBBAgFAgUFAQAAAAAAAAECAwQRIQUSMUFRYXGRIoGxwdEzoSQ0QoLhUpKy8PEy/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqIAAAAAAAAAAAAAAAAAAAAAAAAAAAISAAAAAAAAAAOdrbU0xnPltnsDoM+10hP6Yw5zn9lWu2qq21T3y7A2cTGGEA3hhRMxsnB0ovFcbKp85x9QbIoWN/z8UecfC9E4wCQAAAAAAAAAQkAAAAAAACRQ0hb56kfu+AReb7nhR/d8KUzmAAhIAAAAC3YX7Vsop1ccN+sqAL0aRzzo7VfwuWVpFVGMbJYqzcLbVtcJ2VfadwNQAAAAAAAAQkAAAAAAEVThTjwzYlVWNUzO/NrXycLtV0w75MgAAAAAAAAAAAAGzYV61jE8Yz673RU0bV+H6TPytgAAAAAAAAAAAAAAraQ/Kz5erLamkPy09Y9WWAAAAAAAAAAAAC/oufDVHT3XmdoyfHV0hogAAAAAAAAAAAAAAr6Qj8LPl6sltW9GtYzHGMuu5jAAAAAAAAAAAAAuaM+pPSPVoqOi6fBVPGYjt/1eAAAAAABCQAAAAAAB4tbSKacZnCGTeZibeZp2Tn32ruk/pR19mcAAAAAAAAAAAmiiZqwjbKEA2rCz1bKI4bec73RXuNUzdox3YwsAAAAAAACEgAAAAAAq6Rpxu3SYn292Y27SjWs5jjEwxJjMAAAAAAAAAAAE0041xHGYjuDVuVOF2p5593dERhGHBIAAAAAAAAAAAAAADIvtGreZ55x57fu1wGEOl5pwvFUc57TnHq5ghIAAAAAAAO1yoxvMcs58nKiMa4jjMQ3AAAAAAAAAQkAAAAAAAAAUdJWWUVcMp6blBt2lEVUTE74wYtVOFUxwyBAAAAAAAALWj7LG11t1Pq03G6Werd455z1l2AAAAAAAAAAAAAAAAAAAZV/pwvM84if97NVl6Rn8T0iPcFYAAAAEAkiMx6s/qR1j1BtgAAAAAAAAAAAAAAAAAAAMa9VY3irrh2y9mjeb1FNOEZ1cOHVlAAAAAAAETnjwAG5TOMY8c0s653uIp1atm6eHKWhE5AkAAAAAAAAAAAAAAVba+007PFPLZ3Uba8VV7Zy4RlAL9tfaadninls7qVre66t+EcIy+7gAhIAAAAAAAAAPdlbVU7JmOW7s8AL1npD+qnzp+JWrK8UVbJ8pyljgN0Y9lea6dk5cJzhcsb/AEz/AOvDz2wC4IicYy+yQAAAAAUb3fP00+dXDoDveL1TRznh88GbbXiquc5y4Rsc94AAACASAAAAAAAAAAAAAAAD3Y21VE5T5bpX7C/UzlV4Z+38M0BuwMi73mqieMcPhq0VRNMTGydgPQAPFr9Oek+jESAhIAidiQBAkBCQBG9IAAAISAAAAAAAhIAhIANW4flKf3f5SkB2AB//2Q=="
    return (
        <div className={styles.agent } >
        
            <img
                src={image === undefined ? avatarUrl : image }
                alt={alt === undefined ? "Avatar -- No Image Provided" : alt } />

            <div className={styles.agent__details} >
                <label> <i className="fas fa-user"></i> {name}</label>
                <span>
                    <a href="tel:08148886186"><i className="fas fa-phone-square-alt"></i> {phoneNo}</a>
                </span>
                <span>
                    <a href="mailto:ifeanyidike87@gmail.com">
                        <i className="fas fa-envelope"></i> {email}
                </a>
                </span>
                <p> <i className="fas fa-map-marker-alt"></i> {location}</p>
            </div>
        </div>
    )
}

export default Agent
