import React, { useState } from 'react';
import AddUser from './components/users/AddUsers';
import UserList from './components/users/UserList';
import { v4 as uuid } from 'uuid';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prev) => {
      return [...prev, { id: uuid(), name, age }];
    });
  };

  return (
    <div>
      <AddUser addUserHandler={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
