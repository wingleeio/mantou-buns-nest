import { ObjectType, Field, Int, ID } from 'type-graphql';
import { CommonType } from '../common/common.type';

@ObjectType()
export class PostType extends CommonType {
	@Field()
	readonly body: string;
}
