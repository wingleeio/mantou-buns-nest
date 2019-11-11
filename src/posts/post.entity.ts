import { Entity, Column, ManyToOne } from 'typeorm';
import { CommonEntity } from '../common/common.entity';
import { User } from '../users/user.entity';

@Entity()
export class Post extends CommonEntity {
	@Column('text')
	body: string;

	@ManyToOne(type => User, user => user.posts)
	author: User;
}
