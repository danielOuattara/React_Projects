mkdir -p pages && touch pages/{About,Cart,Checkout,Error,HomeLayout,Landing,Login,Orders,Products,Register,SingleProduct,index}.jsx && for file in pages/*.jsx; do echo "export default function $(basename "$file" .jsx)() {
  return <h1 className=\"text-4xl\">$(basename "$file" .jsx) Page</h1>;
}" > "$file"; done