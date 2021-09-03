import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer dt money',
          type: 'deposit',
          category: 'Emprego',
          amount: 6000,
          createdAt: new Date('2021-07-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Academia',
          type: 'withdraw',
          category: 'Saúde',
          amount: 600,
          createdAt: new Date('2021-01-3 07:00:00'),
        },
        {
          id: 3,
          title: 'Gasolina do mês',
          type: 'withdraw',
          category: 'Transporte',
          amount: 500,
          createdAt: new Date('2021-07-1 06:30:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);