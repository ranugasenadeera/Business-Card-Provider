import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLink, FaQrcode } from 'react-icons/fa';

const CardCreation = () => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productType, setProductType] = useState('classic-white');
  const [template, setTemplate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, jobTitle, email, phone, productType, template });
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const previewCardStyle = {
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const getCardStyle = () => {
    switch (productType) {
      case 'classic-white':
        return { ...previewCardStyle, backgroundColor: '#ffffff', color: '#000' };
      case 'classic-black':
        return { ...previewCardStyle, backgroundColor: '#000000' };
      case 'custom':
        return getCustomCardStyle(template);
      default:
        return previewCardStyle;
    }
  };

  const getCustomCardStyle = (template) => {
    switch (template) {
      case 'template1': // Logo centered with name and title below
        return {
          ...previewCardStyle,
          backgroundColor: '#ffeb3b',
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        };
      case 'template2': // Logo on the left, name and title on the right divided by a straight line
        return {
          ...previewCardStyle,
          backgroundColor: '#4caf50',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '2px solid #000',
        };
      case 'template3': // Logo on the top left, name and title on the bottom right
        return {
          ...previewCardStyle,
          backgroundColor: '#ff5722',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '10px',
          alignItems: 'flex-start',
          textAlign: 'left',
        };
      default:
        return previewCardStyle;
    }
  };

  const renderTemplateOptions = () => {
    if (productType === 'custom') {
      return (
        <Form.Group style={formGroupStyle}>
          <Form.Label>Select Template</Form.Label>
          <Form.Control
            as="select"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option value="">Select a template</option>
            <option value="template1">Centered Logo with Name and Title</option>
            <option value="template2">Logo Left, Name and Title Right (with Divider)</option>
            <option value="template3">Logo Top Left, Name and Title Bottom Right</option>
          </Form.Control>
        </Form.Group>
      );
    }
    return null;
  };

  const renderLogo = (template) => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: template === 'template1' ? '10px' : '0' }}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  };

  return (
    <Container fluid style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Create Your Digital Business Card</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group style={formGroupStyle}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={formGroupStyle}>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={formGroupStyle}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={formGroupStyle}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={formGroupStyle}>
              <Form.Label>Product Type</Form.Label>
              <Form.Control
                as="select"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="classic-white">Classic White Card</option>
                <option value="classic-black">Classic Black Card</option>
                <option value="custom">Custom Card</option>
              </Form.Control>
            </Form.Group>

            {renderTemplateOptions()}

            <Button variant="primary" type="submit" block>
              Preview Card
            </Button>
          </Form>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div style={getCardStyle()}>
            {productType === 'custom' && renderLogo(template)}
            <h3>{name || 'Your Name'}</h3>
            <p>{jobTitle || 'Your Job Title'}</p>
            <p>{email || 'your.email@example.com'}</p>
            <p>{phone || '(123) 456-7890'}</p>

            {/* Sharing Options */}
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                <FaLink size={24} />
                <p style={{ marginTop: '5px' }}>Share via URL</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <FaQrcode size={24} />
                <p style={{ marginTop: '5px' }}>Share via QR Code</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardCreation;
