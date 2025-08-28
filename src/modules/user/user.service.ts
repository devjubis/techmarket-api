import bcrypt from 'bcryptjs';
import { userRepository } from './user.repository';
import { CreateUserData } from './user.types';
import { CreateUserInput } from './user.schema';

export const userService = {
  async createUser(userData: CreateUserInput) {
    const { email, password, name } = userData;

    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Usuário já existe');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    return userRepository.create({
      email,
      name,
      password: hashedPassword
    });
  },

  async getUserById(id: string) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  },

  async getUserByEmail(email: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }
};