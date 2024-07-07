import React, { useEffect, useState } from "react";
import { listFriends } from "../services/api";
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

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const FriendList: React.FC<{ email: string }> = ({ email }) => {
  const [friends, setFriends] = useState<string[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await listFriends(email);
        setFriends(response.data.friends);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFriends();
  }, [email]);

  return (
    <Container>
      <Title>Friends List</Title>
      <List>
        {friends.map((friend) => (
          <ListItem key={friend}>{friend}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FriendList;
