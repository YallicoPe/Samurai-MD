import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '🇦🇱 𝗦𝘂𝗽𝗲𝗿 𝗣𝗿𝗼𝘆𝗲𝗰𝘁𝗼-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽', body: '🇦🇱 𝗣𝗿𝗼𝘆𝗲𝗰𝘁𝗼 🇦🇱', sourceUrl: md, thumbnail: imagen2}}})}
    
return !0 }
export default handler
