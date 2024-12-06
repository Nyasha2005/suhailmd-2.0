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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263718228938,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_26_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDUwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDI3LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJrMitaYnpqSnBQY2Y3TUF4bW9kZ1JYYnlwWkYwMFpzZFI3RWZoU0tXeEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRPSU9pX1dSUkNHb1NuU0E4cDdabkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzhhZWE4ODktODVhMC00MjRlLWI4MGQtMDI2MDAyN2QxMWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICA5NCxcbiAgICAgIDY3LFxuICAgICAgOTYsXG4gICAgICA0MixcbiAgICAgIDIyNCxcbiAgICAgIDIyMixcbiAgICAgIDE3MSxcbiAgICAgIDIsXG4gICAgICAyMTIsXG4gICAgICA4NyxcbiAgICAgIDMzLFxuICAgICAgNzgsXG4gICAgICAyMTYsXG4gICAgICAyMSxcbiAgICAgIDk0LFxuICAgICAgMjQ0LFxuICAgICAgMzUsXG4gICAgICA1MCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDIyNyxcbiAgICAgIDEzMixcbiAgICAgIDExNCxcbiAgICAgIDUyLFxuICAgICAgMTI1LFxuICAgICAgMTEyLFxuICAgICAgMjQ4LFxuICAgICAgMjcsXG4gICAgICAxNTcsXG4gICAgICAxNzQsXG4gICAgICAxNDcsXG4gICAgICAyMzEsXG4gICAgICAxMTYsXG4gICAgICAxODksXG4gICAgICA4NSxcbiAgICAgIDE4NyxcbiAgICAgIDIxNCxcbiAgICAgIDEwMCxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B5eitiTUVFSjdFeDdvR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZmRNQ2d3RFJ2bWtKeFVqdmRZc2xFZmlEdzE1aG4xN0h5VHVqeEdaNXZ5az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2cGtmNVY3UzdOakdUVEpDZmh5QmNjQjkybTBWTVVsVnIvSzFjc1hQRFJ5Q3FJZ2FLWW05VGZ1ckVEM2R2dzBCbFRKTVVPZ0dHZXpoSmJsV1p1U0lDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTcFdlVS9iYXlSSzRDdzRXdFl3WkdRd0c1cnBmcHlxak5sVllFUEFFanJXTFljYllUY1lZc2QyQ3lPZFBWZEdzVXhVVy9ZYnA1QUFNZ1VuNkNqb2xqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxODIyODkzODo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1BU1RFUiBUM0NILmpyXCIsXG4gICAgXCJsaWRcIjogXCIyNDk2Nzk2NjkzODcyOTg6NjBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTgyMjg5Mzg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDE5NTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmNuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCY2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDOUZ6aG4wd0tQQWZxWTg3M0ZxVjVmT3JJNDU2VzVuTDdvMGlsSU9kRUJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODI2ODU2OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJjbS5qc29uIjogIntcImtleURhdGFcIjpcIlpwbzhCRCs1Z1BSR0lxNzFjUFF5Y24yUTlCTkQxcUMxSnNRMnZEZVVrcjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE4MjY4NTY5MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJjbi5qc29uIjogIntcImtleURhdGFcIjpcIjVPRXViMUN0Y1Y0V1QyRzk5TTFwL2FTNjZZM2ZueVVkSkNqUTBJSEdsM1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE4MjY4NTY5MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCY28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRMnIzSXZURjhMenBNM3pVM0tlL005UUhMZmtLQnpia2l4VS80ZmIvWDlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODI2ODU2OTIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzMzNDE4NDY2NjEzXCJ9Igp9
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "RAIDEN-MD",
  ownername:process.env.OWNER_NAME|| "MASTER TECH",


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
