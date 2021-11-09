import React from "react"
import { CounterContainer } from "./styles"
import ButtonReset from "./Button"
import {
    FiRefreshCcw
} from "react-icons/fi"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }
    }
    componentDidMount() {
        var clock = localStorage.getItem(this.props.idItem)
        if (clock === null) {
            localStorage.setItem(this.props.idItem, new Date())
        } else {
            var att = this.getStateTime(Date.parse(clock))
            console.log(att)
            this.setState(att)
        }
        this.timer = setInterval(this.updateTime, 1000)

    }


    getStateTime = (time) => {
        var secondDiff = Math.round((new Date().getTime() - time) / 1000)
        var minutesDiff = Math.floor(secondDiff / 60)
        var hourDiff = Math.floor(minutesDiff / 60)

        return {
            minute: minutesDiff - (hourDiff * 60),
            second: secondDiff - (minutesDiff * 60),
            hour: hourDiff
        }
    }

    resetCounter = () => {
        localStorage.setItem(this.props.idItem, new Date())
        this.setState({ second: 0, minute: 0, hour: 0 })
    }
    updateTime = () => {
        var att = {}

        if (this.state.second === 59) {
            if (this.state.minute === 59) {
                att = {
                    second: 0,
                    minute: 0,
                    hour: ++this.state.hour
                }
            } else {
                att = {
                    second: 0,
                    minute: ++this.state.minute,
                }
            }
        } else {
            att = {
                second: ++this.state.second
            }
        }
        this.setState(att);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }



    render() {
        var second = this.state.second < 10 ? `0${this.state.second}` : this.state.second
        var minute = this.state.minute < 10 ? `0${this.state.minute}` : this.state.minute
        var hour = this.state.hour < 10 ? `0${this.state.hour}` : this.state.hour

        return (
            <CounterContainer>
                {hour}:{minute}:{second}
                <ButtonReset action={this.resetCounter} children={() => <FiRefreshCcw color={'white'} width={20} />}/>

            </CounterContainer>
        )
    }
}
