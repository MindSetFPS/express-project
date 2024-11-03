import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddPaymentMethod: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [country, setCountry] = useState<string>('Mexico');
  const [zipCode, setZipCode] = useState<string>('');

  const handleExpiryDateChange = (text: string) => {
    let formattedText = text.replace(/[^0-9]/g, '');
    if (formattedText.length > 4) {
      formattedText = formattedText.slice(0, 4);
    }
    if (formattedText.length >= 3) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
    }
    setExpiryDate(formattedText);
  };

  const handleCardNumberChange = (text: string) => {
    // Elimina cualquier carácter que no sea un número
    let formattedText = text.replace(/[^0-9]/g, '');

    // Limita la entrada a 16 caracteres
    if (formattedText.length > 16) {
      formattedText = formattedText.slice(0, 16);
    }

    // Divide en bloques de 4 dígitos
    formattedText = formattedText.match(/.{1,4}/g)?.join(' ') || formattedText;

    setCardNumber(formattedText);
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100 p-4">
      <View className="w-80 bg-white p-6 rounded-lg shadow-lg">
        <Text className="text-lg font-semibold mb-6 text-center">Payment Method</Text>

        {/* Campo de Email */}
        <Text className="text-gray-600 mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />

        {/* Campo de Detalles de Tarjeta */}
        <Text className="text-gray-600 mb-1">Card Details</Text>
        <View className="flex-row items-center mb-4 w-full">
          <TextInput
            value={cardNumber}
            onChangeText={handleCardNumberChange}
            placeholder="1234 1234 1234 1234"
            keyboardType="numeric"
            className="border border-gray-300 rounded-md p-2 flex-1"
            maxLength={19} // Máximo de 19 caracteres para incluir espacios
          />
          <View className="flex-row ml-2 space-x-1">
            <Image source={{ uri: 'https://via.placeholder.com/24' }} className="w-6 h-6" />
            <Image source={{ uri: 'https://via.placeholder.com/24' }} className="w-6 h-6" />
            <Image source={{ uri: 'https://via.placeholder.com/24' }} className="w-6 h-6" />
          </View>
        </View>

        {/* Campos de Expiry Date y CVC alineados */}
        <View className="flex-row justify-between mb-4 w-full">
          <TextInput
            value={expiryDate}
            onChangeText={handleExpiryDateChange}
            placeholder="MM/YY"
            keyboardType="numeric"
            className="border border-gray-300 rounded-md p-2 flex-1 mr-2"
            maxLength={5} // Limita la longitud a 5 caracteres (incluyendo el "/")
          />
          <TextInput
            value={cvc}
            onChangeText={setCvc}
            placeholder="CVC"
            keyboardType="numeric"
            className="border border-gray-300 rounded-md p-2"
            style={{ width: 70 }}  // Ajusta el ancho del campo CVC
            maxLength={3} // Limita a 3 caracteres para CVC
          />
        </View>

        {/* Nombre del Propietario */}
        <Text className="text-gray-600 mb-1">Owner Name</Text>
        <TextInput
          value={ownerName}
          onChangeText={setOwnerName}
          placeholder="Owner Name"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />

        {/* Selección de País o Región */}
        <Text className="text-gray-600 mb-1">Country or Region</Text>
        <View className="border border-gray-300 rounded-md mb-4 w-full">
          <Picker
            selectedValue={country}
            onValueChange={(itemValue) => setCountry(itemValue)}
            className="p-2"
          >
            <Picker.Item label="Mexico" value="Mexico" />
            <Picker.Item label="United States" value="United States" />
            <Picker.Item label="Canada" value="Canada" />
          </Picker>
        </View>

        {/* Código Postal */}
        <Text className="text-gray-600 mb-1">Zip Code</Text>
        <TextInput
          value={zipCode}
          onChangeText={setZipCode}
          placeholder="Postal Code"
          keyboardType="numeric"
          className="border border-gray-300 rounded-md p-2 mb-6 w-full"
        />

        {/* Botón de Pago */}
        <TouchableOpacity className="bg-black py-3 rounded-lg w-full">
          <Text className="text-white text-center font-semibold">Payer 6,000 $MX</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddPaymentMethod;
