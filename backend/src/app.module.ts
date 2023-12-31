import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  //TypeOrmModule.forRoot({
    //  type:'sqlite',
    //  database: 'parkingDatabase',
    //  entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //  synchronize: true,
  //  }),
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
