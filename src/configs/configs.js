

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
    ACCESS_TOKEN: 'eyJraWQiOiJuTkNld1ZQMERxNU5yMlwvMHQ4N0gxaWdIRmM5NVNNek91a0FqMXBRTU1vRT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkYjE1YzVmZi1jY2YxLTQyM2EtODZjMy04OWEzNjEzZDQxYTQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGh0dHBzOlwvXC9jb2RlLWNoYWxsZW5nZS1hcGkuaGVjdHJlLmNvbVwvZGF0YS5yZWFkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQzMTgxNjgxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfTXBCUEx2N05CIiwiZXhwIjoxNjQzMTgzNDgxLCJpYXQiOjE2NDMxODE2ODEsInZlcnNpb24iOjIsImp0aSI6ImViNDY3YmI2LWI2MjEtNDZjMS04YjE4LWRhNTgzMjBjMDZkYyIsImNsaWVudF9pZCI6IjU3cGZuM2ZqZzhxZmRkMDVxZGdqZXExa2hkIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciJ9.SL9a0dDGYsVUJ-XeahfIUjSahxt3xynnT7TlhBJQunpf-LJsOFmHxjuSkZhlcXhhpj-PN1maMRuGtMOuBWD1EeORoBP4_HxNyjnYNwTk_qFa-yHJszOIAtwpVFr7nG7tD0mQFfSqFuRmG5OgmgwtLARohKI3D39Z8alCkK55XXuYaGpZEiIAXiPavOeG6PpfcULdueTXyE6ZgKUiYi6R0bi3TxPl5BiHgtmuQt8-LtzRlxbQakF-WPc4AJ5k9PEOyrBvbVAYCJP-KNiqamHnhNivV984Qf94n0Z6KRdFa3hnIbbBAdAzoIXEQwBNSX1-znaaAzaF_zUZB7jSPpaGNQ'
}


export default COGNITO_CONFIG;