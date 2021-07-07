import {Request, Response} from 'express'



export function indexRoutes (req:Request,res:Response):Response {
return res.json('welcome tu my API')
}