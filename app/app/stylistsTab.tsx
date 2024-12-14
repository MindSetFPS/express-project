import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Image } from 'react-native';

const stylists = [
  {
    id: 1,
    name: 'Ana Martínez',
    profileImage: 'https://picsum.photos/seed/1/200',
    message: 'Hola, soy Ana. ¿Qué necesitas para mejorar tu estilo?',
    responses: [
      '¿Te gustaría un look casual o algo más formal?',
      '¿Buscas un outfit específico para un evento?',
    ],
  },
  {
    id: 2,
    name: 'Luis García',
    profileImage: 'https://picsum.photos/seed/2/200',
    message: 'Hola, soy Luis. ¿Cómo puedo asistirte hoy?',
    responses: [
      '¿Prefieres colores neutros o algo más llamativo?',
      '¿Qué tipo de prendas sueles usar?',
    ],
  },
  {
    id: 3,
    name: 'Marta López',
    profileImage: 'https://picsum.photos/seed/3/200',
    message: '¡Hola! Soy Marta. ¿Buscas algo en particular?',
    responses: [
      '¿Te interesa ropa para un clima específico?',
      '¿Buscas algo de temporada o algo clásico?',
    ],
  },
  {
    id: 4,
    name: 'Carlos Pérez',
    profileImage: 'https://picsum.photos/seed/4/200',
    message: 'Hola, soy Carlos. ¿Qué necesitas en tu armario?',
    responses: [
      '¿Te gustan los estilos minimalistas?',
      '¿Tienes una ocasión especial en mente?',
    ],
  },
  {
    id: 5,
    name: 'Laura Sánchez',
    profileImage: 'https://picsum.photos/seed/5/200',
    message: '¡Hola! Soy Laura. Estoy aquí para ayudarte.',
    responses: [
      '¿Prefieres prendas modernas o clásicas?',
      '¿Cuál es tu estilo favorito?',
    ],
  },
  {
    id: 6,
    name: 'Pedro Gómez',
    profileImage: 'https://picsum.photos/seed/6/200',
    message: '¡Hola! Soy Pedro. ¿En qué puedo asistirte?',
    responses: [
      '¿Buscas ropa para una ocasión casual?',
      '¿Te gustaría explorar nuevas tendencias?',
    ],
  },
];

export default function StylistsScreen() {
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleChat = (stylist) => {
    setSelectedStylist(stylist);
    setMessages([
      { id: 1, from: 'stylist', text: stylist.message },
    ]);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newId = messages.length + 1;
      const userMessage = { id: newId, from: 'user', text: newMessage.trim() };

      // Obtener respuesta personalizada
      const autoResponse = {
        id: newId + 1,
        from: 'stylist',
        text: selectedStylist.responses[
          Math.floor(Math.random() * selectedStylist.responses.length)
        ],
      };

      setMessages([...messages, userMessage, autoResponse]);
      setNewMessage('');
    }
  };

  const closeChat = () => {
    setSelectedStylist(null);
    setMessages([]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <HStack className="px-4 py-8 items-center">
          <Text className="text-2xl font-bold">Conoce a los estilistas</Text>
        </HStack>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
          {stylists.map((stylist) => (
            <TouchableOpacity key={stylist.id} onPress={() => handleChat(stylist)}>
              <Card variant="outline" className="mb-4 mr-4 p-4 w-40 items-center">
                <Image source={{ uri: stylist.profileImage }} className="w-24 h-24 rounded-full mb-2" />
                <Text className="text-lg font-semibold">{stylist.name}</Text>
                <Text className="text-sm text-gray-500 text-center">{stylist.message}</Text>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      {selectedStylist && (
        <Modal animationType="slide" transparent={true} visible={true} onRequestClose={closeChat}>
          <View className="flex-1 bg-black bg-opacity-50 justify-center items-center">
            <View className="bg-white rounded-lg p-4 w-4/5 max-h-3/4">
              <HStack className="items-center mb-4">
                <Image source={{ uri: selectedStylist.profileImage }} className="w-10 h-10 rounded-full mr-4" />
                <Text className="text-xl font-bold">{selectedStylist.name}</Text>
              </HStack>
              <ScrollView className="mb-4" style={{ maxHeight: 300 }}>
                {messages.map((message) => (
                  <HStack
                    key={message.id}
                    className={`mb-4 ${message.from === 'stylist' ? 'justify-start' : 'justify-end'}`}
                  >
                    <Card
                      className={`p-4 ${
                        message.from === 'stylist'
                          ? 'bg-blue-100 rounded-tr-lg rounded-br-lg'
                          : 'bg-gray-100 rounded-tl-lg rounded-bl-lg'
                      }`}
                    >
                      <Text>{message.text}</Text>
                    </Card>
                  </HStack>
                ))}
              </ScrollView>
              <HStack className="border-t border-gray-200 pt-4 items-center">
                <TextInput
                  value={newMessage}
                  onChangeText={setNewMessage}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 border border-gray-300 rounded-lg p-2"
                />
                <TouchableOpacity onPress={sendMessage} className="ml-2 bg-blue-500 p-2 rounded-full">
                  <Text className="text-white">Enviar</Text>
                </TouchableOpacity>
              </HStack>
              <TouchableOpacity onPress={closeChat} className="mt-4 bg-red-500 p-2 rounded-lg">
                <Text className="text-white text-center">Cerrar Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}
