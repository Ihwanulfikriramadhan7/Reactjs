
import styles from '../assets/css/About.module.css';
function About() {
 return (
  <div className={styles.container}>
  <section className={styles.about}>
   <div className={styles.about__left}>
   <h2 className={styles.title}>About Us</h2>
   <h3 className={styles.title__left}>Slogan : Thrust, Care and Balance</h3>
   <p className={styles.desc}>
    We are a leading company in providing top-notch services to help you achieve
    your goals.
   </p>
   <button className={styles.about_button}>Details</button>
   </div>
   <div className={styles.about__right}>
    <img className={styles.about__image} 
    src="https://picsum.photos/200/300" 
    alt="" />
   </div>
  </section>
  </div>
 );
}
export default About;
