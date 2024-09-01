import axios from "axios";
import dayjs from "dayjs";
import {toast} from "react-toastify";

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
})
//export semua property dari backend
export const getAllProperty = async() =>{
    try {
        const response = await api.get("/residency/allready",{
            timeout : 10 * 1000,
        }) 
        if (response.status === 400 || response.status === 500){
            throw response.data;
        } 
        return response.data;
    } catch (error) {
        toast.error("ada masalah terjadi")
        throw error
    }
}

//export property dengan id
export const getProperty = async(id) =>{
    try {
        const response = await api.get(`/residency/${id}`,{
            timeout : 10 * 1000,
        }) 
        if (response.status === 400 || response.status === 500){
            throw response.data;
        } 
        return response.data;
    } catch (error) {
        toast.error("ada masalah terjadi")
        throw error
    }
}

//mengambil fuction CreateUser dari backend untuk memasukan data ke server
export const createUser = async(email, token) => {
    try {
        
        await api.post(`/user/register`, {email}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        toast.error("ada masalah terjadi, coba sekali lagi")
        throw error
    }
}