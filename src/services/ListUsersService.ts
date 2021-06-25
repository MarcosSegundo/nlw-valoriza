import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";


class ListUsersService {
  async execute() {
    const usersRespositories = getCustomRepository(UsersRepositories);

    const users = await usersRespositories.find();

    return classToPlain(users);
  }
}

export { ListUsersService };
