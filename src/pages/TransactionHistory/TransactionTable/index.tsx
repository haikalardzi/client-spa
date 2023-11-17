import React from 'react';

interface Transaction {
  buyer_username: string;
  seller_username: string;
  item_id: string;
  quantity: number;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th">buyer</th>
          <th className="th">Seller</th>
          <th className="th">Items</th>
          <th className="th">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td className="td">{transaction.buyer_username}</td>
            <td className="td">{transaction.seller_username}</td>
            <td className="td">{transaction.item_id}</td>
            <td className="td">{transaction.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;