import createApiClient from "./api.service";

class AccountService{
    constructor(baseUrl = "/api/user"){
        this.api = createApiClient(baseUrl);
    }
    async getAll(){
        return (await this.api.get("/")).data;
    }
    async create(data){
        return (await this.api.post("/",data)).data;
    }
    async findName(name){
        return (await this.api.get(`/${name}`)).data;
    }
    async findAccount(account){
        return (await this.api.post("/check", account)).data;
    }
}

export default new AccountService();