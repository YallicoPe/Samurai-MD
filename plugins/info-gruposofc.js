let handler = async (m, { conn, command }) => {
let media = gataVidMenu
let str = `𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙. ✨ 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 😸
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝗣𝗿𝗼𝘆𝗲𝗰𝘁𝗼 🇦🇱
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*🇦🇱SOPORTE OFICIAL 🇦🇱* ${ig}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🇦🇱 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟏
https://chat.whatsapp.com/LHo0RmYd3pxAQzp24NYcTV\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*`
await conn.sendButton(m.chat, str, `𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '.cuentas'],
['𝘿𝙤𝙣𝙖𝙧', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́☘️', '/menu']], null, [
['𝗣𝗿𝗼𝘆𝗲𝗰𝘁𝗼-𝙈𝘿', `${md}`]], fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊  - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝗣𝗿𝗼𝘆𝗲𝗰𝘁𝗼-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|grupoofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
