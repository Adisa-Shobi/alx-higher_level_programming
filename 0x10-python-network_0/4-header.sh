#!/bin/bash
# sends a GET request to URl argument with header values
curl -sX GET -H "X-School-User-Id: 98" "$1"
