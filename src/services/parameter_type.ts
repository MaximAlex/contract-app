import Http from "@/utils/http";
const path = 'paramter-type'
class ParameterTypeService {
    static getAll = (searchText: string) => Http.get(`${path}?q=${searchText}`);
}


export default ParameterTypeService;