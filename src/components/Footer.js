import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import arrowup from '../assets/images/arrowup.png'

export default function Footer ({year, name}){
    return (
        <Container id="footer" fluid className="p-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <Col xs={12} md={10} lg={10} className="text-center text-md-start">
                <Container fluid className='text-center'>© {year} {name}</Container>
            </Col>
            <Col xs={12} md={2} lg={2} className="text-center text-md-end back">
                <a href="#top" className="d-flex justify-content-center align-items-center">
                Back to top <Image src={arrowup} className="ms-2" alt="Arrow up" />
                </a>
            </Col>
        </Container>
    );
}