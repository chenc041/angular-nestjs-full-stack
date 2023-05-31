import { Global, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { WinstonConfigService } from '~/config/winston-config/winston-config.service';
import { JwtConfigService } from '~/config/jwt-config/jwt-config.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '~/config/jwt-config/jwt.strategy';
import { ConfigModule as LoadEnvModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmConfigService } from '~/config/typeorm-config/typeorm-config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const { registerAsync: jwtRegister } = JwtModule;
const { register: PassportRegister } = PassportModule;

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LoadEnvModule.forRoot({
      isGlobal: true,
      envFilePath: [join(__dirname, '..', `../../api/.${process.env.NODE_ENV || 'development'}.env`)],
    }),
    PassportRegister({ defaultStrategy: 'jwt' }),
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
    }),
    jwtRegister({
      useFactory: async (configService: ConfigService) => {
        const secret = await configService.get('JWT_SECRET');
        return {
          secret,
          signOptions: { expiresIn: '10h' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [JwtStrategy, JwtConfigService, WinstonConfigService],
  exports: [JwtConfigService, WinstonConfigService],
})
export class ConfigModule {}
