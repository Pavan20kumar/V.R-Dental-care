import './int.css';
import { useMediaQuery } from 'react-responsive'

const Part = ( ) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



    return(
        < div className="bg-container">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="heading">
                        <p>Welcome to V.R dental Clinics hospital</p>
                        <h4>We Are Best Dental Services</h4>
                        <span>Live freely without constraints, embracing balanced and purposeful actions. Stand firm with confidence. Adapt and thrive, navigating life's challenges with grace and resilience</span>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="image ms-sm-5">
                    {isDesktopOrLaptop &&  <img src="./carouse-image/dd.png" alt="fourth"></img> }

                        
                    {isTabletOrMobile && <img src="./carouse-image/dd.png" alt="fourth"></img> }
                        

                    </div>
                </div>


                



















            </div>
        </div>
        
        
        
        
        
        
        
        </div>
    )
}

export default Part;