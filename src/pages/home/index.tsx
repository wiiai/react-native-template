import * as React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {useStore} from '@/models';
import BPage from '@/baseUI/BPage';
import {RootStackParamList} from '@/navigator';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '@/navigator/MainTab';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from 'native-base';

type IHomeNavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export const HomeScreen = observer(() => {
  const navigation = useNavigation<IHomeNavigateProps['navigation']>();
  const store = useStore();

  return (
    <BPage showNavBar={false}>
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 12, marginTop: 20}}>
          {store.todos?.todos.map((it, index) => {
            return (
              <View
                key={index}
                style={{marginBottom: 12, flexDirection: 'row'}}>
                <Text>
                  {index}. {it.title}
                </Text>
                <View style={{marginLeft: 12}}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      store.todos.removeItem(index);
                    }}>
                    <Text>Remove</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            );
          })}
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 12}}>
          <Button onPress={() => store.todos?.addItem()}>Add Todo</Button>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 12}}>
          <Button
            isLoading={store.userStore.loading}
            onPress={() =>
              store.userStore.login({
                account: '000001',
                password: '666666',
              })
            }>
            Click to request data
          </Button>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 12}}>
          <Button
            onPress={() =>
              navigation.navigate('H5', {url: 'https://www.huishoubao.com/'})
            }>
            <Text style={{color: '#fff'}}>Go H5</Text>
          </Button>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 12}}>
          <Button onPress={() => navigation.navigate('Detail')}>
            <Text style={{color: '#fff'}}>Go Detail</Text>
          </Button>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 12}}>
          <Button onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#fff'}}>Go Login</Text>
          </Button>
        </View>
      </View>
    </BPage>
  );
});
