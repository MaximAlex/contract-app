import Http from "@/utils/http";
const path = 'measure'
class MeasureService {
    static getAll = (searchText: string) => Http.get(`${path}?q=${searchText}`);
}


export default MeasureService;