import firestore from '@react-native-firebase/firestore';
import { t } from 'i18next';

const fetchAllUserData = () =>
  new Promise((resolve, reject) => {
    firestore()
      .collection(t('common:collectionName.users'))
      .get()
      .then((result: unknown) => {
        resolve(result);
      })
      .catch((error: unknown) => {
        reject(error);
      });
  });

const AuthService = {
  fetchAllUserData,
};

export default AuthService;
