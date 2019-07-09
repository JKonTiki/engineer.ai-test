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

const headerStyle = { color: 'red' };

export default class AddForm extends React.Component {
    state = {
        title: '',
        estimation: '',
        errorMessage: '',
    }

    onTitleChange = ({ currentTarget: { value: title } }) => {
        this.setState({ title });
    }

    onEstimationChange = ({ currentTarget: { value: estimation } }) => {
        this.setState({ estimation });
    }

    onAddClick = () => {
        const { title, estimation } = this.state;

        if (this.state.title && this.state.estimation) {
            this.props.onSubmit({ title, estimation });

            this.setState({ title: '', estimation: '', errorMessage: '' });
        } else {
            this.setState({ errorMessage: 'Please fill all fields with valid entries' });
        }
    }

    render() {
        return (
            <div
                style={containerStyle}
            >
                <h3 style={headerStyle}>{this.state.errorMessage}</h3>

                Title
                <input
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    style={inputStyle}
                />

                {'Estimation (in seconds)'}
                <input
                    value={this.state.estimation}
                    onChange={this.onEstimationChange}
                    style={inputStyle}
                    type='number'
                    min='0'
                />

                <button
                    onClick={this.onAddClick}
                >
                    Add New
                </button>
            </div>
        );
    }
}