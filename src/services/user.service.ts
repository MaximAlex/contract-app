import Http from "@/utils/http";
const path = '/user'
class UserService {
    static getAll = () => Http.get(`${path}`);
    static load = (id: string) => Http.get(`${path}/${id}`);
    static add = (data: any) => Http.post(`${path}`, data);
    static update = (data: any) => Http.put(`${path}`, data);
    static delete = (id: string) => Http.delete(`${path}/${id}`);
}


export default UserService;