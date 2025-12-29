
# AI-Powered Traffic & Toll Management System

A smart system that manages route-based toll collection across multiple toll plazas. It automatically detects vehicles via number-plate recognition and records toll events in real time. Supports prepaid, monthly, and instant payment modes. An AI engine suggests the best routes based on departure and destination, providing optimized paths with estimated total toll costs.


## Features

- Automatic Vehicle Detection: Recognizes vehicles via number-plate recognition at toll plazas.
- Real-Time Toll Recording: Automatically logs toll events as vehicles pass.
- Flexible Payment Modes: Supports prepaid, monthly, and instant toll payments.
- AI Route Optimization: Suggests the best routes based on departure and destination.
- Cost Estimation: Provides estimated total toll costs for selected routes.
- Multi-Plaza Support: Covers all toll plazas along a route for seamless tracking.












## Tech Stack

**Server:** Nest.js mongoDB, mongoose, jwt, bcrypt, Open AI API


## Run Locally

Clone the project

```bash
  git clone https://github.com/jubairJnu/traffic-toll-server
```

Go to the project directory

```bash
  cd traffic-toll-server
```

Install dependencies

```bash
  bun install
```

Start the server

```bash
  bun dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`NODE_ENV=`

`DB_URL=`

`ACCESS_TOKEN=`

`REFRESH_TOKEN=`

`ACCESS_EXPIREIN=`

`REFRESH_EXPIREIN =`

`SALT_ROUND=`

