import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { PatientService } from './patient.service';
import { check } from './dto/check.dto';

@Controller('patient')
export class PatientController {
      constructor(private readonly patientServ: PatientService) {}

      @Get()
      getHello()
      {
        return this.patientServ.getHello();
      }
      @Post()
      checkId(@Body(new ValidationPipe()) ab:check)
      {
        return this.patientServ.getId();
      }

      @Post('save')
      SaveData(@Body() ab)
      {
        return this.patientServ.SaveData(ab)
      }
      @Post('all')
      getAll()
      {
        return this.patientServ.getall()
      }
      @Post('getId')
      getIdd(@Body('id')id)
      {
        return this.patientServ.getIdd(id)
      }
      @Delete('delete/:id')
      deleteId(@Param('id') id)
      {
        return this.patientServ.deleteId(id)
      }

}
