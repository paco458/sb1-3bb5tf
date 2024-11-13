import React, { useState } from 'react';
import { MapPin, Bell, Shield, UserCircle, Plus, AlertTriangle, Navigation } from 'lucide-react';
import Map from './components/Map';
import AlertsScreen from './components/AlertsScreen';
import IncidentModal from './components/IncidentModal';
import NavigationBar from './components/NavigationBar';
import { Incident } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incidents] = useState<Incident[]>([
    {
      id: 1,
      type: 'theft',
      location: { lat: 40.7128, lng: -74.0060 },
      description: 'Suspicious activity reported near Central Park',
      timestamp: new Date('2024-03-10T15:30:00'),
      severity: 'medium'
    },
    {
      id: 2,
      type: 'suspicious',
      location: { lat: 40.7580, lng: -73.9855 },
      description: 'Attempted break-in at residential building',
      timestamp: new Date('2024-03-10T14:15:00'),
      severity: 'high'
    }
  ]);

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col relative">
      {/* Status Bar */}
      <div className="bg-indigo-600 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Navigation className="w-4 h-4" />
          <span className="text-sm font-medium">SafetyWatch</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-indigo-500 px-2 py-1 rounded-full">
            Live
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        {activeTab === 'map' && <Map incidents={incidents} />}
        {activeTab === 'alerts' && <AlertsScreen incidents={incidents} />}
        {activeTab === 'tips' && (
          <div className="p-4 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Safety Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-indigo-500 mt-0.5" />
                  <p className="text-gray-700">Stay aware of your surroundings at all times</p>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-indigo-500 mt-0.5" />
                  <p className="text-gray-700">Keep emergency contacts easily accessible</p>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-indigo-500 mt-0.5" />
                  <p className="text-gray-700">Report suspicious activity immediately</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <UserCircle className="w-12 h-12 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
                  <p className="text-gray-600">Community Member since 2024</p>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full py-2 px-4 bg-gray-100 rounded-lg text-left text-gray-700 hover:bg-gray-200 transition-colors">
                  Settings
                </button>
                <button className="w-full py-2 px-4 bg-gray-100 rounded-lg text-left text-gray-700 hover:bg-gray-200 transition-colors">
                  Notification Preferences
                </button>
                <button className="w-full py-2 px-4 bg-gray-100 rounded-lg text-left text-gray-700 hover:bg-gray-200 transition-colors">
                  Privacy Settings
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Report Incident Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-20 right-4 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
        >
          <Plus className="w-6 h-6" />
        </button>
      </main>

      {/* Navigation Bar */}
      <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Incident Report Modal */}
      <IncidentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;