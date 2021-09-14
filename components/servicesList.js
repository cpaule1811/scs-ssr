import { servicesList } from "../data/services"
import Card from "./card"

export default function Services() { 
    return ( 
        <div className="services-container">
             {servicesList.map(service => {
                 return <Card key={service.name} {...service}/>
             })}
        </div>
    )
}