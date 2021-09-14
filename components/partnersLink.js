import Link from 'next/link'

export default function PartnersLink ({name, role, desc, link}) {
    return ( 
        <div className="partner-link-container">
           <h1 className="page-title">{name}, <span id="position">{role}</span></h1>
            <p>{desc}</p>
            <Link href={link} passHref><div id="send" className="button-style partners-button center" href="index.html">More on {name.substring(0,name.indexOf(" "))}</div></Link>
        </div>
    )
}