import React from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Zap, Globe, Shield, Server } from 'lucide-react';
import Layout from '../components/Layout';

export default function StatusPage() {
  const overallStatus = "operational"; // operational, degraded, outage

  const services = [
    {
      name: "VPN Connections",
      status: "operational",
      uptime: "99.98%",
      description: "Core VPN connectivity service"
    },
    {
      name: "Authentication",
      status: "operational", 
      uptime: "99.99%",
      description: "User login and account management"
    },
    {
      name: "Mobile Apps",
      status: "operational",
      uptime: "99.97%",
      description: "iOS and Android applications"
    },
    {
      name: "Desktop Apps",
      status: "operational",
      uptime: "99.98%",
      description: "Windows, macOS, and Linux clients"
    },
    {
      name: "Website & Dashboard",
      status: "operational",
      uptime: "99.99%",
      description: "Main website and user dashboard"
    },
    {
      name: "Payment Processing",
      status: "operational",
      uptime: "99.95%",
      description: "Billing and subscription management"
    }
  ];

  const serverRegions = [
    { region: "North America", servers: 25, status: "operational", load: "23%" },
    { region: "Europe", servers: 20, status: "operational", load: "31%" },
    { region: "Asia Pacific", servers: 12, status: "operational", load: "18%" },
    { region: "South America", servers: 5, status: "operational", load: "15%" },
    { region: "Africa & Middle East", servers: 3, status: "operational", load: "12%" }
  ];

  const incidents = [
    {
      date: "Jan 15, 2025",
      title: "Scheduled Maintenance - European Servers",
      status: "resolved",
      duration: "2 hours",
      description: "Routine maintenance performed on European server infrastructure. No user impact expected."
    },
    {
      date: "Jan 10, 2025", 
      title: "Brief Connection Issues - US East",
      status: "resolved",
      duration: "15 minutes",
      description: "Some users experienced intermittent connection issues. Issue resolved by switching to backup infrastructure."
    },
    {
      date: "Jan 5, 2025",
      title: "Payment System Update",
      status: "resolved", 
      duration: "30 minutes",
      description: "Planned update to payment processing system. Service fully restored."
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'operational':
        return <CheckCircle className="text-green-400" size={20} />;
      case 'degraded':
        return <AlertCircle className="text-yellow-400" size={20} />;
      case 'outage':
        return <XCircle className="text-red-400" size={20} />;
      default:
        return <CheckCircle className="text-green-400" size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-green-400';
    }
  };

  const getOverallStatusMessage = () => {
    switch(overallStatus) {
      case 'operational':
        return "All systems are operational";
      case 'degraded':
        return "Some systems are experiencing issues";
      case 'outage':
        return "Major service disruption";
      default:
        return "All systems are operational";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            System{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Status
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Real-time status and performance of ShadowVPN services worldwide.
          </p>

          {/* Overall Status */}
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${
            overallStatus === 'operational' 
              ? 'bg-green-600/20 border-green-600/30' 
              : overallStatus === 'degraded'
              ? 'bg-yellow-600/20 border-yellow-600/30'
              : 'bg-red-600/20 border-red-600/30'
          }`}>
            {getStatusIcon(overallStatus)}
            <span className={`font-semibold ${getStatusColor(overallStatus)}`}>
              {getOverallStatusMessage()}
            </span>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-10 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Service Status</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {service.uptime} uptime
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Status */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Global Server Network</h2>
          
          <div className="space-y-4">
            {serverRegions.map((region, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg">
                      <Globe className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">{region.region}</h3>
                      <p className="text-gray-400 text-sm">{region.servers} servers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Server Load</p>
                      <p className="font-semibold">{region.load}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(region.status)}
                      <span className={`font-medium ${getStatusColor(region.status)}`}>
                        {region.status.charAt(0).toUpperCase() + region.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Load Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{width: region.load}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="text-green-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-2">99.98%</div>
              <div className="text-gray-400">Overall Uptime</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Server className="text-blue-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-2">65</div>
              <div className="text-gray-400">Server Locations</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-purple-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-2">12ms</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-600/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="text-cyan-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-2">22%</div>
              <div className="text-gray-400">Avg Server Load</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Incidents</h2>
          
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-green-400 font-medium">Resolved</span>
                      <span className="text-gray-400">•</span> 
                      <span className="text-gray-400">{incident.date}</span>
                    </div>
                    <h3 className="font-bold text-lg">{incident.title}</h3>
                  </div>
                  <span className="text-gray-400 text-sm">{incident.duration}</span>
                </div>
                <p className="text-gray-300">{incident.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              View All Incidents →
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Informed
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to status updates and get notified about maintenance and incidents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}