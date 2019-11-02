import { InputType, Field } from 'type-graphql';

@InputType()
export class RegisterInput {
	@Field()
	readonly email: string;

	@Field()
	readonly username: string;

	@Field()
	readonly password: string;
}
