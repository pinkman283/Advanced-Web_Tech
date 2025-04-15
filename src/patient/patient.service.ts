import { Injectable } from '@nestjs/common';
import { details } from './details.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientService {
    constructor(@InjectRepository(details) private myRepo: Repository<details>){}
    getHello()
    {
        return "hello this is shihub";
    }
    getId()
    {
        return "hey everything is all right";
    }
    SaveData(ab)
    {
        this.myRepo.save(ab)
        return "data inserted"
    }
    getall()
    {
        return this.myRepo.find()
    }
    getIdd(id)
    {
        return this.myRepo.findOne({where:{id}})
    }
    deleteId(id)
    {
        this.myRepo.delete(id)
        return "delete complete";
    }

}
