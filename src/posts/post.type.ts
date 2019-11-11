import { ObjectType, Field, Int, ID } from 'type-graphql';
import { CommonType } from '../common/common.type';
import { User } from '../users/user.entity';
import { UserType } from '../users/user.type';

@ObjectType()
export class PostType extends CommonType {
	@Field()
	readonly body: string;

	@Field(type => UserType)
	readonly author: User;
}
