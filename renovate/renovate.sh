#!/bin/bash

RENOVATE_EXTRA_FLAGS="$@"
echo "Renovate args: $RENOVATE_EXTRA_FLAGS"

# everything about ca-certificates.crt are for the wp4dev

docker run -i --rm \
-e LOG_LEVEL=debug \
-e RENOVATE_REQUIRE_CONFIG=false \
-e RENOVATE_TOKEN=$RENOVATE_TOKEN \
-e RENOVATE_GITHUB_TOKEN=$API_KEY_GITHUB \
-e API_KEY_GITHUB=$API_KEY_GITHUB \
-v $(pwd)/config.js:/usr/src/app/config.js \
renovate/renovate \
$RENOVATE_EXTRA_FLAGS
