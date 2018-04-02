var user = {
    name: 'Peter',
    age: 30,
    loc: 'Sofia',
};

var app = {
    title: 'Indecision v1.1',
    subtitle: 'Nothing to decide',
    options: ['One', 'Two'],
}

var templateOne = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>app.subtitle</h2>}
        { (app.options && app.options.length > 0) && <p>Options</p>}
    </div>
);

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.loc}</p>
    </div>
);

var root = document.getElementById('app');

ReactDOM.render(templateOne, root);