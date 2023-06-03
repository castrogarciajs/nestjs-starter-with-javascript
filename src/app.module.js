import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DenosaurusModule } from './denosaurus/denosaurus.module';

@Module({
  imports: [DenosaurusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}