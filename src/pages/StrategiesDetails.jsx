import { useState } from "react";
import SubscribeModal from '../components/SubscribeModal'
import StrategiesDC from '../components/StrategiesDC'

export default function StrategiesDetails() {
  const [subscribeModal, setSubscribeModal] = useState(false);
  return (
    <>
     <StrategiesDC />
      {subscribeModal&&
        <SubscribeModal onClick={() => setSubscribeModal(!subscribeModal)} />
      }
    </>
  )
}
