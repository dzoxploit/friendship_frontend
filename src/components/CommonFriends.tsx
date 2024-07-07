import React, { useState } from "react";
import { commonFriends } from "../services/api";
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

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const CommonFriends: React.FC = () => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [common, setCommon] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await commonFriends([email1, email2]);
      setCommon(response.data.friends);
    } catch (error) {
      console.error(error);
      alert("Error retrieving common friends.");
    }
  };

  return (
    <Container>
      <Title>Common Friends</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="First email"
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Second email"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
          required
        />
        <Button type="submit">Get Common Friends</Button>
      </Form>
      <List>
        {common.map((friend) => (
          <ListItem key={friend}>{friend}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CommonFriends;
