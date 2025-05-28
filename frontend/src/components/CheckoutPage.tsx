import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import AddressForm from './AddressForm';
import OrderSummary from './OrderSummary';

const CheckoutPage: React.FC = () => {
  const [showMobileForm, setShowMobileForm] = useState(false);

  const orderItems = [
    { name: "Items - Silhouette No. 1 – Vermilion", price: 7999 }
  ];

  const handleSaveAddress = (address: any) => {
    console.log('Address saved:', address);

    setShowMobileForm(false);
  };

  const handleCancel = () => {
    setShowMobileForm(false);
  };

  const handlePlaceOrder = () => {
    console.log('Order placed');

  };

  const handleBack = () => {
    if (showMobileForm) {
      setShowMobileForm(false);
    } else {

      console.log('Navigate back');
    }
  };

  return (
    <div className="min-h-screen bg-white">

      <header className="border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleBack} className="p-1">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-medium text-gray-900">Shipping Address</h1>
          </div>

          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Waitlist</a>
              <a href="#" className="text-gray-900 font-medium border-b-2 border-black pb-1">Cart</a>
            </nav>
          </div>
        </div>
      </header>


      {showMobileForm && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center gap-4 mb-6">
              <button onClick={handleBack} className="p-1">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-lg font-medium text-gray-900">Shipping Address</h1>
            </div>
            <AddressForm onCancel={handleCancel} onSave={handleSaveAddress} />

            <div className="mt-6">
              <OrderSummary
                items={orderItems}
                shipping={200}
                tax={1400}
                onPlaceOrder={handlePlaceOrder}
              />
            </div>
          </div>
        </div>
      )}


      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <div className="hidden md:block">
              <AddressForm onCancel={handleCancel} onSave={handleSaveAddress} />
            </div>


            <div className="md:hidden">
              <button
                onClick={() => setShowMobileForm(true)}
                className="w-full bg-white border border-gray-200 rounded-lg p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  </div>
                  <span className="text-lg font-medium text-gray-900">Add New Address</span>
                </div>
              </button>
            </div>
          </div>


          <div className="hidden md:block lg:col-span-1">
            <OrderSummary
              items={orderItems}
              shipping={200}
              tax={1400}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>


        {!showMobileForm && (
          <div className="md:hidden mt-6">
            <OrderSummary
              items={orderItems}
              shipping={200}
              tax={1400}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default CheckoutPage;