import React from 'react';
import { useSearchParams } from 'react-router-dom';


const Products = () => {
  const [searchparams] = useSearchParams();
  console.log(Object.fromEntries([ ...searchparams]));
  return (
    <div>
      {
        searchparams.get("search")
      }
    </div>
  )
}

export default Products