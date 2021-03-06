import React, {useState} from "react"
import styles from '../styles/HomeScreen.module.css'
import Card from "../components/HomeCards"
import carditems from "../components/cardItems"
import SearchIcon from '@material-ui/icons/Search';
import Meta from "../components/Meta"
import Testimonial from "../components/TestimonialSlide"


const Home = ({history}) => {
  const [input, setInput] = useState("")
  
  const handleSubmit = () =>{
    history.push(`/properties?q=${input}`)
  }

  return (
    <div className={styles.home}>
      <Meta title="Dansun Properites Limited - The best real estate company in Nigeria" />
      <div className={styles.home__mainImage}>
        <div className={styles.home__text}>
          <h1>Think about Home</h1>
          <p>Let us guide you home!</p>
        </div>

        <form className={styles.home__search} onSubmit={handleSubmit}>
          <input
            className={styles.home__searchInput}
            type="text"
            required
            onChange={e => setInput(e.target.value)}
            placeholder="Search for properties" />
          <SearchIcon fontSize="large" />
        </form>
      </div>

      <div className={styles.home__listings}>
        <div className={styles.home__listingText}>
          <h2>A home should also mean peace of mind</h2>       
          <hr className={styles.line} />   
        </div>


        <div className={styles.home__listingsCards}>
          {
            carditems.map(({ title, description, image, btn_text, btnLink }, index) =>

              <Card
                key={index}
                title={title}
                
                image={image}
                btn_text={btn_text}
                btnLink ={btnLink}
              />

            )
          }
        </div>
      </div>
      
      <div className={styles.home__testimonial}>
                
                <div className={styles.testimonial__content}>
                    <h2>Client testimonials</h2>
                    <hr className={styles.line}  />   
                    <p>Our clients are proud of us. Here what they say about Dansun Properties Limited.</p>                    
                    
                    <Testimonial
                        perPage={
                            window.innerWidth >= parseInt('1440px') ? 3 : 
                            window.innerWidth >= parseInt('768px') ? 2 : 1} 
                        
                    />
        </div>
      </div>

      <div className={styles.home__solution}>
        <div className={styles.home__solutionText}>
          <h2> National Leader in Real Estate</h2>
          <hr className={styles.line}  />   
          <p>With over 5 years of experience in the real estate industry, we know what it means to deliver quality</p>          
        </div>
        <div className={styles.home_solutionActions}>
          <span>
            <i className="fas fa-users fa-4x"></i>
            <h4>1200+</h4>
            <p>Home Owners</p>
          </span>
          <span>
            <i className="fas fa-award fa-4x"></i>
            <h4>10</h4>
            <p>Years in Business</p>
          </span>
          <span>
            <i className="fas fa-home fa-4x"></i>
            <h4>8</h4>
            <p>Estate Built</p>
          </span>
        </div>

      </div>

    </div>
  )
}

export default Home