import { Module } from '@nestjs/common';
import { DenosaurusController } from './denosaurus.controller';
import { DenosaurusService } from './denosaurus.service';

@Module({
  controllers: [DenosaurusController],
  providers: [DenosaurusService]
})
export class DenosaurusModule {}
