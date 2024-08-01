import PageTitle from "../components/PageTitle";
import img from '../assets/img/login/left-img.png'
import logo from '../assets/img/logo.png'

export default function Index() {
  return (
    <>
      <PageTitle name="Login" />
      <div className="login d-flex flex-wrap align-items-center w-100 vh-100">
        <div className="login-left h-100 d-flex align-items-end">
          <div className="login-img w-100">
            <img src={img} className="w-100 h-auto" alt="" />
          </div>
        </div>
        <div className="login-right h-100 d-flex align-items-center">
          <div className="login-wrap w-100">
            <div className="logo text-center">
              <img src={logo} className="mx-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
