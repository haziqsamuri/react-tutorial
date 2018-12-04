//JSX - JavaScript XML

//Challenge 12
//only render the subtitle and a tag if subtitle exists - logical and operator
//render new p tag - if options.length > 0 "here are ypur options" else "no options"

const app = {
    title: 'Indecision',
    subtitle: 'choose mate',
    options: []
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p> Here are your options</p> : <p> No options</p>}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}



const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);

}

renderCounterApp();