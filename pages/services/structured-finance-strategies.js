/* eslint-disable react/no-unescaped-entities */
import PageContent from "../../components/pageContent";

export default function Structured() { 
    const heading = "Structured Finance Strategies"
    const paragraphs = [
        "Structured Capital Solutions has developed many different strategies, several of which are proprietary to SCS. SCS only markets ideas that have received robust advice from tax counsel and that have sound business purpose. We do not market “tax shelters” or “listed transactions”."
    ]
    
    return <>
      <PageContent heading={heading} paragraphs={paragraphs}/>
      <ul className="service-info">
                <li>Dividend Received Deduction (“DRD”) preference share capital raisings with potential Tier 1 and Tier 2 regulatory capital enhancement </li>
                <li>Cross-border intellectual property financing strategies </li>
                <li>Tax credit monetization strategies</li>
                <li>REMIC residual interest restructuring</li>
                <li>Capital loss utilization strategies and short-term to long-term strategies</li>
                <li>Leasing strategies</li>
                <li>Structuring advice to the hedge fund and private equity communities</li>
                <li>Other tax loss strategies that add value to or preserve deferred tax assets (“DTA’s")</li>
      </ul>
    </>

}