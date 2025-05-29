import ProductImageGallery from './ProductImageGallery';
import ProductDetails from './ProductDetails';
import img1 from "@/assets/img/Eclypse/Frame 15.png"
import img2 from "@/assets/img/Eclypse/Frame 15-2.png"
import img3 from "@/assets/img/Eclypse/Frame 15-1.png"

const ProductPage = () => {

  const product = {
    name: "Tailored Composition Suit",
    description: "A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.",
    price: 7999,
    currency: "₹",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      img1, img2, img3
    ]
  };

  return (
    <div className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="order-1">
            <ProductImageGallery 
              images={product.images} 
              productName={product.name}
            />
          </div>


          <div className="order-2 lg:pt-8">
            <ProductDetails
              name={product.name}
              description={product.description}
              price={product.price}
              currency={product.currency}
              sizes={product.sizes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;