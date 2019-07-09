import React from 'react';

const inputStyle = {
    width: '100px',
    marginBottom: '15px',
};

const containerStyle = {
    margin: '20px',
    padding: '35px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

export default class AddForm extends React.Component {
    state = {
        title: '',
        estimation: '',
    }

    onTitleChange = ({ currentTarget: { value: title } }) => {
        this.setState({ title });
    }

    onEstimationChange = ({ currentTarget: { value: estimation } }) => {
        this.setState({ estimation });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const { title, estimation } = this.state;

        if (this.state.title && this.state.estimation) {
            this.props.onSubmit({ title, estimation });
            this.setState({ title: '', estimation: '' });
        }
    }

    render() {
        return (
            <form
                style={containerStyle}
                onSubmit={this.onFormSubmit}
            >
                Title
                <input
                    required
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    style={inputStyle}
                />

                {'Estimation (in seconds)'}
                <input
                    required
                    value={this.state.estimation}
                    onChange={this.onEstimationChange}
                    style={inputStyle}
                    type='number'
                    min='0'
                />

                <button type='submit'>
                    Add New
                </button>
            </form>
        );
    }
}