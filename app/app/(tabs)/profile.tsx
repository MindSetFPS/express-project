import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  // Funciones de manejo para los botones
  const handleEditProfile = () => {
    navigation.navigate("editprofile");
  };

  const handleShareProfile = () => {
    Alert.alert("Compartir perfil", "Función para compartir el perfil");
  };

  const handleAddContent = () => {
    Alert.alert("Agregar contenido", "Función para agregar contenido al feed");
  };

  return (
    <SafeAreaView className="flex-1 container mx-auto bg-white p-4">
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} className='px-12'>
        
        {/* Header - Imagen de perfil, nombre y estadísticas */}
        <View className="w-full items-center mb-6">
          <Image source={{ uri: 'https://via.placeholder.com/120' }} className="w-28 h-28 rounded-full mb-4 shadow-lg" />
          <Text className="text-black text-xl font-bold">@juanita</Text>
          <Text className="text-gray-600 text-sm">Músico(a) | Creadora de contenido</Text>
          <View className="flex-row space-x-8 mt-4">
            <View className="items-center">
              <Text className="text-black font-semibold text-lg">256</Text>
              <Text className="text-gray-500 text-xs">Seguidores</Text>
            </View>
            <View className="items-center">
              <Text className="text-black font-semibold text-lg">128</Text>
              <Text className="text-gray-500 text-xs">Seguidos</Text>
            </View>
            <View className="items-center">
              <Text className="text-black font-semibold text-lg">96</Text>
              <Text className="text-gray-500 text-xs">Refts</Text>
            </View>
          </View>
        </View>

        {/* Biografía con fondo destacado */}
        <View className="w-full px-4 py-4 bg-gray-100 rounded-lg mb-4">
          <Text className="text-gray-800 text-center">
            "Amante de la música y la creatividad. Inspirando a otros a través de mis aventuras y estilo personal."
          </Text>
        </View>

        <TouchableOpacity 
          onPress={handleAddContent} 
          className="w-3/4 py-3 rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg mb-6">
          <Text className="text-white text-center font-semibold">+ Add content</Text>
        </TouchableOpacity>

        {/* Sección de botones de acción con onPress */}
        <View className="flex-row space-x-2 mb-6 w-full px-4">
          <TouchableOpacity onPress={handleEditProfile} className="flex-1 border border-gray-300 py-2 rounded-full">
            <Text className="text-black text-center font-semibold">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShareProfile} className="flex-1 border border-gray-300 py-2 rounded-full">
            <Text className="text-black text-center font-semibold">Share Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Sección de contenido en tarjetas */}
        <View className="w-full px-4 mb-6">
          <Text className="text-black font-semibold text-lg mb-4">My content</Text>
          <View className="flex-row flex-wrap justify-between">
            {Array(6).fill('').map((_, index) => (
              <View key={index} className="w-36 h-36 bg-gray-200 rounded-lg mb-4 shadow-sm">
                <Image source={{ uri: 'https://via.placeholder.com/140' }} className="w-full h-full rounded-lg" />
              </View>
            ))}
          </View>
        </View>

        {/* Sección de favoritos en formato de cuadrícula */}
        <View className="w-full px-4">
          <Text className="text-black font-semibold text-lg mb-4">Favorites</Text>
          <View className="flex-row flex-wrap justify-between">
            {Array(6).fill('').map((_, index) => (
              <View key={index} className="w-36 h-36 bg-gray-200 rounded-lg mb-4 shadow-sm">
                <Image source={{ uri: 'https://via.placeholder.com/140' }} className="w-full h-full rounded-lg" />
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
