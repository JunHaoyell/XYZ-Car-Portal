import axios from "axios";


const API_BASE_URL="http://localhost:8080/kyn/stores";

class StoreService{

    getAllStores(){
        console.log ("Store Service, get all store method is working");
        return axios.get(API_BASE_URL);
    }

}

export default new StoreService()
