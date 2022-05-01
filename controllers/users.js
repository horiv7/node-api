import { v4 as uuidv4 } from "uuid";

let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    id: "a3347665-54df-4a68-a049-5cb61770018b",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    id: "ccdf504a-add6-44ea-b6e4-448f1c438781",
  },
];


export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  (req, res) => {
    const user = req.body;

    const userWithId = { ...user, id: uuidv4() };

    users.push(userWithId);

    res.send(`User with name:${user.firstName} added to DB`);
  };
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send("User wit id: " + id + " is deleted.");
};

export const editUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send("User wit id: " + id + " is updated.");
};
