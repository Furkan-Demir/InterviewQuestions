import React from 'react'
import styles from '../Styles/hcs.module.css'
function HorizontalCard({props}) {
    return (
            <div className={styles.hc}>
                <img src={props.img} className='img-fluid' alt="resim"/>
                {
                    props.centerText ?
                    <div>
                        <h5 className={styles.hc_text} style={{color:props.textColor}}><b>{props.text}</b></h5>
                        <small className={styles.hc_text2}><b>{props.text2}</b></small>
                    </div>
                    :
                    <h4 className={styles.hc_text_center} style={{color:props.textColor}}><b>{props.text}</b></h4>
                }
            </div>
        
    )
}
export default HorizontalCard;