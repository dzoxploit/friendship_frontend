import axios from "axios";

const API_URL = "http://localhost:8081";

export const createFriendRequest = (requestor: string, to: string) => {
  return axios.post(`${API_URL}/friend-request`, { requestor, to });
};

export const respondToFriendRequest = (
  requestor: string,
  to: string,
  action: string
) => {
  return axios.post(`${API_URL}/friend-request/respond`, {
    requestor,
    to,
    action,
  });
};

export const listFriendRequests = (email: string) => {
  return axios.get(`${API_URL}/friend-requests`, { params: { email } });
};

export const listFriends = (email: string) => {
  return axios.get(`${API_URL}/friends`, { params: { email } });
};

export const commonFriends = (friends: string[]) => {
  return axios.get(`${API_URL}/common-friends`, { params: { friends } });
};

export const blockUser = (requestor: string, block: string) => {
  return axios.post(`${API_URL}/block-user`, { requestor, block });
};
