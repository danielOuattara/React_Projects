# change extension all files form .js to .jsx

for file in *.js
do
  mv "$file" "${file%.js}.jsx"
done


# change the name of all files from "name.jsx" to "nameWrapper.jsx"
# ?