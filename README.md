# Steps to reproduce

1. docker-compose up
2. mosquitto_pub -h 127.0.0.1 -t 'werma/raw' -m foobar

You should see the on_message hook being called.
