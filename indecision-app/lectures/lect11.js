//JSX - JavaScript XML

//Challenge 11
var app = {
    title : 'Indecision',
    subtitle : 'choose mate',
};


var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name : 'Haziq',
    age : 22,
    location : 'Melbourne',
};

//Challenge for lecture 10
//Create a templateTwo var JSX expression
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>

    </div>
);




var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);