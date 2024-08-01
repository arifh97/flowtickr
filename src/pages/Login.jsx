import { useState } from "react";
import PageTitle from "../components/PageTitle";
import CountryCode from "../components/login/CountryCode";
import OtpPopup from '../components/login/OtpPopup'

import img from '../assets/img/login/left-img.png'
import logo from '../assets/img/logo.png'
import google from '../assets/img/social/google.png'

export default function Index() {

  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    // const pattern = /^[7-9][0-9]{9}$/;
    setPhone(value);
    // setIsValid(pattern.test(value));
  };

  const [otpShow, setOtpShow] = useState(false);
  const showOtp = () => {
    setOtpShow(!otpShow)
  }

  return (
    <>
      <PageTitle name="Login" />
      <div className="login d-flex flex-wrap align-items-center w-100 vh-100">
        <div className="login-left d-flex align-items-end">
          <div className="login-img w-100">
            <img src={img} className="w-100 h-auto" alt="" />
          </div>
        </div>
        <div className="login-right d-flex align-items-center">
          <div className="login-wrap mx-auto w-100">
            <div className="logo text-center">
              <img src={logo} className="mx-auto" alt="" />
            </div>
            <div className="login-wrap-content">
              <div className="mb-3 pb-md-1">
                <h2 className="fw-semibold mb-1">Welcome Back</h2>
                <p className="fs-14">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia.</p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-3 pb-md-1">
                <CountryCode />
                <div className="d-flex flex-column gap-2 w-100">
                  <input
                    type="text"
                    id="phone"
                    className={`form-control ${isValid ? '' : 'is-invalid'}`}
                    value={phone}
                    placeholder="1234567890"
                    onChange={handleChange}
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number must start with 7, 8, or 9 and be 10 digits long"
                  />
                  {/* {!isValid && <div className="invalid-feedback">Please enter a valid phone number.</div>} */}
                </div>
              </div>
              <div>
                <button onClick={() => showOtp()} className="btn bg-primary text-heading w-100 fs-6">Get Otp</button>
              </div>
              <div className="login-or mt-3 pt-1 pt-md-2">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-3 pb-1 pb-md-2">
                  <span className="d-block login-or-line"></span>
                  <span className="text-uppercase">or</span>
                  <span className="d-block login-or-line"></span>
                </div>
                <button className="btn fs-6 gap-2 bg-transparent d-flex w-100 align-items-center justify-content-center">
                  <img src={google} alt="" />
                  Continue with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OtpModal */}
      <OtpPopup onClick={() => showOtp()} className={otpShow ? 'd-flex' : 'd-none'} />
      {/* OtpModal */}
    </>
  )
}
