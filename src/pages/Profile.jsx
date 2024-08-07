
import { Col, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormBox from '../components/FormBox';
import PhoneInput from '../components/login/PhoneInput';
import CountryDropdown from '../components/login/CountryDropdown';
import profilebanner from "../assets/img/profile-banner.png"
import uploadicon from "../assets/img/profile-banner-icon.png"
import profileimg from "../assets/img/profile-img.png"
import { Link } from 'react-router-dom';

import ImageUploadPreview from '../components/ImageUploadPreview';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Profile() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options);
  };
  const [addBroker, setAddBroker] = useState(true);
  return (
    <>
      <div className='dashboard-wrap profile'>
        <Tabs
          defaultActiveKey="my_profile"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="my_profile" title="My Profile">
            <Row>
              <Col xs={12} lg={6} className='mb-4 mb-lg-0' >
                <div className="profile-details">
                  <div className='position-relative z-0'>
                    <div className='position-relative z-0'>
                      <div className="image"><img className='w-100' src={profilebanner} alt="" /></div>
                      <Link to="/">
                        <div className=" d-flex justify-content-center align-items-center upload-banner position-absolute z-1"><img src={uploadicon} alt="" /></div>
                      </Link>
                    </div>
                    <div className='position-absolute z-2 start-50 translate-middle profile-area'>
                      <div className="profile-img "><img src={profileimg} alt="" /></div>
                      <Link to="/">
                        <div className="profile-edit start-50 translate-middle bg-primary  d-flex justify-content-center align-items-center position-absolute z-3">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99999 3.99996L12 5.99996M8.66666 13.3333H14M3.33332 10.6666L2.66666 13.3333L5.33332 12.6666L13.0573 4.94263C13.3073 4.69259 13.4477 4.35351 13.4477 3.99996C13.4477 3.64641 13.3073 3.30733 13.0573 3.05729L12.9427 2.94263C12.6926 2.69267 12.3535 2.55225 12 2.55225C11.6464 2.55225 11.3074 2.69267 11.0573 2.94263L3.33332 10.6666Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="profile-history">
                    <div className="form-item d-lg-flex gap-3 mb-2 pb-1 w-100">
                      <FormBox className='w-100' label="Name" placeholder="Murad Hossain" />
                      <FormBox className='w-100' label="Email" placeholder="muraddc0@gmail.com" />
                    </div>
                    <div className="form-item  mb-2 pb-1">
                      <PhoneInput />
                    </div>
                    <div className="form-item  mb-2 pb-1">
                      <CountryDropdown />
                    </div>
                    <div className="line "></div>
                    <p className='mt-2 mb-2 fs-6 fw-medium invoice'>Information for invoice </p>
                    <div className="form-item d-lg-flex gap-3 ">
                      <FormBox className='w-100' label="GST number" placeholder="Bangladesh" />
                      <FormBox className='w-100' label="Pan number" placeholder="Bangladesh" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} >
                <div className="profile-social">
                  <p className='title fw-medium mb-3'>Social Networks</p>
                  <div className="social">
                    <FormBox className='mb-3' label="Facebook" placeholder="facebook.com/" />
                    <FormBox className='mb-3' label="Twitter" placeholder="twitter.com/" />
                    <FormBox className='mb-3' label="Instagram" placeholder="instagram.com/" />
                    <FormBox className='mb-3' label="Linkdin" placeholder="Linkdin.com/" />
                  </div>
                  <button className='btn bg-primary fw-medium'>Save</button>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="subscriptions" title="Subscriptions">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Broker" title="Broker" >

          </Tab>
          <Tab eventKey="notification" title="Notification" >
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
      {addBroker &&
        <div className={`broken-modal align-items-center justify-content-end  p-3 p-md-4 position-fixed top-0 start-0 w-100 z-2 bg-black bg-opacity-20 h-100  `}>
          <div className="login-otp-wrap bg-white py-4 px-3 rounded-4 h-100 ms-auto">
            <div className="login-otp-scroll h-100 px-2 d-flex flex-column overflow-auto">
              <div className="login-popup-header position-sticky top-0 start-0 z-2 w-100 bg-white d-flex align-items-center gap-2 mb-3 pb-md-1">
                <button className="login-close text-body d-flex align-items-center justify-content-center rounded-pill border-0 p-0" ><LiaAngleLeftSolid /></button>
                <h4 className="mb-0">Add New Broker</h4>
              </div>
              <div className=" gap-3 mb-3">
                <FormBox type="text" label="Select Broker" placeholder="Select Broker" />
              </div>
              <div className='link-item mb-3'>
                <p className='fs-6 fw-medium mb-2'>Setup Link</p>
                <a className='fs-6 fw-medium ' href="https://tradetron.tech/html-view/Configure-ABSTOX">https://tradetron.tech/html-view/Configure-ABSTOX</a>
              </div>
              <div className='select2 mb-3'>
                <Select
                  options={options}
                  isMulti
                  value={selectedOptions}
                  onChange={handleChange}
                />
              </div>
              <div className="line w-100 mb-3"></div>
              <p className='broken-contact mb-3'>Connect to Broker</p>
              <div className="mb-3">
                <FormBox type="text" label="Secret_Key  " placeholder="Type here" />
              </div>
              <div className="mb-3">
                <FormBox type="text" label="app_Key" placeholder="Type here" />
              </div>
              <div className="btns">
                <a href="#" className='btn fs-6 fw-medium'>Back</a>
                <button className='btn fs-6 fw-medium'>Save</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
