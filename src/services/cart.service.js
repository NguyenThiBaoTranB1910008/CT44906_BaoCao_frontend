import createApiClient from "./api.service";

class CartService{
    constructor(baseUrl = "/api/cart"){
        this.api = createApiClient(baseUrl);
    }
    async getAll(){
        return (await this.api.get("/")).data;
    }
    async create(data){
        return (await this.api.post("/",data)).data;
    }
    async deleteAll(){
        return (await this.api.delete("/")).data;
    }
    async get(id){
        return (await this.api.get(`/${id}`)).data;
    }

    async getByTitle(imageUrl){
        return (await this.api.get(`/${imageUrl}`)).data;
    }
    async update(id, data){
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id){
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new CartService();