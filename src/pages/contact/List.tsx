import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import {BList, getSimpleFooterLoading} from '@/baseUI/BList';

const styles = StyleSheet.create({
  row: {
    height: 50,
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 6,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export function FruitList() {
  const [data, setData] = useState([] as string[]);
  const [finished, setFinished] = useState(false);

  return (
    <View style={{flex: 1, paddingTop: 60}}>
      <BList<string>
        footerLoading={getSimpleFooterLoading}
        dataSource={data}
        disableLoadMore={finished}
        renderItem={({item}) => {
          return (
            <View key={item} style={styles.row}>
              <Text style={styles.rowTitle}>{item}</Text>
            </View>
          );
        }}
        onRefresh={callback => {
          console.log(`onRefresh`)
          const list = (new Array(20)).fill(undefined).map((_, i) => {
            return `${i}`;
          })
          setTimeout(() => {
            setFinished(false)
            setData(list)
            callback();
          }, 2000);
        }}
        onLoad={callback => {
          console.log(`onLoad`)
          const list = (new Array(20)).fill(undefined).map((_, i) => {
            return `${data.length + i}`;
          })
          setTimeout(() => {
            const newList = [...data, ...list];
            if (newList.length > 50) {
              setFinished(true)
            }
            setData(newList)
            callback();
          }, 2000);
        }}
      />
    </View>
  );
}
