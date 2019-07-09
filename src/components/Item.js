import React from 'react';

const containerStyle = {
    backgroundColor: '#666',
    color: 'white',
    padding: '13px',
    border: 'solid 3px white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const buttonStyle = {
    margin: '5px',
};

const renderSection = (label, value) => {
    const text = `${label} --- ${value}`;
    return (
        <div style={{ margin: '2px' }}>
            {text}
            <hr />
        </div>
    );
}

const formatTime = (int) => {
    return new Date(int).toString();
}


export default class Item extends React.Component {
    state = {
        startTime: 0,
        endTime: 0,
    }

    onStartClick = () => {
        this.setState({ startTime: new Date().getTime(), endTime: 0 });
    }

    onEndClick = () => {
        this.setState({ endTime: new Date().getTime() });
    }

    render() {
        const { title, estimation } = this.props;
        const { startTime, endTime } = this.state;

        const completed = !!startTime && !!endTime;

        // divide by 1000 to get time in seconds
        const timeTaken = completed && ((endTime - startTime) / 1000);
        const deviation = completed && (parseInt(estimation) - timeTaken);

        return (
            <div style={containerStyle}>
                {renderSection('Title', title)}
                {renderSection('Estimated seconds to complete', estimation)}
                {!!startTime && renderSection('Start Time', formatTime(startTime))}
                {!!endTime && renderSection('End Time', formatTime(endTime))}
                {!!timeTaken && renderSection('Time Taken', `${timeTaken} seconds`)}
                {!!deviation && renderSection('Deviation', `${deviation} seconds`)}

                <button
                    onClick={this.onStartClick}
                    style={buttonStyle}
                >
                    Start
                </button>

                <button 
                    disabled={!this.state.startTime}
                    onClick={this.onEndClick}
                    style={buttonStyle}
                >
                    Finish
                </button>
            </div>
        );
    }
}