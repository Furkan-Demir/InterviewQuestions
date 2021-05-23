import React from 'react'
import Button from 'react-bootstrap/Button'
import styles from '../Styles/vcs.module.css'
import { AiOutlineHeart } from 'react-icons/ai';
function VerticalCard({props}) {
    return (
        <div className={styles.vc}>
            <img src={props.img} className='img-fluid' alt="resim"/>
            <Button variant="light" className={`btn-sm rounded-circle ${styles.vc_btn}`}>
                <AiOutlineHeart/>
            </Button>
        </div>
        
    )
}
export default VerticalCard;