import * as bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert, OneToMany } from 'typeorm';
import { CommonEntity } from '../common/common.entity';
import { Post } from '../posts/post.entity';

@Entity()
export class User extends CommonEntity {
	@Column({ unique: true, length: 128 })
	email: string;

	@Column({ unique: true, length: 32 })
	username: string;

	@Column({ length: 256 })
	password: string;

	@OneToMany(() => Post, post => post.author)
	posts: Promise<Post[]>;

	@BeforeInsert()
	async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10);
	}

	async comparePassword(password: string): Promise<boolean> {
		return await bcrypt.compare(password, this.password);
	}
}
