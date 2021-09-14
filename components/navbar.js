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

    const isActive = (route, target) => { 
          if (route.startsWith(target)) return "active"
    }

    return ( 
    <div className="Nav"> 
      <div className="nav-wrapper">  
        <div className="logo-container">
          <Link href="/" passHref><div className="large-logo"><Image src={logo} alt=""/></div></Link>
          <Link href="index" passHref><div className="mini-logo"><Image id="mini-logo" href="index" src={logoMini} alt=""/></div></Link>
        </div>
        <div className="tabs">
            <ul>
                <li className="right-border"><Link href="/" passHref><div className={router.pathname === '/' && "active"}>Home</div></Link></li>
                <li className="right-border"><Link href="/about" passHref><div className={isActive(router.pathname, "/about")}>What We Do</div></Link></li>
                <li className="right-border dropdown-tab"><Link href="/services" passHref><div className={isActive(router.pathname, "/services")}>Services</div></Link>
                <div className="dropdown-bracket"/>
                <div className="dropdown-content">
                  <Link href="/services/structured-finance-strategies">Structured Finance Strategies</Link>
                  <Link href="/services/environmental-finance">Environmental Finance</Link>
                  <Link href="/services/bankrupt-or-distressed-companies">Bankruptcy & Distress Advisory</Link>
                  <Link href="/services/intellectual-property-financing">Intellectual Property Financing</Link>
                  <Link href="/services/disclaimer-and-notices">Disclaimer & Notices</Link>
                </div>
              </li>
                <li className="right-border dropdown-tab"><Link href="/senior-partners" passHref><div className={isActive(router.pathname, '/senior-partners')}>Senior Partners</div></Link>
                  <div className="dropdown-bracket"></div>
                  <div className="dropdown-content">
                    <Link href="/senior-partners/paul-edwards">Paul Edwards</Link>
                    <Link href="/senior-partners/adam-parr">Adam Parr</Link>
                    <Link href="/senior-partners/marc-fuhrman">Marc Fuhrman</Link>
                  </div>
                </li>
                <li>
                      <Link href="/contact" passHref>
                          <div className={isActive(router.pathname, "/contact")}>Contact Us</div>
                      </Link>
                  </li>
            </ul>
        </div>
        <div onClick={() => setMenuStatus(!menuStatus)} className={`bars-container ${menuStatus && "open"}`}>
              <span></span>
              <span></span>
              <span></span>
        </div>
        
    </div>
    {menuStatus && <NavMobile setMenuStatus={setMenuStatus} isActive={isActive} menuStatus={menuStatus}/>}
    </div>
    )
     
}
