import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '120px 0', // Increased padding for vertical spacing
    minHeight: '100vh',
  };

  const titleStyle = {
    color: '#343a40',
    fontWeight: '700',
    marginBottom: '20px', // Adjusted margin for spacing
    fontSize: '2.5rem',
  };

  const subheadingStyle = {
    color: '#6c757d',
    marginBottom: '30px', // Adjusted margin for spacing
    fontSize: '1.2rem',
  };

  const buttonStyle = {
    borderRadius: '50px',
    fontSize: '1.2rem',
    padding: '10px 20px',
  };

  const cardContainerStyle = {
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    width: '300px',
    height: '200px',
    transformStyle: 'preserve-3d',
    animation: 'rotateCard 5s infinite',
    transition: 'transform 0.6s',
    position: 'relative',
  };

  const cardSideStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '10px',
  };

  const frontStyle = {
    ...cardSideStyle,
    backgroundColor: '#007bff',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
  };

  const backStyle = {
    ...cardSideStyle,
    backgroundColor: '#28a745',
    color: '#fff',
    transform: 'rotateY(180deg)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
  };

  const keyframesStyle = `
    @keyframes rotateCard {
      0% { transform: rotateY(0deg) scale(1); }
      50% { transform: rotateY(180deg) scale(1.1); }
      100% { transform: rotateY(360deg) scale(1); }
    }
  `;

  const handleClick = () => {
    navigate('/create-card');
  };

  return (
    <section style={sectionStyle}>
      <style>{keyframesStyle}</style>
      <Container fluid className="d-flex align-items-center justify-content-center">
        <Row className="w-90">
          <Col md={6} className="d-flex flex-column justify-content-center text-center text-md-start">
            <div style={{ padding: '0 10%' }}>
              <h1 style={titleStyle}>Create Your Digital Business Card</h1>
              <p style={subheadingStyle}>
                Make a lasting impression with a professional, dynamic business card. Create your card in minutes.
              </p>
              <Button
                variant="primary"
                size="lg"
                style={buttonStyle}
                onClick={handleClick}
              >
                Create Your Card Now
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <div style={cardContainerStyle}>
              <div style={cardStyle}>
                <div style={frontStyle}>
                  Front Side
                </div>
                <div style={backStyle}>
                  Back Side
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
