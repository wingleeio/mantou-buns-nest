import { InputType, Field } from 'type-graphql';

@InputType()
export class PostInput {
	@Field()
	readonly body: string;
}
