import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    create(createCityDto: CreateCityDto): Promise<import("./entities/city.entity").City>;
    findAll(): Promise<import("./entities/city.entity").City[]>;
    findOne(id: string): Promise<import("./entities/city.entity").City>;
    update(id: string, updateCityDto: UpdateCityDto): Promise<import("./entities/city.entity").City>;
    remove(id: string): Promise<void>;
}
