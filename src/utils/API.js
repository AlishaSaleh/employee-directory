import axios from "axios";

export default {
    getEmployees: function (query) {
        return axios.get(
            "https://randomuser.me/api/" +
            query
        );
    }
};