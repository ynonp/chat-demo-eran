'use client';

import { Message, useChat } from '@ai-sdk/react';

const initialMessages: Array<Message> = [  
  { id: crypto.randomUUID(), role: 'system', content: `
    We're playing a role play where our system was infected by ransomware. 
    You are the game master. Players need to figure out the situation by asking questions.
    Game Rules:
    1. Respond in short informative answers.
    2. Do not provide information you were not explicitly asked about.    
    3. Make the game fun for the user. Make up cool story details as they investigate.
    4. Do not suggest to the user a next move or ask follow-up questions. It's their adventure.
   `},   
  { id: crypto.randomUUID(), role: 'assistant', content: `
    I've detected what appears to be ransomware activity on our network at 14:37. Initial indicators include unusual file encryption processes and suspicious network traffic patterns. I've immediately isolated the affected workstation(s) by disconnecting them from the network to prevent further spread.
As per our incident response protocol, I've notified the security team and begun documenting affected systems. No ransom note has appeared yet, but the encryption signatures match known ransomware strains.
Please advise if you'd like me to proceed with the full containment procedure, which will require taking several critical systems offline temporarily.
Standing by for instructions.` },
];

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages,
  });

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col p-4 font-mono">
      {/* Header with glitch effect */}
      <h1 className="text-2xl text-green-400 mb-4 animate-glitch" data-text="SECURE_CHAT://BREACH_PROTOCOL">
        SECURE_CHAT://BREACH_PROTOCOL
      </h1>

      {/* Chat container with terminal styling */}
      <div className="flex-1 bg-black/80 border border-green-500/30 rounded-lg p-4 overflow-y-auto shadow-[0_0_10px_rgba(0,255,0,0.1)]">
        {messages.slice(1).map(message => (
          <div 
            key={message.id} 
            className={`mb-2 p-2 rounded ${
              message.role === 'user' 
                ? 'bg-gray-800/50 text-blue-400' 
                : 'bg-gray-900/50 text-green-400'
            }`}
          >
            <span className="text-gray-500 mr-2">
              [{message.role === 'user' ? 'USER' : 'SYSTEM'}]
            </span>
            <span className="break-words">
              {message.content}
            </span>
          </div>
        ))}
      </div>

      {/* Input form */}
      <form 
        onSubmit={handleSubmit} 
        className="mt-4 flex gap-2"
      >
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter transmission..."
          className="flex-1 bg-black/50 border border-green-500/30 rounded p-2 text-green-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all hover:border-green-500/50"
        />
        <button
          type="submit"
          className="bg-green-500/20 text-green-400 px-4 py-2 rounded border border-green-500/30 hover:bg-green-500/30 transition-all active:scale-95"
        >
          TRANSMIT
        </button>
      </form>

      {/* CSS for glitch animation */}
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          position: relative;
          animation: glitch 2s infinite steps(1);
        }
        .animate-glitch:before {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          text-shadow: -1px 0 red;
          animation: glitch 3s infinite steps(1);
        }
      `}</style>
    </div>
  );
}