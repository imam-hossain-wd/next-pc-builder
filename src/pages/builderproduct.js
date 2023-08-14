import React from 'react';
import { useSelector } from 'react-redux';

const BuilderProduct = () => {
    const selectedComponents = useSelector(state => state.pcBuilder.selectedComponents);
    return (
        <div>
        <h2>This is my PC product builder page...???!</h2>
        <div>
          {Object.entries(selectedComponents).map(([category, products]) => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {products.map(product => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
};

export default BuilderProduct;