import { useEffect, useState } from "react";
import { HStack } from "../ui/hstack";
import OutfitDay from "./OutfitDay";
import { Cloud } from "lucide-react-native";

export default function OutfitWeek() {
    const [weekDays, setWeekDays] = useState<string[]>([])

    useEffect(() => {
        const today = new Date();
        const todaysWeekday = today.toLocaleDateString('es-MX', { weekday: 'short' });
        let currentDay;
        let nextDay;

        let i = 0;
        while (i < 5) {
            if (nextDay != undefined) currentDay = nextDay
            else currentDay = today
            nextDay = new Date(currentDay)
            nextDay.setDate(currentDay.getDate() + 1)
            const weekday = currentDay.toLocaleDateString('es-MX', { weekday: 'short' });
            console.log(weekday)
            setWeekDays((da) => [...da, weekday])
            i++;
        }
    }, [])

    return (
        <HStack className="justify-evenly">
            {
                weekDays && weekDays.length === 5 ?
                    weekDays.map(
                        (day) => (
                            <OutfitDay
                                isToday={day === new Date().toLocaleDateString('es-MX', { weekday: 'short' })}
                                weekDay={day}
                                weatherIcon={Cloud}
                            />
                        ))
                    :
                    <></>
            }

            {/* <OutfitDay weekDay="Lun" /> */}
            {/* <OutfitDay weekDay="Lun" /> */}
            {/* <OutfitDay weekDay="Lun" /> */}
            {/* <OutfitDay weekDay="Lun" /> */}
        </HStack>
    )
}