import { Request, Response } from 'express';
import { userService } from './user.service';
import { CreateUserInput } from './user.schema';
import { UserResponse } from './user.types';

export const userController = {
  async create(req: Request, res: Response) {
    try {
      const userData: CreateUserInput = req.body;
      
      const user = await userService.createUser(userData);
      
      const userResponse: UserResponse = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };

      res.status(201).json({
        success: true,
        data: userResponse,
        message: 'Usuário criado com sucesso'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: (error as Error).message
      });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      
      const userResponse: UserResponse = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };

      res.status(200).json({
        success: true,
        data: userResponse
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: (error as Error).message
      });
    }
  }
};