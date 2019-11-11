import { Injectable } from '@nestjs/common';
import { RegisterInput } from './register.input';
import { UserType } from './user.type';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async create({
		email,
		username,
		password,
	}: RegisterInput): Promise<UserType> {
		const user = new User();
		user.email = email;
		user.username = username;
		user.password = password;

		return user.save();
	}

	async findOneById(id: number): Promise<User> {
		return this.userRepository.findOne({ where: { id } });
	}

	async findOneByUUID(uuid: string): Promise<User> {
		return this.userRepository.findOne({ where: { uuid } });
	}

	async findOneByEmail(email: string): Promise<User> {
		return this.userRepository.findOne({ where: { email } });
	}
}
