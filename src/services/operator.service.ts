import Http from "@/utils/http";
const path = 'operator'
class OperatorService {
    static getAll = (searchText: string) => Http.get(`${path}?q=${searchText}`);
}


export default OperatorService;