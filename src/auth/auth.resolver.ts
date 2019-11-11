import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './auth.input';
import { UserType } from '../users/user.type';

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => UserType)
	async login(@Args('input') input: AuthInput) {
		return this.authService.validateUser(input);
	}
}
