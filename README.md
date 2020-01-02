# Problem
It seems to be a race conditions between the moment the broker is starting up and when a subscription is happening.
Which makes the subscribe method to report grant levels of 128.

# Steps to reproduce

1. docker-compose up
2. mosquitto_pub -h 127.0.0.1 -t 'werma/raw' -m foobar

You should see the on_message hook being called but nothing happens.
