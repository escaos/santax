import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { useGetProductsQuery } from './graphql/apiVenture';

const App = () => {
  const { data, loading, error } = useGetProductsQuery();
  const products = data?.products?.items || [];

  return (
    <>
      <Header></Header>
      {error && error.message && <p>{error.message}</p>}
      {loading && <p>Spinning...</p>}
      {!loading && data && <ProductList products={products} />}
    </>
  );
};

export default App;
