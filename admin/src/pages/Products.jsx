import React, {  useEffect, useState } from 'react'
import Layout from '../components/Layout'
import withAuth from '../components/withAuth';

const Products = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData=async()=>{
          try {
            setLoading(true);
            const url=import.meta.env.VITE_SERVER_URL;
            const res=await fetch(`${url}/admin/product`,{
              method:"GET",
              headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${localStorage.getItem("token")}`,
              },
            });
            const data=await res.json()
            if(!data.success){
              alert(data.error || "somthing went wrong")
              return;
            }
            console.log(data)
            setData(data.data);
          } catch (error) {
            console.log(error)
          }finally{
            setLoading(false);
          }
        }
        fetchData();
      },[]);
        

  return (
   <Layout>Products page</Layout>
    );   
};

export default withAuth( Products)