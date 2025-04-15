import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { details } from './patient/details.entity';
import { PatientModule } from './patient/patient.module';
import { AbadsModule } from './abads/abads.module';

@Module({
  imports: [ PatientModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      entities: [
        details
      ],
      synchronize: true,
  }),
    AbadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
