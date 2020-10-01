import React from "react";

interface ButtonRowProps {
    setTimerActive: (active: boolean) => void;
    setTime: (time: number) => void;
    saveCurrentTime: () => void;
    timerActive: boolean;
}

const ButtonRow: React.FC<ButtonRowProps> = ({ setTimerActive, setTime, saveCurrentTime, timerActive }) => {
    const onStartButtonPress = (): void => {
        setTimerActive(true);
    };

    const onResetButtonPress = (): void => {
        setTime(0);
        setTimerActive(false);
    };

    const onRecordButtonPress = (): void => {
        saveCurrentTime();
        setTime(0);
        setTimerActive(false);
    };

    return (
        <div>
            {timerActive ? (
                <button className='glow-on-hover' key={"Reset"} onClick={onResetButtonPress}>
                    {"Reset"}
                </button>
            ) : (
                <button className='glow-on-hover' key={"Start"} onClick={onStartButtonPress}>
                    {"Start"}
                </button>
            )}

            <button className='glow-on-hover' key={"Record"} onClick={onRecordButtonPress}>
                {"Record"}
            </button>
        </div>
    );
};

export default ButtonRow;
