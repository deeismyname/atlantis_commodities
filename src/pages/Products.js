import React from 'react';
import styled from 'styled-components';
import { myproducts } from '../data/products';
import ProductCard from '../components/ProductCard'; // Import the new component
import CTA from '../components/CTA';

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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const Products = () => {
  return (
    <>
    <ProductsContainer>
      <ProductsHeader>
        <PageTitle>Our Premium Products</PageTitle>
        <PageSubtitle>Quality materials for industrial and general applications</PageSubtitle>
      </ProductsHeader>

      <ProductsGrid>
        {myproducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ProductsContainer>
    <CTA />
    </>
  );
};

export default Products;