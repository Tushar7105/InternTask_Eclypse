import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddressFormProps {
  onCancel: () => void;
  onSave: (address: any) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
        </div>
        <h2 className="text-lg font-medium text-gray-900">Add New Address</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
              First Name
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
              Last Name
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="streetAddress" className="text-sm font-medium text-gray-700 mb-2 block">
            Street Address
          </Label>
          <Input
            id="streetAddress"
            value={formData.streetAddress}
            onChange={(e) => handleInputChange('streetAddress', e.target.value)}
            className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="aptNumber" className="text-sm font-medium text-gray-700 mb-2 block">
              Apt Number
            </Label>
            <Input
              id="aptNumber"
              value={formData.aptNumber}
              onChange={(e) => handleInputChange('aptNumber', e.target.value)}
              className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-sm font-medium text-gray-700 mb-2 block">
              State
            </Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <Label htmlFor="zip" className="text-sm font-medium text-gray-700 mb-2 block">
              Zip
            </Label>
            <Input
              id="zip"
              value={formData.zip}
              onChange={(e) => handleInputChange('zip', e.target.value)}
              className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-8">
        <Button
          onClick={onCancel}
          variant="outline"
          className="flex-1 h-12 text-gray-700 border-gray-300 hover:bg-gray-50 rounded-md"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className="flex-1 h-12 bg-black hover:bg-gray-800 text-white rounded-md"
        >
          Save This Address
        </Button>
      </div>
    </div>
  );
};

export default AddressForm;