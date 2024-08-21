import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm/repository/Repository';
@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const newCity = this.cityRepository.create(createCityDto);
    return await this.cityRepository.save(newCity);
  }

  async findAll(): Promise<City[]> {
    return await this.cityRepository.find();
  }

  async findOne(id: number): Promise<City> {
    return await this.cityRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    await this.cityRepository.update(id, updateCityDto);
    return this.cityRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}
