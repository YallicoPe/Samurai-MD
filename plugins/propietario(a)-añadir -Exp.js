let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command}) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝙀𝙓𝙋`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
try {
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 (𝙀𝙓𝙋) 𝙀𝙎 *1*`
let users = global.db.data.users
users[who].exp += xp
conn.reply(m.chat,  `╭━[ 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 ⚡]━⬣\n┃\n┃ღ *PARA :*\n┃ღ ${text}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ*\n┃ღ *${xp} EXP* ⚡\n┃\n╰━━━━━━━━━━━━━━⬣`, m, {contextInfo: {mentionedJid: conn.parseMention(text)}})
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ["ddxp  [@user]"]
handler.tags = ['xp']
handler.command = ['añadirxp', 'añadirexp', 'añadirexperiencia', 'darexperiencia', 'darxp', 'darexp'] 
handler.group = true
handler.rowner = true
export default handler
