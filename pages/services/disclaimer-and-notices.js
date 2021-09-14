import PageContent from '../../components/pageContent'

export default function Disclaimer() { 
    const heading = "Disclaimer and Notices"
    
    return <>
      <PageContent heading={heading}>
         <p><span style={{fontWeight: "bold"}}>As required by Circular 230:</span> Any tax statements contained herein were not intended or written to be used, and cannot be used for the purpose of avoiding U.S., federal, state, or local tax penalties. This website and its enclosures (if any) do not constitute an offer of any type. Please be advised that Structured Capital Solutions, LLC does not hold itself out to be, an advisor as to legal, tax, accounting or regulatory matters in any jurisdiction.</p>
         <p>Although every effort has been made to ensure that the contents of this website and its enclosures are correct, no warranty, express or implied, is made to the accuracy or completeness of the information and views expressed herein. You should consult with your own advisors concerning legal, accounting, tax and regulatory matters and shall be responsible for making an independent investigation and appraisal of the risks, benefits and suitability of transactions contemplated, and Structured Capital Solutions, LLC shall have no responsibility or liability with respect thereto.</p>
         <p>Notwithstanding anything contained herein, the Recipient and its representatives may disclose to any and all persons, without limitation of any kind, the tax treatment and tax structure of any proposed transactions and all materials of any kind, including opinions, memoranda, or other tax analyses, that have been provided by either SCS or its representatives relating to such tax treatment and tax structure.</p>
      </PageContent>
    </>

}