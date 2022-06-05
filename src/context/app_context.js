import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [gridView, setGridView] = useState(true);

    const handleSetGridView = () => {
        setGridView(true);
    }
    
    const handleSetListView = () => {
        setGridView(false);
    }

    return (
        <AppContext.Provider value={{
            isLoading,
            gridView,
            handleSetGridView,
            handleSetListView
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };