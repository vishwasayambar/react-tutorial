import React from "react";

export function FragmentsMain() {
  return (
    <React.Fragment>
      <h1 className="text-primary">Healthy Food</h1>
      <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetable</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">SALAD, MILK</li>
      </ul>
    </React.Fragment>
  );
}

// export default FragmentsMain;

// What is Fragments?
// In JSX you Cann't add multiple HTML tags direct you have to wrap it in sigle parent tab then in that parent
// you can add many no. of child you want but parent tag should be one.

// Therefore till now you always write our HTML in one empty div but due to this we are getting that unnecessary empty div
// which is not important so there is concept in react called "Fragments"

// <React.Fragment></React.Fragment> Instead of using one parent Div we use this fragment this will just wrap the html in one tag but it cannot add
// extra tag in browser while compiling it avoid the adding extra DOM node

// and its shorthand is <></>

// Map Method
export function LearMapMethod() {
  let healthyFood = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  let heading = "Learning Map Method:- healthy Food";

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1>{heading}</h1>
          <ul className="list-group">
            {healthyFood.map((item) => {
              return (
                <li key={item} className="list-group-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

// key is always important to give because it help to find exact index of that tag so if we have changed for any index then that index gets repaint not all the loop tags this is will cause performance issue

// The Below Code is First point of Conditional Formatiing by using if else codition
// if else condition is used to add or remove the element from the DOM

export function CondentionalRendering() {
  let heading = "Conditional Rendering Using If ELSE :- Fruit Item List";
  let fruitItems = ["Apple", "Banana", "Cherry", "CustedApple", "PineApple"];
  let errorMessage = "Fruit Item Bucket is empty.";

  // let fruitItems = [];

  if (fruitItems.length === 0) {
    return (
      <>
        <h1>{errorMessage}</h1>
      </>
    );
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="text-danger">{heading}</h1>
          <ul className="list-group">
            {fruitItems.map((item) => {
              return (
                <li key={item} className="list-group-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

//But In above code we have some issue like that we wan to show heading even when if codition is get true.
// but in above code to achive this we have declare h1 twice so instead of if else we can use "ternary operator"
// now in below code we have use ternary operator we have used one h1 and if length 0 then error message eill show otherwise it will show null
// null means it goes ahead of that expression.

export function TernaryOperator() {
  let heading = "Ternary Operator:- Fruit Item List";
  let errorMessage = "Fruit Item Bucket is empty.";
  // let fruitItems = ["Apple", "Banana", "Cherry", "CustedApple", "PineApple"];
  let fruitItems = [];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="text-primary">{heading}</h1>
          {fruitItems.length === 0 ? (
            <h1 className="text-success">{errorMessage}</h1>
          ) : null}
          <ul className="list-group">
            {fruitItems.map((item) => {
              return (
                <li key={item} className="list-group-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

// like above same thing we can also do using logical operator
export function LogicalOperator() {
  let heading = "Logical Operator:- Fruit Item List";
  let errorMessage = "Fruit Item Bucket is empty.";
  let fruitItems = ["Apple", "Banana", "Cherry", "CustedApple", "PineApple"];
  // let fruitItems = [];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="text-primary">{heading}</h1>
          {fruitItems.length === 0 && (
            <h1 className="text-success">{errorMessage}</h1>
          )}
          <ul className="list-group">
            {fruitItems.map((item) => {
              return (
                <li key={item} className="list-group-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
