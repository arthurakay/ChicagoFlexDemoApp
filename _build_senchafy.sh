#!/bin/bash
rm -rf senchafy/*

cd ChicagoFlex
sencha build -p chicagoflex.jsb3 -d .

cp app-all.js ../senchafy
rm app-all.js
rm all-classes.js

mkdir ../senchafy/sencha-touch
cp -R sencha-touch-2.0.1/resources ../senchafy/sencha-touch/
cp sencha-touch-2.0.1/sencha-touch-all.js ../senchafy/sencha-touch/

cd ../

php build.php > ./senchafy/index.html