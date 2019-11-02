import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './auth.input';
import { AuthType } from './auth.type';

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => AuthType)
	async login(@Args('input') input: AuthInput) {
		return this.authService.validateUser(input);
	}
}
