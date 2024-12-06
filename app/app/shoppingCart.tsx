import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Minus, Plus, Trash } from 'lucide-react-native'; // Aquí están las librerías necesarias

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function ShoppingCart() {
  // Lista de productos falsos recomendados
  const [recommendedProducts] = useState<Product[]>([
    { id: 1, name: 'Sweater', info: 'LBB round neck sweater for women', price: 2000, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
    { id: 2, name: 'T-shirt', info: 'Cotton t-shirt for men', price: 1000, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Jeans', info: 'Comfortable fit jeans', price: 1500, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
  ]);

  // Lista del carrito de compras
  const [cart, setCart] = useState<Product[]>([]);

  // Estado para el detalle del producto
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Función para agregar producto al carrito
  const addToCart = (product: Product) => {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
      setCart(cart.map(p => 
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar producto del carrito
  const removeFromCart = (id: number) => {
    setCart(cart.filter(product => product.id !== id));
  };

  // Función para ver detalles del producto
  const viewProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  // Función para realizar la compra
  const handlePurchase = () => {
    alert('Compra realizada con éxito');
    setCart([]); // Vaciar carrito después de la compra
  };

  // Calcular el total de la compra
  const totalAmount = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-gray-100">
      <ScrollView className="p-4">
        {/* Título */}
        <Text className="text-2xl font-bold mb-4">Shopping Cart</Text>
        <Text className="text-gray-600 mb-4">You have {cart.length} items in your cart</Text>

        {/* Sección de productos recomendados */}
        <View className="mb-8">
          <Text className="text-xl font-bold mb-4">Recommended Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
            {recommendedProducts.map((product) => (
              <View key={product.id} className="bg-white p-4 rounded-lg shadow-sm w-40">
                <Image source={{ uri: product.imageUrl }} className="w-32 h-32 rounded-md mb-2" />
                <Text className="font-semibold">{product.name}</Text>
                <Text className="text-sm text-gray-500">{product.info}</Text>
                <Text className="font-semibold text-lg mt-2">${product.price}</Text>
                <TouchableOpacity 
                  onPress={() => addToCart(product)}
                  className="mt-4 bg-black py-2 px-4 rounded-lg">
                  <Text className="text-white text-center">Add to Cart</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Contenedor principal para la lista de productos en el carrito */}
        <View className="flex-row justify-between">
          {/* Lista de productos en el carrito */}
          <View className="w-3/4 space-y-4 pr-4">
            {cart.map((product) => (
              <View key={product.id} className="flex-row items-center bg-white p-4 rounded-lg shadow-sm justify-between">
                <Image source={{ uri: product.imageUrl }} className="w-16 h-16 rounded" />
                <View className="flex-1 ml-4">
                  <TouchableOpacity onPress={() => viewProductDetails(product)}>
                    <Text className="font-semibold">{product.name}</Text>
                    <Text className="text-gray-500">{product.info}</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-2">
                  <TouchableOpacity onPress={() => removeFromCart(product.id)}>
                    <Trash size={20} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setCart(cart.map(p => p.id === product.id ? {...p, quantity: p.quantity - 1} : p))}>
                    <Minus size={20} color="gray" />
                  </TouchableOpacity>
                  <Text>{product.quantity}</Text>
                  <TouchableOpacity onPress={() => setCart(cart.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p))}>
                    <Plus size={20} color="gray" />
                  </TouchableOpacity>
                </View>
                <Text className="font-semibold ml-4">${product.price * product.quantity}</Text>
              </View>
            ))}
          </View>

          {/* Resumen de Compra */}
          <View className="w-1/4 bg-white p-4 rounded-lg shadow-md">
            <Text className="text-lg font-semibold mb-4">Purchase Summary</Text>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-500">Products ({cart.length})</Text>
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
            <TouchableOpacity
              onPress={handlePurchase}
              className="bg-black py-3 mt-4 rounded-lg">
              <Text className="text-white text-center font-semibold">Confirm Purchase</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Modal para ver detalles del producto */}
      {selectedProduct && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={selectedProduct !== null}
          onRequestClose={() => setSelectedProduct(null)}>
          <View className="flex-1 justify-center items-center bg-black opacity-80"> {/* Aumentamos la opacidad aquí */}
            <View className="bg-white p-6 rounded-lg shadow-lg w-4/5">
              <Text className="text-2xl font-semibold">{selectedProduct.name}</Text>
              <Image source={{ uri: selectedProduct.imageUrl }} className="w-full h-48 rounded-md mt-4" />
              <Text className="text-sm text-gray-600 mt-2">{selectedProduct.info}</Text>
              <Text className="font-bold text-lg mt-2">${selectedProduct.price}</Text>
              <TouchableOpacity
                onPress={() => setSelectedProduct(null)}
                className="mt-4 bg-gray-300 py-2 rounded-md">
                <Text className="text-center text-black">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}
