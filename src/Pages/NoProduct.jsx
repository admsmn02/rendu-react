import React from 'react';
import styled from 'styled-components';

const NoProductContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh; // Full viewport height
 background-color: #f5f5f5; // Light gray background
`;

const Message = styled.p`
 font-size: 24px;
 color: #333; // Dark gray text
 text-align: center;
`;

export default function NoProductPage () {
 return (
    <NoProductContainer>
      <Message>No products were found.</Message>
    </NoProductContainer>
 );
};

