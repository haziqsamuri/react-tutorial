import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `Hi. my name is ${this.name}.`
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting())

//---------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. my name is ${this.name}.`
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting())

//INDECISION-APP

import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        
    }
    componentDidMount() {
        console.log('mounted');
        try {
            //gets options from localstorage
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
            else{
                console.log('empty')
            }

        } catch (e) {
            console.log('wrong')
        }
    }
    componentDidUpdate(prevProps, prevState) {
        //Check if new option added
        if (prevState.options.length !== this.state.options.length) {
            //this part makes options into a string of JSON and 
            //saves to localstorage
            const json = JSON.stringify(this.state.options);
            console.log(json)
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {

    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)

        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) =>
            ({ options: prevState.options.concat(option) })
        )
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
