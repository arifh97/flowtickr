import { Helmet } from "react-helmet";

export default function PageTitle({name}) {
  return (
    <Helmet>
        <title> Flowtickr - {name} </title>
      </Helmet>
  )
}
