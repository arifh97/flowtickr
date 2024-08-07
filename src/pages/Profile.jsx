
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

export default function Profile() {
  return (
    <div className='profile'>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="My Profile" title="My Profile">
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
                          <path d="M9.99999 3.99996L12 5.99996M8.66666 13.3333H14M3.33332 10.6666L2.66666 13.3333L5.33332 12.6666L13.0573 4.94263C13.3073 4.69259 13.4477 4.35351 13.4477 3.99996C13.4477 3.64641 13.3073 3.30733 13.0573 3.05729L12.9427 2.94263C12.6926 2.69267 12.3535 2.55225 12 2.55225C11.6464 2.55225 11.3074 2.69267 11.0573 2.94263L3.33332 10.6666Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
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
