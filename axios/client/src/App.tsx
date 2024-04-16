import Product from './types';
import ProductList from './components/product-list';
import AddProduct from './components/add-product';

import { useState ,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      
          const getProducts=async()=>{
          const response = await axios.get('http://localhost:8000/products');
          setProducts(response.data);
      }
      getProducts();
  }, []);

  const newProduct=(prod:Product)=>{
setProducts([...products,prod])
  }
  const deleted=(id:number)=>{
    const remove =products.filter(item=>item.id!==id)
    setProducts(remove)

  }
  return (
    <div className="container">
      <ProductList product={products} onDelete={deleted}/>
      <AddProduct onProduct={newProduct}/>
    </div>
  );
}

export default App;
