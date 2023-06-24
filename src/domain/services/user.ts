import { User } from "../entity/user";
import { Repository } from "../repository/repository";

export class UserService {
  private userRepository: Repository<User>;

  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  create(user: User): User {
    const newUser = this.userRepository.create(user);
    return newUser;
  }

  getUser(id: number): User {
    const user = this.userRepository.getById(id);
    return user;
  }

  getAll(): User[] {
    const users = this.userRepository.getAll();
    return users;
  }
}
