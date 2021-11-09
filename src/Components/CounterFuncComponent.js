import React, {useState, useEffect} from "react"
import { CounterContainer } from "./styles"
import ButtonReset from "./Button"
import {
    FiRefreshCcw
} from "react-icons/fi"

export default function Counter(props) {

    const [clock, setClock] = useState({
        hour: 0,
        minute: 0,
        second: 0
    });

    useEffect(() => {
        var clock = localStorage.getItem(props.idItem)
        if (clock === null) {
            localStorage.setItem(props.idItem, new Date())
        } else {
            var att = getStateTime(Date.parse(clock))
            console.log(att)
            setClock(att)
        }
    }, [])

    useEffect(() => {
        function updateTime() {
            var att = {}

            if (clock.second == 59) {
                if (clock.minute == 59) {
                    att = {
                        second: 0,
                        minute: 0,
                        hour: ++clock.hour
                    }
                } else {
                    att = {
                        hour: clock.hour,
                        second: 0,
                        minute: ++clock.minute,
                    }
                }
            } else {
                att = {
                    ...clock,
                    second: ++clock.second
                }
            }
            setClock(att);
        }
        var timer = setInterval(updateTime, 1000)
        return () => clearTimeout(timer);
    }, [clock])

    function getStateTime(time) {
        var secondDiff = Math.round((new Date().getTime() - time) / 1000)
        var minutesDiff = Math.floor(secondDiff / 60)
        var hourDiff = Math.floor(minutesDiff / 60)

        return {
            minute: minutesDiff - (hourDiff * 60),
            second: secondDiff - (minutesDiff * 60),
            hour: hourDiff
        }
    }

    function resetCounter() {
        localStorage.setItem(props.idItem, new Date())
        setClock({
            second: 0,
            minute: 0,
            hour: 0
        })
    }



    var second = clock.second < 10 ? `0${clock.second}` : clock.second
    var minute = clock.minute < 10 ? `0${clock.minute}` : clock.minute
    var hour = clock.hour < 10 ? `0${clock.hour}` : clock.hour


    return (
        <CounterContainer bg={"blue"}>
            {hour}:{minute}:{second}
            <ButtonReset action={resetCounter} children={() => <FiRefreshCcw color={'white'} width={20} />}/>

        </CounterContainer>
    )

}
