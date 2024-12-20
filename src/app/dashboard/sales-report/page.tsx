"use client";
import SalesList from "@/components/Layout/Sales/SalesList";
import SalesTable from "@/components/Layout/Sales/SalesReport";
import { mockSalesData } from "@/utils/sales_mock_data";
import React from "react";


function SalesReport() {
  return (
    <div
      className="flex flex-col sm:flex-row flex-1 h-full"
      data-testid="sales-report-content"
    >
      {/* <SalesList /> */}
      <div className="flex-1">
        <SalesTable data={mockSalesData} />
      </div>
    </div>
  );
}

export default SalesReport;
