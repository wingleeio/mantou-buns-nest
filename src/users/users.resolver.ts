import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './user.type';
import { RegisterInput } from './register.input';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from '../auth/auth.guard';
import { CurrentUser } from './user.decorator';
import { User } from './user.entity';

@Resolver('Users')
export class UsersResolver {
	constructor(private readonly userService: UsersService) {}

	@UseGuards(GraphQLAuthGuard)
	@Query(() => UserType)
	async current_user(@CurrentUser() user: User) {
		return user;
	}

	@Mutation(() => UserType)
	async create_user(@Args('input') input: RegisterInput) {
		return this.userService.create(input);
	}
}
