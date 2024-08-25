import './services.css';


const Services = () => {
    return(
        <a name="services">
        <section class="services">
    <div class="container">
        <h5 className='text-primary'>Our Services</h5>
        <h2>What We Provide</h2>
        <div class="service-cards">
            <div class="service-card">
                <img src="./our-services/root.png" alt="General Dentistry"></img>
                <h3>Root Canal</h3>
                <p>A root canal is a dental procedure that saves a tooth by removing dead or dying nerve tissue and bacteria from .</p>
            </div>
            <div class="service-card">
                <img src="./our-services/cavity.jpg" alt="Cosmetic Dentistry"></img>
                <h3>cavity inspection</h3>
                <p>Inspection of the mucosa of the oral cavity includes observing the insides of the lips and the buccal mucos the tongue.</p>
            </div>
            <div class="service-card">
                <img src="./our-services/orthodontic.jpg" alt="Orthodontics"></img>
                <h3>Orthodontics</h3>
                <p>Orthodontics is the branch of dentistry that focuses on diagnosing and treating “bad bites”</p>
            </div>
            <div class="service-card">
                <img src="./our-services/Alignment Teeth.jpg" alt="Pediatric Dentistry"></img>
                <h3>Alignment Teeth</h3>
                <p>Our pediatric dentists are specially trained to care for children's dental needs, making their visits comfortable and enjoyable.</p>
            </div>
            <div class="service-card">
                <img src="./our-services/Live Advisor.jpg" alt="Pediatric Dentistry"></img>
                <h3>Live Advisor</h3>
                <p>Patients and Dentists can connect using DentalChat IOS or DentalChat Android App. Live dentist questions answered by live dentists Online Help ..</p>
            </div>

            <div class="service-card">
                <img src="./our-services/Cosmetic Teeth.jpg" alt="Pediatric Dentistry"></img>
                <h3>Cosmetic Teeth</h3>
                <p>Cosmetic dentistry focuses on improving the appearance and aesthetics of your smile. Common cosmetic dental procedures include teeth whitening, dental bonding </p>
            </div>



        </div>
    </div>
</section>
</a>

    )
}
export default Services;