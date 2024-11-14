const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="okoyejoshi@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "h" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Josh Tech" 


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
global.userImages= process.env.USER_IMAGES || "" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_27_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh1S0VoUWJGT3NpaWEyUWswdUh4R0xJQVAvVVF2VnVQbUlMcW5ZUDJYRGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1UU3k3cGptVGZHZlcwaS1kck9YVlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGM0ZjIyYWQtMWFlZS00YzFlLWFlYjItMGVjZmRlMTg4NTc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMzcsXG4gICAgICA1MyxcbiAgICAgIDEzOSxcbiAgICAgIDEwMyxcbiAgICAgIDc0LFxuICAgICAgMTc2LFxuICAgICAgMjQzLFxuICAgICAgMjE2LFxuICAgICAgNyxcbiAgICAgIDIwOSxcbiAgICAgIDEsXG4gICAgICA5NixcbiAgICAgIDE2NyxcbiAgICAgIDIxMCxcbiAgICAgIDEwNyxcbiAgICAgIDIyMixcbiAgICAgIDE0NyxcbiAgICAgIDgzLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMjQ0LFxuICAgICAgMTgzLFxuICAgICAgMTYzLFxuICAgICAgMjQzLFxuICAgICAgMTE2LFxuICAgICAgMjgsXG4gICAgICAxMDIsXG4gICAgICA3MCxcbiAgICAgIDEyNyxcbiAgICAgIDU4LFxuICAgICAgMTQyLFxuICAgICAgMTg5LFxuICAgICAgMTY4LFxuICAgICAgMjUwLFxuICAgICAgNDQsXG4gICAgICAyMjUsXG4gICAgICAxNTcsXG4gICAgICAxNDgsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUoyWVZZMUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDQ0MDAwNjY6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MTM2NTI3NzI0NTYwOjc2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DdDhvWUJFS0NlMmJrR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUYvU1lkb3pQb0ZJMjlLOWFxaEtHaDRFVlRUZ3VuZzZvS2k4eU9sUW9GYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJINmtEbVVIaytJMzdRSGNxQ3RpNEtiR3RtNzMxeVNyTlNSSXJXNmwvTWhKbmtNZUFPVTVMQUdrQml1N0lFU1JTRE16NUwrekpPaWdmSHVLUTA5bXpEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0NjJRdGp0NUx2QXpwZzdreXZRaGNpOG9lSjMwSDViSmFzejFSSnhBVDNrS1lnOVkvUXFlN3BDenhSVTlKVkF1cVBBbmUxOVkxUUlQNy9XalNTQXREQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA0NDAwMDY2Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNjEyNDUyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Joshtech",
  packname: process.env.PACK_NAME || "josh",
  botname : process.env.BOT_NAME  || "Josh BOT",
  ownername:process.env.OWNER_NAME|| "Joshua",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
