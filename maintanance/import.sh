#!/bin/bash

tar -xvzf $1
mongorestore
sudo rm -r dump