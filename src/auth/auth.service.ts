import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthInput } from './auth.input';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UsersService,
		private readonly jwtService: JwtService,
	) {}

	async validateUser({ email, password }: AuthInput): Promise<any> {
		const user = await this.userService.findByEmail(email);
		if (user && (await user.comparePassword(password))) {
			return {
				...user,
				token: this.jwtService.sign({ ...user }),
			};
		}

		throw new HttpException(
			'Invalid username/password',
			HttpStatus.BAD_REQUEST,
		);
	}
}
