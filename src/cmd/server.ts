import express from "express";
import { UserService } from "../domain/services/user";
import { UserRepositoryInMemory } from "../infra/inmemory/userRepository";

const app = express();

const userRepository = new UserRepositoryInMemory();
const userService = new UserService(userRepository);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  return next();
});

app.post("/user", (req, res) => {
  res.status(200).json(userService.create({ username: "jane" }));
});

app.get("/user", (req, res) => {
  res.status(200).json(userService.getAll());
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(userService.getUser(id));
});

app.listen(5000, () => {
  console.log("server started");
});
