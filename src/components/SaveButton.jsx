function SaveButton(){

    return <button>Save</button>
}

export default SaveButton;




// export function SaveButton(){

//     return <button>Save</button>
// }

// If we use this type of export then while importing we have write like this 
// "import {SaveButton} from './components/SaveButton';" in curly braces 
//THis is Usefull if one file there are miltifunction then we can easyli import it in one go like "import {SaveButton, CancelButton} from './Component/SaveButton'"
// Like this we can't do using default export