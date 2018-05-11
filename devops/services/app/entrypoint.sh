#!/bin/sh

# Container Rols
CONTAINER_ROLE=${CONTAINER_ROLE:-app}
echo "Container role: $CONTAINER_ROLE"
export CONTAINER_ROLE

[[ $HOSTNAME ]] && QUEUE_NAMES="$HOSTNAME,default" || QUEUE_NAMES="default"
echo "Listening to Queues: $QUEUE_NAMES"
export QUEUE_NAMES

# Run
if [ "$CONTAINER_ROLE" = "app" ]; then
    supervisord -c /etc/supervisor/supervisor.conf
elif [ "$CONTAINER_ROLE" = "scheduler" ]; then
    supercronic /etc/supercronic/app
else
    echo "Could not match the container role...."
    exit 1
fi