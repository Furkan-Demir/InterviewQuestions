import React from 'react'
import logo from '../Img/logo.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { FiSearch } from 'react-icons/fi';
import { RiUser3Line } from 'react-icons/ri';
import { BiBasket } from 'react-icons/bi';
import styles from '../Styles/navbar.module.css'
function MyNavbar() {
    return (
    <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#">
            <img src={logo} alt='Wigs Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            
            <div style={{width:'50%'}} className='mx-auto'>
                <Form style={{display:'flex'}}>
                    <FiSearch style={{alignSelf:'center'}} size={20}/>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 shadow-none" style={{border:0}} />
                </Form>
            </div>
            <Nav style={{marginLeft:'auto',marginRight:0}}>
                <Nav.Link href="#home"><strong className={styles.navbaritem}>products</strong></Nav.Link>
                <Nav.Link href="#link"><strong className={styles.navbaritem}>story</strong></Nav.Link>
                <Nav.Link href="#link"><strong className={styles.navbaritem}>manufacturing</strong></Nav.Link>
                <Nav.Link href="#link"><strong className={styles.navbaritem}>packaging</strong></Nav.Link>
                <Nav.Link href="#link"><strong><BiBasket size={'1.3em'}/></strong></Nav.Link>
                <Nav.Link href="#link"><RiUser3Line size={'1.3em'}/></Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
    )
}
export default MyNavbar;

//import React from 'react'
// import style from '../Styles/navbar.module.css';
// import logo from '../Img/logo.png'
// import Form from 'react-bootstrap/Form'
// function Navbar() {
//     return (
//         <header>
//             <ul className={style.navbarUL} style={{backgroundColor:'blue'}}>
                
//                 <li className={style.liSection}><img src={logo} style={{margin:5}}/></li>
                
//                 <li className={style.liSection} style={{marginTop:5}}>
//                     <Form.Control type="text" placeholder="Search" />
//                 </li>
              
               
//             <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',backgroundColor:'red'}}>
//                 <li className={style.liSection2}><a>products</a></li>
//                 <li className={style.liSection2}><a>story</a></li>
//                 <li className={style.liSection2}><a>manufacturing</a></li>
//                 <li className={style.liSection2}><a>packaging</a></li>

//             </div>

//             </ul>
//         </header>
//     )
// }
// export default Navbar;