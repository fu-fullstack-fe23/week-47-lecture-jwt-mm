export const sendResponse = (statusCode, body) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify({
        data : body
        }),
    };
}

export const sendResponseWithHeaders = (statusCode, body, token) => {    
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token,
            // 'Set-Cookie': `token=${token}; Max-Age=3600; HttpOnly; Path=/`
        },
        body: JSON.stringify({
            data: body,
            token : token
        }),
    };
};
