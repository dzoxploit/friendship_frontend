import React, { useEffect, useState } from "react";
import { listFriendRequests, respondToFriendRequest } from "../services/api";
import styled from "styled-components";

interface FriendRequest {
  requestor: string;
  status: string;
}

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) =>
      props.color === "#007bff" ? "#0056b3" : "#c82333"};
  }
`;

const FriendRequests: React.FC<{ email: string }> = ({ email }) => {
  const [requests, setRequests] = useState<FriendRequest[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await listFriendRequests(email);
        setRequests(response.data.requests);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();
  }, [email]);

  const handleRespond = async (requestor: string, action: string) => {
    try {
      await respondToFriendRequest(requestor, email, action);
      setRequests((prev) => prev.filter((req) => req.requestor !== requestor));
      alert(`Friend request ${action}ed.`);
    } catch (error) {
      console.error(error);
      alert("Error responding to friend request.");
    }
  };

  return (
    <Container>
      <Title>Friend Requests</Title>
      <List>
        {requests.map((req) => (
          <ListItem key={req.requestor}>
            <span>
              {req.requestor} ({req.status})
            </span>
            {req.status === "pending" && (
              <div>
                <Button
                  color="#007bff"
                  onClick={() => handleRespond(req.requestor, "accept")}
                >
                  Accept
                </Button>
                <Button
                  color="#dc3545"
                  onClick={() => handleRespond(req.requestor, "reject")}
                >
                  Reject
                </Button>
              </div>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FriendRequests;
