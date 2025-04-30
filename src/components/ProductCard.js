import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 1rem;
  background: #f8f8f8;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  color: #070F2B;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  flex-grow: 1;
`;

const SpecsPreview = styled.div`
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: #444;
  
  p {
    margin: 0.3rem 0;
  }
`;

const ProductPrice = styled.div`
  font-weight: bold;
  color: #1B9C85;
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

const ViewDetailsButton = styled(Link)`
  display: block;
  text-align: center;
  background-color: #070F2B;
  color: white;
  padding: 0.6rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a237e;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <CardImage src={product.image} alt={product.name} />
      <CardContent>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        
        <SpecsPreview>
          <p><strong>Thickness:</strong> {product.specifications.thickness}</p>
          <p><strong>Dimensions:</strong> {product.specifications.dimensions}</p>
        </SpecsPreview>
        
        <ProductPrice>{product.price}</ProductPrice>
        <ViewDetailsButton to={`/products/${product.id}`}>
          View Full Specifications
        </ViewDetailsButton>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;