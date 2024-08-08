
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
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";

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
  const [addBroker, setAddBroker] = useState(false);
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
            <div className="broken-area dashboard-wrap">
              <div className="broken-table">
                <Table >
                  <thead>
                    <tr className='tableheader'>
                      <th>
                        <div className='d-flex gap-1 align-items-center'>
                          <p className='table-label' >Name</p>
                          <span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="#8E8F95" />
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="black" fillOpacity="0.2" />
                            </svg>
                          </span>
                        </div>
                      </th>
                      <th>
                        <div className='d-flex gap-1 align-items-center'>
                          <p className='table-label' >Exchanges</p>
                          <span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="#8E8F95" />
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="black" fillOpacity="0.2" />
                            </svg>
                          </span>
                        </div>
                      </th>
                      <th>
                        <div className='d-flex gap-1  align-items-center'>
                          <p className='table-label' >Info</p>
                          <span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="#8E8F95" />
                              <path d="M1.99879 4.60265C1.94309 4.55003 1.87758 4.50888 1.80599 4.48157C1.7344 4.45427 1.65813 4.44132 1.58154 4.44349C1.50494 4.44566 1.42953 4.46289 1.35959 4.4942C1.28966 4.52551 1.22658 4.5703 1.17395 4.62599C1.12132 4.68168 1.08018 4.74719 1.05287 4.81878C1.02556 4.89037 1.01262 4.96664 1.01479 5.04324C1.01696 5.11983 1.03419 5.19525 1.0655 5.26518C1.09681 5.33511 1.14159 5.39819 1.19729 5.45082L6.44729 10.4092C6.55559 10.5115 6.69899 10.5686 6.84804 10.5686C6.99708 10.5686 7.14048 10.5115 7.24879 10.4092L12.4994 5.45082C12.5563 5.39854 12.6022 5.33547 12.6346 5.26528C12.6669 5.19509 12.685 5.11918 12.6877 5.04195C12.6904 4.96472 12.6778 4.88771 12.6505 4.8154C12.6233 4.74309 12.5819 4.67692 12.5289 4.62074C12.4758 4.56455 12.4121 4.51947 12.3415 4.4881C12.2709 4.45674 12.1947 4.43972 12.1174 4.43804C12.0402 4.43636 11.9634 4.45004 11.8914 4.4783C11.8195 4.50656 11.7539 4.54883 11.6985 4.60265L6.84804 9.18299L1.99879 4.60265Z" fill="black" fillOpacity="0.2" />
                            </svg>
                          </span>
                        </div>
                      </th>
                      <th >
                        <p className='table-label' >Action</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td>
                        <p className='value'>Lovafrique.Shop </p>
                      </td>
                      <td>
                        <p className='value'>test </p>
                      </td>
                      <td>
                        <p className='value'>@test </p>
                      </td>
                      <td>
                        <div className="action d-flex align-items-center gap-2">
                          <a className="edit d-flex justify-content-center align-items-center p-1"><CiEdit /></a>
                          <button className="delete d-flex justify-content-center align-items-center p-1">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.92862 2.57146H7.07148C7.07148 2.2873 6.9586 2.01478 6.75767 1.81385C6.55673 1.61292 6.28421 1.50003 6.00005 1.50003C5.71589 1.50003 5.44337 1.61292 5.24244 1.81385C5.04151 2.01478 4.92862 2.2873 4.92862 2.57146ZM4.28577 2.57146C4.28577 2.11681 4.46638 1.68077 4.78787 1.35928C5.10936 1.03779 5.5454 0.857178 6.00005 0.857178C6.45471 0.857178 6.89074 1.03779 7.21224 1.35928C7.53373 1.68077 7.71434 2.11681 7.71434 2.57146H10.3929C10.4782 2.57146 10.5599 2.60533 10.6202 2.66561C10.6805 2.72589 10.7143 2.80764 10.7143 2.89289C10.7143 2.97814 10.6805 3.0599 10.6202 3.12018C10.5599 3.18046 10.4782 3.21432 10.3929 3.21432H9.83148L9.30991 9.47275C9.27196 9.92803 9.06431 10.3524 8.72812 10.6618C8.39194 10.9711 7.95177 11.1429 7.49491 11.1429H4.5052C4.04833 11.1429 3.60817 10.9711 3.27198 10.6618C2.9358 10.3524 2.72814 9.92803 2.6902 9.47275L2.16862 3.21432H1.6072C1.52195 3.21432 1.44019 3.18046 1.37991 3.12018C1.31963 3.0599 1.28577 2.97814 1.28577 2.89289C1.28577 2.80764 1.31963 2.72589 1.37991 2.66561C1.44019 2.60533 1.52195 2.57146 1.6072 2.57146H4.28577ZM3.33091 9.41918C3.35542 9.71378 3.48975 9.98842 3.70726 10.1886C3.92477 10.3888 4.20957 10.5 4.5052 10.5H7.49491C7.79053 10.5 8.07534 10.3888 8.29285 10.1886C8.51036 9.98842 8.64469 9.71378 8.6692 9.41918L9.18691 3.21432H2.81362L3.33091 9.41918ZM5.03577 4.71432C5.12101 4.71432 5.20277 4.74819 5.26305 4.80847C5.32333 4.86874 5.3572 4.9505 5.3572 5.03575V8.67861C5.3572 8.76386 5.32333 8.84561 5.26305 8.90589C5.20277 8.96617 5.12101 9.00004 5.03577 9.00004C4.95052 9.00004 4.86876 8.96617 4.80848 8.90589C4.7482 8.84561 4.71434 8.76386 4.71434 8.67861V5.03575C4.71434 4.9505 4.7482 4.86874 4.80848 4.80847C4.86876 4.74819 4.95052 4.71432 5.03577 4.71432ZM7.28577 5.03575C7.28577 4.9505 7.2519 4.86874 7.19162 4.80847C7.13134 4.74819 7.04959 4.71432 6.96434 4.71432C6.87909 4.71432 6.79733 4.74819 6.73705 4.80847C6.67677 4.86874 6.64291 4.9505 6.64291 5.03575V8.67861C6.64291 8.76386 6.67677 8.84561 6.73705 8.90589C6.79733 8.96617 6.87909 9.00004 6.96434 9.00004C7.04959 9.00004 7.13134 8.96617 7.19162 8.90589C7.2519 8.84561 7.28577 8.76386 7.28577 8.67861V5.03575Z" fill="currentColor" />
                              <path d="M4.92862 2.57146H7.07148C7.07148 2.2873 6.9586 2.01478 6.75767 1.81385C6.55673 1.61292 6.28421 1.50003 6.00005 1.50003C5.71589 1.50003 5.44337 1.61292 5.24244 1.81385C5.04151 2.01478 4.92862 2.2873 4.92862 2.57146ZM4.28577 2.57146C4.28577 2.11681 4.46638 1.68077 4.78787 1.35928C5.10936 1.03779 5.5454 0.857178 6.00005 0.857178C6.45471 0.857178 6.89074 1.03779 7.21224 1.35928C7.53373 1.68077 7.71434 2.11681 7.71434 2.57146H10.3929C10.4782 2.57146 10.5599 2.60533 10.6202 2.66561C10.6805 2.72589 10.7143 2.80764 10.7143 2.89289C10.7143 2.97814 10.6805 3.0599 10.6202 3.12018C10.5599 3.18046 10.4782 3.21432 10.3929 3.21432H9.83148L9.30991 9.47275C9.27196 9.92803 9.06431 10.3524 8.72812 10.6618C8.39194 10.9711 7.95177 11.1429 7.49491 11.1429H4.5052C4.04833 11.1429 3.60817 10.9711 3.27198 10.6618C2.9358 10.3524 2.72814 9.92803 2.6902 9.47275L2.16862 3.21432H1.6072C1.52195 3.21432 1.44019 3.18046 1.37991 3.12018C1.31963 3.0599 1.28577 2.97814 1.28577 2.89289C1.28577 2.80764 1.31963 2.72589 1.37991 2.66561C1.44019 2.60533 1.52195 2.57146 1.6072 2.57146H4.28577ZM3.33091 9.41918C3.35542 9.71378 3.48975 9.98842 3.70726 10.1886C3.92477 10.3888 4.20957 10.5 4.5052 10.5H7.49491C7.79053 10.5 8.07534 10.3888 8.29285 10.1886C8.51036 9.98842 8.64469 9.71378 8.6692 9.41918L9.18691 3.21432H2.81362L3.33091 9.41918ZM5.03577 4.71432C5.12101 4.71432 5.20277 4.74819 5.26305 4.80847C5.32333 4.86874 5.3572 4.9505 5.3572 5.03575V8.67861C5.3572 8.76386 5.32333 8.84561 5.26305 8.90589C5.20277 8.96617 5.12101 9.00004 5.03577 9.00004C4.95052 9.00004 4.86876 8.96617 4.80848 8.90589C4.7482 8.84561 4.71434 8.76386 4.71434 8.67861V5.03575C4.71434 4.9505 4.7482 4.86874 4.80848 4.80847C4.86876 4.74819 4.95052 4.71432 5.03577 4.71432ZM7.28577 5.03575C7.28577 4.9505 7.2519 4.86874 7.19162 4.80847C7.13134 4.74819 7.04959 4.71432 6.96434 4.71432C6.87909 4.71432 6.79733 4.74819 6.73705 4.80847C6.67677 4.86874 6.64291 4.9505 6.64291 5.03575V8.67861C6.64291 8.76386 6.67677 8.84561 6.73705 8.90589C6.79733 8.96617 6.87909 9.00004 6.96434 9.00004C7.04959 9.00004 7.13134 8.96617 7.19162 8.90589C7.2519 8.84561 7.28577 8.76386 7.28577 8.67861V5.03575Z" fill="black" fillOpacity="0.2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
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

                <p className='broken-contact fs-6'>Select Broker</p>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">Select</option>
                  <option value="2">Select</option>
                  <option value="3">Select</option>
                </Form.Select>
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
              <div className="d-flex flex-column gap-2 mt-auto btns">
                <Link to="/dashboard" className="btn bg-transparent w-100 fs-14 mb-1">Back</Link>
                <Link to="/dashboard" className="btn bg-primary w-100 fs-14">Save</Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
