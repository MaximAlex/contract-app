import Http from "@/utils/http";
const path = 'rounding'
class RoundingService {
    static getAll = (searchText: string) => Http.get(`${path}?q=${searchText}`);
}


export default RoundingService;