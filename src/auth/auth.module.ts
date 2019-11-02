import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthStrategy } from './auth.strategy';
import { GraphQLAuthGuard } from './auth.guard';
import { AuthResolver } from './auth.resolver';

@Module({
	imports: [
		UsersModule,
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: {
				expiresIn: 36000 * 10,
			},
		}),
	],
	providers: [AuthService, AuthStrategy, GraphQLAuthGuard, AuthResolver],
	exports: [GraphQLAuthGuard],
})
export class AuthModule {}
