import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User, Student, Teacher, Admin } from '../auth/entities';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: parseInt(configService.get<string>('DB_PORT', '5432'), 10),
  username: configService.get<string>('DB_USER', 'postgres'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME', 'topicos_db'),
  entities: [User, Student, Teacher, Admin],
  synchronize: true,
  logging:
    configService.get<string>('NODE_ENV') === 'development' ? ['error', 'warn'] : false,
});