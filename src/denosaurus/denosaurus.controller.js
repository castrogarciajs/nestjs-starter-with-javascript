import { Controller, Get } from '@nestjs/common';

@Controller('denosaurus')
export class DenosaurusController {
    @Get()
    denosaurus() {
        return "Hello denosaurus"
    }
}
