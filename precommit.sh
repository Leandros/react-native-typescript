#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
readonly dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PATH=$PATH:$dir/node_modules/tslint/bin:$dir/node_modules/jest/bin

tsc
tslint --project "$dir"
jest.js

