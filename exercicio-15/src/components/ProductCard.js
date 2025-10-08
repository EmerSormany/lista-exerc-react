
import './ProductCard.css'; 

const ProductCard = ({ imageUrl, title, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;