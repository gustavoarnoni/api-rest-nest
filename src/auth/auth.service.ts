import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string, usersService: UsersService): Promise<any> {
    console.log('Validating user with email:', email);

    const user = await usersService.findByEmail(email);
    console.log('User found:', user);

    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('Password match successful');
      const { password, ...result } = user;
      return result;
    }

    console.error('Validation failed: Invalid credentials');
    return null;
  }

  async login(user: any) {
    console.log('Generating JWT for user:', user);
    const payload = { username: user.name, sub: user.id };
    const token = this.jwtService.sign(payload);
    console.log('JWT generated:', token);
    return {
      access_token: token,
    };
  }
}
