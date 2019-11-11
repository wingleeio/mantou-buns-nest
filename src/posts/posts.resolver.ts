import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { PostType } from './post.type';
import { PostInput } from './post.input';
import { PostUpdateInput } from './post-update.input';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../users/user.decorator';
import { User } from '../users/user.entity';
import { Post } from './post.entity';

@Resolver(() => PostType)
export class PostsResolver {
	constructor(private readonly postService: PostsService) {}

	@Query(() => [PostType])
	async posts(@Args('page') page: number): Promise<Post[]> {
		return this.postService.findAll(page);
	}

	@Query(() => [PostType])
	async posts_by(
		@Args('page') page: number,
		@Args('id') id: string,
	): Promise<Post[]> {
		return this.postService.findByAuthorId(id, page);
	}

	@UseGuards(GraphQLAuthGuard)
	@Mutation(() => PostType)
	async create_post(
		@CurrentUser() user: User,
		@Args('input') input: PostInput,
	) {
		return await this.postService.create(input, user);
	}

	@Mutation(() => PostType)
	async update_post(@Args('input') input: PostUpdateInput) {
		return await this.postService.update(input);
	}
}
