import React, { useState } from 'react';
import { Home, Phone, Shield, Lock, ChevronRight, MessageSquare } from 'lucide-react';
import Chatbot from './Chatbot';

const consejos = [
  {
    id: 1,
    titulo: 'Protege tu hogar',
    descripcion: 'Consejos básicos para mantener tu casa segura',
    icono: Home
  },
  {
    id: 2,
    titulo: 'Evita estafas telefónicas',
    descripcion: 'Cómo identificar y prevenir fraudes por teléfono',
    icono: Phone
  },
  {
    id: 3,
    titulo: 'Seguridad personal',
    descripcion: 'Tips para mantenerte seguro en la calle',
    icono: Shield
  },
  {
    id: 4,
    titulo: 'Seguridad digital',
    descripcion: 'Protege tus datos y dispositivos',
    icono: Lock
  }
];

const ConsejosSeguridad = () => {
  const [mostrarChatbot, setMostrarChatbot] = useState(false);

  return (
    <div className="p-4 pb-20">
      <div className="grid gap-4">
        {consejos.map(({ id, titulo, descripcion, icono: Icon }) => (
          <div 
            key={id}
            className="card cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-3">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">{titulo}</h3>
                <p className="text-gray-600 text-sm">{descripcion}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Botón flotante para mostrar el chatbot */}
      {!mostrarChatbot && (
        <button
          onClick={() => setMostrarChatbot(true)}
          className="fixed bottom-20 right-4 btn btn-primary shadow-lg flex items-center gap-2"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Asistente</span>
        </button>
      )}

      {mostrarChatbot && <Chatbot />}
    </div>
  );
};

export default ConsejosSeguridad;