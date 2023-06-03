import { Controller, Get } from "@nestjs/common";
import { DenosaurusService } from "./denosaurus.service";

@Controller("denosaurus")
export class DenosaurusController {
  /**
   *
   * @param {DenosaurusService} denosaurusServices
   */
  denosaurusServices;

  @Get()
  denosaurus() {
    return this.denosaurusServices.getAllDenosaurus();
  }
}
