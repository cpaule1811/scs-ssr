import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactForm () { 
    return ( 
        <section className="form-section">
             <div className="form-container">
           <h4 className="">Get In Touch</h4>
             <form className="form">
               
               <div className="form-first-row">
                <div className="form-outline">
                  <span id="name-required" className="required" hidden>Invalid name*</span>
                  <input type="text" id="name" className="form-control" required/>
                  <label className="form-label" htmlFor="name">Name</label>
              </div>
                <div className="form-outline">
                  <span id="mobile-required" className="required" hidden>Invalid mobile*</span>
                  <input type="text" id="number" className="form-control" required/>
                  <label className="form-label" htmlFor="number">Mobile</label>
                </div>
            </div>
            
            <div className="form-outline">
              <span id="email-required" className="required" hidden>Invalid email*</span>
              <input type="text" id="email" className="form-control" required />
              <label className="form-label" htmlFor="email">Email address</label>
            </div>
               <select id="services" className="form-control" required> 
                 <option value="none" selected disabled hidden>
                   Select an service
                 </option>
                 <option value="Structured Finance Strategies">Structured Finance Strategies</option>
                 <option value="Bankruptcy & Distress Advisory">Bankruptcy & Distress Advisory</option>
                 <option value="Intellectual Property Financing">Intellectual Property Financing</option>
            </select>  

            <div className="form-outline">
              <textarea id="message" className="form-control" required></textarea>
              <label htmlFor="message" className="form-label-textarea">Message</label>
             </div>

              
               <button type="button" id="send" className="contact-send-button button-style">
                 Send
               </button>

              
               <div className="center">
                 <p>or reach out on:</p>
                 <div className="contact-social-wrapper">
                 <Link href="https://google.com" passHref><div  className="link-button button-style">
                 <FontAwesomeIcon icon={['fab', "google"]}/>
                 </div></Link>
                 <Link href="https://www.linkedin.com/in/paul-edwards-7b474715/" passHref>
                     <div className="link-button button-style">
                         <FontAwesomeIcon icon={['fab', "linkedin-in"]}/>
                     </div>
                  </Link>
                </div>
               </div>
             </form>
         </div>
        </section>
    )
}