import PageContent from "../../components/pageContent"

export default function Intellectual() { 
    const heading = "Intellectual Property Financing"
    const paragraphs = [
        "Structured Capital Solutions has developed a specialization in intellectual property finance and is also closely affiliated with Global Film Finance (“GFF”). GFF is an independent investment and financial advisory boutique focused on providing tailored financing and investment solutions to the motion picture and media industry.",
        "Global Film Finance specializes in the development and implementation of innovative film financing and investment structures that facilitate high net worth individuals, institutions and companies investing in film production and distribution with real commercial upside whilst mitigating downside risk through the use of structural support elements and tax incentives.",
        "Global Film Finance has successfully structured, arranged and invested over US$600 million in films including King Arthur, The Brothers Grimm, Proof, Derailed, Basic Instinct 2, Breaking & Entering, Where The Wild Things Are and Nine on behalf of its investment syndicate"
    ]
    
    return <PageContent heading={heading} paragraphs={paragraphs}/>
}