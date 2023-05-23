import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3b97af380a0c409da0e90badd50ae7a4"
    }
})