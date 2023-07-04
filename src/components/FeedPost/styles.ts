import { StyleSheet } from "react-native";

import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

 const styles = StyleSheet.create({
    post: {},
    header: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    threeDots: {
      marginLeft: 'auto',
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    icon: {
      marginHorizontal: 5,
    },
    boldLikedText: {
      fontWeight: fonts.weight.bold,
    },
    text: {
      color: colors.black,
      lineHeight: 20,
    },
    viewAllCommentsText: {
      color: colors.grey,
    },
    comments: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    commentsText: {
      color: colors.black,
      flex: 1,
    },
  });

  export default styles;