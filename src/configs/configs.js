

const COGNITO_CONFIG = {
    client_Id : "57pfn3fjg8qfdd05qdgjeq1khd",
    client_secret: "",
    AUTHORIZATION_CODE: '',
    Authorization_URL: "https://hectre-code-challenge.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize",
    Token_URL: "https://hectre-code-challenge.auth.ap-southeast-2.amazoncognito.com/oauth2/token",
    SIGNIN_URL: "https://hectre-code-challenge.auth.ap-southeast-2.amazoncognito.com/login?response_type=code&client_id=57pfn3fjg8qfdd05qdgjeq1khd&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fcallback",
    Server: "ap-southeast-2",
    callback_URL: "http://localhost:4000/callback",
    logout_URL: "http://localhost:4000/signout",
    API_URL: "https://develop-spectre-data.hectre.com",
    ACCESS_TOKEN: ''
}


export default COGNITO_CONFIG;