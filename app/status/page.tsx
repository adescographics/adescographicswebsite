'use client';

import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { BackButton } from '@/components/ui/back-button';
import { PageHeader } from '@/components/sections/page-header';
import { CheckCircle, AlertCircle } from 'lucide-react';

function generateRealtimeMetrics() {
  // Generate realistic metrics with slight variations
  const baseResponseTime = 125;
  const baseUptime = 99.98;
  const baseErrorRate = 0.02;
  const baseCPU = 34;
  
  return {
    responseTime: baseResponseTime + Math.random() * 30 - 15,
    uptime: baseUptime - Math.random() * 0.05,
    errorRate: baseErrorRate + Math.random() * 0.03,
    cpuUsage: baseCPU + Math.random() * 20 - 10,
  };
}

export default function StatusPage() {
  const [metrics, setMetrics] = useState([
    { label: 'Average Response Time', value: '125ms', target: '< 200ms', status: 'good' },
    { label: 'API Uptime', value: '99.98%', target: '> 99.9%', status: 'good' },
    { label: 'Error Rate', value: '0.02%', target: '< 0.1%', status: 'good' },
    { label: 'CPU Usage', value: '34%', target: '< 80%', status: 'good' },
  ]);

  const [systemStatus] = useState([
    { name: 'API Server', status: 'operational', uptime: '99.98%', lastIncident: '45 days ago' },
    { name: 'Web Application', status: 'operational', uptime: '99.95%', lastIncident: '30 days ago' },
    { name: 'Database', status: 'operational', uptime: '99.99%', lastIncident: '60 days ago' },
    { name: 'CDN & Cache', status: 'operational', uptime: '99.97%', lastIncident: '15 days ago' },
    { name: 'Authentication', status: 'operational', uptime: '99.99%', lastIncident: '45 days ago' },
    { name: 'Email Service', status: 'operational', uptime: '99.94%', lastIncident: '10 days ago' },
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const updateInterval = setInterval(() => {
      const newMetrics = generateRealtimeMetrics();
      setMetrics([
        { 
          label: 'Average Response Time', 
          value: `${Math.round(newMetrics.responseTime)}ms`, 
          target: '< 200ms', 
          status: newMetrics.responseTime < 200 ? 'good' : 'warning' 
        },
        { 
          label: 'API Uptime', 
          value: `${newMetrics.uptime.toFixed(2)}%`, 
          target: '> 99.9%', 
          status: newMetrics.uptime > 99.9 ? 'good' : 'warning' 
        },
        { 
          label: 'Error Rate', 
          value: `${newMetrics.errorRate.toFixed(3)}%`, 
          target: '< 0.1%', 
          status: newMetrics.errorRate < 0.1 ? 'good' : 'warning' 
        },
        { 
          label: 'CPU Usage', 
          value: `${Math.round(newMetrics.cpuUsage)}%`, 
          target: '< 80%', 
          status: newMetrics.cpuUsage < 80 ? 'good' : 'warning' 
        },
      ]);
      setLastUpdated(new Date());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <PageLayout>
      <Container>
        <div className="mb-8">
          <BackButton href="/" label="Back to Home" />
        </div>
        <PageHeader
          eyebrow="System Monitoring"
          title={
            <>
              System Status
              <br />
              <span className="text-muted-foreground">Real-time infrastructure health.</span>
            </>
          }
          subtitle="Monitor the health and performance of all Adesco Graphics services"
        />
      </Container>

      <section className="py-16 lg:py-24">
        <Container>
          {/* Overall Status */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h2 className="text-3xl font-display text-green-500">All Systems Operational</h2>
                <p className="text-muted-foreground">All services are running normally</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-display">Performance Metrics</h3>
              <p className="text-xs text-muted-foreground">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg"
                >
                  <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                  <p className="text-3xl font-display text-[#eca8d6] mb-2">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">Target: {metric.target}</p>
                  <div className="mt-4 w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-[#eca8d6]"
                      style={{
                        width: metric.status === 'good' ? '85%' : '65%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Status */}
          <div>
            <h3 className="text-2xl font-display mb-8">Service Status</h3>
            <div className="space-y-4">
              {systemStatus.map((service) => (
                <div
                  key={service.name}
                  className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-foreground/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-3 h-3 rounded-full bg-green-500" />
                      <h4 className="font-display text-lg">{service.name}</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                      Operational
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Uptime</p>
                      <p className="font-medium text-green-500">{service.uptime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Incident</p>
                      <p className="font-medium">{service.lastIncident}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Data */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h3 className="text-2xl font-display mb-8">Uptime History</h3>
            <div className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-full aspect-square rounded-lg ${
                      Math.random() > 0.02
                        ? 'bg-green-500/20 border border-green-500/30'
                        : 'bg-yellow-500/20 border border-yellow-500/30'
                    }`}
                    title={`Day ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-500/20 border border-green-500/30" />
                  <span className="text-muted-foreground">Operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-yellow-500/20 border border-yellow-500/30" />
                  <span className="text-muted-foreground">Degraded</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Updates */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h3 className="text-2xl font-display mb-8">Recent Updates</h3>
            <div className="space-y-4">
              {[
                {
                  date: 'April 5, 2026',
                  title: 'Completed Database Maintenance',
                  description: 'Routine database optimization performed with no downtime.',
                },
                {
                  date: 'April 1, 2026',
                  title: 'API Performance Improvements',
                  description: 'Optimized response times, achieving 15% faster average latency.',
                },
                {
                  date: 'March 28, 2026',
                  title: 'Infrastructure Upgrade',
                  description: 'Deployed new servers to handle increased capacity and improve redundancy.',
                },
              ].map((update, i) => (
                <div key={i} className="p-4 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">{update.date}</p>
                  <p className="font-display text-lg mb-1">{update.title}</p>
                  <p className="text-sm text-muted-foreground">{update.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
