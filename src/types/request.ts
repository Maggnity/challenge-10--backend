import express from "express";
import { Params } from "./params";


export interface request extends express.Request {

    query: Params & express.Request["query"]
}