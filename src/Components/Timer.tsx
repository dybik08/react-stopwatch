import React from "react";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

export type TimeOptions = {
    time: number,
}

interface TimerComponentProps {
    timerActive: boolean;
    onTimeUpdate: (options: TimeOptions) => void;
    time: number;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ timerActive, onTimeUpdate, time }) => {
    return (
        timerActive ? <Timer onTimeUpdate={onTimeUpdate} active={timerActive} duration={null}>
            <Timecode time={time} className={"time-code"} />
        </Timer> : <Timecode time={time} className={"time-code"} />
    );
};

export default TimerComponent;
