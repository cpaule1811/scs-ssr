import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/SCS-logo-text.png'
import logoMini from '../img/logo-no-title.png'
import { useState } from 'react'
import NavMobile from './navMobile'
import { useRouter } from 'next/router'

export default function Navbar() { 
    const [menuStatus, setMenuStatus] = useState(false)
    const router = useRouter()

    const isActive = (target) => {
      if (router.pathname.startsWith(target)) 
      return "active"
  
    }

    return ( 
    <div className="Nav"> 
      <div className="nav-wrapper">  
        <div className="logo-container">
        {console.log(router.pathname, isActive('/'))}
          <Link href="/" passHref><div className="large-logo"><Image src={logo} alt=""/></div></Link>
          <Link href="index" passHref><div className="mini-logo"><Image id="mini-logo" href="index" src={logoMini} alt=""/></div></Link>
          
        </div>
        <div className="tabs">
            <ul>
                <li className={`right-border ${isActive('/')}`}><Link href="/">Home </Link></li>
                <li className={`right-border ${isActive('about')}`}><Link href="/about">What We Do </Link></li>
                <li className="right-border dropdown-tab"><Link href="/services">Services </Link>
                <div className="dropdown-bracket"></div>
                <div className="dropdown-content">
                  <Link href="/services/structured-finance-strategies">Structured Finance Strategies</Link>
                  <Link href="/services/environmental-finance">Environmental Finance</Link>
                  <Link href="/services/bankrupt-or-distressed-companies">Bankruptcy & Distress Advisory</Link>
                  <Link href="/services/intellectual-property-financing">Intellectual Property Financing</Link>
                  <Link href="/services/disclaimer-and-notices">Disclaimer & Notices</Link>
                </div>
              </li>
                <li className="right-border dropdown-tab"><Link href="/senior-partners">Senior Partners</Link>
                  <div className="dropdown-bracket"></div>
                  <div className="dropdown-content">
                    <Link href="/senior-partners/paul-edwards">Paul Edwards</Link>
                    <Link href="/senior-partners/adam-parr">Adam Parr</Link>
                    <Link href="/senior-partners/marc-fuhrman">Marc Fuhrman</Link>
                  </div>
                </li>
                <li className={`right-border ${isActive()}`}><Link href="/contact">Contact US</Link></li>
            </ul>
        </div>
        <div onClick={() => setMenuStatus(!menuStatus)} className={`bars-container ${menuStatus && "open"}`}>
              <span></span>
              <span></span>
              <span></span>
        </div>
        
    </div>
    {menuStatus && <NavMobile setMenuStatus={setMenuStatus} isActive={isActive}/>}
    </div>
    )
     
}
