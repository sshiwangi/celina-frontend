export interface SalesData {
  id: number;
  name: string;
  phone: string;
  callStatus: string;
  summary: string;
  leadConversionRate: string;
  salesSuccessRate: string;
  callDuration: string;
  callbackRequested: boolean;
  nextFollowUpDate: string;
  productDiscussed: string;
  priceQuoted: string;
}

export const mockSalesData: SalesData[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1-555-123-4567",
    callStatus: "Call Ended",
    summary:
      "Client showed interest in premium plan. Discussed pricing and features. Requested follow-up email.",
    leadConversionRate: "75%",
    salesSuccessRate: "65%",
    callDuration: "4:30",
    callbackRequested: true,
    nextFollowUpDate: "2024-12-25",
    productDiscussed: "Enterprise Plan",
    priceQuoted: "$1,200/month",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1-555-987-6543",
    callStatus: "Call Ended",
    summary:
      "Technical discussion about API integration. Client needs time to consult with IT team.",
    leadConversionRate: "60%",
    salesSuccessRate: "45%",
    callDuration: "6:15",
    callbackRequested: true,
    nextFollowUpDate: "2024-12-28",
    productDiscussed: "API Integration Package",
    priceQuoted: "$2,500/month",
  },
  {
    id: 3,
    name: "Alice Johnson",
    phone: "+1-555-678-9012",
    callStatus: "No Answer",
    summary: "Attempted call, no response. Second attempt scheduled.",
    leadConversionRate: "0%",
    salesSuccessRate: "0%",
    callDuration: "0:00",
    callbackRequested: false,
    nextFollowUpDate: "2024-12-22",
    productDiscussed: "N/A",
    priceQuoted: "N/A",
  },
];
