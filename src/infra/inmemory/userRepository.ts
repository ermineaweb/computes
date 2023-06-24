import { User } from "../../domain/entity/user";
import { Repository } from "../../domain/repository/repository";

export class UserRepositoryInMemory implements Repository<User> {
  static users: User[] = [{ id: 0, username: "john" }];

  constructor() {}

  create(user: User): User {
    const newUser = { id: UserRepositoryInMemory.users.length + 1, ...user };
    UserRepositoryInMemory.users.push(newUser);
    return newUser;
  }

  getById(id: number): User {
    const user = UserRepositoryInMemory.users.find((u) => u.id === id);
    return user;
  }

  getAll(): User[] {
    return UserRepositoryInMemory.users;
  }
}
