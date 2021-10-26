import React from 'react'
import './PageTemplate.scss'
import images from '../../assets/images/images';

const PageTemplate = ({children,...props}) => {
    return (
        <div className="page-template">
            {children}
        </div>
    )
}

PageTemplate.Header = function pageHeader({children,...props}){
    return  <div className="page-header" style={{backgroundImage:`url(${images.FOOTER_BG})`}}>
                <h2>
                    {children}
                </h2>
            </div>
}

PageTemplate.Body = function pageBody({children,...props}) {
    return(
        <div className="page-content">
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default PageTemplate
