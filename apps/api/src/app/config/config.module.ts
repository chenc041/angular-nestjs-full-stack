import { Global, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { WinstonConfigService } from './winston-config/winston-config.service';
import { JwtConfigService } from './jwt-config/jwt-config.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt-config/jwt.strategy';
import { ConfigModule as LoadEnvModule } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmConfigService } from './typeorm-config/typeorm-config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

console.log(
  join(__dirname, `/environments/.${process.env.NODE_ENV || 'development'}.env`))

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LoadEnvModule.forRoot({
      isGlobal: true,
      envFilePath: [
        join(`/environments/.${process.env.NODE_ENV || 'development'}.env`),
      ],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [JwtStrategy, JwtConfigService, WinstonConfigService],
  exports: [JwtConfigService, WinstonConfigService],
})
export class ConfigModule {}
