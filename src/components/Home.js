import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../assets/images/img1.png'

export default function Home() {
    return (
        <Container className='container-fluid' style={{ height: '100vh' }}>
            <Row className='align-items-center justify-content-center h-100'>
            <Col xs={12} md={6} className='d-flex justify-content-center mt-2 mb-4 mb-md-0'>
                <Image src={img1}  rounded fluid style={{ maxWidth: '70%', height: 'auto', objectFit: 'cover' }} />
            </Col>
             <Col xs={12} md={6} className='d-flex flex-column justify-content-center text-center text-md-start'>
             <Row>
             <Container className='text-start'>
             <p className='fs-1 fw-bolder'>Web Developer</p>
             <p className='lh-base'>Hi there! I’m Janiel Apollo Bodiongan, a web developer with nearly five years experience in using a low-code 
             development platforms like OutSystems. I specializing in building both front and back end solutions for robust web and mobile applications. Additionally, I have expanded my knowledge thru professional work or self-study in technologies like JavaScript, PostgreSQL, ReactJS, SASS and Single UI frameworks.</p>
             </Container>  
             </Row>
                
            </Col>
            </Row>
        </Container>
    );
}