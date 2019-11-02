import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './user.type';
import { RegisterInput } from './register.input';

@Resolver('Users')
export class UsersResolver {
	constructor(private readonly userService: UsersService) {}

	@Mutation(() => UserType)
	async createUser(@Args('input') input: RegisterInput) {
		return this.userService.create(input);
	}
}
