import { validationResult, matchedData} from "express-validator";
import mongoose from "mongoose";
import {error} from '../utilties/error.mjs'
import { Studio } from "../models/studioeq.mjs";
import {studioeq} from "../data/studioeq.mjs"