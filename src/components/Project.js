import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Project(){
    return(
        <Container id='work' fluid className='process d-flex flex-column p-5'>
            <Row>
                <Col xs={12} md={12} lg={12} className='fs-1 fw-bold' style={{borderBottom: '1px solid #ECDFCC'}}>Work Projects</Col>
                <Col xs={12} md={12} lg={12} className='fs-4 fw-bold'>Watson Vaccine Activity Scheduling System</Col>
                <Col xs={12} md={12} lg={12} className='fs-4 fw-bold'>Emperor Gold Club</Col>
                <Col xs={12} md={12} lg={12} className='fs-4 fw-bold'>oWFM Enterprise App</Col>
                <Col xs={12} md={12} lg={12} className='fs-4 fw-bold'>The Portal Self-Service Admin</Col>
                <Col xs={12} md={12} lg={12} className='fs-4 fw-bold'>The Portal Payroll Digital Account Opening</Col>
                <Col xs={12} md={12} lg={12} className='fs-4 fw-bold'>The Portal Digital Enrollment</Col>
            </Row>
        </Container>
    );
}