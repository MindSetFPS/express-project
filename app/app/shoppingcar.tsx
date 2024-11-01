import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Minus, Plus, Trash } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ShoppingCart() {
  // Datos de ejemplo para los productos en el carrito  
  const [products, setProducts] = useState([
    { id: 1, name: 'Product name', info: 'Product Info', price: 299, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Product name', info: 'Product Info', price: 199, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Product name', info: 'Product Info', price: 199, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
  ]);
  
  // Función para incrementar la cantidad
  const incrementQuantity = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  // Función para decrementar la cantidad
  const decrementQuantity = (id) => {
    setProducts(products.map(product => 
      product.id === id && product.quantity > 1 
        ? { ...product, quantity: product.quantity - 1 } 
        : product
    ));
  };

  // Función para eliminar un producto
  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Calcular el total de la compra
  const totalAmount = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-2xl font-bold mb-2">Shopping Cart</Text>
        <Text className="text-gray-600 mb-4">You have {products.length} items in your cart</Text>

        {/* Contenedor principal para la lista de productos y el resumen de compra */}
        <View className="flex-row justify-between">
          {/* Lista de productos */}
          <View className="w-3/4 space-y-4">
            {products.map((product) => (
              <View key={product.id} className="flex-row items-center bg-white p-4 rounded-lg shadow-sm justify-between">
                <Image source={{ uri: product.imageUrl }} className="w-16 h-16 rounded" />
                <View className="flex-1 ml-4">
                  <Text className="font-semibold">{product.name}</Text>
                  <Text className="text-gray-500">{product.info}</Text>
                </View>
                <View className="flex-row items-center space-x-2">
                  <TouchableOpacity onPress={() => decrementQuantity(product.id)}>
                    <Minus size={20} color="gray" />
                  </TouchableOpacity>
                  <Text>{product.quantity}</Text>
                  <TouchableOpacity onPress={() => incrementQuantity(product.id)}>
                    <Plus size={20} color="gray" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity className="ml-4" onPress={() => removeProduct(product.id)}>
                  <Trash size={20} color="red" />
                </TouchableOpacity>
                <Text className="font-semibold ml-4">${product.price}</Text>
              </View>
            ))}
          </View>

          {/* Resumen de Compra */}
          <View className="w-1/4 bg-white p-4 rounded-lg shadow-md ml-4">
            <Text className="text-lg font-semibold mb-4">Purchase Summary</Text>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-500">Products ({products.length})</Text>
              <Text className="font-semibold">${totalAmount}</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-500">Shipment</Text>
              <Text className="font-semibold text-green-500">Free</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-lg font-bold">Total</Text>
              <Text className="text-lg font-bold">${totalAmount}</Text>
            </View>
            <TouchableOpacity className="bg-black py-3 mt-4 rounded-lg">
              <Text className="text-white text-center font-semibold">Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
