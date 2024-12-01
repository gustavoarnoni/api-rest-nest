import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;

    console.log('Login attempt:', { email, password });

    const user = await this.authService.validateUser(email, password, this.usersService);

    if (!user) {
      console.error('Invalid credentials');
      throw new Error('Invalid credentials');
    }

    console.log('User validated:', user);
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerDto: { name: string; email: string; password: string }) {
    console.log('Register attempt:', registerDto);

    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const user = await this.usersService.create(registerDto);
    console.log('User registered:', user);
    return user;
  }
}
