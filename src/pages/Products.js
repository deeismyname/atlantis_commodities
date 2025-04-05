import React from 'react';
import styled from 'styled-components';
import { myproducts } from '../data/products';

const ProductsContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductsHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #070F2B;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  color: #555;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  color: #070F2B;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  color: #1B9C85;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const ProductSpecs = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  
  h4 {
    color: #070F2B;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  p {
    color: #555;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeader>
        <PageTitle>Our Premium Products</PageTitle>
        <PageSubtitle>Quality materials for industrial and construction applications</PageSubtitle>
      </ProductsHeader>

      <ProductsGrid>
        {myproducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage image={product.image} />
            <ProductContent>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductSpecs>
                <h4>Specifications:</h4>
                <p>{product.specifications}</p>
              </ProductSpecs>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products;