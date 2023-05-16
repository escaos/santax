/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, memo, ReactElement, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { useStateStorage } from '../hooks/useStateStorage';
import { Order } from '../graphql/apiVenture';

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  isLoading: boolean;
  order?: Order;
  total: number;
  // eslint-disable-next-line no-unused-vars
  storeOrder: (value?: Order) => void;
};

const Context = createContext<ContextProps>({
  isLoading: true,
  total: 0,
  storeOrder: () => {},
});

const ContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [isLoading, setLoading] = useState(true);
  const { value: order, storeValue, resetValue } = useStateStorage<Order>('order');
  const [total, setTotal] = useState(order?.total || 0);

  const storeOrder = (newOrder?: Order) => {
    if (newOrder) {
      setTotal(newOrder.total);
      storeValue(newOrder);
      return;
    }

    setTotal(0);
    resetValue();
  };

  useEffect(() => {
    const mountContext = () => {
      setLoading(true);
    };

    mountContext();
  }, []);

  const providerValues = useMemo(
    () => ({
      isLoading,
      order,
      total,
      storeOrder,
    }),
    [isLoading, total]
  );

  return <Context.Provider value={providerValues}>{children}</Context.Provider>;
};

export const AppProvider = memo(ContextProvider);

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useContext must be used within Context');
  }

  return context;
};
