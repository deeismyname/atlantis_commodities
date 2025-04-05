import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { myproducts } from '../data/products';

const DetailsWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`;

const Content = styled.div`
  h2 {
    color: #070F2B;
  }
  p {
    margin: 1rem 0;
    color: #666;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const product = myproducts.find(p => p.id === parseInt(id));

  if (!product) return <DetailsWrapper>Product not found</DetailsWrapper>;

  return (
    <DetailsWrapper>
      <ProductImage src={product.image} alt={product.name} />
      <Content>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Specifications:</strong> {product.specifications}</p>
      </Content>
    </DetailsWrapper>
  );
};

export default ProductDetails;