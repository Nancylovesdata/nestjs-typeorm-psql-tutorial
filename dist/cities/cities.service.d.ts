import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm/repository/Repository';
export declare class CitiesService {
    private readonly cityRepository;
    constructor(cityRepository: Repository<City>);
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    findOne(id: number): Promise<City>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<City>;
    remove(id: number): Promise<void>;
}
