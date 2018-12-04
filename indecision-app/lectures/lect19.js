//JSX - JavaScript XML

//Challenge 12
//only render the subtitle and a tag if subtitle exists - logical and operator
//render new p tag - if options.length > 0 "here are ypur options" else "no options"

const app = {
    title: 'Indecision',
    subtitle: 'choose mate',
    options: []
};
const onFormSubmit = (e) => {
    //stops the full page refresh
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        //clears the form on the webpage
        e.target.elements.option.value = '';
        renderIndecision();
    }
};

const removeAll = () =>{
    app.options = [];
    renderIndecision();
}


const appRoot = document.getElementById('app');

const numbers = [55,101,1000];

const renderIndecision = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p> Here are your options</p> : <p> No options</p>}
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            {
                numbers.map((number)=> {
                    return <li key={number}>Number : {number * 2}</li>
                })
            }
            <ol>
                {app.options.map((option)=> {
                    return <p key={option}>{option}</p>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecision();