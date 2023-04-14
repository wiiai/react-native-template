/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-04-14 11:31:38
 * @LastEditTime: 2023-04-14 11:56:27
 * @FilePath: /react-native-template/src/pages/table/index.tsx
 * @Description:
 */

import BPage from '@/baseUI/BPage';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const TableThree = () => {
  const tableDataSample = {
    tableHead: [
      'Crypto Name',
      'Crypto Symbol',
      'Current Value',
      'Movement',
      'Mkt Cap',
      'Description',
    ],
    widthArr: [140, 160, 180, 120, 220, 540],
    tableData: [
      [
        'Bitcoin',
        'BTC',
        '$44,331',
        '$2.70',
        '$839,702,328,904',
        'Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator',
      ],
      [
        'Ethereum',
        'ETH',
        '$3000.9',
        '$3.49',
        '$359,080,563,225',
        'Ethereum is a decentralized, open-source blockchain with smart contract functionality. ',
      ],
      [
        'Tether',
        'USDT',
        '$1',
        '$0.03',
        '$79,470,820,738',
        'Tether (often called by its symbol USDT) is a cryptocurrency that is hosted on the Ethereum and Bitcoin blockchains, among others.',
      ],
      [
        'BNB',
        'BNB',
        '$413.44',
        '$4.68',
        '$69,446,144,361',
        'Binance is a cryptocurrency exchange which is the largest exchange in the world in terms of daily trading volume of cryptocurrencies',
      ],
      [
        'USD Coin',
        'USDC',
        '$1',
        '$0.01',
        '$53,633,260,549',
        'USD Coin (USDC) is a digital stablecoin that is pegged to the United States dollar. USD Coin is managed by a consortium called Centre',
      ],
    ],
  };

  const [data, setData] = useState(tableDataSample);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Table borderStyle={{borderWidth: 1, borderColor: 'purple'}}>
            <Row
              data={data.tableHead}
              widthArr={data.widthArr}
              style={styles.head}
              textStyle={styles.headText}
            />
          </Table>
          <ScrollView>
            <Table borderStyle={{borderWidth: 1, borderColor: 'purple'}}>
              {data.tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={data.widthArr}
                  style={styles.rowSection}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  head: {height: 44, backgroundColor: 'darkblue'},
  headText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  rowSection: {backgroundColor: '#E7E6E1'},
  text: {margin: 6, fontSize: 14, fontWeight: 'bold', textAlign: 'center'},
});

export const TableScreen = () => {
  return (
    <BPage>
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: '#fff',
        }}>
        <TableThree />
      </View>
    </BPage>
  );
};
