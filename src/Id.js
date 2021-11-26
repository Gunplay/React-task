import React, { useState, useEffect } from "react";

// import "/VS CODE CODING/Yalantis/2 - Уроки React JS - Работа с API на примере. Fetch - запрос Api";
// import { render } from "@testing-library/react";
// import fcomponent from './Fcomponent';

// import { Button } from '@material-ui/core';

const DrinkList = () => {

    const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const downloadLS = localStorage.getItem('DrinkList') || []
    //     setDrinks(JSON.parse(downloadLS))
    // }, [])

    useEffect(() => {
        fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then(res => res.json().then((res => setUserData(res)))

     ) }, []);

    return (
        // <div>{drinks.map((drink => (<div>{drink.strDrink}</div>)))}</div>
        <>
        <div>{drinks?.map((drink) =>
            <div key={drink.idDrink}>{drink.strDrink}</div>
        )}</div>
<div></div>
</>
        // <div>{JSON.stringify(drinks)}</div>
    )

}

export default DrinkList

//  export DrinkLhttpist;
// expordefault class List extends Componet {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };




//         // жизненый цикл
//         ComponetDidMount() {
//             fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
//                 .then(res => res.json())
//                 .then(
//                     (result) => {
//                         this.setState({
//                             isLoaded: true,
//                             items: result.drinks
//                         });
//                     },
//                     (error) => {
//                         this.setState({
//                             isLoaded: true,
//                             error
//                         });
//                     }
//                 )
//         }


//         render() {
//             const { error, isLoaded, items } = this.state;
//             if (error) {
//                 return <p> Error {error.messege} </p>
//             }
//             else if (!isLoaded) {
//                 return <p> Loading... </p>
//             }
//             else {
//                 // спомощью метода map  мы выводим результат нашего выполнения
//                 return (
//                     <ul>
//                         {items.map(item => {
//                             return (
//                                 <li key={item.name}>
//                                     {items.strDrink}
//                                     <img width="50" height="50" src={item.strDrinkThumb} />
//                                 </li>
//                             );
//                         )}
//                     </ul>
//                 )
//             }





//         }
//     }