import mongoose = require('mongoose');

import { Document, Model, Schema } from 'mongoose';
import { CompanyModel }            from '../models/company.model';

const company: Schema<CompanyModel> = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    }
});

export const CompanySchema: Model<Document, {}> = mongoose.model('Company', company);
