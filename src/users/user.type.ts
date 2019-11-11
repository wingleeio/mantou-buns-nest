import { CommonType } from '../common/common.type';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class UserType extends CommonType {
	@Field()
	readonly email: string;

	@Field()
	readonly username: string;

	@Field()
	readonly token?: string;
}
