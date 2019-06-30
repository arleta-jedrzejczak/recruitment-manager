import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');

import { Express, NextFunction, Request, Response } from 'express';
import { CompanyModel }                             from './src/core/models/company.model';
import { CompanySchema }                            from './src/core/schemas/company.schema';
import { Document }                                 from 'mongoose';

const app: Express = express();

mongoose.connect(
    'mongodb+srv://arleta:goMRjgzNEkRW6myqlrEJ@cluster0-nt8jl.mongodb.net/recruitment?retryWrites=true&w=majority',
    {useNewUrlParser: true})
    .then(
        () => console.log('Connected to database')
    ).catch(
        () => console.log('Connection failed!')
);

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    next();
});

app.post('/api/companies', (req: Request, res: Response, next: NextFunction) => {
    const company: Document = new CompanySchema({
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription
    });
    company.save();
    res.status(200).json(company);
});

app.get('/api/companies', (req: Request, res: Response, next: NextFunction) => {

    let testCompanies: CompanyModel[] = [
        {
            companyName: 'Test Company',
            companyDescription: 'Company from backend'
        },
        {
            companyName: 'Test Company 2',
            companyDescription: 'Company from backend too'
        }
    ];

    res.status(200).json(testCompanies);
});

export default app;
