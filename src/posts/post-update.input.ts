import { InputType, Field } from 'type-graphql';

@InputType()
export class PostUpdateInput {
	@Field()
	readonly uuid: string;

	@Field()
	readonly body: string;
}
