import * as React from 'react';
import {Text, View} from 'react-native';
import BPage from '@/baseUI/BPage';
import {RefreshControl} from 'react-native';
import {
  Box,
  Heading,
  HStack,
  FlatList,
  Avatar,
  VStack,
  Button,
} from 'native-base';
import {useStore} from '@/models';
import {observer} from 'mobx-react-lite';
import LottieView from 'lottie-react-native';
const fruitsAnimation = require('@/assets/animation/bounce-fruit.json');

import {FruitList} from './List';

export const ContactScreen = FruitList

export const ContactScreen1 = observer(() => {
  const store = useStore();
  const [loading, setLoading] = React.useState(false);
  const lottieViewRef = React.useRef<LottieView>(null);

  const fetchList = () => {
    setLoading(true);
    lottieViewRef.current?.play();
    store.contactStore.fetchContacts().then(() => {
      console.log(store.contactStore.list);
      setTimeout(() => {
        setLoading(false);
        lottieViewRef.current?.pause();
        lottieViewRef.current?.reset();
      }, 2000);
    });
  };

  React.useEffect(() => {
    fetchList();
  }, []);

  const refreshControl = (
    <RefreshControl
      refreshing={loading}
      // title="加载中"
      onRefresh={fetchList}
      tintColor="transparent"
      colors={['transparent']}
      style={{backgroundColor: 'transparent'}}
    />
  );

  return (
    <BPage showNavBar={false} topInsertBgColor="#f5f5f5">
      <Box style={{flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16}}>
        <Heading fontSize="xl" pr="2" pt={4} pb={4}>
          联系人 ({store.contactStore.list.length})
        </Heading>
        <View>
          <View
            style={{
              position: 'absolute',
              height: 60,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LottieView
              ref={lottieViewRef}
              style={{height: 60}}
              source={fruitsAnimation}
              autoPlay={false}
            />
          </View>
          <FlatList
            refreshControl={refreshControl}
            refreshing={loading}
            data={store.contactStore.list}
            renderItem={({item}) => (
              <Box
                borderBottomWidth="1"
                borderColor="muted.100"
                backgroundColor={'#fff'}
                marginBottom={2}
                py="2">
                <HStack
                  space={[2, 2]}
                  style={{paddingHorizontal: 10}}
                  alignItems="center"
                  justifyContent="space-between">
                  <HStack flex={1}>
                    <Avatar size="48px" source={{uri: item.avatar}} />
                    <VStack alignItems={'center'} justifyContent="center">
                      <Text style={{marginLeft: 10, fontSize: 18}}>
                        {item.nickname}
                      </Text>
                    </VStack>
                  </HStack>
                  <Button
                    colorScheme={'fuchsia'}
                    height={30}
                    variant={'subtle'}
                    size="xs">
                    私信
                  </Button>
                </HStack>
              </Box>
            )}
          />
        </View>
      </Box>
    </BPage>
  );
});
