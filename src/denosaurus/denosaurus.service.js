import { Injectable } from "@nestjs/common";

@Injectable()
export class DenosaurusService {
  getAllDenosaurus() {
    return [
      {
        name: "tiranosaurus",
        description: "roar",
      },
    ];
  }

  deleteDenosauru() {}

  putDenosauru() {}

  createDenosauru() {}
}
