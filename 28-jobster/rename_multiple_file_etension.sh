# rename all files in .js  to .jsx

for file in *.js
do
  mv "$file" "${file%.js}.jsx"
done
