import { TContract } from "@/types/contract";
import Http from "@/utils/http";
const path = 'counterparty'
class CounterpartyService {
    static getAll = (searchText: string) => Http.get(`${path}?q=${searchText}`);
    static load = (id: string) => Http.get(`${path}/${id}`);
    static add = (data: TContract) => Http.post(`${path}`, data);
    static update = (data: TContract) => Http.put(`${path}/${data.id}`, data);
    static delete = (id: any) => Http.delete(`${path}/${id}`);
}


export default CounterpartyService;