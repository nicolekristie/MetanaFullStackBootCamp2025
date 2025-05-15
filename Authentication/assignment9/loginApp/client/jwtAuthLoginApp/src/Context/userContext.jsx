import React from 'react';

// const UserContext = React.createContext()  //create a portal

// //Step 1. Create the context
// const UserProvider = UserContext.Provider;
// const UserConsumer = UserContext.Consumer;


// //Make portal available throughout all of our components by wrapping the component with the provider component
// //place data inside the provide

// export { UserProvider, UserConsumer}

// //only dependent components can consume it so it's a good idea to put it in the App.jsx file (all components fall under it)


const UserContext = React.createContext()  //create a portal

//Step 1. Create the context
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


//Make portal available throughout all of our components by wrapping the component with the provider component


<UserContext.Provider value={"data here"}>
{/* place data inside the Provider */}

</UserContext.Provider>

//to open the portal we use the useContext();  pass the name of the portal and store the result in a variable

// variable = useContext(UserContext);    //(use that variable in the component)

export { UserProvider, UserConsumer}

//only dependent components can consume it so it's a good idea to put it in the App.jsx file (all components fall under it)
