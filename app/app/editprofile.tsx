import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditProfileScreen: React.FC = () => {
  // Estados para manejar los datos del usuario
  const [username, setUsername] = useState("juanita");
  const [fullName, setFullName] = useState("Juanita Pérez");
  const [bio, setBio] = useState("Amante de la música y la creatividad. Inspirando a otros a través de mis aventuras.");
  const [website, setWebsite] = useState("https://miwebsite.com");

  // Función para guardar cambios
  const handleSaveChanges = () => {
    Alert.alert("Perfil actualizado", "Los cambios han sido guardados exitosamente.");
    // Aquí podrías añadir la lógica para guardar los datos en el backend.
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        
        {/* Header - Imagen de perfil y botón para cambiar */}
        <View className="w-full items-center mb-6">
          <Image source={{ uri: 'https://via.placeholder.com/120' }} className="w-28 h-28 rounded-full mb-2 shadow-lg" />
          <TouchableOpacity onPress={() => Alert.alert("Cambiar foto", "Función para cambiar la foto de perfil.")}>
            <Text className="text-blue-500 font-semibold">Cambiar foto de perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Campo de nombre de usuario */}
        <View className="w-full px-4 mb-4">
          <Text className="text-gray-500 font-semibold mb-1">Nombre de usuario</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Nombre de usuario"
          />
        </View>

        {/* Campo de nombre completo */}
        <View className="w-full px-4 mb-4">
          <Text className="text-gray-500 font-semibold mb-1">Nombre completo</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Nombre completo"
          />
        </View>

        {/* Campo de biografía */}
        <View className="w-full px-4 mb-4">
          <Text className="text-gray-500 font-semibold mb-1">Biografía</Text>
          <TextInput
            value={bio}
            onChangeText={setBio}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Biografía"
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Campo de sitio web */}
        <View className="w-full px-4 mb-6">
          <Text className="text-gray-500 font-semibold mb-1">Sitio web</Text>
          <TextInput
            value={website}
            onChangeText={setWebsite}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Sitio web"
          />
        </View>

        {/* Botón para guardar cambios con diseño más elegante */}
        <TouchableOpacity onPress={handleSaveChanges} className="w-3/4 py-3 rounded-lg border border-purple-600 bg-transparent shadow-md">
          <Text className="text-purple-600 text-center font-semibold">Guardar cambios</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
