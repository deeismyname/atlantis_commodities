import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { myproducts } from '../data/products';

const DetailsWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
  background: #f8f8f8;
  padding: 1rem;
`;

const Content = styled.div`
  h2 {
    color: #070F2B;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .description {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .price {
    font-weight: bold;
    color: #1B9C85;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SpecsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 0.8rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    color: #070F2B;
    font-weight: bold;
    width: 40%;
  }
  
  td {
    color: #444;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const product = myproducts.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <DetailsWrapper>
      <ProductImage src={product.image} alt={product.name} />
      <Content>
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>
        
        <h3>Product Specifications</h3>
        <SpecsTable>
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <th>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </SpecsTable>
      </Content>
    </DetailsWrapper>
  );
};

export default ProductDetails;