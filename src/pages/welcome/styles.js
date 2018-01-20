import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  welcomeTitle: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },

  welcomeDescription: {
    fontSize: fonts.regular,
    color: colors.white,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    lineHeight: 21,
  },

  input: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    height: 44,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: fonts.small,
  },

  button: {
    backgroundColor: colors.secundary,
    marginTop: 10,
    alignSelf: 'stretch',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: fonts.small,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;

