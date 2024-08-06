import PageTitle from '../components/PageTitle'

import banner from '../assets/img/dashboard/banner-img.png'
import graph from '../assets/img/dashboard/profile-graph.png'
import calendar from '../assets/img/dashboard/calendar.svg'
import threeDot from '../assets/img/dashboard/threeDot.svg'
import listIcon_1 from '../assets/img/dashboard/graph-list-icon-1.svg'
import listIcon_2 from '../assets/img/dashboard/graph-list-icon-2.svg'
import listIcon_3 from '../assets/img/dashboard/graph-list-icon-3.svg'

export default function Home() {
  const graphList = [
    {
      color: '#4DD5B8',
      title: 'Profit',
      num: 45,
      icon: listIcon_1,

    },
    {
      color: '#FF823C',
      title: 'Winning streak',
      num: 12,
      icon: listIcon_2,
    },
    {
      color: '#FFC833',
      title: 'No. of days actively traded.',
      num: 12,
      icon: listIcon_3,
    },
  ]

  const profitCard = [
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: 'Strategy Name AI Calculation ',
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
  ]
  return (
    <>
      <PageTitle title="Home" />
      <div className="profile">
        <div className="profile-banner">
          <img src={banner} alt="" />
        </div>
        <div className="profile-graph d-flex">
          <div className="profile-graph-list">
            {graphList.map((item, index) => (
              <div className="single d-flex align-items-center" key={index}>
                <div className="icon" style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt="" />
                </div>
                <div className="text">
                  <p>{item.title}</p>
                  <span>{item.num} </span>
                </div>
              </div>
            ))}
            <a href="#" className="btn">View Watchlist</a>
          </div>
          <div className="profile-graph-wrap">
            <div className="profile-graph-header d-flex align-items-center justify-content-between">
              <h4>PNL</h4>
              <button className="btn"> <img src={calendar} alt="" /> Last week</button>
            </div>
            <div className="graph">
              <img src={graph} alt="" />
            </div>
          </div>
        </div>
        <div className="dashboard-wrap profile-profit">
          <h3 className='fs-6 fw-bold'>Profitability Strategies</h3>
          <div className="profile-profit-cards d-flex flex-wrap">
            {profitCard.map((item, index) => (
              <div className="profile-profit-card " key={index}>
                <span className="subTitle fs-12">Subscribed</span>
                <h4 className='mb-2 pb-1 lh-base fw-medium fs-6 text-heading'>{item.title}</h4>
                <p className='fs-14 lh-base mb-3'>{item.des}</p>
                <div className="card-btn">
                  <a href="#" className="btn">Run Strategy</a>
                  <button id="menu"><img src={threeDot} alt="" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
