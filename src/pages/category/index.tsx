import {ScrollView, StyleSheet, View} from 'react-native';
import data from './data.json';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import BPage from '@/baseUI/BPage';
import {useEffect, useState} from 'react';
import {Center, Flex, HStack, Image, Text} from 'native-base';

const CategoryScreen = () => {
  const treeData = data.data.list;
  const [current, setCurrent] = useState<number | undefined>(undefined);

  useEffect(() => {
    setCurrent(treeData[0].id);
  }, []);

  const renderMenu = () => {
    return treeData.map(it => {
      const stl =
        current === it.id
          ? {
              borderRightWidth: 3,
              borderRightColor: 'blue',
              borderStyle: 'solid' as const,
              backgroundColor: '#fff',
            }
          : {
              borderRightWidth: 3,
              borderRightColor: 'transparent',
              borderStyle: 'solid' as const,
            };
      return (
        <TouchableWithoutFeedback
          key={it.title}
          onPress={() => {
            setCurrent(it.id);
          }}>
          <View style={stl}>
            <Text
              style={{
                height: 40,
                fontSize: 16,
                textAlign: 'center',
                lineHeight: 40,
              }}>
              {it.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    });
  };

  const renderList = () => {
    const list = treeData.find(it => it.id === current)?.children || [];
    if (!list.length) {
      return null;
    }
    const children = list.map((it, index) => {
      return (
        <TouchableHighlight>
          <View
            key={index}
            style={{
              marginRight: 10,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{width: 64, height: 64, backgroundColor: '#eee'}}></View>
            <Text style={{fontSize: 13, color: '#666', marginTop: 4}}>
              {it.title}
            </Text>
          </View>
        </TouchableHighlight>
      );
    });

    return (
      <View>
        <View style={{marginRight: 10}}>
          <Image
            style={{width: '100%', height: 150}}
            source={{
              uri: 'http://s2.airtlab.com/%E8%8B%B1%E8%AF%AD%E5%8D%95%E8%AF%8D.png',
            }}
          />
        </View>
        <Text fontSize="sm" style={{marginTop: 20}}>
          课程分类
        </Text>
        <Flex direction="row" wrap="wrap" style={{flex: 1, height: '100%'}}>
          {children}
        </Flex>
      </View>
    );
  };

  return (
    <BPage showNavBar={true}>
      <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
        <View style={{width: 80, height: '100%', backgroundColor: '#eee'}}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {renderMenu()}
          </ScrollView>
        </View>
        <View style={{flex: 1, height: '100%'}}>
          <ScrollView
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              ...styles.contentContainer,
              paddingLeft: 10,
            }}>
            {renderList()}
          </ScrollView>
        </View>
      </View>
    </BPage>
  );
};

const styles = StyleSheet.create({
  contentContainer: {},
});

export default CategoryScreen;