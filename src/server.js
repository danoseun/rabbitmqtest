const restify = require('restify');
const server = restify.createServer({
    name: 'RabbitMQ Test Tutorial',
    version: '1.0.0'
});
const config = require('./config');
const produce = require('./producer');

const rawdata = require('./sample.json');


const sampleData = JSON.stringify(rawdata);


produce(config.rabbit.queue, sampleData, durable = false);



server.listen(config.port, function () {
  console.log('%s listening at %s', server.name, server.url);
});