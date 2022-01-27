import Api from "./Api";
import {memes} from "../src/stores.js"

//method to get memes
export const getMemes = async () => {
    try {
        const res = await Api.get('/get_memes')
        memes.set(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

