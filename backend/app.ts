import express = require('express');
import bodyParser = require('body-parser');

import { Express, NextFunction, Request, Response } from 'express';
import { CompanyModel }                             from './src/core/models/company.model';

const app: Express = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    next();
});

app.post('/api/companies', (req: Request, res: Response, next: NextFunction) => {
    const company: CompanyModel = req.body;
    res.status(200).json(company);
});

app.get('/api/companies', (req: Request, res: Response, next: NextFunction) => {

    let testCompanies: CompanyModel[] = [
        {
            name: 'Test Company',
            description: 'Company from backend'
        },
        {
            name: 'Test Company 2',
            description: 'Company from backend too'
        }
    ];

    res.status(200).json(testCompanies);
});

export default app;
