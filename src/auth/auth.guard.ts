import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Injectable()
export class GraphQLAuthGuard extends AuthGuard('jwt') {
	canActivate(context: ExecutionContext) {
		const ctx = GqlExecutionContext.create(context);
		const { req } = ctx.getContext();
		return super.canActivate(new ExecutionContextHost([req]));
	}
}
