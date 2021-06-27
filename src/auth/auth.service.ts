import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepositroy } from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepositroy) private usersRepositroy: UsersRepositroy,
  ) {}
}
