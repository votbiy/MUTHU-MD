//═══════════════════════════════════════════════════════//
//                    MUTHU-MD-TS..✨
//                              
//             
//       Whatsapp User BOT Created By Thathsara Sumuditha
//
//════════════════════════════//


const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'TnFQSndzZzI=', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.owner = ['94789166455'] //your owner number
global.premium = ['94789166455'] //your Owner number in menu msg
global.ownernomer = '94789166455' //your owner number info

global.ownername = 'THATHSARA SUMUDITHA' //your owner name
global.botname = 'MUTHU-MD-TS..✨' //your bot name    // ඔයා බොට්ගේ නම නම් වෙනස් කලාට වැඩක් නෑ... බොට්ගේ නම ( 💞 𝚀𝚄𝙴𝙴𝙽 𝙰𝚂𝙷𝙸𝚈𝙰 💞 ) තමයි...
global.footer = 'MUTHU-MD-TS..✨' 

global.ig = 'https://www.youtube.com/channel/UCBi1evgI3DI3pwC_H5zK0kg' //Youtube!
global.region = 'Sri Lanka'
global.sc = 'https://www.youtube.com/channel/UCBi1evgI3DI3pwC_H5zK0kg'
global.myweb = 'https://www.youtube.com/channel/UCBi1evgI3DI3pwC_H5zK0kg' //your chanal link
global.packname = 'MUTHU-MD-TS..✨'

global.alivemsgimage = 'https://i.ibb.co/WGGxrdZ/TS.jpg' // ඔයාගේ Alive massege එකට වැටෙන්න ඕන image එකක Link එකක් මෙතනට දෙන්න...

global.chatbotpre = "true"

global.author = '𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺:- THATHSARA SUMUDITHA'
global.sessionName = 'session'
global.prefa = ['','!','.','🪄','⏱️','✨']                          // 👈 මේවා ඔයාට ඕන විදියට වෙනස් කර ගන්න \\ 
global.sp = '⭔'

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE .....👇
	
	
    success: 'Done ✅',
    admin: 'Only Admin..!',
    botAdmin: 'You Not Admin... !',
    owner: 'Only Owner!',
    group: 'Groups Only...!',
    private: 'Private Chat Only...!',
    bot: 'Only Bot...',
    wait: ' Wait ⏱️ ...',
    error: 'Error! Maybe Api Key Is Expired⏱️!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
	
	
	
	
	 // මේවා වෙනස් කරන්න එපා .....👇 \\
	
	
	
}
    global.limitawal = {        
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Queen_Ashiya_Media/Ashiya.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
