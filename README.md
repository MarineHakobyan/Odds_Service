# Odds Service

Simple NestJS app to manage matches, odds, and bets.  

- Run locally: `http://localhost:3000`  
- Endpoints: `POST /matches`, `PATCH /matches/:id/odds`, `GET /matches/:id/odds`, `POST /bets`  
- Stake min: 0.01, max 2 decimals  
- In-memory storage, resets on restart  
