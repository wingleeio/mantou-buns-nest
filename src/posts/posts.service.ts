import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostUpdateInput } from './post-update.input';

@Injectable()
export class PostsService {
	constructor(
		@InjectRepository(Post)
		private readonly postRepository: Repository<Post>,
	) {}

	async findAll(): Promise<Post[]> {
		return await this.postRepository.find();
	}

	async create({ body }): Promise<Post> {
		const post = new Post();
		post.body = body;

		return await post.save();
	}

	async update({ uuid, body }: PostUpdateInput): Promise<Post> {
		const post = await this.postRepository.findOne({ where: { uuid } });
		post.body = body;

		return await post.save();
	}
}
