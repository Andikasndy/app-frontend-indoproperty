import React from "react";
import { useQuery } from "react-query"
import { getAllProperty } from "../utils/api";

const useProperties = () => {
    const {data, isError, isLoading, refetch} = useQuery(
        "allproperty",
        getAllProperty,
        {refetchOnWindowFocus : false}
    );
    
    return {
    data, 
    isError, 
    isLoading, 
    refetch,
    }
}

export default useProperties