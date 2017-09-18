import axios from 'axios';

async function axiosPost(postUrl, postDate) {
    try {
        let request = await axios.post(postUrl, {
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postDate)
        });
        return request;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
};
async function axiosGet(getUrl) {
    try {
        let request = await axios.get(getUrl, {
            method: 'GET'
        });
        return request;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
export {
    axiosPost,
    axiosGet
}
