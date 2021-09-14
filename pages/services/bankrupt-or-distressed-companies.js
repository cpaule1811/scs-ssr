import PageContent from "../../components/pageContent"

export default function Bankruptcy() { 
    const heading = "Bankruptcy & Distress advisory"
    const paragraphs = [
        "Structured Capital Solutions advises bankrupt or distressed companies on efficient strategies for re-organization and disposal of assets and tactical opportunities for raising of capital, including advising on the potential preservation of tax attributes.",
        "Among others, SCS has been a Court appointed advisor for:"
    ]
    
    return <>
      <PageContent heading={heading} paragraphs={paragraphs}>
      <ul className="service-info">
                <li>Dividend Received Deduction (“DRD”) preference share capital raisings with potential Tier 1 and Tier 2 regulatory capital enhancement </li>
                <li>Cross-border intellectual property financing strategies </li>
                <li>Tax credit monetization strategies</li>
                <li>REMIC residual interest restructuring</li>
                <li>Capital loss utilization strategies and short-term to long-term strategies</li>
                <li>Leasing strategies</li>
                <li>Structuring advice to the hedge fund and private equity communities</li>
                {/* eslint-disable-next-line react/no-unescaped-entities*/}
                <li>Other tax loss strategies that add value to or preserve deferred tax assets (“DTA’s")</li>
      </ul>
      <p>Companies currently in or contemplating Chapter 7 or Chapter 11 can retain SCS in conjunction with traditional insolvency practitioners to assist in maximizing the realization of value from complex asset and corporate structures.</p>
      </PageContent>
    </>

}