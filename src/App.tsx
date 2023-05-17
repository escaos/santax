import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { useGetProductsQuery } from './graphql/apiVenture';
import { LoadingScreen } from './shared/Loading';

const App = () => {
  const { data, loading, error } = useGetProductsQuery();
  const products = data?.products?.items || [];

  return (
    <>
      <Header />
      {error && error.message && <p>{error.message}</p>}

      {loading && <LoadingScreen message="Loading" />}

      {!loading && <ProductList products={products} />}
    </>
  );
};

export default App;
