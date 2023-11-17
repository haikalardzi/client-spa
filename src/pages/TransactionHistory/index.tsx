import React, { useState } from 'react';
import { axiosInstance } from '../../utils/axios';
import { toast } from "react-toastify";
import { useLocation, useParams, Link as RouterLink } from "react-router-dom";
import TransactionTable from './TransactionTable';
import './App.css';
const Transaction = () => {
    const location = useLocation();
    var [page, setPage] = useState(1);
    location.state = page;

    const [transactions, setTransactions] = useState([
        { buyer_username: '', seller_username: '', item_id: '', quantity: 0 },
        // Add more transactions as needed
    ]);
    const handleTransaction = async (e:any) => {
        try {
            const response = await axiosInstance.get(`transaction/${page}`);
            console.log(response);
            const data = response.data;
            setTransactions(data);
        } catch (err){

        }
    }

    
      return (
        <div className="container" onLoad={handleTransaction}>
          <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
          <TransactionTable transactions={transactions}/>
        </div>
      );
    }



export default Transaction;