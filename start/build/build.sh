#!/bin/bash
cd ..
git pull
git checkout master
git add .
git commit -m "前端代码重新打包"
git push -u origin master