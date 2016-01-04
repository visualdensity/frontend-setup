#!/bin/bash

cat dependencies | xargs -I % npm install % --save
cat devdependencies | xargs -I % npm install % --save-dev

npm run build
