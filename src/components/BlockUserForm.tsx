import React, { useState } from "react";
import { blockUser } from "../services/api";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BlockUserForm: React.FC = () => {
  const [requestor, setRequestor] = useState("");
  const [block, setBlock] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await blockUser(requestor, block);
      alert("User blocked!");
    } catch (error) {
      console.error(error);
      alert("Error blocking user.");
    }
  };

  return (
    <Container>
      <Title>Block User</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your email"
          value={requestor}
          onChange={(e) => setRequestor(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="User to block"
          value={block}
          onChange={(e) => setBlock(e.target.value)}
          required
        />
        <Button type="submit">Block User</Button>
      </Form>
    </Container>
  );
};

export default BlockUserForm;
