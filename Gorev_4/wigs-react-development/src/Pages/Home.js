/* eslint-disable */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import HorizontalCard from '../Components/HorizontalCard';
import MyNavbar from '../Components/MyNavbar';
import Sidebar from '../Components/Sidebar';
import VerticalCard from '../Components/VerticalCard';

import {horizontal1, horizontal2, horizontal3, horizontal4} from '../Store/HorizontalStore'
import {vertical1, vertical2, vertical3, vertical4} from '../Store/VerticalStore'



function Home() {
    return (
        <div>
            <MyNavbar/>
            <Container fluid style={{marginTop:25}}>
                <Row>
                    <Col md={2}>
                        <Sidebar/>
                    </Col>
                    <Col>
                        <Row style={{display:'flex',justifyContent:'center'}}>
                                <Col md={12} lg={5}>
                                    <div style={{display:'flex',flexDirection:'column',padding:'1vh'}}>
                                        <HorizontalCard props={horizontal1}/>
                                        <HorizontalCard props={horizontal2}/>
                                    </div>
                                    <div style={{display:'flex',marginTop:'1vh',marginTop:'4vh'}}>
                                        <VerticalCard props={vertical3}/>
                                        <VerticalCard props={vertical4}/>
                                    </div>
                                </Col>
                                <Col md={12} lg={5}>
                                    <div style={{display:'flex'}}>
                                        <VerticalCard props={vertical1}/>
                                        <VerticalCard props={vertical2}/>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'column',padding:'1vh',marginTop:'3vh'}}>
                                        <HorizontalCard props={horizontal4}/>
                                        <HorizontalCard props={horizontal3}/>
                                    </div>
                            </Col>  
                        </Row>                    
                    </Col>
               
                </Row>
            </Container>
        </div>
    )
}
export default Home;