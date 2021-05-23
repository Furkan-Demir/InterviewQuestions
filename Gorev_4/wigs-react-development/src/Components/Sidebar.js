import React, { Component } from 'react'
import SidebarStore from '../Store/SidebarStore'
import styles from '../Styles/sidebaritem.module.css'
import { BrowserView, MobileView } from 'react-device-detect';
import Button from 'react-bootstrap/Button'
import { HiOutlineMenu } from 'react-icons/hi';
class Sidebar extends Component {
    state = {
        mobileModal : false
    }
    modalShow = () => {
        this.setState({
            mobileModal : !this.state.mobileModal
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
            <BrowserView>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                
                <div style={{display:'flex',marginLeft:'25%'}}>
                    <h3><b>Explore</b></h3>  
                </div>  
                    
                
                <div style={{display:'flex',flexDirection:'column'}}>
                    {SidebarStore.map((item, key) => {
                    return(  <div className={`mt-5 ${styles.sidebarh}`} style={{display:'flex',marginLeft:'25%'}} key={key}>
                                    <img src={item.logo} height={30} alt="sidebar"/>
                                    <div className={styles.sidebaritem} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                        <h6 className="my-auto">{item.text}</h6>   
                                    </div>
                                </div>)
                    })}
                </div>
            </div>
            </BrowserView>
            <MobileView>
            <Button variant="primary" className='rounded-circle' style={{position:'fixed',bottom:'1vh',right:'1vh',zIndex:2}} onClick={this.modalShow}>
                <HiOutlineMenu className='mx-auto'/>
            </Button>    
            {
                this.state.mobileModal ?
                <div className={styles.sidebarscreen}>

<div style={{display:'flex',flexDirection:'column'}}>
                    {SidebarStore.map((item, key) => {
                    return(  <div className={`mt-5 ${styles.sidebarh}`} style={{display:'flex',marginLeft:'25%'}} key={key}>
                                    <img src={item.logo} height={30} alt="sidebar"/>
                                    <div className={styles.sidebaritem} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                        <h6 className="my-auto">{item.text}</h6>   
                                    </div>
                                </div>)
                    })}
                </div>

                </div>
                :
                <></>
            }
            </MobileView>
            </div>
        )
    }
}
export default Sidebar;