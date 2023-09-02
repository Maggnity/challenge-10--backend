import express from 'express';
import { PrismaClient } from '@prisma/client'
import { apiRouter } from './routes';
import cors from 'cors';


export class App {
    async init(config: any) {



        const app = express();
        const routes = apiRouter();
    
    
        app.use(express.json({ limit: '100mb' }));
        app.use(express.urlencoded({ extended: true, limit: '50mb' }));
        app.use(cors());

        app.use('/api', routes);

        app.listen(4000, () => {
            console.log('Listening at port 4000');
            });
    }
}

export default App


export const prisma = new PrismaClient()