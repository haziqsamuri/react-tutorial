//JSX - JavaScript XML

//Challenge 12
//only render the subtitle and a tag if subtitle exists - logical and operator
//render new p tag - if options.length > 0 "here are ypur options" else "no options"

var app = {
    title : 'Indecision',
    subtitle : 'choose mate',
    options: []
};

var template = (
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

var user = {
    name : 'Haziq',
    age :22,
    location : 'Melbourne',
};

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    }
    // else{
    //     return undefined;
    // }
}

//Challenge for lecture 10
//Create a templateTwo var JSX expression
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);




var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);