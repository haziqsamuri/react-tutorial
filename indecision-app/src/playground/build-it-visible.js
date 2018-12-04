class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility == false ? 'Show Details' : 'Hide Details'}</button>
                {this.state.visibility == true && <p>Yeah brah</p>}
            </div>
        )
    }
}
ReactDOM.render(<Visible />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility
//     // if(visibility.visible){
//     //     visibility.visible = false;
//     // }
//     // else{
//     //     visibility.visible = true;
//     // }
//     render();
// }


// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>{visibility.visible == false ? 'Show Details' : 'Hide Details'}</button>
//         {visibility.visible && <p>Yeah brah</p> }
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// }

// // const render = () => {
// //     const template = (
// //         <div>
// //         <h1>Visibility Toggle</h1>
// //         <button onClick={toggleVisibility}>{visibility.visible == false ? 'Show Details' : 'Hide Details'}</button>
// //         {visibility.visible == true ? <p>Yeah brah</p> : false}
// //         </div>
// //     )

// //     ReactDOM.render(template, appRoot);
// // }

// render();