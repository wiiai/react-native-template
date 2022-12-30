import { StyleSheet } from 'react-native';
import theme from '@/utils/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  btn_close: {
    zIndex: 5,
    position: 'absolute',
    left: 10,
    top: 50,
    color: '#333',
    width: 30,
    height: 30,
  },
  cardBox: {
    display: 'flex',
    alignItems: 'center',
    height: 140,
  },
  logo: {
    width: 98,
    height: 98,
    borderRadius: 49,
    marginTop: 60,
  },
  formBox: {
    paddingVertical: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginHorizontal: 18,
    borderRadius: 8,
  },
  input: {
    height: 44,
    paddingVertical: 4,
  },
  loginBtn: {
    fontSize: 16,
    height: 44,
    lineHeight: 44,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 2,
    backgroundColor: '#333',
  },
  tipWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  bwtWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
});

export { styles }