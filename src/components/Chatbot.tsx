import React, { useState } from 'react';
import { Send, Bot, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: '¡Hola! Soy tu asistente de seguridad. ¿En qué puedo ayudarte?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Gracias por tu mensaje. Nuestro equipo está procesando tu consulta.',
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 left-4">
      {/* Botón para mostrar/ocultar el chatbot */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white rounded-full p-2 shadow-md mb-2"
      >
        {isVisible ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </button>

      {isVisible && (
        <div className="w-80 bg-white rounded-lg shadow-xl">
          <div className="p-4 border-b flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold">Asistente de Seguridad</h3>
          </div>
          
          <div className="h-96 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="input flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="btn btn-primary p-2"
                  disabled={!input.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
