// const title = React.createElement(
//     'h1',
//     {id: 'main-title', title: 'This is a title.'},
//     'My First React Element!'
// );
 
// Jsx
const desc = 'I just learned how to Create a React node and render into the DOM'
// console.log(title);
const myTitleID = 'main-title';
const name = 'Doanh';

// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc
// );

const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element!</h1>
        <p>{ desc }</p>
    </header>
);

{/* this is a comment */}

ReactDOM.render(
    header,
    document.getElementById('root')
);