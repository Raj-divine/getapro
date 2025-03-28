"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import UserSignUpModal from "@/components/UserSignUpModal";
import MultiSelectButtons from "@/components/utils/MultiSelectButtons";
import processSelectedTimes from "@/utils/processSelectedTimes";
import { PopoverContent } from "@radix-ui/react-popover";
import { formatDate } from "date-fns";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookingSection() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string[]>([]);
    const [sessions, setSessions] = useState<
        { startTime: Date; duration: number }[]
    >([]);

    // TODO: should be rendered dynamically
    const options = [
        { value: "9:00-9:15", label: "9:00AM - 9:15AM", booked: false },
        { value: "9:20-9:35", label: "9:20AM - 9:35AM", booked: false },
        { value: "9:40-9:55", label: "9:40AM - 9:55AM", booked: false },
        { value: "10:00-10:15", label: "10:00AM - 10:55AM", booked: false },
        { value: "10:20-10:35", label: "10:20AM - 10:35AM", booked: false },
        { value: "10:40-10:55", label: "10:40AM - 9:55AM", booked: false },
        { value: "11:00-11:15", label: "11:00AM - 11:15AM", booked: false },
        { value: "11:20-11:35", label: "11:20AM - 11:35AM", booked: false },

        { value: "18:30-18:45", label: "6:30PM - 6:45PM", booked: false },
        { value: "18:50-19:05", label: "6:50PM - 7:05PM", booked: false },
        { value: "19:50-20:05", label: "7:50PM - 8:05PM", booked: false },
        { value: "20:10-20:25", label: "8:10PM - 8:25PM", booked: false },
        { value: "20:40-20:55", label: "8:40PM - 8:55PM", booked: false },
        
        { value: "18:30-18:45", label: "6:30PM - 6:45PM", booked: false },
        { value: "18:50-19:05", label: "6:50PM - 7:05PM", booked: false },
        { value: "19:50-20:05", label: "7:50PM - 8:05PM", booked: false },
        { value: "20:10-20:25", label: "8:10PM - 8:25PM", booked: false },
        { value: "20:40-20:55", label: "8:40PM - 8:55PM", booked: false },
    ];

    useEffect(() => {
        if (selectedTime.length && date) {
            const processedSessions = processSelectedTimes(selectedTime, date);
            setSessions(processedSessions);
        } else {
            setSessions([]);
        }
    }, [selectedTime, date]);

    return (
        <div className='flex-1 h-full md:h-screen lg:h-full border bg-white rounded-lg p-4 flex flex-col justify-between'>
            <ScrollArea className='max-md:h-[40rem] h-5/6'>
                <div>
                    <h5 className='font-heading font-semibold text-xl'>
                        Book a consultation
                    </h5>
                    <p className='text-gray-500 text-sm'>
                        Select a date and time for your session
                    </p>
                </div>
                <div className='flex flex-col item-center mt-5 w-full'>
                    <Separator />
                    <div className='flex justify-center'>
                        <Calendar
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                            required
                            hidden={[]} //Dates will be hidden when professional is not available on that day
                            disabled={{
                                before: new Date(),
                                after: new Date(
                                    Date.now() + 1000 * 60 * 60 * 24 * 30,
                                ),
                            }}
                        />
                    </div>
                    <Separator />
                </div>
                <div className='mt-5 flex flex-col justify-between'>
                    <div>
                        <p className='text'>
                            Available slots for{" "}
                            {formatDate(
                                date || new Date(),
                                "cccc, do MMMM, yyyy",
                            )}
                        </p>
                        <p className='text-sm text-gray-500'>
                            You can choose multiple adjacent slots for a longer
                            session. Maximum duration of a session can only be 2
                            hours.
                        </p>
                        <div className='mt-5'>
                            <div className='font-heading flex flex-wrap max-md:justify-center'>
                                <div className='xl:h-40 sm:gap-x-5 max-md:grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 max-md:w-full'>
                                    <MultiSelectButtons
                                        options={options}
                                        selected={selectedTime}
                                        onChange={setSelectedTime}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
            <Separator className='mt-3' />
            <div className='mt-2 flex flex-col'>
                {sessions.length < 4 ? (
                    <p className='mb-3 text-ellipsis'>
                        {sessions.length === 1 && (
                            <span>
                                Your session will start at{" "}
                                {formatDate(
                                    sessions[0].startTime,
                                    "cccc, do MMMM, yyyy, h:mm aaa",
                                )}{" "}
                                and last for {sessions[0].duration} minutes.
                            </span>
                        )}
                        {sessions.length > 1 && (
                            <span>
                                You have chosen {sessions.length} session
                                starting at{" "}
                                {sessions.map(
                                    (session, index) =>
                                        `${formatDate(session.startTime, "h:mm aaa")}${sessions.length === index + 1 ? "" : ", "}`,
                                )}{" "}
                                lasting for{" "}
                                {sessions.map(
                                    (session, index) =>
                                        `${session.duration}${sessions.length === index + 1 ? "" : ", "}`,
                                )}{" "}
                                minutes respectively.
                            </span>
                        )}
                    </p>
                ) : (
                    <div className='flex items-start'>
                        <p className='inline'>
                            You have chosen {sessions.length} different sessions
                            lasting{" "}
                            {sessions.reduce(
                                (total, session) => total + session.duration,
                                0,
                            )}{" "}
                            minutes combined.
                        </p>
                        <div className='inline ml-2'>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button className='text-gray-500 mt-2'>
                                        <Info size={15} />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className='shadow bg-white rounded-lg p-4 w-80'>
                                        <div>
                                            You have chosen {sessions.length}{" "}
                                            session starting at{" "}
                                            {sessions.map(
                                                (session, index) =>
                                                    `${formatDate(session.startTime, "h:mm aaa")}${sessions.length === index + 1 ? "" : ", "}`,
                                            )}{" "}
                                            lasting for{" "}
                                            {sessions.map(
                                                (session, index) =>
                                                    `${session.duration}${sessions.length === index + 1 ? "" : ", "}`,
                                            )}{" "}
                                            minutes respectively.
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                )}
                <UserSignUpModal>
                    <Button>Book your session</Button>
                </UserSignUpModal>
            </div>
        </div>
    );
}
