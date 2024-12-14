import { ScrollView, SafeAreaView } from "react-native"
import { VStack } from '@/components/ui/vstack';
import OutfitWeek from "@/components/home/OutfitWeek";
import MissionCard from "@/components/home/MissionsCard";
import { Heading } from "@/components/ui/heading";

export default function HomeScreen() {
  return (
    <ScrollView >
      <SafeAreaView>
        <VStack className='container mx-auto px-4 py-4 flex-1 flex-col' space='md'>
          <MissionCard />
          <OutfitWeek />
          <Heading size="xl">Lo mas deseado</Heading>
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
}