import style from '../assets/css/Services.module.css'
import services from '../utils/servec'
function Services() {
    return (
        <section className={style.services}>
            <h2 className={style.titel}>Our Services</h2>
            <div className={style.cardContainer}>
                
                {services.map((service) => (
                
                <div key={service.id} className={style.card}>
                <h3 className={style.cardTitle}>{service.name}</h3>  
                <p className={style.cardDesc}>{service.description}</p>
            </div>
            ))}
            </div>
        </section>
    )
}
export default Services