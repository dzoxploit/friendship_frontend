import React, { useState } from "react";
import { createFriendRequest } from "../services/api";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
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

const FriendRequestForm: React.FC = () => {
  const [requestor, setRequestor] = useState("");
  const [to, setTo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createFriendRequest(requestor, to);
      alert("Friend request sent!");
    } catch (error) {
      console.error(error);
      alert("Error sending friend request.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create Friend Request</Title>
      <Input
        type="email"
        placeholder="Your email"
        value={requestor}
        onChange={(e) => setRequestor(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Friend's email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
      />
      <Button type="submit">Send Request</Button>
    </Form>
  );
};

export default FriendRequestForm;
