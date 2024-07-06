yearconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_02_15_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDc0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQmdoNFJJVEQ3aVFPek9MRmt1M0hFUzloaU8wdVFKZXNLUFBJYUc0UVVMOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidU9LVkhjcERSYW1xQUl2RUxkSXU1d1wiLFxuICBcInBob25lSWRcIjogXCIwMTMyMGJmMC1mMTdiLTRjMmYtOWZlOS0zNDlhNjY1ZjAwYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAyMzQsXG4gICAgICAyMjksXG4gICAgICA3NCxcbiAgICAgIDI1LFxuICAgICAgMTY2LFxuICAgICAgMTY5LFxuICAgICAgMTUyLFxuICAgICAgMixcbiAgICAgIDUsXG4gICAgICAxOTUsXG4gICAgICAyMTYsXG4gICAgICAxOTksXG4gICAgICAyMDQsXG4gICAgICAxNTksXG4gICAgICAyNDQsXG4gICAgICAyMzEsXG4gICAgICAyMzksXG4gICAgICAxNDUsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgNjMsXG4gICAgICAyMTUsXG4gICAgICAxNzQsXG4gICAgICAxOTYsXG4gICAgICAxLFxuICAgICAgMTYyLFxuICAgICAgMTg3LFxuICAgICAgMTY1LFxuICAgICAgMTExLFxuICAgICAgMzUsXG4gICAgICAyMTMsXG4gICAgICA1MSxcbiAgICAgIDEzMCxcbiAgICAgIDE0LFxuICAgICAgMTQzLFxuICAgICAgMjA1LFxuICAgICAgMTM2LFxuICAgICAgMjAsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEVBVFNDNURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMxNDYxOTM2OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTQ2MjgyMjMxNzY4MDI6NDlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTytjMzZ3R0VKelJvclFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIUS94eVRmU0gwaUMwc2gyZ0YrMFA5czdrR2NZTkZlaDFySk16T1NhMVRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInljenhzaFhIcHJZSkcyYnBWZ0NwRmYyT1dPbHMyVXRmMEtTaVloUytCY1oxV1hoQTBKaE1RdmkzM3VVWXVueFRqU1FwcFBaeWRQVkMxT0JGWVMybUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZ4WDNWK1FXbm1SbG5rSSt5S2NscUc4bXpXUXNrT2VKRm1ZSHZYZ2hsZ3VzcDlIaldSN2NSMVdCeURjTytzR0ZqdDhBdXNsTzUreVZ4ZWRML0lEMENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMxNDYxOTM2OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMzIwOTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNbWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1taC5qc29uIjogIntcImtleURhdGFcIjpcIlNlU2xtYkV4UmNQdE80bGhudGtaOVRJakFidW1neHNESE9GZXQ5SDdlNWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwNDQ0NzU5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjI5NTMzOTEyXCJ9Igp9"  // PUT your SESSION_ID 


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
