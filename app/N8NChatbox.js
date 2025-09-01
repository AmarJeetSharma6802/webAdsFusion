// 'use client'
// import { useState, useEffect } from 'react'

// export default function N8NChat() {
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     // ✅ Load N8N Embedded Chat Script
//     const existing = document.getElementById('n8n-chat-script')
//     if (!existing) {
//       const script = document.createElement('script')
//       script.id = 'n8n-chat-script'
//       script.src = "https://amarjeetsharma.app.n8n.cloud/embed/chat.js" // Use your widget URL
//       script.async = true
//       document.body.appendChild(script)
//     }
//   }, [])

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           background: '#007bff',
//           color: '#fff',
//           borderRadius: '50%',
//           width: '60px',
//           height: '60px',
//           fontSize: '24px',
//           border: 'none',
//           cursor: 'pointer',
//           zIndex: 1000,
//         }}
//       >
//         💬
//       </button>

//       {/* Chat Box */}
//       {open && (
//         <div
//           style={{
//             position: 'fixed',
//             bottom: '90px',
//             right: '20px',
//             width: '350px',
//             height: '400px',
//             background: '#fff',
//             border: '1px solid #ccc',
//             borderRadius: '10px',
//             boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
//             zIndex: 1000,
//             overflow: 'hidden',
//           }}
//         >
//           <iframe
//             src="https://amarjeetsharma.app.n8n.cloud/webhook/e5616171-e3b5-4c39-81d4-67409f9fa60a/chat" // Use N8N Embedded Chat URL, NOT webhook
//             width="100%"
//             height="100%"
//             style={{ border: 'none' }}
//           ></iframe>
//         </div>
//       )}
//     </>
//   )
// }
