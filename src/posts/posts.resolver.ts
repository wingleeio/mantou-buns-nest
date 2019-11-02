import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { PostType } from './post.type';
import { PostInput } from './post.input';
import { PostUpdateInput } from './post-update.input';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from '../auth/auth.guard';

@Resolver('Posts')
export class PostsResolver {
	constructor(private readonly postService: PostsService) {}

	@Query(() => [PostType])
	async posts() {
		return this.postService.findAll();
	}
	@UseGuards(GraphQLAuthGuard)
	@Mutation(() => PostType)
	async createPost(@Args('input') input: PostInput) {
		return this.postService.create(input);
	}

	@Mutation(() => PostType)
	async updatePost(@Args('input') input: PostUpdateInput) {
		return this.postService.update(input);
	}
}
