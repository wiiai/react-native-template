import * as React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {request} from '@/config/request';
import {observer} from 'mobx-react-lite';
import {useStore} from '@/models';

export const HomeScreen = observer(() => {
  const store = useStore();
  return (
    <View style={{flex: 1, flexDirection: 'column', padding: 12}}>
      <View>
        {store?.todos.map((it, index) => {
          return (
            <View style={{marginBottom: 12, flexDirection: 'row'}}>
              <Text>
                {index}. {it.title}
              </Text>
              <View style={{marginLeft: 12}}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    store.removeItem(index);
                  }}>
                  <Text>Remove</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          );
        })}
      </View>

      <View style={{marginTop: 20}}>
        <TouchableHighlight
          onPress={() => {
            store?.addItem();
          }}>
          <View style={{backgroundColor: 'blue', padding: 10}}>
            <Text style={{color: '#fff'}}>Add Todo</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableHighlight
          onPress={() => {
            request({
              url: '/user/check_login',
            }).then(res => {
              console.log(res);
            });
          }}>
          <View style={{backgroundColor: 'blue', padding: 10}}>
            <Text style={{color: '#fff'}}>Click to request data</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
});
