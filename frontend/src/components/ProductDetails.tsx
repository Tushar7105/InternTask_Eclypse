import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface ProductDetailsProps {
  name: string;
  description: string;
  price: number;
  currency: string;
  sizes: string[];
}

const ProductDetails = ({ name, description, price, currency, sizes }: ProductDetailsProps) => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleAddToCart = () => {
  if (!selectedSize) {
    toast.error("Please select a size", {
      description: "Choose your preferred size before adding to cart.",
    });
    return;
  }

  toast.success("Added to Cart!", {
    description: `${name} (Size: ${selectedSize}) has been added to your cart.`,
  });

  setTimeout(() => {
    navigate('/checkout');
  }, 1500);
};


  const handleBuyNow = () => {
  if (!selectedSize) {
    toast.error("Please select a size", {
      description: "Choose your preferred size before purchasing.",
    });
    return;
  }

  toast.success("Redirecting to Checkout", {
    description: `Processing purchase for ${name} (Size: ${selectedSize}).`,
  });

  setTimeout(() => {
    navigate('/checkout');
  }, 1500); // 1.5 seconds delay to allow toast to show
};


  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
          {name}
        </h1>
        <Badge variant="secondary" className="text-xs">
          MRP incl. of all taxes
        </Badge>
      </div>


      <div className="text-3xl font-bold text-gray-900">
        {currency} {price.toLocaleString()}
      </div>


      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>


      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            Please select a size
          </span>
          <button className="text-sm text-gray-500 hover:text-gray-700 underline">
            Size chart
          </button>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "h-12 border rounded-md text-sm font-medium transition-all duration-200",
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>


      <div className="space-y-3 pt-4">
        <Button
          onClick={handleBuyNow}
          className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium"
        >
          Buy
        </Button>

        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="w-full h-12 border-gray-300 text-gray-900 hover:bg-gray-50 font-medium"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
