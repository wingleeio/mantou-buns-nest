import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class CommonType {
	@Field(() => ID)
	readonly id: number;

	@Field()
	readonly uuid: string;

	@Field()
	readonly created_at: string;

	@Field()
	readonly updated_at: string;
}
