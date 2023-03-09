import Http from "@/utils/http";
const path = 'unit'
class UnitService {
    static getAll = (searchText: string) => Http.get(`${path}?q=${searchText}`);
}


export default UnitService;