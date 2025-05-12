import React from 'react';

const UserContext = React.createContext()

//Step 1. Create the context
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


export { UserProvider, UserConsumer}

//only dependent components can consume it so it's a good idea to put it in the App.jsx file (all components fall under it)

