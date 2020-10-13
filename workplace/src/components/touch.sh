#!/bin/sh

for dir in `find -type d`;
do
	touch $dir/index.js
done
