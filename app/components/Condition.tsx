import { ThumbsUp } from "lucide-react-native";
import { Badge, BadgeIcon, BadgeText } from "./ui/badge";

export default function Condition({ condition }: { condition: number }) {
    return (
        <Badge size="lg" variant="solid" action={`${condition == 1 ? "success" : "info"}`} >
            <BadgeText>
                {
                    condition == 1 ? "Como nueovo" : <></>
                }

                {
                    condition == 2 ? "Muy buena" : <></>
                }
                {
                    condition == 3 ? "Buena" : <></>
                }
                {
                    condition == 3 ? "Joya Escondida" : <></>
                }
            </BadgeText>
            <BadgeIcon as={ThumbsUp} className="ml-2" />
        </Badge>
    )
}