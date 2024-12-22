// import Hallo from "./Hallo";
function Home() {
    // const fruits = ["apple", "banana", "orange"];
   let obj1 = { name: "Naruto"};
   let obj2 = { age: 23}

   let combineObject = {...obj1, ...obj2};
   console.log(combineObject);
    return (

        <main>
            {/* <ul>
                {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>))}
            </ul> */}
            {/* <Hallo nama="Naruto"/>
            <Hallo nama="Sasuke"/>
            <Hallo nama="Sakura"/> */}
        </main>
    );
}

export default Home;