import Navbar from "./navbar"
import Footer from "./footer"
import ContactForm from "./contactForm"
import Banner from "./banner"
import { useRouter } from 'next/router'

export default function Layout({ children }) { 

const router = useRouter()
const withContact = () => {
     return ['/', '/contact', '/services/environmental-finance', '/services/bankrupt-or-distressed-companies', '/services/intellectual-property-financing', '/services/structured-finance-strategies']
     .includes(router.pathname)
}

     return (
     <div>
         <div className="background"></div>
         <Navbar/>
         <div className="body-container">
            <Banner/>
            <div className="content-container">
               {children}
            </div>
            {withContact() && <ContactForm/>}
            <Footer/>
        </div>  
     </div>
     )
}