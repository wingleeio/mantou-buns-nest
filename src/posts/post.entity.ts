import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../common/common.entity';

@Entity()
export class Post extends CommonEntity {
	@Column('text')
	body: string;
}
