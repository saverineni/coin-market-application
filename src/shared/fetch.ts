const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

export const Get = (url: any, additionalHeaders?: any): Promise<any> =>
    fetch(url, {
        headers: {...headers, ...additionalHeaders},
        method: "GET",
        credentials: "same-origin",
    })
        .then((resp) => resp.json())
        .catch((e) => ({ok: false, data: {statusMessage: e}}));