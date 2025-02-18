# chat Client

## Getting Started

### .env
Create a .env file at the top level of the client folder.

It just needs one variable. since we use Vite, that variable must always be prefixed with VITE_. The variable is for the location of the backend server. It must match the protocol, domain and port.

```
VITE_API_SERVER_URL=http://localhost:8000
```

### NPM install
```
cd client
npm install
npm run dev
```

## Technologies
- Vite
- React 19.0.0
- Tailwind 4.0.4
