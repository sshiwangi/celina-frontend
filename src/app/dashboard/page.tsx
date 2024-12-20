"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  PhoneCall,
  Clock,
  Calendar,
  LucideIcon,
} from "lucide-react";

interface KPI {
  totalProjects: number;
  totalCalls: number;
  overallConversionRate: number;
  averageCallDurationSeconds: number;
  followUpsScheduled: number;
}

interface ChartData {
  labels: string[];
  data: number[];
}

interface Charts {
  callsOverTime: ChartData;
  conversionRatePerProject: ChartData;
  segmentPerformance: ChartData;
  outcomeDistribution: ChartData;
  revenuePerProject: ChartData;
}

interface Insights {
  bestPerformingProject: string;
  bestLeadSegment: string;
  totalRevenueGenerated: number;
}

interface DashboardData {
  overview: {
    kpi: KPI;
    charts: Charts;
    insights: Insights;
  };
}

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
}

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

interface InsightCardProps {
  title: string;
  value: string | number;
  trend?: string;
}

interface CallsTimeData {
  date: string;
  calls: number;
}

interface ConversionData {
  project: string;
  rate: number;
}

interface OutcomeData {
  name: string;
  value: number;
}

interface RevenueData {
  project: string;
  revenue: number;
}

const mockData: DashboardData = {
  overview: {
    kpi: {
      totalProjects: 3,
      totalCalls: 450,
      overallConversionRate: 45,
      averageCallDurationSeconds: 220,
      followUpsScheduled: 30,
    },
    charts: {
      callsOverTime: {
        labels: [
          "2024-12-13",
          "2024-12-14",
          "2024-12-15",
          "2024-12-16",
          "2024-12-17",
          "2024-12-18",
          "2024-12-19",
        ],
        data: [50, 60, 55, 70, 65, 75, 75],
      },
      conversionRatePerProject: {
        labels: ["Project Alpha", "Project Beta", "Project Gamma"],
        data: [50, 40, 30],
      },
      segmentPerformance: {
        labels: ["High-Value", "Medium-Value", "Low-Engagement"],
        data: [60, 25, 15],
      },
      outcomeDistribution: {
        labels: ["Converted", "Follow-up Needed", "Not Interested"],
        data: [200, 150, 100],
      },
      revenuePerProject: {
        labels: ["Project Alpha", "Project Beta", "Project Gamma"],
        data: [120000, 85000, 50000],
      },
    },
    insights: {
      bestPerformingProject: "Project Alpha",
      bestLeadSegment: "High-Value",
      totalRevenueGenerated: 255000,
    },
  },
};


const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  prefix = "",
  suffix = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-dark p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-cyan-400">
          {prefix}
          {value}
          {suffix}
        </h3>
      </div>
      <div className="p-3 bg-cyan-950/30 rounded-lg">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
    </div>
  </motion.div>
);

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-dark p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300"
  >
    <h3 className="text-lg font-semibold text-cyan-400 mb-4">{title}</h3>
    <div className="h-[300px]">{children}</div>
  </motion.div>
);

const InsightCard: React.FC<InsightCardProps> = ({ title, value, trend }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-cyan-950/30 p-4 rounded-lg border border-cyan-500/10"
  >
    <h4 className="text-gray-400 text-sm">{title}</h4>
    <p className="text-lg font-bold text-cyan-400 mt-1">{value}</p>
  </motion.div>
);

const DashboardOverview: React.FC = () => {
  const { kpi, charts, insights } = mockData.overview;

  // Transform data for charts
  const callsOverTimeData: CallsTimeData[] = charts.callsOverTime.labels.map(
    (label, index) => ({
      date: label,
      calls: charts.callsOverTime.data[index],
    })
  );

  const conversionData: ConversionData[] =
    charts.conversionRatePerProject.labels.map((label, index) => ({
      project: label,
      rate: charts.conversionRatePerProject.data[index],
    }));

  const outcomeData: OutcomeData[] = charts.outcomeDistribution.labels.map(
    (label, index) => ({
      name: label,
      value: charts.outcomeDistribution.data[index],
    })
  );

  const revenueData: RevenueData[] = charts.revenuePerProject.labels.map(
    (label, index) => ({
      project: label,
      revenue: charts.revenuePerProject.data[index],
    })
  );

  return (
    <div className="flex flex-col p-6 w-full h-full overflow-y-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-cyan-400 mb-8"
      >
        Dashboard Overview
      </motion.h1>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Projects"
          value={kpi.totalProjects}
          icon={Users}
        />
        <StatCard title="Total Calls" value={kpi.totalCalls} icon={PhoneCall} />
        <StatCard
          title="Conversion Rate"
          value={kpi.overallConversionRate}
          suffix="%"
          icon={TrendingUp}
        />
        <StatCard
          title="Avg Call Duration"
          value={Math.floor(kpi.averageCallDurationSeconds / 60)}
          suffix="m"
          icon={Clock}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Calls Over Time">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={callsOverTimeData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgb(6 182 212 / 0.1)"
              />
              <XAxis dataKey="date" stroke="#A0A0A0" />
              <YAxis stroke="#A0A0A0" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0A0E1A",
                  border: "1px solid rgb(6 182 212 / 0.2)",
                }}
                labelStyle={{ color: "#FFFFFF" }}
              />
              <Line
                type="monotone"
                dataKey="calls"
                stroke="#22D3EE"
                strokeWidth={2}
                dot={{ fill: "#22D3EE" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Project Revenue">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3A3A3A" />
              <XAxis dataKey="project" stroke="#A0A0A0" />
              <YAxis stroke="#A0A0A0" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2A2A2A",
                  border: "1px solid #3A3A3A",
                }}
                labelStyle={{ color: "#FFFFFF" }}
              />
              <Bar dataKey="revenue" fill="#4A9D9A">
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#22D3EE" : "#0EA5E9"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Conversion Rate per Project">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3A3A3A" />
              <XAxis dataKey="project" stroke="#A0A0A0" />
              <YAxis stroke="#A0A0A0" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2A2A2A",
                  border: "1px solid #3A3A3A",
                }}
                labelStyle={{ color: "#FFFFFF" }}
              />
              <Bar dataKey="rate" className="fill-cyan-400">
                {conversionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#22D3EE" : "#0EA5E9"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Outcome Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={outcomeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {outcomeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#22D3EE" : "#0EA5E9"}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2A2A2A",
                  border: "1px solid #3A3A3A",
                }}
                labelStyle={{ color: "#FFFFFF" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <InsightCard
          title="Best Performing Project"
          value={insights.bestPerformingProject}
        />
        <InsightCard
          title="Best Lead Segment"
          value={insights.bestLeadSegment}
        />
        <InsightCard
          title="Total Revenue Generated"
          value={`$${insights.totalRevenueGenerated.toLocaleString()}`}
        />
      </motion.div>
    </div>
  );
};

export default DashboardOverview;
