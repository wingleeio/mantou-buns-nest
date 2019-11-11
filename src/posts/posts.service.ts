import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostUpdateInput } from './post-update.input';
import { User } from '../users/user.entity';

@Injectable()
export class PostsService {
	constructor(
		@InjectRepository(Post)
		private readonly postRepository: Repository<Post>,
	) {}

	async findAll(page: number): Promise<Post[]> {
		return await this.postRepository.find({
			take: 25,
			skip: 25 * (page - 1),
			relations: ['author'],
			order: {
				created_at: 'DESC',
			},
		});
	}

	async findByAuthorId(id: string, page: number): Promise<Post[]> {
		return await this.postRepository.find({
			take: 25,
			skip: 25 * (page - 1),
			relations: ['author'],
			order: {
				created_at: 'DESC',
			},
			where: {
				author: {
					id,
				},
			},
		});
	}

	async create({ body }, user: User): Promise<Post> {
		const post = new Post();
		post.body = body;
		post.author = user;

		return await post.save();
	}

	async update({ uuid, body }: PostUpdateInput): Promise<Post> {
		const post = await this.postRepository.findOne({
			where: { uuid },
			relations: ['author'],
		});
		post.body = body;

		return await post.save();
	}
}
