import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

import classes from './AddUsers.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');

  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    console.log('>>> button clicked ', username, age);
    event.preventDefault();

    if (username.trim().length > 0 && +age > 0) {
      props.addUserHandler(username, age);
      setUsername('');
      setAge('');
    }
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Name:</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={username}
        />

        <label htmlFor="age">Age:</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />

        <Button type="submit" onClick={addUserHandler}>
          Save
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
