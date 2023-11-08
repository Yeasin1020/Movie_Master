import React, { createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = () => {

	 

	return (
		<AuthContext.Provider value={user}>

		</AuthContext.Provider>
	);
};

export default AuthProvider;