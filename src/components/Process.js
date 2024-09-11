import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {process} from './data.js';


export default function Process(){
    return(
        <Container fluid id='process' key='process' className='process d-flex flex-column py-5 px-5'>
            <Row className='d-flex ms-auto'>
            <Col xs={12} md={12} lg={12} className='fs-2 fw-semibold mt-4 mb-4'>I can help you with...</Col>
            <ProcessItem items={process} />
            </Row>
        </Container>
    );
}
function ProcessItem ({items}){
    return (
        <>
        {items.map(item => (
        <Col key={item.id} xs={12} md={6} lg={3} className='mb-4 d-flex'>
            <Container className='process-card p-3 text-wrap flex-column'>
                <p className='fs-1 fw-bold'>
                    {'0'+ (item.id + 1)}
                </p>
                <p className='fs-4 fw-semibold'>
                    {item.subtitle}
                </p>
                <p className='text-wrap'>
                    {item.description}
                </p>
            </Container>
        </Col>
        ))}
        </>
    );
}

