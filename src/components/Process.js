import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Process(){
    return(
        <Container fluid id='process' className='process d-flex flex-column mt-5 px-5'>
            <Row className='d-flex ms-auto'>
            <Col xs={12} md={12} lg={12} className='fs-2 fw-semibold mt-4 mb-2'>I can help you with...</Col>
                <Col xs={12} md={6} lg={3} className='mb-4 d-flex'>
                    <Container className='process-card p-3 text-wrap flex-column'>
                        <p className='fs-1 fw-bold'>
                            01
                        </p>
                        <p className='fs-4 fw-semibold'>Understand the Requirements</p>
                        <p className='text-wrap'>
                        Understand client and business requirements to ensure alignment with the project goals.
                        </p>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={3} className='mb-4 d-flex'>
                    <Container className='process-card p-3 text-wrap flex-column'>
                        <p className='fs-1 fw-bold'>
                            02
                        </p>
                        <p className='fs-4 fw-semibold'>Plan & Design</p>
                        <p className='text-wrap'>
                        Create wireframes and workflows to optimize user experience.
                        </p>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={3} className='mb-4 d-flex'>
                    <Container className='process-card p-3 text-wrap flex-column'>
                        <p className='fs-1 fw-bold'>
                            03
                        </p>
                        <p className='fs-4 fw-semibold'>Development</p>
                        <p className='text-wrap'>
                        Use tools like OutSystems, React, and other platforms to build scalable applications.
                        </p>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={3} className='mb-4 d-flex'>
                    <Container className='process-card p-3 text-wrap flex-column'>
                        <p className='fs-1 fw-bold'>
                            04
                        </p>
                        <p className='fs-4 fw-semibold'>Test & Deliver</p>
                        <p className='text-wrap'>
                            Conduct quality assurance, review, and release the product.
                        </p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

