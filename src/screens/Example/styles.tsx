import { StyleSheet } from 'react-native';

import { Colors } from '../../theme/index';
const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 250,
        borderRadius: 140,
    },
    imageLeftBottom : {
        bottom: '-30%',
        left: 0,
      },
      brandContainer:  {
        height: 200,
        width: 200,
      },
      imageTopLeft:  {
        top: 0,
        left: 0,
      },
      imageTopRight: {
        top: '-5%',
        right: 0,
      },
      imageStar: {
        top: '15%',
        right: 20,
      },
      imageRight: {
        bottom: '-10%',
        right: 0,
      },
      imageBottom:  {
        top: '75%',
        right: 0,
      },
      imageCenter:  {
        top: '60%',
        right: 0,
      },
      signUpButton: {
        backgroundColor: Colors.commonThemeColor.lightBlue
      }
});

export default styles