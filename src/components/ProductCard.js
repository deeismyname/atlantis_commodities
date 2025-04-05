import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border: 2px solid #070F2B;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductTitle = styled.h3`
  color: #070F2B;
  margin: 1rem 0;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <Link to={`/product/${product.id}`} style={{ color: '#070F2B' }}>
        View Details
      </Link>
    </Card>
  );
};

export default ProductCard;