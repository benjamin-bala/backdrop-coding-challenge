import {useNetInfo} from '@react-native-community/netinfo';

export default function Connectivity() {
  const netInfo = useNetInfo();

  if (netInfo.isInternetReachable && netInfo.isConnected) {
    return netInfo.isInternetReachable && netInfo.isConnected;
  }

  return false;
}
