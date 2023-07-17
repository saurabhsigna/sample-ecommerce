export default function App({ products }) {
  return (
    <div className="mb-10">
      <h2 className="my-3 mt-8">What&apos;s In The Bag :</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            ☠ {product.quantity} items of {product.product.name}
          </li>
        ))}
        {/* <li>☠ 2 items of HC Verma Solutions</li>
        <li>☠ 1 items of DC Pandey</li> */}
      </ul>
    </div>
  );
}
