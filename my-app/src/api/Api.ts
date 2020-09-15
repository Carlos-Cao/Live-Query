const API_BASE_URL = "https://qna-server.database.windows.net";

export const fetchItems = async () => {
    const response = await fetch('https://qna-server.database.windows.net',
        {
            headers: {
                Accept: "application/json",
            },
        }).then((res) => res.json()).then(res => JSON.parse(res));
    return response;
}
