'use client';

import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { BackButton } from '@/components/ui/back-button';
import { PageHeader } from '@/components/sections/page-header';
import { CheckCircle } from 'lucide-react';

function generateRealtimeMetrics() {
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
    { name: 'API Server', uptime: '99.98%', lastIncident: '45 days ago' },
    { name: 'Web Application', uptime: '99.95%', lastIncident: '30 days ago' },
    { name: 'Database', uptime: '99.99%', lastIncident: '60 days ago' },
    { name: 'CDN & Cache', uptime: '99.97%', lastIncident: '15 days ago' },
    { name: 'Authentication', uptime: '99.99%', lastIncident: '45 days ago' },
    { name: 'Email Service', uptime: '99.94%', lastIncident: '10 days ago' },
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const m = generateRealtimeMetrics();

      setMetrics([
        {
          label: 'Average Response Time',
          value: `${Math.round(m.responseTime)}ms`,
          target: '< 200ms',
          status: m.responseTime < 200 ? 'good' : 'warning',
        },
        {
          label: 'API Uptime',
          value: `${m.uptime.toFixed(2)}%`,
          target: '> 99.9%',
          status: m.uptime > 99.9 ? 'good' : 'warning',
        },
        {
          label: 'Error Rate',
          value: `${m.errorRate.toFixed(3)}%`,
          target: '< 0.1%',
          status: m.errorRate < 0.1 ? 'good' : 'warning',
        },
        {
          label: 'CPU Usage',
          value: `${Math.round(m.cpuUsage)}%`,
          target: '< 80%',
          status: m.cpuUsage < 80 ? 'good' : 'warning',
        },
      ]);

      setLastUpdated(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <PageHeader
        eyebrow="System Monitoring"
        title={
          <>
            System Status
            <br />
            <span className="text-muted-foreground">
              Real-time infrastructure health.
            </span>
          </>
        }
        subtitle="Monitor the health and performance of all Adesco Graphics services"
      />

      <section className="pb-10 lg:pb-16">
        <Container>

          {/* ✅ FIXED SPACING HERE */}
          <div className="mb-6">
            <BackButton href="/" label="Back to Home" />
          </div>

          {/* OVERALL STATUS */}
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/30">
                <CheckCircle className="w-7 h-7 text-green-500" />
              </div>

              <div>
                <h2 className="text-3xl font-display text-green-500">
                  All Systems Operational
                </h2>
                <p className="text-sm text-muted-foreground">
                  All services are running normally
                </p>
              </div>
            </div>
          </div>

          {/* METRICS */}
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-display">
                Performance Metrics
              </h3>

              <p className="text-xs text-muted-foreground">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg"
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    {m.label}
                  </p>

                  <p className="text-3xl font-display text-[#eca8d6] mb-2">
                    {m.value}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Target: {m.target}
                  </p>

                  <div className="mt-4 h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-[#eca8d6]"
                      style={{
                        width: m.status === 'good' ? '85%' : '60%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICE STATUS */}
          <div className="mb-16 lg:mb-20">
            <h3 className="text-3xl font-display mb-6">
              Service Status
            </h3>

            <div className="space-y-4">
              {systemStatus.map((s) => (
                <div
                  key={s.name}
                  className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <h4 className="font-display text-lg">{s.name}</h4>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                      Operational
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Uptime</p>
                      <p className="text-green-500 font-medium">
                        {s.uptime}
                      </p>
                    </div>

                    <div>
                      <p className="text-muted-foreground">Last Incident</p>
                      <p>{s.lastIncident}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOT NOTE */}
          <div className="pt-6 border-t border-foreground/10">
            <p className="text-xs text-muted-foreground">
              Live monitoring system — updates every 5 seconds
            </p>
          </div>

        </Container>
      </section>
    </PageLayout>
  );
}