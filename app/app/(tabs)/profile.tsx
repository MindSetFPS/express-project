import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useNavigation } from 'expo-router';
import ProfileContent from '@/components/profile/ProfileContent';
import ProfileDescription from '@/components/profile/ProfileDescription';
import { VStack } from '@/components/ui/vstack';

// TODO: Build Auth System
// TODO: Populate profile with content
const ProfileScreen: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: "@juanita", // this must come from db instead of hardcoding
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32
      },
      headerShown: true,
    })
  }, [])

  const handleEditProfile = () => {
    router.navigate("/editprofile");
  };

  const handleAddContent = () => {
  };

  return (
    <SafeAreaView>
      <ScrollView className='px-4 mt-4'>
        <VStack space='lg'>
          <ProfileDescription />
          <ProfileContent />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
