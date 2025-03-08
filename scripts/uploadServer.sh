#!/usr/bin/env bash
scriptDir=$(dirname $0)
echo $scriptDir
destinationBase='inessa@137.184.20.192:/home/inessa/'
path='ui'

echo "Uploading to Digital Ocean"
echo "Destination: ${destinationBase}${path}"
rsync -a --delete --exclude-from=${scriptDir}/../.dockerignore  $scriptDir/../ ${destinationBase}${path} || exit 1
echo "Uploading is done"