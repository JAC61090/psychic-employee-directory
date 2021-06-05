import axios from "axios";

export default {
    getRandomUsers: function () {
        
        return axios.get("https://randomuser.me/api/?results=38&nat=us");
        console.log(this.getRandomuUser)
    }
}