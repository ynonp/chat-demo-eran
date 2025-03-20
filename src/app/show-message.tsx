import type { Message } from "ai"
export default function ShowMessage({
  message
}: {
  message: Message
}) {
  return <div
    key={message.id}
    className={`mb-2 p-2 rounded ${message.role === 'user'
      ? 'bg-gray-800/50 text-blue-400'
      : 'bg-gray-900/50 text-green-400'
      }`}
  >
    <span className="text-gray-500 mr-2">
      [{message.role === 'user' ? 'USER' : 'SYSTEM'}]
    </span>
    <span className="break-words" dangerouslySetInnerHTML={{ __html: message.content }}></span>

 
  </div>
}