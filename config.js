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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_29_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwickdnbkwrYS9kd3JXUTBGczVFanNodU5aa0ZMa1hVRTJ2ZEZvQkwxWDdlST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNUt4Xzh6VVpSZEdCRnpCYzB0Nm1hQVwiLFxuICBcInBob25lSWRcIjogXCIwMTVjMjQyYy1mNjY4LTRiYzAtOTYyZS1jNDcwYmU5MTQyM2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgODgsXG4gICAgICAyNTUsXG4gICAgICAyMjksXG4gICAgICAyOSxcbiAgICAgIDE0LFxuICAgICAgMTMsXG4gICAgICAxOTgsXG4gICAgICAzNSxcbiAgICAgIDUxLFxuICAgICAgMTI5LFxuICAgICAgMjA2LFxuICAgICAgMTIyLFxuICAgICAgNTAsXG4gICAgICAxMzksXG4gICAgICAxMjEsXG4gICAgICA0MixcbiAgICAgIDYsXG4gICAgICAxNjIsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDIxMyxcbiAgICAgIDEzOCxcbiAgICAgIDIwNyxcbiAgICAgIDE3OSxcbiAgICAgIDY2LFxuICAgICAgMzksXG4gICAgICAxNzEsXG4gICAgICAyOCxcbiAgICAgIDQ3LFxuICAgICAgMjI2LFxuICAgICAgMjI3LFxuICAgICAgMTgxLFxuICAgICAgMTAsXG4gICAgICAyOCxcbiAgICAgIDExMSxcbiAgICAgIDEzOSxcbiAgICAgIDI2LFxuICAgICAgMjI3LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNFOFMzNlJSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzMTQ2MTkzNjo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE0NjI4MjIzMTc2ODAyOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rYzM2d0dFUE83b3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSFEveHlUZlNIMGlDMHNoMmdGKzBQOXM3a0djWU5GZWgxckpNek9TYTFUST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmVGk5bHhDaHBCVmtlS2Ztbk0xZmgwd2tZb1JmZlp0aVNybjAzYUc4SjEweXZ3ZE1DMExEVGVSLzVGVXdPa1QzU21iQ3FjRHJjOUFjMHF2Zk9FYXpCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpOSs1TE1zNFN2S2RZYk1KNVZDbUhwcloxZk1RYnJ4NDgzbjlObjRWRVNKNC9DazZUYmhTdjZ3NUtlT3MrRkY1eC9OajVJZFJDZ2VKYko4c3I3YStDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzMTQ2MTkzNjo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjI5MzY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTW1nXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIySGcrWHBHMCsrWVhUdThOVGJJQmtZMVpJODAwdzRYUEdvaE41aGQxdG80PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDQ0NDc1OTgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDIyOTI5ODEzMlwifSIKfQ=="  // PUT your SESSION_ID 


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
