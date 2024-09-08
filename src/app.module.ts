import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './libs/persistence/db-config'
import { PersistenceModule } from './libs/persistence';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}