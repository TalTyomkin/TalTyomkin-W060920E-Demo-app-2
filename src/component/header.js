import React from 'react';

const Header = () => {
    return <h1 style = {
        {
            background:'lightblue',
            margin: '50px',
            padding: '50px',
        }
    }>Push the button...</h1>;
}
 
export default Header;

// Arrow function:
// const fun = () => {}  "basic arrow fun"
// const fun = vari => <li></li> " one var & one line"
// // const fun = vari => (       "if regular brackets ypu dont need to use the 'return'"
//     <li></li>
//     <li></li>
// );
// const fun = (var1, var2) => {
    // return (
        // <li></li>
        // <li></li>
// )
// }  


