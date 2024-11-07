const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/dlixf3.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Joshtech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104400066";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/dlixf3.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  | "SUHAIL_19_33_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA3MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2RiOG9JeTZ5QXpIbHprdDdYcytHUjIvZDk2R3BwTytaRGNlSUMzYlRpcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWkZnRDJxVnJTaHk3R1ZVNjZWVEJuUVwiLFxuICBcInBob25lSWRcIjogXCJiM2YyMTE3My03MDZlLTRmZGYtOGU1YS03N2M2NjJhNWZjMGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA1NixcbiAgICAgIDIyOSxcbiAgICAgIDc4LFxuICAgICAgMTgwLFxuICAgICAgNDYsXG4gICAgICAxNDUsXG4gICAgICAyNDcsXG4gICAgICAxOTQsXG4gICAgICAyMSxcbiAgICAgIDIyMyxcbiAgICAgIDk4LFxuICAgICAgMjI5LFxuICAgICAgMTAyLFxuICAgICAgMTA5LFxuICAgICAgMTMzLFxuICAgICAgMjIwLFxuICAgICAgMTY3LFxuICAgICAgMTM5LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTQwLFxuICAgICAgMjM5LFxuICAgICAgMjA1LFxuICAgICAgODMsXG4gICAgICAxMjMsXG4gICAgICAxNTMsXG4gICAgICAxNzcsXG4gICAgICAxMTQsXG4gICAgICAxNDMsXG4gICAgICAxMTMsXG4gICAgICAyMzMsXG4gICAgICA3NCxcbiAgICAgIDk1LFxuICAgICAgMTMzLFxuICAgICAgMjA0LFxuICAgICAgMjIyLFxuICAgICAgMTM2LFxuICAgICAgMTg4LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0sxOE1DWUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDQ0MDAwNjY6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MTM2NTI3NzI0NTYwOjc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DdDhvWUJFT0dydExrR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUYvU1lkb3pQb0ZJMjlLOWFxaEtHaDRFVlRUZ3VuZzZvS2k4eU9sUW9GYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3WmxGOTY0RDFqcU1sdFBSL0I5MENUMUJWSXhrcEpPYTJnTldYNjd2MjdSeHpGVFVGSjdqQjZDTzN6ZVJVYnZMZkRYQ3JoVHJ1REFNV2tubVhJOElCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJeHdRWEt4QkNhcWYzMFdZODdJK0doWW41Y3RIOFZCVlVzZDlBenRNL3Qyc2duSThSUHpQVndhM0VLV1R6NHNyTjVqSVJ0OXhUTXpXTk5JVHJ5dmdCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA0NDAwMDY2Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDA3OTczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXlFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFeUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNZDlKSUU0Y29kOFNwVlpmdFpNSkJoamltTm4zTVFoMjIvdXAyQkxlSmY0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4Mjg5MTk5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMTI4NzEyMjYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Joshtech", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "Joshtech" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Josh",
  packname: process.env.PACK_NAME || "Joshtech",
  botname : process.env.BOT_NAME  || "Joshua BOT",
  ownername:process.env.OWNER_NAME|| "Joshua",
  
  error : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "JOSHUA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
