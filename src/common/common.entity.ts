import {
	BaseEntity,
	Column,
	PrimaryGeneratedColumn,
	Generated,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

export abstract class CommonEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@Generated('uuid')
	uuid: string;

	@CreateDateColumn()
	created_at: string;

	@UpdateDateColumn()
	updated_at: string;
}
