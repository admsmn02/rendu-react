import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

const Message = styled.div`
    font-size: 2rem;
    color: #6c757d;
`;

export default function NotFound() {
    return (
        <Container>
            <Message>Not Found</Message>
        </Container>
    );
}