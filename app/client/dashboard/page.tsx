'use client';

import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, X } from 'lucide-react';

// Mock data for charts
const lineChartData = [
  { month: 'Jan', value: 400, target: 500 },
  { month: 'Feb', value: 300, target: 450 },
  { month: 'Mar', value: 200, target: 500 },
  { month: 'Apr', value: 278, target: 490 },
  { month: 'May', value: 189, target: 480 },
  { month: 'Jun', value: 239, target: 500 },
];

const barChartData = [
  { name: 'Web Dev', value: 65 },
  { name: 'Design', value: 45 },
  { name: 'Support', value: 78 },
  { name: 'Content', value: 52 },
];

const pieChartData = [
  { name: 'Completed', value: 45, color: '#eca8d6' },
  { name: 'In Progress', value: 30, color: '#a78bfa' },
  { name: 'Pending', value: 25, color: '#64748b' },
];

const areaChartData = [
  { time: '00:00', users: 0 },
  { time: '04:00', users: 24 },
  { time: '08:00', users: 36 },
  { time: '12:00', users: 50 },
  { time: '16:00', users: 42 },
  { time: '20:00', users: 38 },
  { time: '24:00', users: 43 },
];

export default function DashboardPage() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [animateCharts, setAnimateCharts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCharts(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      {/* Coming Soon Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#eca8d6]/10 mb-6">
                <AlertCircle className="w-8 h-8 text-[#eca8d6]" />
              </div>
              <h2 className="text-3xl font-display mb-3 text-foreground">Coming Soon</h2>
              <p className="text-muted-foreground mb-2">
                Dashboard and Client Portal
              </p>
              <p className="text-sm text-muted-foreground/70 mb-8">
                We&apos;re working on bringing you a powerful dashboard experience. Check back soon for project management, analytics, and more.
              </p>
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-black rounded-full font-medium"
              >
                Got it
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Blurred Dashboard Background */}
      <div className={`${showOverlay ? 'blur-sm' : ''} transition-all duration-500`}>
        <Container>
          <div className="py-8 lg:py-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-display text-foreground mb-2">Client Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here&apos;s your project overview.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Active Projects', value: '12', trend: '+2.5%' },
                { label: 'Completed Tasks', value: '48', trend: '+12%' },
                { label: 'Team Members', value: '8', trend: '+1' },
                { label: 'Total Revenue', value: '$24.5K', trend: '+18%' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-6 hover:border-[#eca8d6]/20 transition-all duration-300"
                  style={{
                    opacity: animateCharts ? 1 : 0,
                    transform: animateCharts ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${i * 100}ms`,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-3xl font-display text-foreground">{item.value}</h3>
                    <span className="text-sm text-[#eca8d6] font-medium">{item.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Line Chart */}
              <div
                className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-6 hover:border-[#eca8d6]/20 transition-all duration-300"
                style={{
                  opacity: animateCharts ? 1 : 0,
                  transform: animateCharts ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '200ms',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <h3 className="text-lg font-display text-foreground mb-4">Performance Metrics</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis stroke="rgba(255,255,255,0.3)" />
                    <YAxis stroke="rgba(255,255,255,0.3)" />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #eca8d6' }} />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#eca8d6" strokeWidth={2} dot={{ fill: '#eca8d6' }} />
                    <Line type="monotone" dataKey="target" stroke="rgba(236, 168, 214, 0.3)" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Bar Chart */}
              <div
                className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-6 hover:border-[#eca8d6]/20 transition-all duration-300"
                style={{
                  opacity: animateCharts ? 1 : 0,
                  transform: animateCharts ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '300ms',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <h3 className="text-lg font-display text-foreground mb-4">Service Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis stroke="rgba(255,255,255,0.3)" />
                    <YAxis stroke="rgba(255,255,255,0.3)" />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #eca8d6' }} />
                    <Bar dataKey="value" fill="#eca8d6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Area Chart */}
              <div
                className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-6 hover:border-[#eca8d6]/20 transition-all duration-300"
                style={{
                  opacity: animateCharts ? 1 : 0,
                  transform: animateCharts ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '400ms',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <h3 className="text-lg font-display text-foreground mb-4">Active Users Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={areaChartData}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#eca8d6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#eca8d6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis stroke="rgba(255,255,255,0.3)" />
                    <YAxis stroke="rgba(255,255,255,0.3)" />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #eca8d6' }} />
                    <Area type="monotone" dataKey="users" stroke="#eca8d6" fillOpacity={1} fill="url(#colorUsers)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div
                className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-6 hover:border-[#eca8d6]/20 transition-all duration-300"
                style={{
                  opacity: animateCharts ? 1 : 0,
                  transform: animateCharts ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '500ms',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <h3 className="text-lg font-display text-foreground mb-4">Project Status</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#eca8d6"
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #eca8d6' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Speed Gauge Component */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: 'System Performance', value: 87, max: 100 },
                { label: 'API Response Time', value: 42, max: 100 },
              ].map((gauge, i) => (
                <div
                  key={i}
                  className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-8 hover:border-[#eca8d6]/20 transition-all duration-300"
                  style={{
                    opacity: animateCharts ? 1 : 0,
                    transform: animateCharts ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${600 + i * 100}ms`,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-6 text-center">{gauge.label}</p>
                  <div className="flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        {/* Background circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                        />
                        {/* Progress circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#eca8d6"
                          strokeWidth="8"
                          strokeDasharray={`${(gauge.value / gauge.max) * 282} 282`}
                          strokeLinecap="round"
                          style={{
                            transition: 'stroke-dasharray 2s ease-out',
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-display text-foreground">{gauge.value}</span>
                        <span className="text-xs text-muted-foreground">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}
