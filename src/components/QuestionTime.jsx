import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout}){
    const [remainingTime,setRemainingTime] = useState(timeout);

    useEffect(()=>{
        console.log('SET TIMEOUT');
        const timer = setTimeout(onTimeout,timeout);

        return () => clearTimeout(timer);
    },[timeout,onTimeout]);

    useEffect(()=>{
        console.log('SET INTERNVAL');
        const internval = setInterval(()=>{
            setRemainingTime(prevRemainingTime => prevRemainingTime-100)
        },100);

        return () => clearInterval(internval);
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime}/>;
}