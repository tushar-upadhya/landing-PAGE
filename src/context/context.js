import React, { useContext, useEffect, useReducer, useState } from "react";
import heroImage from "../images/hero.svg";
import aboutImage from "../images/about1.svg";
import reducer from "./reducer";
import axios from "axios";

const AppContext = React.createContext();

const API = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    name: "",
    image: "",
    service: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "tushar upadhyay",
                image: heroImage,
            },
        });
    };

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: " Frontend developer",
                image: aboutImage,
            },
        });
    };

    //? API
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get(API);
        setData(response.data);
        dispatch({ type: "GET_SERVICE", payload: data });
        // console.log("response:", response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <AppContext.Provider
            value={{ ...state, updateHomePage, updateAboutPage }}
        >
            {children}
        </AppContext.Provider>
    );
};

//? Custom Hook
const useCustomHook = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useCustomHook };
