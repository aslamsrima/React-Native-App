import { CommonActions } from '@react-navigation/native';

const Methods = {
  startWithReset: (navigation: { dispatch: (arg0: CommonActions.Action) => void }, screenName: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: screenName }],
      }),
    );
  },
};

export default Methods;
