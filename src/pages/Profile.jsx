import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormBox from '../components/FormBox';
import PhoneInput from '../components/login/PhoneInput';
import CountryDropdown from '../components/login/CountryDropdown';

export default function Profile() {
  return (
    <div className='profile'>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="My Profile" title="My Profile  ">
          <Row>
            <Col xs={12} md={6} >
              <div className="profile-details">
                <div>
                  <div className="image"><img src="" alt="" /></div>
                  <div className="upload-banner"></div>
                </div>
                <div>
                  <div className="profile-img"><img src="" alt="" /></div>
                  <div className="prifile-edit"><img src="" alt="" /></div>
                </div>
                <div className="profile-history">
                  <div className="form-item d-lg-flex gap-3 mb-2 pb-1 w-100">
                    <FormBox className='w-100' label="Name" placeholder="Murad Hossain" />
                    <FormBox className='w-100' label="Name" placeholder="Murad Hossain" />
                  </div>
                  <div className="form-item  mb-2 pb-1">
                    <PhoneInput />
                  </div>
                  <div className="form-item  mb-2 pb-1">
                    <CountryDropdown />
                  </div>
                  <div className="line "></div>
                  <p className='mt-2 mb-2'>Information for invoice </p>
                  <div className="form-item d-lg-flex gap-3 ">
                    <FormBox className='w-100' label="GST number" placeholder="Bangladesh" />
                    <FormBox className='w-100' label="Pan number" placeholder="Bangladesh" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} >
              <div className="profile-social">
                <p>Social Networks</p>
                <div className="social">
                  <FormBox className='mb-2 pb-1' label="Facebook" placeholder="facebook.com/" />
                  <FormBox className='mb-2 pb-1' label="Twitter" placeholder="twitter.com/" />
                  <FormBox className='mb-2 pb-1' label="Instagram" placeholder="instagram.com/" />
                  <FormBox className='mb-2 pb-1' label="Linkdin" placeholder="Linkdin.com/" />
                </div>
                <button className='btn bg-primary'>Save</button>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="Subscriptions" title="Subscriptions  ">
          Tab content for Profile
        </Tab>
        <Tab eventKey="Broker" title="Broker" >
          Tab content for Contact
        </Tab>
        <Tab eventKey="Notification" title="Notification" >
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  )
}
