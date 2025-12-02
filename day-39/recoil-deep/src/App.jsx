// 
import React, { useMemo } from "react";
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messageAtom, networkAtom, notificatioAtom, totalNotificationCount } from './store/atom'

function App() {
  return (<RecoilRoot>
    <MainApp />
  </RecoilRoot>)
}

function MainApp()
{
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messageCount = useRecoilValue(messageAtom)
  const notificationCount = useRecoilValue(notificatioAtom)

  const totalNotification  = useRecoilValue(totalNotificationCount)
  // const totalNotification = useMemo(() => {
  //   return networkCount+ jobsCount+ messageCount + notificationCount;
  // }, [networkCount, jobsCount, messageCount, notificationCount])
  return <div>
      <button>Home</button>
      <button>My Network ({networkCount >= 100 ? "99+": networkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+": jobsCount})</button>
      <button>Messaging ({messageCount >= 100 ? "99+": messageCount})</button>
      <button>Notification ({notificationCount >= 100 ? "9+" : notificationCount})</button>
      <button>me ({totalNotification})</button>
    </div>
}
export default App
