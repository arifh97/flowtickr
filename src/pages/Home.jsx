import PageTitle from '../components/PageTitle'

// import banner from '../assets/img/dashboard/banner.png'

export default function Home() {
  return (
    <>
        <PageTitle title="Home" />
        <div className="profile">
            <div className="profile-banner">
              {/* <img src={banner} alt="" /> */}
            </div>
        </div>
    </>
  )
}
