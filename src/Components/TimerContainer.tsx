import ButtonRow from "./ButtonRow";
import React, { useEffect, useState } from "react";
import Timer, {TimeOptions} from "./Timer";
import { List } from "antd";
import _ from 'lodash';

const TimerContainer = () => {
    const [timerActive, setTimerActive] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [records, setRecord] = useState<string[]>([]);

    useEffect(() => {
        const allRecords = window.localStorage.getItem("records");
        if (allRecords) {
            const parsedRecords = JSON.parse(allRecords);
            !_.isEqual(parsedRecords, records) && setRecord(parsedRecords);
        }
    }, [records]);


    const onTimeUpdate = (options: TimeOptions): void => {
        setTime(options.time);
    };

    const saveCurrentTime = (): void => {
        if (time === 0) {
            return;
        }
        setRecord((prevState: string[]): string[] => {
            const newRecords = [...prevState, (time / 1000).toFixed(2) + " s"].sort();
            window.localStorage.setItem("records", JSON.stringify(newRecords.slice(0, 5)));
            return newRecords
        });
    };

    return (
        <div>
            <Timer time={time} onTimeUpdate={onTimeUpdate} timerActive={timerActive} />
            <ButtonRow timerActive={timerActive} saveCurrentTime={saveCurrentTime} setTime={setTime} setTimerActive={setTimerActive} />
            <div className='list-container'>
                <List
                    size='small'
                    header={<div>Top 5 results: </div>}
                    bordered
                    dataSource={records}
                    renderItem={(item: string) => <List.Item style={{justifyContent: 'center'}}>{item}</List.Item>}
                />
            </div>
        </div>
    );
};

export default TimerContainer;
