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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+263775440271";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_00_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzRNdmhXWklqOStqRXVqUGdtcjlEYkZ1c29VekhqYkNvQ2Nwci83ZUpLaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzU0NDAyNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI3MDQ0MkZGRDI3ODY1ODI3OEY2REM3RDlENUJDQTY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTc4NzIxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3NTQ0MDI3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUY5QUVBMENEN0FFQ0IzMEMxQ0E0MEE2QUREMTlEMjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNzg3MjE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBnZnBEYmh5VGJtSndrTGNOS2dNalFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzVhZTMzNjItY2E1OC00ZmU3LWE5MGMtYzljZTYyOTU5OGFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDEwMSxcbiAgICAgIDQxLFxuICAgICAgODMsXG4gICAgICAyMDIsXG4gICAgICAxMzIsXG4gICAgICAyNDgsXG4gICAgICAxNTYsXG4gICAgICA2LFxuICAgICAgMTkwLFxuICAgICAgNDcsXG4gICAgICAxMjAsXG4gICAgICAxMDQsXG4gICAgICAzNyxcbiAgICAgIDQxLFxuICAgICAgMjU1LFxuICAgICAgMTY4LFxuICAgICAgNDIsXG4gICAgICAxNDUsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgNzMsXG4gICAgICAxMjEsXG4gICAgICA4NSxcbiAgICAgIDE4NSxcbiAgICAgIDkyLFxuICAgICAgMTMyLFxuICAgICAgMTI3LFxuICAgICAgMjI3LFxuICAgICAgMjQ3LFxuICAgICAgMTI0LFxuICAgICAgMTgxLFxuICAgICAgNDUsXG4gICAgICAyNyxcbiAgICAgIDIwMCxcbiAgICAgIDE5LFxuICAgICAgMTg3LFxuICAgICAgNzgsXG4gICAgICAxNDMsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRldUQ0w1TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc1NDQwMjcxOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNY3R5Z2VyXCIsXG4gICAgXCJsaWRcIjogXCIxNzMwNjIwMzMwMDI0OTc6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTHpyQlFReXZQanVRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZEb3hkUmNWdkRWY1JBR2NwR0t0WlpYTmxVNjVINmczVlR0cVovVkoxa0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzN4UmV6MXZBaHVyOXJJZUpkQkpQWWcrOGIwaUpPWHNzUVVSRFFUSHZEZUZZVUYyWHlTaDBBNjFUQ2NCSTRiYkpoci9wNU5zRWU3MExhOWowallCQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZVlWc3JiTDhXYytPZzNuWTJwdWpkN2xkZzVkK0d0dy8rWkxXa2Y3SlpOb3ZCVDRaSitjTmZqTEhGby9qWmtHNk5POTVTdTVONDd5c3RuNjBWUnY2aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc1NDQwMjcxOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzg3MjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT21tXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJub0paaDE5dGRKTmIzbGNDZEJxVkxiK3V2aFZNV3hwenRHekJLbHFmUVowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyNjc4NzM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE3ODIzMDAxNjhcIn0iCn0="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "JOSH"  ).toUpperCase(),



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
  //userImages:process.envSuhailIMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT ME //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
