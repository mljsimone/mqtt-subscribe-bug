const mqtt = require('mqtt')

const topic = 'werma/raw'

const client = mqtt.connect({
  host: 'broker',
  port: 1883
})

client.on('connect', () => {
  console.log('on connect')
  client.subscribe(topic, (err, grant) => {
    if (!err) console.log('Subscribed')
    else console.log('Failed to subscribe')
    //client.publish(topic, "Hello world")
  })
})

client.on('message', (topic, message) => {
  console.log('on message')
})
