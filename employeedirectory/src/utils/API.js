import axios from "axios";

export default {
    getRandomser: function () {
        return axios.get("https://randomuser.me/");
    }
}