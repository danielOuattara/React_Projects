import { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ColorForm, ColorList } from "./components";

export default class AppClassReduxToolkit extends Component {
  render() {
    return (
      <Provider store={store}>
        <p className="title">react redux toolkit classes solution</p>
        <ColorForm />
        <ColorList />
      </Provider>
    );
  }
}

/* 
NOTE:  redux toolkit does not support well non-serialized objects.
        In this case the package "values.js" does generate non-serialized 
        objects containing data + functions/methods to handle those data.
        
        The solution I used here is to make a copy of each generated object
        and to create the desired function/method to do the job. See utils.js
        
        Making copies  does "forget" the non-serialized elements in each generated
        object 

*/
