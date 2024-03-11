import React from 'react'

export default function Card({ children, headTitle, styles, cardStyle }) {
    return (
        <div style={styles}>
            <div className="card" style={cardStyle}>
                {
                    headTitle && (
                        <div className="des-card">
                            <div className="des-img-con">
                                <img src="/images/M_LOGO_WHITE.fw.png" width='30px' height='24px' alt="Inage" />
                            </div>
                            <div className='des-card-text'>{headTitle}</div>
                        </div>
                    )
                }
                <div>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}
