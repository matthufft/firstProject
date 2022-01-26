import Api from "../services/Api"

//method to get memes
export const getMemes = async () => {
    try {
        const res = await Api.get('/get_memes')
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

