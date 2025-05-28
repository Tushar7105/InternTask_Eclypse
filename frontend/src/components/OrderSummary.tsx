import React from 'react';
import { Button } from '@/components/ui/button';

interface OrderItem {
  name: string;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  shipping: number;
  tax: number;
  onPlaceOrder: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, shipping, tax, onPlaceOrder }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const beforeTax = subtotal + shipping;
  const total = beforeTax + tax;

  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-6">
      <div className="text-sm text-gray-600">
        <span>By placing your order, you agree to our company </span>
        <a href="#" className="text-black underline">Privacy policy</a>
        <span> and </span>
        <a href="#" className="text-black underline">Conditions of use</a>
        <span>.</span>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-600">{item.name}</span>
              <span className="text-gray-900">{item.price.toLocaleString()}</span>
            </div>
          ))}
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping and handling:</span>
            <span className="text-gray-900">{shipping}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Before tax:</span>
            <span className="text-gray-900">{beforeTax.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax Collected:</span>
            <span className="text-gray-900">{tax.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-gray-900">Order Total:</span>
          <span className="text-lg font-semibold text-gray-900">{total.toLocaleString()}</span>
        </div>
        
        <Button
          onClick={onPlaceOrder}
          className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-md font-medium"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;