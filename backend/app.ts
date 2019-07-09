import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');

import { Express, NextFunction, Request, Response } from 'express';
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
    CompanySchema.find()
        .then(
            (doc: Document[]) => {
                res.status(200).json(doc);
            })
        .catch(
        () => console.log('Fetching failed!'))
});

app.delete('/api/companies/:id', (req: Request, res: Response, next: NextFunction) => {
    CompanySchema.deleteOne({_id: req.params.id})
        .then((response) => console.log(response)
        ).catch(
        () => console.log('Deleting failed!'))
    res.status(200);
});

export default app;
