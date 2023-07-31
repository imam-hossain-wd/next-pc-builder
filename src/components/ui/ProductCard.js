import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* <img src={product.image} alt={product.productName} /> */}
      <h3>{product.productName}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.status}</p>
      <p>Rating: {product.individualRating}</p>
      <Link href={`/product/${product._id}`}>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;
