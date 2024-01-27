import App from './App';

process.env.TZ = 'America/Sao_Paulo'

const config = {
    ssl: false
}

const app = new App();
app.init(config);