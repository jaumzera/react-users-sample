import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

import classes from './AddUsers.module.css';

const addUserHandler = (event) => {
  event.preventDefault();
};

const AddUser = (props) => {
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Name:</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age:</label>
        <input id="age" type="number" />

        <Button type="submit">Save</Button>
      </form>
    </Card>
  );
};

export default AddUser;
