let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command}) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊𝘾𝙊𝙄𝙉𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
try {
let proyectocoins = parseInt(txt)
let money = proyectocoins
let pjk = Math.ceil(proyectocoins * pajak)
money += pjk
if (money < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊𝘾𝙊𝙄𝙉𝙎 𝙀𝙎 *1*`
let users = global.db.data.users
//let users = global.db.data.users[who]
users[who].money += proyectocoins
conn.reply(m.chat,  `╭━━━[ 𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊𝘾𝙊𝙄𝙉𝙎 🇦🇱 ]━━━⬣\n┃\n┃ღ *PARA :*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ*\n┃ღ *${proyectocoins} ProyectoCoin(s)* 🇦🇱\n┃\n╰━━━━━━━━━━━━━━⬣`, m, {contextInfo: {mentionedJid: conn.parseMention(text)}})
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ['addgb <@user>']
handler.tags = ['proyectocoins']
handler.command = ['añadirproyectocoins', 'añadirproyecto', 'añadircoins', 'darproyectocoins', 'darproyecto', 'darcoins'] 
handler.group = true
handler.rowner = true
export default handler


/*conn.sendHydrated(m.chat, `╭━━━[ 𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊𝘾𝙊𝙄𝙉𝙎 🇦🇱 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${proyectocoins} proyectoCoin(s)* 🇦🇱\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
}*/
