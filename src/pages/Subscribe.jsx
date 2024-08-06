import { Col, Row } from "react-bootstrap"


export default function Subscribe() {
  const subscrinecards = [
    {
      title: "Plan Name",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
      price: "100.99",
      details: [
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
      ]
    },
    {
      title: "Plan Name",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
      price: "100.99",
      details: [
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
      ]
    },
    {
      title: "Plan Name",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
      price: "100.99",
      details: [
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
        "Amet minim mollit non deserunt.",
      ]
    }
  ]
  return (
    <div className="subscribe">
      <div className="subscribe-heading d-flex align-items-center gap-2 mb-3 pb-1">
        <span className="d-flex align-items-center justify-content-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5382 2.76544C12.6058 2.69383 12.6587 2.6096 12.6938 2.51756C12.729 2.42551 12.7456 2.32745 12.7428 2.22897C12.74 2.1305 12.7179 2.03353 12.6776 1.94362C12.6373 1.8537 12.5798 1.7726 12.5082 1.70494C12.4366 1.63727 12.3523 1.58438 12.2603 1.54926C12.1682 1.51415 12.0702 1.49751 11.9717 1.5003C11.8732 1.50309 11.7763 1.52524 11.6863 1.5655C11.5964 1.60576 11.5153 1.66333 11.4477 1.73494L5.07267 8.48494C4.94102 8.62419 4.86766 8.80855 4.86766 9.00019C4.86766 9.19182 4.94102 9.37619 5.07267 9.51544L11.4477 16.2662C11.5149 16.3394 11.596 16.3984 11.6862 16.44C11.7765 16.4816 11.8741 16.5048 11.9734 16.5083C12.0727 16.5119 12.1717 16.4956 12.2646 16.4606C12.3576 16.4255 12.4427 16.3723 12.5149 16.3041C12.5872 16.2359 12.6451 16.154 12.6854 16.0632C12.7258 15.9724 12.7477 15.8745 12.7498 15.7751C12.752 15.6758 12.7344 15.577 12.698 15.4845C12.6617 15.3921 12.6074 15.3077 12.5382 15.2364L6.64917 9.00019L12.5382 2.76544Z" fill="#8E8F95" />
            <path d="M12.5382 2.76544C12.6058 2.69383 12.6587 2.6096 12.6938 2.51756C12.729 2.42551 12.7456 2.32745 12.7428 2.22897C12.74 2.1305 12.7179 2.03353 12.6776 1.94362C12.6373 1.8537 12.5798 1.7726 12.5082 1.70494C12.4366 1.63727 12.3523 1.58438 12.2603 1.54926C12.1682 1.51415 12.0702 1.49751 11.9717 1.5003C11.8732 1.50309 11.7763 1.52524 11.6863 1.5655C11.5964 1.60576 11.5153 1.66333 11.4477 1.73494L5.07267 8.48494C4.94102 8.62419 4.86766 8.80855 4.86766 9.00019C4.86766 9.19182 4.94102 9.37619 5.07267 9.51544L11.4477 16.2662C11.5149 16.3394 11.596 16.3984 11.6862 16.44C11.7765 16.4816 11.8741 16.5048 11.9734 16.5083C12.0727 16.5119 12.1717 16.4956 12.2646 16.4606C12.3576 16.4255 12.4427 16.3723 12.5149 16.3041C12.5872 16.2359 12.6451 16.154 12.6854 16.0632C12.7258 15.9724 12.7477 15.8745 12.7498 15.7751C12.752 15.6758 12.7344 15.577 12.698 15.4845C12.6617 15.3921 12.6074 15.3077 12.5382 15.2364L6.64917 9.00019L12.5382 2.76544Z" fill="black" fill-opacity="0.2" />
          </svg>
        </span>
        <p>Subscribe Strategies</p>
      </div>
      <div className="subscribe-items">
        <Row>
          <Col xs={12} lg={6} xl={3} className="subscribe-items-cards">
            <div className="subscribe-items-cards-card">
              <div className="card-body">
                <p className="title">Plan Name</p>
                <p className="des" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.</p>
                <p className="price">$100.99 <span>/yearly</span></p>
              </div>
              <li className="d-flex align-items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 4.66666L6.66666 11.3333L3.33333 7.99999" stroke="#19C725" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Amet minim mollit non deserunt.
              </li>
              <a href="#">Subscribe now</a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
