import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { workproject } from './data';

export default function Project(){
    return(
        <Container id='work' fluid className='process d-flex flex-column p-3 p-md-5' >
            <Row >
                <Col xs={12} md={12} lg={12} className='fs-1 fw-bold mt-3 mb-3 custom-work' >Work Projects</Col>
                <ProjectList items={workproject} />
            </Row>
        </Container>
    );
}
function ProjectList ({ items}){
    return(
        <>
            {items.map(item => (
                <Container key={item.id} className='mb-4'>
                    <Col xs={12} md={12} lg={12} className='fs-4 fw-bold'>{item.title}</Col>
                    <ListGroup >
                        <ListGroup.Item className='custom-list-group-item'><span className='fw-semibold'>• Description : </span>{item.description}</ListGroup.Item>
                        <ListGroup.Item className='custom-list-group-item'><span className='fw-semibold'>• Contribution : </span>{item.contribution}</ListGroup.Item>
                        <ListGroup.Item className='custom-list-group-item'><span className='fw-semibold'>• Technologies Used : </span>{item.technologies.join(', ')}</ListGroup.Item>
                    </ListGroup>
                </Container>
            ))}
        </>
    );
}