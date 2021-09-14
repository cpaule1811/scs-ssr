export default function PageContent ({ heading, paragraphs, children }) { 
    return ( 
        <div className="content">
            <h1 className="page-title">{heading}</h1>
            {paragraphs.map((para, i) => { return <p key={i}>{para}</p> } 
            )}
            {children}
        </div>
    )
}

PageContent.defaultProps = { 
    paragraphs: []
}