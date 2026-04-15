'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { LogOut, Settings, Download, Eye, Edit2 } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joined: 'January 2024',
    avatar: 'JD',
  };

  const orders = [
    {
      id: 'ORD-2024-ABC123',
      date: '2024-01-15',
      total: 4320,
      status: 'completed',
      items: 2,
    },
    {
      id: 'ORD-2024-XYZ789',
      date: '2024-01-10',
      total: 1500,
      status: 'processing',
      items: 1,
    },
    {
      id: 'ORD-2024-DEF456',
      date: '2024-01-05',
      total: 2500,
      status: 'completed',
      items: 1,
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-500/10 text-green-600 border-green-500/20',
      processing: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      pending: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  return (
    <PageLayout>
      <Container>
        <div className="py-12 lg:py-16">
          {/* Header */}
          <div className="flex items-end justify-between mb-12 pb-8 border-b border-foreground/10">
            <div>
              <h1 className="text-4xl font-display mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Manage your account and orders</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="rounded-full h-11">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#eca8d6] to-[#eca8d6]/50 flex items-center justify-center mb-4">
                    <span className="font-display text-xl text-background">{user.avatar}</span>
                  </div>
                  <h2 className="font-display text-lg mb-1">{user.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                  <p className="text-xs text-muted-foreground mb-6">Member since {user.joined}</p>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    className="w-full rounded-full h-10 mb-3"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: '📊' },
                  { id: 'orders', label: 'Orders', icon: '📦' },
                  { id: 'settings', label: 'Settings', icon: '⚙️' },
                  { id: 'support', label: 'Help & Support', icon: '💬' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                      activeTab === item.id
                        ? 'bg-foreground text-background'
                        : 'text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: 'Total Orders', value: 3 },
                      { label: 'Total Spent', value: '$8,320' },
                      { label: 'Active Services', value: 2 },
                    ].map((stat, i) => (
                      <div key={i} className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg text-center">
                        <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                        <p className="font-display text-3xl">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Orders */}
                  <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-xl">Recent Orders</h3>
                      <Link href="#orders" onClick={() => setActiveTab('orders')} className="text-sm text-[#eca8d6] hover:underline">
                        View all
                      </Link>
                    </div>
                    <div className="space-y-3">
                      {orders.slice(0, 2).map(order => (
                        <div key={order.id} className="p-4 border border-foreground/10 rounded-lg flex items-center justify-between">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.items} item(s) • {order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${order.total}</p>
                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mt-2 ${getStatusBadge(order.status)}`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="space-y-4">
                  <h2 className="font-display text-2xl mb-6">All Orders</h2>
                  {orders.map(order => (
                    <div key={order.id} className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-display text-lg">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-2xl text-[#eca8d6] mb-2">${order.total}</p>
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusBadge(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4 border-t border-foreground/10">
                        <Button variant="outline" size="sm" className="rounded-full">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <Download className="w-4 h-4 mr-2" />
                          Invoice
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                    <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Account Settings
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-2">Email Notifications</label>
                        <div className="flex gap-4">
                          {['Order updates', 'Promotions', 'News'].map(opt => (
                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                              <span className="text-sm">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border border-red-500/20 bg-red-500/5 rounded-lg">
                    <h3 className="font-display text-lg mb-4 text-red-600">Danger Zone</h3>
                    <Button variant="outline" className="text-red-600 border-red-500/20 hover:bg-red-500/10 rounded-full">
                      Delete Account
                    </Button>
                  </div>
                </div>
              )}

              {/* Support Tab */}
              {activeTab === 'support' && (
                <div className="space-y-6">
                  <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                    <h3 className="font-display text-lg mb-4">Need Help?</h3>
                    <p className="text-muted-foreground mb-6">
                      Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="/contact">
                        <Button variant="outline" className="w-full rounded-full">
                          Contact Support
                        </Button>
                      </Link>
                      <Link href="/faq">
                        <Button variant="outline" className="w-full rounded-full">
                          View FAQ
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
