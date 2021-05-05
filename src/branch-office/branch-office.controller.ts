import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BranchOfficeService } from './branch-office.service';
import { CreateBranchOfficeDto } from './dto/create-branch-office.dto';
import { UpdateBranchOfficeDto } from './dto/update-branch-office.dto';

@Controller()
export class BranchOfficeController {
  constructor(private readonly branchOfficeService: BranchOfficeService) {}

  @MessagePattern('createBranchOffice')
  create(@Payload() createBranchOfficeDto: CreateBranchOfficeDto) {
    return this.branchOfficeService.create(createBranchOfficeDto);
  }

  @MessagePattern('findAllBranchOffice')
  findAll() {
    return this.branchOfficeService.findAll();
  }

  @MessagePattern('findOneBranchOffice')
  findOne(@Payload() id: number) {
    return this.branchOfficeService.findOne(id);
  }

  @MessagePattern('updateBranchOffice')
  update(@Payload() updateBranchOfficeDto: UpdateBranchOfficeDto) {
    return this.branchOfficeService.update(updateBranchOfficeDto.id, updateBranchOfficeDto);
  }

  @MessagePattern('removeBranchOffice')
  remove(@Payload() id: number) {
    return this.branchOfficeService.remove(id);
  }
}
