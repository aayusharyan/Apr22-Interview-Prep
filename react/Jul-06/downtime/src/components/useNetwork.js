import {useState, useEffect} from 'react';
const useNetwork = () => {
  const [networkStatus, setNetworkStatus] = useState({isOnline: true});

  useEffect(() => {
    const networkStatusChanged = (e) => {
      if(e.type == "offline") {
        setNetworkStatus({isOnline: false});
      } else {
        setNetworkStatus({isOnline: true});
      }
    }

    window.addEventListener('offline', networkStatusChanged);
    window.addEventListener('online', networkStatusChanged);
    // window.navigator.connection.onchange = function (e) {
    //   console.log(e);
    // }
  
    return () => {
      window.removeEventListener('offline', networkStatusChanged);
      window.removeEventListener('online', networkStatusChanged);
      // window.navigator.connection.onchange = () => {};
    }
  }, [])
  
  return networkStatus;
}
export default useNetwork;