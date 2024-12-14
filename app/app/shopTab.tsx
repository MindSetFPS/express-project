import FilterBar from "@/components/FilterBar";
import ShopContent from "@/components/ShopContent";
import { Fab, FabIcon } from "@/components/ui/fab";
import { HStack } from "@/components/ui/hstack";
import { Filter } from "lucide-react-native";
import { useState } from "react";

export default function ShopTab() {
    const [showFilterBar, setShowFilterBar] = useState<boolean>(false);

    return (
        <HStack className="md:container md:mx-auto flex flow-col w-screen ">
            <FilterBar
                showFilterBar={showFilterBar}
                onCloseFilterBar={() => setShowFilterBar(false)}
            />
            <ShopContent />
            <Fab
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800"
                onPress={() => setShowFilterBar(true)}
            >
                <FabIcon as={Filter} color="white" />
            </Fab>
        </HStack>
    )
}