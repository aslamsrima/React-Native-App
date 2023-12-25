import { useCallback, useContext } from 'react';

import { UPDATE_LOADER } from '../store/actionType';

import { LoaderContext } from '../store/context/loader';

const useLoader = () => {
  const { dispatch, isLoading } = useContext(LoaderContext);

  const updateLoader = useCallback(async (isLoader: boolean) => {
    dispatch({
      type: UPDATE_LOADER,
      payload: isLoader,
    });
  }, []);

  return { updateLoader, isLoading };
};

export default useLoader;
