import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {about} from './data.js';

export default function About () {
    
    return (
        <> 
            <Container id='about' key='aboutme' fluid className='d-flex flex-column py-5 px-5'> 
            <Row className='d-flex ms-auto'>     
            <AboutMe items={about} />
            </Row>
            </Container>
        </>
    );
}
function AboutMe({ items }) {
    return (
      <>
        <Col xs={12} className="fs-2 fw-semibold mt-4 mb-4">
          About me...
        </Col>
        
        {items.map((item) => (
          <Col key={item.id} xs={12} md={12} lg={12} className="mb-4 d-flex flex-column">
            
            <div>
              {item.informations.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
  
            <div className="fs-3 fw-semibold mt-3 mb-2">Skill Overview</div>
            
            <Col xs={12} md={12} lg={12} className='px-3'>
              <span className='fw-semibold'>• Development Expertise: </span>
              <span>{item.skills.develop.join(', ')}</span>
            </Col>
            <Col xs={12} md={12} lg={12} className='px-3'>
              <span className='fw-semibold'>• Database Expertise: </span>
              <span>{item.skills.database.join(', ')}</span>
            </Col>
            <Col xs={12} md={12} lg={12} className='px-3'>
              <span className='fw-semibold'>• Dev Tools: </span>
              <span>{item.skills.devtools.join(', ')}</span>
            </Col>
            <Col xs={12} md={12} lg={12} className='px-3'>
              <span className='fw-semibold'>• Project & Design: </span>
              <span>{item.skills.workflow.join(', ')}</span>
            </Col>
  
            <div className="mt-3 mb-2">
              <h4>Work History</h4>
              {item.workhistory.map((work) => (
                <Col key={work.id}>
                  <p className='fs-5 fw-semibold mt-3 mb-0'>• {work.company}</p>
                  <Row>
                    <Col xs={12} md={12} lg={12} className='px-4'><span className='fw-semibold'>•</span> {work.responsibilities}</Col>
                    <Col xs={12} md={12} lg={12} className='px-4'> <span className='fw-semibold'>• Key Project:</span> {work.project}</Col>
                  </Row>
                </Col>
              ))}
            </div>
  
          </Col>
        ))}
      </>
    );
  }