
function Food(){

    const foo1 = "Orange";
    const foo2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{foo1.toLowerCase()}</li>
            <li>{foo2.toUpperCase()}</li>
        </ul>
    );
}
export default Food