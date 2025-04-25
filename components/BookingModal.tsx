'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { formatDate } from "date-fns";
import { Dispatch, SetStateAction, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import createSessionAction from "@/app/actions/createSessionAction";
import getSessionRate from "@/utils/getSessionRate";
import { APP_ERRORS } from "@/config";
import { toast } from "sonner";

interface BookingModalProps {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    sessions: { startTime: Date; duration: number }[]
    ratePerHour: number
    professionalId: string
}

export default function BookingModal({ isOpen, setIsOpen, sessions, ratePerHour, professionalId }: BookingModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const createSession = async () => {
        setIsLoading(true);
        const toastId = toast.loading('Please wait...');
        const { error, appError, data } = await createSessionAction(sessions, professionalId);
        toast.dismiss(toastId);

        console.log(error, appError);

        if (appError && APP_ERRORS[appError]) {
            toast.error(APP_ERRORS[appError] || 'Something went wrong, please try again later or contact support');
        } else if (error) {
            toast.error(`Something went wrong: ${error.message}`);
        } else {
            toast.success('Session created successfully!');
        }
        setIsLoading(false);
        console.log(data);
    };

    return <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="font-heading">Confirm your booking!</DialogTitle>
                <DialogDescription>
                    {sessions.length === 1 && (
                        <span>
                            Your session will start at{" "}
                            {formatDate(
                                sessions[0].startTime,
                                "h:mm aaa, cccc, do MMMM, yyyy",
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
                            minutes respectively on {formatDate(
                                sessions[0].startTime,
                                "do MMMM, yyyy",
                            )}.
                        </span>
                    )}
                </DialogDescription>
            </DialogHeader>
            <div>
                <p>You have selected {sessions.length} {sessions.length === 1 ? "session" : "sessions"} for total {sessions.reduce((total, session) => total + session.duration, 0)} minutes on {formatDate(sessions[0] ? sessions[0].startTime : new Date(), "do MMMM, yyyy")}.</p>
                <Table className="mt-5">
                    <TableHeader>
                        <TableRow>
                            <TableHead>S.No</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead className="text-right">Amount (₹{ratePerHour} per hour)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sessions.map((session, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{formatDate(session.startTime, "h:mm aaa")}</TableCell>
                                <TableCell>{session.duration} minutes</TableCell>
                                <TableCell className="text-right">₹{getSessionRate(session.duration, ratePerHour)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell>{sessions.reduce((total, session) => total + session.duration, 0)} minutes</TableCell>
                            <TableCell className="text-right">₹{getSessionRate(ratePerHour, sessions.reduce((total, session) => total + session.duration, 0))}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>

            <Button disabled={isLoading} onClick={createSession}>Confirm</Button>
        </DialogContent>
    </Dialog>;
}