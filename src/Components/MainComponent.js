import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import TabContent from './TabContent';




const MainComponent = () => {


  // ============ form fields name email do number  start ===============

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    number: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }


    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    } else {
      console.log("Form has errors. Cannot submit.");
    }
  };

  // ============== form fields name email do number  end =============


  // ============= question fields start ============

  const [formDataArea, setFormDataArea] = useState({
    answer1: '',
    answer2: '',
    answer3: ''
  });

  const [errorsArea, setErrorsArea] = useState({});

  const handleChangeArea = (e) => {
    const { name, value } = e.target;
    setFormDataArea({
      ...formDataArea,
      [name]: value
    });
  };

  const validateFormText = () => {
    let errors = {};
    if (!formDataArea.answer1.trim()) {
      errors.answer1 = "Answer is required";
    }
    if (!formDataArea.answer2.trim()) {
      errors.answer2 = "Answer is required";
    }
    if (!formDataArea.answer3.trim()) {
      errors.answer3 = "Answer is required";
    }

    setErrorsArea(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitFText = (e) => {
    e.preventDefault();
    if (validateFormText()) {

      console.log("Form data:", formDataArea);

      setFormDataArea({
        answer1: '',
        answer2: '',
        answer3: ''
      });
    } else {
      console.log("Form has errors. Cannot submit.");
    }
  };
  // ===============question fields end ================


  // =========== Location  fields start ==============
  const [formDataCustom, setFormDataCustom] = useState({
    emailCustom: '',
    locationCustom: '',
    interviewDateCustom: '',
    interviewTimeCustom: '',
    timeZoneCustom: '',
    interviewMediumCustom: ''
  });

  const [errorsCustom, setErrorsCustom] = useState({});

  const handleInputChangeCustom = (e) => {
    const { name, value } = e.target;
    setFormDataCustom({
      ...formDataCustom,
      [name]: value
    });
  };

  const handleSubmitCustom = (e) => {
    e.preventDefault();

    console.log(formDataCustom);
  };

  // ========= location fields end ============


  return (
    <>

      <Header />
      <section className='detail-collection'>
        <Container fluid>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={12} lg={4} md={12}>
                <Nav variant="pills" className="flex-column mt-5">
                  <Nav.Item>
                    <Nav.Link eventKey="start">
                      <Row>
                        <Col lg="3"><div className='blue-box'></div></Col>
                        <Col lg="9">
                          <div className='box-content'>
                            <h6>New Form</h6>
                            <p className='text-muted mb-0'>Start creating a new form with the wide options of fields available</p>
                          </div>
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <p>Explore the following Templates:</p>
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Row>
                        <Col lg="3"><div className='blue-box'></div></Col>
                        <Col lg="9">
                          <div className='box-content'>
                            <h6>Details Collection</h6>
                            <p className='text-muted mb-0'>Collect information from Candidates on their education, work experience, contact no,etc</p>
                          </div>
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Row>
                        <Col lg="3"><div className='blue-box'></div></Col>
                        <Col lg="9">
                          <div className='box-content'>
                            <h6>Document Collection</h6>
                            <p className='text-muted mb-0'>Save time and efforts: Explore this template to find a set of questions required for document collection</p>
                          </div>
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="three">
                      <Row>
                        <Col lg="3"><div className='blue-box'></div></Col>
                        <Col lg="9">
                          <div className='box-content'>
                            <h6>Statement of Purpose</h6>
                            <p className='text-muted mb-0'>Start creating a new form with the wide options of fields available</p>
                          </div>
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="four">
                      <Row>
                        <Col lg="3"><div className='blue-box'></div></Col>
                        <Col lg="9">
                          <div className='box-content'>
                            <h6>Interview Availability</h6>
                            <p className='text-muted mb-0'>Start creating a new form with the wide options of fields available</p>
                          </div>
                        </Col>
                      </Row>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} lg={8} md={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <TabContent />
                    <div className='tab-content pt-0 mb-3'>
                      <div className='card-body p-5 bg-white'>
                        <Form onSubmit={handleSubmit}>
                          <Form.Group className="mb-3">
                            <Form.Label>1. Name*</Form.Label>
                            <Form.Control type="text"
                              placeholder="Username"
                              name="name"
                              id="username"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>2. Email*</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Example - userid@gmail.com"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>3. Date of Birth*</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="DD/MM/YYY"
                              name="dob"
                              id="dob"
                              value={formData.dob}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>4. Contact no</Form.Label>
                            <Form.Control
                              type="tel"
                              placeholder="Enter your 10 digit contact no"
                              name="number"
                              id="number"
                              value={formData.number}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <button type="submit" className="btn btn-primary px-4">Submit</button>
                        </Form>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <TabContent />
                    <div className='tab-content pt-0 mb-3'>
                      <div className='card-body p-5 bg-white'>
                        <Form.Group controlId="formFile" className="mb-4">
                          <Form.Label>1. 10th Marksheet*</Form.Label>
                          <Form.Control type="file" placeholder='Attach file upto 5kb' />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-4">
                          <Form.Label>2. 12th Marksheet*</Form.Label>
                          <Form.Control type="file" placeholder='Attach file upto 5kb' />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-4">
                          <Form.Label>3. Graduation Marksheet*</Form.Label>
                          <Form.Control type="file" placeholder='Attach file upto 5kb' />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-4">
                          <Form.Label>4. Post Graduation Marksheet</Form.Label>
                          <Form.Control type="file" placeholder='Attach file upto 5kb' />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-4">
                          <Form.Label>5. Offer Letter*</Form.Label>
                          <Form.Control type="file" placeholder='Attach file upto 5kb' />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-4">
                          <Form.Label>6. Salary Slips*</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="three">
                    <TabContent />
                    <div className='tab-content pt-0 mb-3'>
                      <div className='card-body p-5 bg-white'>
                        <Form onSubmit={handleSubmitFText}>
                          <Form.Group className="mb-4">
                            <Form.Label>1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              name="answer1"
                              value={formDataArea.answer1}
                              onChange={handleChangeArea}
                              isInvalid={!!errorsArea.answer1}
                              placeholder="Enter a description for the long answer"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errorsArea.answer1}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label>2. Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              name="answer2"
                              value={formDataArea.answer2}
                              onChange={handleChangeArea}
                              isInvalid={!!errorsArea.answer2}
                              placeholder="Enter a description for the long answer"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errorsArea.answer2}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label>3. What are the three things that are most important to you in a job?</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              name="answer3"
                              value={formDataArea.answer3}
                              onChange={handleChangeArea}
                              isInvalid={!!errorsArea.answer3}
                              placeholder="Enter a description for the long answer"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errorsArea.answer3}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Button type="submit" variant="primary">Submit</Button>
                        </Form>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="four">
                    <TabContent />
                    <div className='tab-content pt-0 mb-3'>
                      <div className='card-body p-5 bg-white'>
                        <Form onSubmit={handleSubmitCustom}>
                          <Form.Group className="mb-3">
                            <Form.Label>2. Email*</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Example - userid@gmail.com"
                              name="emailCustom"
                              id="emailCustom"
                              value={formDataCustom.emailCustom}
                              onChange={handleInputChangeCustom}
                            />
                            {errorsCustom.emailCustom && <div className="text-danger">{errorsCustom.emailCustom}</div>}
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>2. Location</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Search or enter your location"
                              name="locationCustom"
                              id="locationCustom"
                              value={formDataCustom.locationCustom}
                              onChange={handleInputChangeCustom}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>3. Interview Date</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="DD/MM/YYY"
                              name="interviewDateCustom"
                              id="interviewDateCustom"
                              value={formDataCustom.interviewDateCustom}
                              onChange={handleInputChangeCustom}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>4. Interview Time</Form.Label>
                            <Form.Control
                              type="time"
                              placeholder="12:00"
                              name="interviewTimeCustom"
                              id="interviewTimeCustom"
                              value={formDataCustom.interviewTimeCustom}
                              onChange={handleInputChangeCustom}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>5. Time Zone</Form.Label>
                            <Form.Control
                              as="select"
                              name="timeZoneCustom"
                              id="timeZoneCustom"
                              value={formDataCustom.timeZoneCustom}
                              onChange={handleInputChangeCustom}
                            >
                              <option value="">Search or Select a time zone from below</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>6. Interview Medium</Form.Label>
                            <Form.Control
                              as="select"
                              name="interviewMediumCustom"
                              id="interviewMediumCustom"
                              value={formDataCustom.interviewMediumCustom}
                              onChange={handleInputChangeCustom}
                            >
                              <option value="">Search or Select medium of Interview from below</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Control>
                          </Form.Group>

                          <button type="submit" className="btn btn-primary px-4">Submit</button>
                        </Form>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default MainComponent;
