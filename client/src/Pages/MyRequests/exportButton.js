// // ExportButton.js
// import React from 'react';
// import { Button } from 'antd';
// import { saveAs } from 'file-saver';

// export const ExportButton = ({ data }) => {
//   const handleExport = () => {
//     let csvContent = "data:text/csv;charset=utf-8,";
//     // CSV başlıkları
//     csvContent += "Sipariş Numarası,Müşteri Adı\n";
//     // Verileri CSV formatına dönüştürme
//     data.forEach(row => {
//       csvContent += `${row.orderNumber},${row.customerName}\n`;
//     });

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, "siparisler.csv");
//   };

//   return <Button onClick={handleExport} type="primary">Export</Button>;
// };
