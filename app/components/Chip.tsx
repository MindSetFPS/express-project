import { Badge, BadgeText } from "./ui/badge";

export default function Chip() {
    return (
        <Badge size="sm" action="info" className="rounded-full">
            <BadgeText>Hello</BadgeText>
        </Badge>
    )
}