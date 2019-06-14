import * as React from "react";

interface IState { time: number };
interface IProps {};


export class Timer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { time: 0 };
        setInterval(() => this.setState({ time: this.state.time+1 }), 1000);
    }
    render() {
        return <p>Time = { this.state.time }</p>;
    }
}