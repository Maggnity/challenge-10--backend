import express from "express";
import { Params } from "./params";

type StringParams = {
    query?: string
}

export interface request extends express.Request {

    query: string & express.Request["query"]
}