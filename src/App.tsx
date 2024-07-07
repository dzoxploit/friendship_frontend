import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FriendRequestForm from "./components/FriendRequestForm";
import FriendRequests from "./components/FriendRequests";
import FriendList from "./components/FriendList";
import CommonFriends from "./components/CommonFriends";
import BlockUserForm from "./components/BlockUserForm";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-friend-request">Create Friend Request</Link>
            </li>
            <li>
              <Link to="/friend-requests">Friend Requests</Link>
            </li>
            <li>
              <Link to="/friends">Friends List</Link>
            </li>
            <li>
              <Link to="/common-friends">Common Friends</Link>
            </li>
            <li>
              <Link to="/block-user">Block User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/create-friend-request"
            element={<FriendRequestForm />}
          />
          <Route
            path="/friend-requests"
            element={<FriendRequests email="john@example.com" />}
          />
          <Route
            path="/friends"
            element={<FriendList email="andy@example.com" />}
          />
          <Route path="/common-friends" element={<CommonFriends />} />
          <Route path="/block-user" element={<BlockUserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
