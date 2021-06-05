import axios from "axios";

export default {
    getRandomser: function () {
        return axios.get("https://randomuser.me/api/?results=25&nat=us");
    }
}