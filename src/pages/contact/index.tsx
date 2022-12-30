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
  Spacer,
  Button,
} from 'native-base';
import {useStore} from '@/models';
import {observer} from 'mobx-react-lite';

export const ContactScreen = observer(() => {
  const store = useStore();

  const fetchList = () => {
    store.contactStore.fetchContacts().then(() => {
      console.log(store.contactStore.list);
    });
  };

  React.useEffect(() => {
    fetchList();
  }, []);

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];

  const refreshControl = (
    <RefreshControl
      refreshing={store.contactStore.loading}
      title="加载中"
      onRefresh={fetchList}
    />
  );

  return (
    <BPage showNavBar={false} topInsertBgColor="#f5f5f5">
      <Box style={{flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16}}>
        <Heading fontSize="xl" pr="2" pt={4} pb={4}>
          联系人 ({store.contactStore.list.length})
        </Heading>
        <FlatList
          refreshControl={refreshControl}
          refreshing={store.contactStore.loading}
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
                    <Text style={{marginLeft: 10}}>{item.nickname}</Text>
                  </VStack>
                </HStack>
                <Button colorScheme={'fuchsia'} height={30} variant={'subtle'} size="xs">私信</Button>
              </HStack>
            </Box>
          )}
        />
      </Box>
    </BPage>
  );
});
