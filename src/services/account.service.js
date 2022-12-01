import createApiClient from "./api.service";

class AccountService{
    constructor(baseUrl = "/api/login"){
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
    // async findPass(pass){
    //     return (await this.api.get(`/pass/${pass}`)).data;
    // }
}

export default new AccountService();