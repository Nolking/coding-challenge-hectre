

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
    ACCESS_TOKEN: 'eyJraWQiOiJuTkNld1ZQMERxNU5yMlwvMHQ4N0gxaWdIRmM5NVNNek91a0FqMXBRTU1vRT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkYjE1YzVmZi1jY2YxLTQyM2EtODZjMy04OWEzNjEzZDQxYTQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGh0dHBzOlwvXC9jb2RlLWNoYWxsZW5nZS1hcGkuaGVjdHJlLmNvbVwvZGF0YS5yZWFkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQzMTg3NTMwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfTXBCUEx2N05CIiwiZXhwIjoxNjQzMTg5MzMwLCJpYXQiOjE2NDMxODc1MzAsInZlcnNpb24iOjIsImp0aSI6ImY0Y2JmZjZiLTJmZDAtNDU5My04ZDdlLTQ3OTdlZjFmYzRhNyIsImNsaWVudF9pZCI6IjU3cGZuM2ZqZzhxZmRkMDVxZGdqZXExa2hkIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciJ9.akmmIqoX0J7XCo20AxAC4CaHiHdInWPJi0vQpOGMmGyWdCbT1KXTA5EQz_Rh3yta-rrzEYrE-3g7CXMVmz4a4JOdNd0PzM5f9Oq0WAtDw26T8cJ-W4RQwYSyuY2hwHeLVBo21ljhEA6rMW7gcTGXeqlnPTZOXsl-Sz546aic6UgzLXtiLHcmzoyJNCOHYjhtw6h_B9YqKynT0jvYSHGMoHI4hGDeTJunytIS59cGItxHJVNQQo9u4i5pWc64duxxqhZa2pFCmDlB_yGPrzoUqG-OYMi53r5A9ms04FNVk94nGb8lt5Lac_RQY8Y9FaCJdE_gqlM4aiMKyaygCQ8QvQ'
}


export default COGNITO_CONFIG;