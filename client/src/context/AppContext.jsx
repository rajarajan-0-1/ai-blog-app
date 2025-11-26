import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import  toast from 'react-hot-toast'
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    const value = {
        axios,
        navigate,
        token,
        setToken,
        blogs,
        setBlogs,
        input,
        setInput
    };

    const fetchBlogs = async() => {
        try {
            const { data } = await axios.get("/api/blog/all");
            data.success ?  setBlogs(data.blogs): toast.error(data.message);
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    return useContext(AppContext);
}