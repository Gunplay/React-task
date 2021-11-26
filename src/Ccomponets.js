import React, {useState, useEffect} from "react";
import {HtmlTagObject as div} from "html-webpack-plugin";

// import "/VS CODE CODING/Yalantis/2 - Уроки React JS - Работа с API на примере. Fetch - запрос Api";
// import { render } from "@testing-library/react";
// import fcomponent from './Fcomponent';

// import { Button } from '@material-ui/core';

const UserList = () => {

    const [userData, setUserData] = useState([]);


    useEffect(() => {
        fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then(res => res.json().then((res => setUserData(res)))
        )
    }, []);

    console.log(userData)
};


const handleClickChar = item => {
    console.log(item.target.getAttribute("data-value"))
};


const handleViewUserEng = () => {
    const result = [];

    for (let i = 65; i < 91; i++) {
        result.push(
            i
        )
    }

    return result.map(char => <div className="charitem" onClick={handleClickChar}
                                   data-value={String.fromCharCode(char)}>{String.fromCharCode(char)}</div>)

};


//   elementContainsSearchString = (searchInput, element) => (searchInput ? element.name.toLowerCase().includes(searchInput.toLowerCase()) : false);
//   filterItems = (itemList) => {
//     let result = [];
//     const { searchInput, alphabet } = this.state;
//     if (itemList && (searchInput || alphabet)) {
//       result = itemList.filter((element) => (element.name.charAt(0).toLowerCase() === alphabet.toLowerCase()) ||
//         this.elementContainsSearchString(searchInput, element));
//     } else {
//       result = itemList || [];
//     }
//     result = result.map((item) => (<li>{item.name}</li>))
//     return result;
//   }
//   render() {
//     const itemList = [{ id: 1, name: 'abcd' }, { id: 2, name: 'gfhj' }, { id: 3, name: 'fh' }, { id: 4, name: 'zxbv' }, { id: 5, name: 'ewyur' }, { id: 6, name: 'gsdjhbndf' }, { id: 7, name: 'gbhfvd' }, { id: 8, name: 'wgtaqe' }, { id: 1, name: 'ab' }, { id: 1, name: 'bcd' }, { id: 1, name: 'cde' }];
//     // const itemList = undefined;
//     const filteredList = this.filterItems(itemList);
//     return (
//       <div>
//         <input type="search" onChange={this.onSearchInputChange} />
//         {this.prepareAlphabets()}
//         <ul>
//           {filteredList}
//         </ul>
//       </div>
//     );
//   }
// }


const handleViewUserList = () => {
    if (userData.length) {
        return userData.map(item => <div className="userview">{`${item.firstName} ${item.lastName} ${item.dob}`}</div>)
    }
}

return (
    <>
        <div className="EngAph"> {handleViewUserEng()}</div>
        <div>{handleViewUserList()}</div>
        <div></div>

    </>

)


}

export default UserList



