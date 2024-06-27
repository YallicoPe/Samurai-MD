let handler = async (m, { conn, command, usedPrefix }) => {
let cafirexostxt = `
_Optimice la implementación de *GataBot* mediante la integración en un servicio de alojamiento de alto rendimiento._

*🇦🇱 Compatible con Proyecto Bot*

🔵 \`\`\`Información del Host\`\`\`

💻 *Página*
https://www.cafirexos.com

✨ *Dashboard*
https://dash.cafirexos.com

⚙️ *Panel*
https://panel.cafirexos.com

📢 *Grupo de WhatsApp*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/LHo0RmYd3pxAQzp24NYcTV

🧑‍💻 *Contacto (Yallico)*
https://wa.me/51926933818`


if (command == 'cafirexos') {
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'fantasy.jpg', cafirexostxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 C A F I R E X O S 🔵`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: accountsgb,
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })
}

handler.command = /^(cafirexos|infohost|hosting)$/i
export default handler

