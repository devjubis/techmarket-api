export interface CreateUserData {
  email: string;
  name?: string;
  password: string;
}
export interface User {
  id: string;
  email: string;
  name?: string | null;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse {
  id: string;
  email: string;
  name?: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginData {
  email: string;
  password: string;
}
