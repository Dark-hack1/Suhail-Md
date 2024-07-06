const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_51_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICA1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImMzVVBIanVHaFpXcUxYM3o4bldLT3VMT1VpTHdMa1dzeVpjNGZZUmNnTmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjF6TWRzN09XU2RPdXRKUWJrOGpINlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Y4N2RhNmYtMDgxMC00MDUxLTlhMTYtYmFhYTUwOWU3YjczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDIwNSxcbiAgICAgIDM4LFxuICAgICAgMTUzLFxuICAgICAgNzAsXG4gICAgICAzNixcbiAgICAgIDM1LFxuICAgICAgMTY5LFxuICAgICAgMjQ5LFxuICAgICAgMjUwLFxuICAgICAgMjQ3LFxuICAgICAgMTAzLFxuICAgICAgMTQwLFxuICAgICAgMjQwLFxuICAgICAgMTMxLFxuICAgICAgMTUzLFxuICAgICAgMjQzLFxuICAgICAgMjM4LFxuICAgICAgMjQ1LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDI1MyxcbiAgICAgIDkyLFxuICAgICAgMjQyLFxuICAgICAgMjQ2LFxuICAgICAgMTk5LFxuICAgICAgOTYsXG4gICAgICAyNTIsXG4gICAgICA1NCxcbiAgICAgIDE1MSxcbiAgICAgIDE4NCxcbiAgICAgIDE1MCxcbiAgICAgIDMxLFxuICAgICAgODksXG4gICAgICA0NSxcbiAgICAgIDQ1LFxuICAgICAgOTIsXG4gICAgICAxNDcsXG4gICAgICAyNTQsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1RQQzdLTjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMxNDYxOTM2OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTQ2MjgyMjMxNzY4MDI6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzZjMzZ3R0VKMnFvclFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIUS94eVRmU0gwaUMwc2gyZ0YrMFA5czdrR2NZTkZlaDFySk16T1NhMVRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFYaHkvQUlBQ2VBMXlVSmpLTXNzaXg0NytpNmJDdFRCQkh1a0R6a2dZNE9ETFE5RHpWT21lTFhwTHZyK2p6bUg5T0VWTmlzSThWUGFjalhlaVFMdERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBXdWRzdDFCK3dBVit6TTFoYVc4eVV4RTJqcW5WeDdtcnhxMUtSSkQ3elZhQjJMcU9UMkR5d2tGekxjelNUTGY4UHd6eEV3ck5nQTR1U3Y4cmZYWGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMxNDYxOTM2OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMjcxMDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNbVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1tWi5qc29uIjogIntcImtleURhdGFcIjpcIllQR1BxeEo2QkZuRCswRXJlUG0yazlhOWZoaHVwU1U3Umo4MXJiRkwrYk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwNDQ0NzU5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzExODkwMzkzNjk5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
