import { Express, NextFunction, Request, Response } from 'express';

import express = require('express');

const app: Express = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send('Message from backend');
});

export default app;
