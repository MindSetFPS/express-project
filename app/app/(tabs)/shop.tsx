import FilterBar from "@/components/FilterBar";
import ShopContent from "@/components/ShopContent";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";

export default function Shop(){
    return(
        <HStack className="container mx-auto px-4 flex flow-col">
            <FilterBar />
            <ShopContent />
        </HStack>
    )
}