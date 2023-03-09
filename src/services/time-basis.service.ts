import Http from "@/utils/http";
const path = 'timeBasis'
class TimeBasisService {
    static getAll = (searchText: string) => Http.get(`${path}?q=${searchText}`);
}


export default TimeBasisService;