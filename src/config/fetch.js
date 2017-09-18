async function fetchPost(postUrl, postDate) {
    try {
        let request = await fetch(postUrl, {
            method: 'post',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postDate)
        });
        let text = await request.text();
        return JSON.parse(text);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
};
async function fetchGet(getUrl) {
    try {
        let request = await fetch(getUrl, {
            method: 'GET'
        });
        let text = await request.text();
        return JSON.parse(text);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
export {
    fetchPost,
    fetchGet
}