#!/usr/bin/env sh
# https://cli.vuejs.org/guide/deployment.html#github-pages

set -e
yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://dotnofoolin@github.com/dotnofoolin/vuezee.git master:gh-pages
cd -