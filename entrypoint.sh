#!/bin/sh
#.... Initialization steps
echo Image built: $(cat /build-date.txt)
#.... More initialization steps
# run the command
exec "$@"