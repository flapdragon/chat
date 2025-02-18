# chat Server

## Getting Started

### .env
Create a .env file at the top level of the client folder.
- PORT: Used by Express for the server port
- MONGODB_URL: Location of MongoDB server, protocol domain and port. Dev setup is local.
- JWT_SECRET: This is used by the JWT package to encrypt and create tokens. It hould be sufficiently long and complex string.
- - Example: yvy)'lc]ZO(P<J%{-d`w;63QC^+!;4
- COOKIE_SECRET: Same as above, but used by Express sessions for cookies. Express sessions is required by Passport and generates cookies automatically. The frontend will not used them.
- TOKEN_EXPIRATION: This the expiration in time from the moment the token is created. The math is seconds * minutes * hours * days, 60 * 60 * 24 * 30. What I do is just assume I want it to expire in 30 days for example, then do the math and put the result in the .env. That way we don't have to run eval on it.
- WHITELISTED_DOMAINS: A comma separated list of other hosts/computers we want to allow to connect to our computer. In our case it's on the frontend. It must match the protocol, domain and port.

```
PORT=8000
MONGODB_URL=mongodb://localhost:27017/chat
JWT_SECRET=secret
COOKIE_SECRET=secret
TOKEN_EXPIRATION=2592000
WHITELISTED_DOMAINS=http://localhost:3000
```

### NPM install
```
cd server
npm install
npm run dev
```

## Technologies
- Node ... obviously
- Express 4
- Passport 0.7.0 for authentication
- argon2 for hashing (not encrypting) passwords
- JWTs using passport-jwt
