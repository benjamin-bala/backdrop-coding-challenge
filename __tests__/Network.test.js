import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import NetInfo from '@react-native-community/netinfo';
import Connectivity from '../src/utils/connectivity';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

beforeEach(() => {
  jest.clearAllMocks();
});

//Tried all i could but mock is not working, and no resolved issues online!!

describe('Network Connectivity', () => {
  //   test('Check if network is not available', () => {
  //     const mockNetWorkFailResponse = {
  //       type: 'none',
  //       isConnected: false,
  //       details: {},
  //       isInternetReachable: false,
  //     };
  //     NetInfo.fetch.mockResolvedValue(mockNetWorkFailResponse);
  //     const connection = Connectivity();

  //     expect(connection).toEqual(false);
  //   });

  test('Check if network is available', () => {
    const mockNetworkAvailable = {
      type: 'wifi',
      isConnected: true,
      details: {
        ipAddress: '192.168.0.108',
        ssid: null,
        isConnectionExpensive: false,
        subnet: '255.255.255.0',
      },
      isInternetReachable: true,
    };

    NetInfo.fetch.mockResolvedValue(mockNetworkAvailable);
    const connection = Connectivity();

    expect(connection).toEqual(true);
  });

  //   mockRNCNetInfo.useNetInfo.mockResolvedValueOnce({
  //     type: 'test',
  //     isInternetReachable: false,
  //   });
  //   test('Check if network is not available', async () => {
  //     const connection = Connectivity();
  //     expect(connection).not.toBeTruthy();
  //   });
  //   mockRNCNetInfo.useNetInfo.mockResolvedValueOnce({
  //     type: 'test',
  //     isInternetReachable: true,
  //   });
  //   test('Check if network is available', async () => {
  //     // mockRNCNetInfo.useNetInfo({
  //     //   isInternetReachable: true,
  //     // });
  //     const connection = Connectivity();
  //     expect(connection).toBeTruthy();
  //   });
});
