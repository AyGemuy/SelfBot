
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)=> {
	return`${ucapannya2}
「 *WUDY BOT INFO*   」
	
*Mode :* ${status}
*Prefix :* ${prefix}
*Total Hit :* ${hit_today.length}
*Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*Total All Chat :* ${totalchat.length}
*Group Chat :* ${ini_gcchat}

╭⌯ *</LIST MENU/>*
🍃⋆Allmenu 
🍃⋆Xmenu 
🍃⋆Convertmenu
🍃⋆Asupanmenu
🍃⋆Downloadmenu
🍃⋆Funmenu
🍃⋆Makermenu
🍃⋆Othermenu
🍃⋆Ownermenu
🍃⋆Storagemenu
🍃⋆Tagmenu
🍃⋆Upmenu
🍃⋆Set_sticker_cmd
🍃⋆Gacha_cecan
🍃⋆Telegram_sticker
╰⌯ Image_effect

╭⌯ *</ABOUT/>*
🌻⋆Source
🌻⋆ThanksTo
🌻⋆Group_support
╰⌯ Ownerbot

⋆⸙ _Creator Wudy © 2K21_ ⸙⋆
`
}
const convert = (prefix) => {
	return`*</CONVERT MENU/>*

╭⌯ ${prefix}toimg
│⌯ ${prefix}tomp3
│⌯ ${prefix}tomp4
│⌯ ${prefix}slow
│⌯ ${prefix}tupai
│⌯ ${prefix}fast
│⌯ ${prefix}reverse
│⌯ ${prefix}tourl
╰─⊸ *Wudy ⌕*`
}
const download = (prefix) => {
	return`*</DOWNLOAD MENU/>*

╭⌯ ${prefix}ytsearch *query*
│⌯ ${prefix}igstalk _username_
│⌯ ${prefix}ghstalk _username_
│⌯ ${prefix}play *query*
│⌯ ${prefix}playmp4 *query*
│⌯ ${prefix}video *query*
│⌯ ${prefix}ytmp3 *link*
│⌯ ${prefix}ytmp4 *link*
│⌯ ${prefix}ig *link*
│⌯ ${prefix}igphoto *link*
│⌯ ${prefix}igvideo *link*
│⌯ ${prefix}igtv *link*
│⌯ ${prefix}igreels *link*
│⌯ ${prefix}twitter *link*
│⌯ ${prefix}tiktokwm *link*
│⌯ ${prefix}tiktoknowm *link*
│⌯ ${prefix}tiktokaudio *link*
│⌯ ${prefix}fb *link*
│⌯ ${prefix}brainly *query*
│⌯ ${prefix}image *query*
│⌯ ${prefix}pinterest *query*
│⌯ ${prefix}pinterest2 *query*
│⌯ ${prefix}playstore *query*
│⌯ ${prefix}gcwa *query*
│⌯ ${prefix}lirik *query*
│⌯ ${prefix}komiku *query*
│⌯ ${prefix}otaku *query*
│⌯ ${prefix}anime _random_
╰─⊸ *Wudy ⌕*`
}

const allmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)  => {
	return `${ucapannya2}
「 *WUDY BOT INFO*   」
	
*Mode :* ${status}
*Prefix :* ${prefix}
*Total Hit :* ${hit_today.length}
*Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*Total All Chat :* ${totalchat.length}
*Group Chat :* ${ini_gcchat}

*</𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨/>*
╭⸙ ${prefix}self
│⌯ ${prefix}public
│⌯ ${prefix}readall
│⌯ ${prefix}unreadall
│⌯ ${prefix}archive
│⌯ ${prefix}unarchiveall  
│⌯ ${prefix}return 
│⌯ ${prefix}join
│⌯ ${prefix}repeat
│⌯ ${prefix}exif
│⌯ ${prefix}culik
│⌯ ${prefix}pin   
│⌯ ${prefix}unpin
│⌯ ${prefix}bc
│⌯ ${prefix}tobc
│⌯ ${prefix}bcaudio
│⌯  $  *termux code*
│⌯  =>  *eval async*
│⌯  x or > *code*
╰─⊸ *Wudy ⌕*

*</𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨/>*
╭⸙ ${prefix}antilink
│⌯ ${prefix}welcome
│⌯ ${prefix}group
│⌯ ${prefix}linkgrup
│⌯ ${prefix}promote
│⌯ ${prefix}demote
│⌯ ${prefix}add
│⌯ ${prefix}kick
│⌯ ${prefix}setpp
│⌯ ${prefix}setdesc
│⌯ ${prefix}setname
│⌯ ${prefix}hidetag
│⌯ ${prefix}infogc
╰─⊸ *Wudy ⌕*

*</𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨/>*
╭⸙ ${prefix}suit     
│⌯ ${prefix}slot
│⌯ ${prefix}gelud
│⌯ ${prefix}tictactoe
│⌯ ${prefix}resetgame
│⌯ ${prefix}delsesigelud
│⌯ ${prefix}caklontong
│⌯ ${prefix}tebakgambar
│⌯ ${prefix}family100
╰─⊸ *Wudy ⌕*

*</𝗚𝗔𝗕𝗨𝗧 𝗠𝗘𝗡𝗨/>*
╭⸙ ${prefix}apakah
│⌯ ${prefix}cekganteng
│⌯ ${prefix}cekcantik
│⌯ ${prefix}hobby
│⌯ ${prefix}bisakah
│⌯ ${prefix}kapankah
│⌯ ${prefix}citacita
╰─⊸ *Wudy ⌕*

*</𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨/>*
╭⸙ ${prefix}tourl            
│⌯ ${prefix}sticker
│⌯ ${prefix}attp
│⌯ ${prefix}toimg
│⌯ ${prefix}tomp3
│⌯ ${prefix}tovideo
│⌯ ${prefix}emoji
│⌯ ${prefix}audiotourl
│⌯ ${prefix}videotourl
│⌯ ${prefix}stickertourl
╰─⊸ *Wudy ⌕*

*</𝗦𝗘𝗔𝗥𝗖𝗛𝗜𝗡𝗚/>*
╭⸙ ${prefix}image   
│⌯ ${prefix}video   
│⌯ ${prefix}pinterest
│⌯ ${prefix}ytsearch
│⌯ ${prefix}brainly
│⌯ ${prefix}anime
│⌯ ${prefix}searchfilm
│⌯ ${prefix}searchanime   
│⌯ ${prefix}happymod
│⌯ ${prefix}lirik
│⌯ ${prefix}lirik2
│⌯ ${prefix}chara  
│⌯ ${prefix}playstore   
│⌯ ${prefix}otaku
│⌯ ${prefix}herodetail
│⌯ ${prefix}herolist
│⌯ ${prefix}komiku
│⌯ ${prefix}google
│⌯ ${prefix}wiki
╰─⊸ *Wudy ⌕*

*</𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗/>*
╭⸙ ${prefix}ig    
│⌯ ${prefix}mediafire    
│⌯ ${prefix}pinterest  
│⌯ ${prefix}youtube
│⌯ ${prefix}tiktoknowm
│⌯ ${prefix}play
│⌯ ${prefix}twmp4
│⌯ ${prefix}twmp3
│⌯ ${prefix}tiktok
│⌯ ${prefix}fbmp4
│⌯ ${prefix}fbmp3
│⌯ ${prefix}tinyurl
╰─⊸ *Wudy ⌕*

*</𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬/>*
╭⸙ ${prefix}burnpaper
│⌯ ${prefix}smoke
│⌯ ${prefix}shadow
│⌯ ${prefix}romantic
│⌯ ${prefix}naruto
│⌯ ${prefix}coffecup
│⌯ ${prefix}doubleheart
│⌯ ${prefix}lovemsg
│⌯ ${prefix}grass
│⌯ ${prefix}butterfly
│⌯ ${prefix}lovetext
╰─⊸ *Wudy ⌕*

*</𝗪𝗜𝗕𝗨 𝗠𝗘𝗡𝗨/>*
╭⸙ ${prefix}bj
│⌯ ${prefix}loli
│⌯ ${prefix}yuri
│⌯ ${prefix}kiryu   
│⌯ ${prefix}animeplanet
│⌯ ${prefix}klikmanga
│⌯ ${prefix}cosplay
│⌯ ${prefix}waifu
│⌯ ${prefix}randomloli
│⌯ ${prefix}husbu
│⌯ ${prefix}wallml
│⌯ ${prefix}milf
│⌯ ${prefix}trapnime
│⌯ ${prefix}neko
│⌯ ${prefix}megumin
│⌯ ${prefix}blowjob
│⌯ ${prefix}hentai
│⌯ ${prefix}awoo
│⌯ ${prefix}eroneko
│⌯ ${prefix}lesbian
│⌯ ${prefix}anal
│⌯ ${prefix}baka
│⌯ ${prefix}neko2
│⌯ ${prefix}wallpaper
│⌯ ${prefix}pussy
│⌯ ${prefix}kitsune
│⌯ ${prefix}keta
│⌯ ${prefix}neko2
│⌯ ${prefix}poke
│⌯ ${prefix}slap
╰─⊸ *Wudy ⌕*

*</𝗠𝗨𝗟𝗧𝗜 𝗦𝗘𝗦𝗦𝗜𝗢𝗡/>*
╭⸙ ${prefix}jadibot
│⌯ ${prefix}stopjadibot
│⌯ ${prefix}listjadibot
╰─⊸ *Wudy ⌕*

*Mgak work jgn spam:)*
`
}

const xallmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)  => {
	return `${ucapannya2}
「 *WUDY BOT INFO*   」

*Mode :* ${status}
*Prefix :* ${prefix}
*Total Hit :* ${hit_today.length}
*Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*Total All Chat :* ${totalchat.length}
*Group Chat :* ${ini_gcchat}

╭⋆⸙「 *CONVERT MENU*   」
│⌯ ${prefix}toimg
│⌯ ${prefix}tomp3
│⌯ ${prefix}tomp4
│⌯ ${prefix}slow
│⌯ ${prefix}tupai
│⌯ ${prefix}fast
│⌯ ${prefix}reverse
│⌯ ${prefix}tourl
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *DOWNLOAD MENU*   」
│⌯ ${prefix}ytsearch *query*
│⌯ ${prefix}igstalk _username_
│⌯ ${prefix}ghstalk _username_
│⌯ ${prefix}play *query*
│⌯ ${prefix}playmp4 *query*
│⌯ ${prefix}video *query*
│⌯ ${prefix}ytmp3 *link*
│⌯ ${prefix}ytmp4 *link*
│⌯ ${prefix}ig *link*
│⌯ ${prefix}igphoto *link*
│⌯ ${prefix}igvideo *link*
│⌯ ${prefix}igtv *link*
│⌯ ${prefix}igreels *link*
│⌯ ${prefix}twitter *link*
│⌯ ${prefix}tiktokwm *link*
│⌯ ${prefix}tiktoknowm *link*
│⌯ ${prefix}tiktokaudio *link*
│⌯ ${prefix}fb *link*
│⌯ ${prefix}brainly *query*
│⌯ ${prefix}image *query*
│⌯ ${prefix}pinterest *query*
│⌯ ${prefix}pinterest2 *query*
│⌯ ${prefix}playstore *query*
│⌯ ${prefix}gcwa *query*
│⌯ ${prefix}lirik *query*
│⌯ ${prefix}komiku *query*
│⌯ ${prefix}anime *random*
│⌯ ${prefix}bucin2
│⌯ ${prefix}cehor
│⌯ ${prefix}darkjoke2
│⌯ ${prefix}fakta
│⌯ ${prefix}husbu2
│⌯ ${prefix}katabijak
│⌯ ${prefix}kemono
│⌯ ${prefix}loli2
│⌯ ${prefix}motivasi
│⌯ ${prefix}neko2
│⌯ ${prefix}pantun
│⌯ ${prefix}shota
│⌯ ${prefix}waifu2
│⌯ ${prefix}wallanime
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *FUN MENU*   」
│⌯ ${prefix}jelajah
│⌯ ${prefix}adventure
│⌯ ${prefix}nambang
│⌯ ${prefix}nebang
│⌯ ${prefix}mancing
│⌯ ${prefix}lebur
│⌯ ${prefix}jualikan
│⌯ ${prefix}jualcoal
│⌯ ${prefix}jualstone
│⌯ ${prefix}jualingot
│⌯ ${prefix}jualkayu
│⌯ ${prefix}slot
│⌯ ${prefix}inventory
│⌯ ${prefix}dompet
│⌯ ${prefix}suit
│⌯ ${prefix}judi
│⌯ ${prefix}fitnah
│⌯ ${prefix}absen
│⌯ ${prefix}absensi
│⌯ ${prefix}tebakgambar
│⌯ ${prefix}caklontong
│⌯ ${prefix}family100
│⌯ ${prefix}tebakanime
│⌯ ${prefix}suit
│⌯ ${prefix}fitnahpc *text*|balasan
│⌯ ${prefix}kontak 62xxx|text
│⌯ ${prefix}tictactoe @user
│⌯ ${prefix}delttt
│⌯ ${prefix}voting @user|reason|time
│⌯ ${prefix}delvote
│⌯ ${prefix}jadibot
│⌯ ${prefix}stopjadibot
│⌯ ${prefix}listbot
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *MAKER MENU*   」
│⌯ ${prefix}sticker
│⌯ ${prefix}smeme atas|bawah
│⌯ ${prefix}ktpmaker
│⌯ ${prefix}attp
│⌯ ${prefix}ttp
│⌯ ${prefix}ttp1
│⌯ ${prefix}ttp2
│⌯ ${prefix}ttp3
│⌯ ${prefix}ttp4
│⌯ ${prefix}swm *author|packname*
│⌯ ${prefix}take *author|packname*
│⌯ ${prefix}fdeface
│⌯ ${prefix}amongus 
│⌯ ${prefix}tweettrump *text*
│⌯ ${prefix}cmm *text*
│⌯ ${prefix}kanna *text*
│⌯ ${prefix}tahta *text*
│⌯ ${prefix}neon2 *text*
│⌯ ${prefix}wall *text*
│⌯ ${prefix}wolf *text*
│⌯ ${prefix}tfire *text*
│⌯ ${prefix}ytgold *text*
│⌯ ${prefix}ytsilver *text*
│⌯ ${prefix}t3d *text*
│⌯ ${prefix}logoa *text|text*
│⌯ ${prefix}pornhub *text|text*
│⌯ ${prefix}marvel *text|text*
│⌯ ${prefix}leavest *text*
│⌯ ${prefix}phcoment *text|text*
│⌯ ${prefix}nulis *text*
│⌯ ${prefix}nulis2
│⌯ ${prefix}emoji 👼
│⌯ ${prefix}naruto *text*
│⌯ ${prefix}blueneon *text*
│⌯ ${prefix}matrix *text*
│⌯ ${prefix}greenneon *text*
│⌯ ${prefix}dropwater *text|text*
│⌯ ${prefix}wolflogo *text*
│⌯ ${prefix}flowertext *text*
│⌯ ${prefix}crosslogo *text*
│⌯ ${prefix}silktext *text*
│⌯ ${prefix}flametext *text*
│⌯ ${prefix}glowtext *text*
│⌯ ${prefix}smoketext *text*
│⌯ ${prefix}pubglogo *text|text*
│⌯ ${prefix}skytext *text*
│⌯ ${prefix}cslogo *text*
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *IMAGE EFFECT*   」
│⌯ ${prefix}trigger
│⌯ ${prefix}gay
│⌯ ${prefix}glass
│⌯ ${prefix}passed
│⌯ ${prefix}jail
│⌯ ${prefix}comrade
│⌯ ${prefix}hijau
│⌯ ${prefix}biru
│⌯ ${prefix}greyscale
│⌯ ${prefix}invert
│⌯ ${prefix}invert_greyscale
│⌯ ${prefix}red
│⌯ ${prefix}blurple
│⌯ ${prefix}blurple2
│⌯ ${prefix}wasted
│⌯ ${prefix}pelangi
│⌯ ${prefix}sepia
│⌯ ${prefix}wanted
│⌯ ${prefix}utatoo
│⌯ ${prefix}unsharpen
│⌯ ${prefix}thanos
│⌯ ${prefix}sniper
│⌯ ${prefix}sharpen
│⌯ ${prefix}scary
│⌯ ${prefix}rip
│⌯ ${prefix}rejected
│⌯ ${prefix}redple
│⌯ ${prefix}posterize
│⌯ ${prefix}ps4
│⌯ ${prefix}pixelize
│⌯ ${prefix}missionpassed
│⌯ ${prefix}moustache
│⌯ ${prefix}lookwhatkarenhave
│⌯ ${prefix}instagram
│⌯ ${prefix}glitch
│⌯ ${prefix}frame
│⌯ ${prefix}fire
│⌯ ${prefix}distort
│⌯ ${prefix}dictator
│⌯ ${prefix}deepfry
│⌯ ${prefix}ddungeon
│⌯ ${prefix}circle
│⌯ ${prefix}challenger
│⌯ ${prefix}burn
│⌯ ${prefix}brazzers
│⌯ ${prefix}beautiful
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *GROUP MENU*   」
│⌯ ${prefix}add 62+
│⌯ ${prefix}kick *@user*
│⌯ ${prefix}radd _reply pesan @user_
│⌯ ${prefix}rkick _reply pesan @user_
│⌯ ${prefix}ping
│⌯ ${prefix}nsfw *on / off*
│⌯ ${prefix}antilink *on / off*
│⌯ ${prefix}get *link*
│⌯ ${prefix}getpp *@user*
│⌯ ${prefix}getname *reply*
│⌯ ${prefix}size *reply media*
│⌯ ${prefix}colongsw *reply sw*
│⌯ ${prefix}getbio *@user*
│⌯ ${prefix}tagall
│⌯ ${prefix}listonline
│⌯ ${prefix}caripesan query
│⌯ ${prefix}caripesan2 *query*
│⌯ ${prefix}searchmsg _query|total_
│⌯ ${prefix}sider *reply pesan bot*
│⌯ ${prefix}del *reply pesan bot*
│⌯ ${prefix}q *reply pesan*
│⌯ ${prefix}afk *reason*
│⌯ ${prefix}getsider *reply pesan bot*
│⌯ ${prefix}promoteall
│⌯ ${prefix}ppcouple
│⌯ ${prefix}setname
│⌯ ${prefix}revoke
│⌯ ${prefix}setdesk
│⌯ ${prefix}spam *text*|jumlah
│⌯ ${prefix}demoteall
│⌯ ${prefix}admin
│⌯ ${prefix}listpc
│⌯ ${prefix}listgroup
│⌯ ${prefix}hentai
│⌯ ${prefix}jadian
│⌯ ${prefix}trapnime
│⌯ ${prefix}sewa add/del waktu
│⌯ ${prefix}listsewa
│⌯ ${prefix}ceksewa
│⌯ ${prefix}premium add 62xxx waktu
│⌯ ${prefix}cekpremium
│⌯ ${prefix}listprem
│⌯ ${prefix}belipremium
│⌯ ${prefix}sewabot
│⌯ ${prefix}verify
│⌯ ${prefix}limit
│⌯ ${prefix}profile
│⌯ ${prefix}buylimit
│⌯ ${prefix}buyglimit
│⌯ ${prefix}awoo
│⌯ ${prefix}megumin
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *OWNER MENU*   」
│⌯ ${prefix}off
│⌯ ${prefix}on
│⌯ ${prefix}buggc
│⌯ ${prefix}bc
│⌯ ${prefix}bcimage
│⌯ ${prefix}bcgif
│⌯ ${prefix}bcvideo
│⌯ ${prefix}bcaudio
│⌯ ${prefix}bcsticker
│⌯ ${prefix}virus1
│⌯ ${prefix}virus2
│⌯ ${prefix}virus3
│⌯ ${prefix}virus4
│⌯ ${prefix}ban
│⌯ ${prefix}unban
│⌯ ${prefix}block
│⌯ ${prefix}unblock
│⌯ ${prefix}status
│⌯ ${prefix}clearall
│⌯ ${prefix}self
│⌯ ${prefix}public
│⌯ ${prefix}join
│⌯ ${prefix}leave
│⌯ ${prefix}clearall
│⌯ ${prefix}readall
│⌯ ${prefix}unreadall
│⌯ ${prefix}archive
│⌯ ${prefix}unarchive
│⌯ ${prefix}pin
│⌯ ${prefix}delthischat
│⌯ ${prefix}unpin
│⌯ ${prefix}autoread <query> *on / off*
│⌯ ${prefix}antibug *on / off*
│⌯ ${prefix}antidelete *on / off*
│⌯ ${prefix}anticall *on / off*
│⌯ ${prefix}autoketik *on / off*
│⌯ ${prefix}autovn *on / off*
│⌯ ${prefix}antihidetag *on / off*
│⌯ ${prefix}autobio *on / off*
│⌯ ${prefix}register *on / off*
│⌯ ${prefix}autorespon *on / off*
│⌯ ${prefix}setthumb
│⌯ ${prefix}settarget
│⌯ ${prefix}setfakeimg
│⌯ ${prefix}setreply
│⌯ ${prefix}term *code*
• x or > *code*
• $  *termux code*
• =>  *eval async*
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *SET STC CMD*   」
│⌯ ${prefix}set_stc_menu *<query>*
│⌯ ${prefix}set_stc_ping *<query>*
│⌯ ${prefix}set_stc_gclose *<query>*
│⌯ ${prefix}set_stc_gopen *<query>*
│⌯ ${prefix}set_stc_itos *<query>*
│⌯ ${prefix}set_stc_toimg *<query>*
│⌯ ${prefix}set_stc_self *<query>*
│⌯ ${prefix}set_stc_public *<query>*
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *STORAGE  MENU*   」
│⌯ ${prefix}addstik 
│⌯ ${prefix}addimg 
│⌯ ${prefix}addvid 
│⌯ ${prefix}addvn   
│⌯ ${prefix}liststick
│⌯ ${prefix}listimg
│⌯ ${prefix}listvid
│⌯ ${prefix}listvn
│⌯ ${prefix}addrespon
│⌯ ${prefix}delrespon
│⌯ ${prefix}listrespon
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *TAG  MENU*   」
│⌯ ${prefix}hidetag
│⌯ ${prefix}kontag
│⌯ ${prefix}sticktag
│⌯ ${prefix}totag
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *UP ESWE*   」
│⌯ ${prefix}upswteks
│⌯ ${prefix}upswimage
│⌯ ${prefix}upswvideo
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *NSFW & SFW*   」
│⌯ ${prefix}8ball
│⌯ ${prefix}ahegao
│⌯ ${prefix}anal
│⌯ ${prefix}ass
│⌯ ${prefix}avatar
│⌯ ${prefix}baka
│⌯ ${prefix}bdsm
│⌯ ${prefix}bj
│⌯ ${prefix}blowjob
│⌯ ${prefix}blowjob2
│⌯ ${prefix}boobs
│⌯ ${prefix}classic
│⌯ ${prefix}cry
│⌯ ${prefix}cuckold
│⌯ ${prefix}cuddle
│⌯ ${prefix}cum
│⌯ ${prefix}cum_jpg
│⌯ ${prefix}doujin
│⌯ ${prefix}ero
│⌯ ${prefix}erofeet
│⌯ ${prefix}erok
│⌯ ${prefix}erokemo
│⌯ ${prefix}eron
│⌯ ${prefix}eroyuri
│⌯ ${prefix}feed
│⌯ ${prefix}feet
│⌯ ${prefix}feetg
│⌯ ${prefix}femdom
│⌯ ${prefix}fendom
│⌯ ${prefix}foot
│⌯ ${prefix}foxgirl
│⌯ ${prefix}fox_girl
│⌯ ${prefix}futanari
│⌯ ${prefix}gangbang
│⌯ ${prefix}gasm
│⌯ ${prefix}gecg
│⌯ ${prefix}glasses
│⌯ ${prefix}goose
│⌯ ${prefix}hentai
│⌯ ${prefix}hentai_gif
│⌯ ${prefix}holo
│⌯ ${prefix}holoero
│⌯ ${prefix}hololewd
│⌯ ${prefix}holoyero
│⌯ ${prefix}hug
│⌯ ${prefix}jahy
│⌯ ${prefix}kemonomimi
│⌯ ${prefix}keta
│⌯ ${prefix}kiss
│⌯ ${prefix}kitsune
│⌯ ${prefix}kuni
│⌯ ${prefix}les
│⌯ ${prefix}lewd
│⌯ ${prefix}lewdk
│⌯ ${prefix}lewdkemo
│⌯ ${prefix}lizard
│⌯ ${prefix}maid
│⌯ ${prefix}manga
│⌯ ${prefix}masturbation
│⌯ ${prefix}meow
│⌯ ${prefix}neko
│⌯ ${prefix}nekogif
│⌯ ${prefix}netorare
│⌯ ${prefix}ngif
│⌯ ${prefix}nsfw_avatar
│⌯ ${prefix}nsfw_neko_gif
│⌯ ${prefix}orgy
│⌯ ${prefix}panties
│⌯ ${prefix}pat
│⌯ ${prefix}poke
│⌯ ${prefix}pussy
│⌯ ${prefix}pussy_jpg
│⌯ ${prefix}pwankg
│⌯ ${prefix}school
│⌯ ${prefix}slap
│⌯ ${prefix}smug
│⌯ ${prefix}solo
│⌯ ${prefix}solog
│⌯ ${prefix}spank
│⌯ ${prefix}tentacles
│⌯ ${prefix}thighs
│⌯ ${prefix}tickle
│⌯ ${prefix}tits
│⌯ ${prefix}trap
│⌯ ${prefix}uglybastard
│⌯ ${prefix}Uniform
│⌯ ${prefix}waifu
│⌯ ${prefix}wallpaper
│⌯ ${prefix}woof
│⌯ ${prefix}yuri
│⌯ ${prefix}zettai
│⌯ ${prefix}zettai-ryouiki
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *STC  MENU*   」
│⌯ ${prefix}awoawo
│⌯ ${prefix}benedict
│⌯ ${prefix}chat
│⌯ ${prefix}dbfly
│⌯ ${prefix}dino_kuning
│⌯ ${prefix}doge
│⌯ ${prefix}gojosatoru
│⌯ ${prefix}hope_boy
│⌯ ${prefix}jisoo
│⌯ ${prefix}kr_robot
│⌯ ${prefix}kucing
│⌯ ${prefix}lonte
│⌯ ${prefix}manusia_lidi
│⌯ ${prefix}menjamet
│⌯ ${prefix}meow
│⌯ ${prefix}nicholas
│⌯ ${prefix}patrick
│⌯ ${prefix}popoci
│⌯ ${prefix}sponsbob
│⌯ ${prefix}kawan_sponsbob
│⌯ ${prefix}tyni
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *CECAN  MENU*   」
│⌯ ${prefix}china
│⌯ ${prefix}indonesia
│⌯ ${prefix}malaysia
│⌯ ${prefix}thailand
│⌯ ${prefix}korea
│⌯ ${prefix}japan
│⌯ ${prefix}vietnam
│⌯ ${prefix}jenni
│⌯ ${prefix}jiso
│⌯ ${prefix}lisa
│⌯ ${prefix}rose
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *QUOTES  MENU*   」
│⌯ ${prefix}katailham  
│⌯ ${prefix}dare   
│⌯ ${prefix}truth  
│⌯ ${prefix}katabijak_lucu   
│⌯ ${prefix}katacaklontong  
│⌯ ${prefix}katadilan  
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *COGAN  MENU*   」
│⌯ ${prefix}baekhyung  
│⌯ ${prefix}dohkyungsoo  
│⌯ ${prefix}huangzitao  
│⌯ ${prefix}jhope  
│⌯ ${prefix}jimin 
│⌯ ${prefix}jungkook 
│⌯ ${prefix}kimjondae  
│⌯ ${prefix}kimjong  
│⌯ ${prefix}kimjunmyeon  
│⌯ ${prefix}kimminseok 
│⌯ ${prefix}kimnanjoon  
│⌯ ${prefix}kimseok  
│⌯ ${prefix}kimtaehyung  
│⌯ ${prefix}luhan  
│⌯ ${prefix}ohsehun 
│⌯ ${prefix}parkchanyeol 
│⌯ ${prefix}suga  
│⌯ ${prefix}wuyifan
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *ASUPAN  MENU*   」
│⌯ ${prefix}rikagusriani 
│⌯ ${prefix}ukhty 
│⌯ ${prefix}santuy 
│⌯ ${prefix}geayubi   
│⌯ ${prefix}bocil
│⌯ ${prefix}asupan
│⌯ ${prefix}chika 
│⌯ ${prefix}delvira 
│⌯ ${prefix}ayu   
│⌯ ${prefix}bunga
│⌯ ${prefix}aura
│⌯ ${prefix}nisa 
│⌯ ${prefix}ziva 
│⌯ ${prefix}yana   
│⌯ ${prefix}viona
│⌯ ${prefix}syania
│⌯ ${prefix}riri   
│⌯ ${prefix}syifa
│⌯ ${prefix}mama_gina
│⌯ ${prefix}alcakenya 
│⌯ ${prefix}mangayutri
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *ANIME  MENU*   」
│⌯ ${prefix}akame
│⌯ ${prefix}anna
│⌯ ${prefix}asuna_yuki
│⌯ ${prefix}ayuzawa
│⌯ ${prefix}bunny
│⌯ ${prefix}cat
│⌯ ${prefix}chitoge
│⌯ ${prefix}darkjoke
│⌯ ${prefix}dog
│⌯ ${prefix}duck
│⌯ ${prefix}emilia
│⌯ ${prefix}erza
│⌯ ${prefix}fox
│⌯ ${prefix}hinata
│⌯ ${prefix}inori
│⌯ ${prefix}kaga_kouko
│⌯ ${prefix}kaori_miyazono
│⌯ ${prefix}kotori_minami
│⌯ ${prefix}lizard
│⌯ ${prefix}memeindo
│⌯ ${prefix}mikasa
│⌯ ${prefix}mikosiba
│⌯ ${prefix}mio_akiyama
│⌯ ${prefix}mizore_sirayuki
│⌯ ${prefix}nakiri_alice
│⌯ ${prefix}naruto
│⌯ ${prefix}panda
│⌯ ${prefix}randomcowok
│⌯ ${prefix}riyas_gremori
│⌯ ${prefix}sakura
│⌯ ${prefix}sasuke
│⌯ ${prefix}sento_isuzu
│⌯ ${prefix}shana
│⌯ ${prefix}shiba
│⌯ ${prefix}shiina
│⌯ ${prefix}shinka
│⌯ ${prefix}winry
│⌯ ${prefix}yukino
│⌯ ${prefix}yuzuki
╰─⊸ *Wudy ⌕*

「 MENU BOT   」
`
}

const fun = (prefix) => {
	return`*</FUN & GAME MENU/>*

╭⌯ ${prefix}jelajah
│⌯ ${prefix}adventure
│⌯ ${prefix}nambang
│⌯ ${prefix}nebang
│⌯ ${prefix}mancing
│⌯ ${prefix}lebur
│⌯ ${prefix}jualikan
│⌯ ${prefix}jualcoal
│⌯ ${prefix}jualstone
│⌯ ${prefix}jualingot
│⌯ ${prefix}jualkayu
│⌯ ${prefix}slot
│⌯ ${prefix}inventory
│⌯ ${prefix}dompet
│⌯ ${prefix}suit
│⌯ ${prefix}judi
│⌯ ${prefix}fitnah
│⌯ ${prefix}absen
│⌯ ${prefix}absensi
│⌯ ${prefix}tebakgambar
│⌯ ${prefix}caklontong
│⌯ ${prefix}family100
│⌯ ${prefix}tebakanime
│⌯ ${prefix}fitnahpc *text*|balasan
│⌯ ${prefix}kontak 62xxx|text
│⌯ ${prefix}tictactoe @user
│⌯ ${prefix}delttt
│⌯ ${prefix}voting
│⌯ ${prefix}delvote
│⌯ ${prefix}jadibot
│⌯ ${prefix}stopjadibot
│⌯ ${prefix}listbot
╰─⊸ *Wudy ⌕*`
}

const maker = (prefix) => {
	return`*</MAKER MENU/>*

╭⌯ ${prefix}sticker
│⌯ ${prefix}smeme
│⌯ ${prefix}ktpmaker
│⌯ ${prefix}attp
│⌯ ${prefix}ttp
│⌯ ${prefix}ttp1
│⌯ ${prefix}ttp2
│⌯ ${prefix}ttp3
│⌯ ${prefix}ttp4
│⌯ ${prefix}swm *author|packname*
│⌯ ${prefix}take *author|packname*
│⌯ ${prefix}fdeface
│⌯ ${prefix}amongus 
│⌯ ${prefix}tweettrump *text*
│⌯ ${prefix}1917 *text*
│⌯ ${prefix}angelwing *text*
│⌯ ${prefix}bannerepep *text*
│⌯ ${prefix}blood *text*
│⌯ ${prefix}bluelight *text*
│⌯ ${prefix}blueneon *text*
│⌯ ${prefix}break-wall *text*
│⌯ ${prefix}christmas *text*
│⌯ ${prefix}cmm *text*
│⌯ ${prefix}crosslogo *text*
│⌯ ${prefix}cslogo *text*
│⌯ ${prefix}deluxe-gold *text*
│⌯ ${prefix}deluxe-silver *text*
│⌯ ${prefix}dropwater *text|text*
│⌯ ${prefix}firedragon *text*
│⌯ ${prefix}firewing *text*
│⌯ ${prefix}firework *text*
│⌯ ${prefix}flametext *text*
│⌯ ${prefix}flowertext *text*
│⌯ ${prefix}flower *text*
│⌯ ${prefix}galaxyangel *text*
│⌯ ${prefix}galaxyedge *text*
│⌯ ${prefix}galaxysprout *text*
│⌯ ${prefix}glossy-blue *text*
│⌯ ${prefix}glossy-carbon *text*
│⌯ ${prefix}glowtext *text*
│⌯ ${prefix}glow *text*
│⌯ ${prefix}glue *text*
│⌯ ${prefix}googleimage *text*
│⌯ ${prefix}gradient *text*
│⌯ ${prefix}greenneon *text*
│⌯ ${prefix}halloween *text*
│⌯ ${prefix}horror *text*
│⌯ ${prefix}joker *text*
│⌯ ${prefix}kanna *text*
│⌯ ${prefix}lava *text*
│⌯ ${prefix}leavest *text*
│⌯ ${prefix}lightgerm *text*
│⌯ ${prefix}logoa *text|text*
│⌯ ${prefix}loveshadow *text*
│⌯ ${prefix}luxury *text*
│⌯ ${prefix}marvel *text|text*
│⌯ ${prefix}matrix *text*
│⌯ ${prefix}metal-dark *text*
│⌯ ${prefix}metal-purple *text*
│⌯ ${prefix}minion *text*
│⌯ ${prefix}moon *text*
│⌯ ${prefix}naruto *text*
│⌯ ${prefix}neon-light *text*
│⌯ ${prefix}neon2 *text*
│⌯ ${prefix}neondevil *text*
│⌯ ${prefix}neon *text*
│⌯ ${prefix}nulis2
│⌯ ${prefix}nulis *text*
│⌯ ${prefix}papercut *text*
│⌯ ${prefix}phcoment *text|text*
│⌯ ${prefix}pornhub *text|text*
│⌯ ${prefix}pubglogo *text|text*
│⌯ ${prefix}sand-engrave *text*
│⌯ ${prefix}sand-summery *text*
│⌯ ${prefix}sand-writing *text*
│⌯ ${prefix}sand2 *text*
│⌯ ${prefix}sand *text*
│⌯ ${prefix}seasidesand *text*
│⌯ ${prefix}silktext *text*
│⌯ ${prefix}skeleton *text*
│⌯ ${prefix}skytext *text*
│⌯ ${prefix}sky *text*
│⌯ ${prefix}smoketext *text*
│⌯ ${prefix}starmetalic *text*
│⌯ ${prefix}summer *text*
│⌯ ${prefix}t3d *text*
│⌯ ${prefix}tahta *text*
│⌯ ${prefix}tfire *text*
│⌯ ${prefix}thunder *text*
│⌯ ${prefix}toxic *text*
│⌯ ${prefix}underwater *text*
│⌯ ${prefix}viettel *text*
│⌯ ${prefix}wall *text*
│⌯ ${prefix}water3d *text*
│⌯ ${prefix}wicker *text*
│⌯ ${prefix}winter *text*
│⌯ ${prefix}wolflogo *text*
│⌯ ${prefix}wolf *text*
│⌯ ${prefix}writegalaxy *text*
│⌯ ${prefix}xmas *text*
│⌯ ${prefix}yasuo *text*
│⌯ ${prefix}ytgold *text*
│⌯ ${prefix}ytsilver *text*
│⌯ ${prefix}emoji 👼
╰─⊸ *Wudy ⌕*`
}

const other = (prefix) => {
	return`*</GROUP MENU/>*

╭⌯ ${prefix}add 62xxx
│⌯ ${prefix}kick 62xxx
│⌯ ${prefix}ping
│⌯ ${prefix}antilink *on / off*
│⌯ ${prefix}get *link*
│⌯ ${prefix}getpp *@user*
│⌯ ${prefix}getbio *@user*
│⌯ ${prefix}getname *reply*
│⌯ ${prefix}size *reply media*
│⌯ ${prefix}colongsw *reply sw*
│⌯ ${prefix}tagall
│⌯ ${prefix}listonline
│⌯ ${prefix}caripesan *query*
│⌯ ${prefix}caripesan2 *query*
│⌯ ${prefix}searchmsg *query|total*
│⌯ ${prefix}sider *reply pesan bot*
│⌯ ${prefix}del *reply pesan bot*
│⌯ ${prefix}q *reply pesan*
│⌯ ${prefix}afk *reason*
│⌯ ${prefix}getsider *reply pesan bot*
│⌯ ${prefix}tagall
│⌯ ${prefix}revoke
│⌯ ${prefix}setname
│⌯ ${prefix}ppcouple
│⌯ ${prefix}promoteall
│⌯ ${prefix}demoteall
│⌯ ${prefix}admin
│⌯ ${prefix}hentai
│⌯ ${prefix}jadian
│⌯ ${prefix}trapnime
│⌯ ${prefix}sewa add/del waktu
│⌯ ${prefix}listsewa
│⌯ ${prefix}ceksewa
│⌯ ${prefix}premium add @user waktu
│⌯ ${prefix}cekpremium
│⌯ ${prefix}listprem
│⌯ ${prefix}belipremium
│⌯ ${prefix}sewabot
│⌯ ${prefix}verify
│⌯ ${prefix}limit
│⌯ ${prefix}profile
│⌯ ${prefix}buylimit
│⌯ ${prefix}buyglimit
│⌯ ${prefix}blowjob
│⌯ ${prefix}awoo
│⌯ ${prefix}youwatch *text*
│⌯ ${prefix}thelazy *text*
│⌯ ${prefix}samehadaku *text*
│⌯ ${prefix}ipgeo *ip*
│⌯ ${prefix}amazon *text*
│⌯ ${prefix}md5enc *kata*
│⌯ ${prefix}moddroid *text*
│⌯ ${prefix}ssfile *text*
│⌯ ${prefix}ssticker *text*
│⌯ ${prefix}pinterst *text*
│⌯ ${prefix}gsearch *text*
│⌯ ${prefix}gimage *text*
│⌯ ${prefix}quran *1|2*
│⌯ ${prefix}translate *kata*
│⌯ ${prefix}tts *id kata*
│⌯ ${prefix}detikvn *12345*
│⌯ ${prefix}megumin
╰─⊸ *Wudy ⌕*`
}

const ownermenu = (prefix) => {
	return`*</OWNER MENU/>*

╭⌯ ${prefix}off
│⌯ ${prefix}on
│⌯ ${prefix}buggc
│⌯ ${prefix}bc
│⌯ ${prefix}bcimage
│⌯ ${prefix}bcgif
│⌯ ${prefix}bcvideo
│⌯ ${prefix}bcaudio
│⌯ ${prefix}bcsticker
│⌯ ${prefix}virus1
│⌯ ${prefix}virus2
│⌯ ${prefix}virus3
│⌯ ${prefix}virus4
│⌯ ${prefix}ban
│⌯ ${prefix}unban
│⌯ ${prefix}block
│⌯ ${prefix}unblock
│⌯ ${prefix}status
│⌯ ${prefix}clearall
│⌯ ${prefix}self
│⌯ ${prefix}public
│⌯ ${prefix}join 
│⌯ ${prefix}leave
│⌯ ${prefix}readall
│⌯ ${prefix}unreadall
│⌯ ${prefix}archive
│⌯ ${prefix}unarchive
│⌯ ${prefix}pin
│⌯ ${prefix}delthischat
│⌯ ${prefix}unpin
│⌯ ${prefix}autoread <query> *on / off*
│⌯ ${prefix}antibug *on / off*
│⌯ ${prefix}antidelete *on / off*
│⌯ ${prefix}anticall *on / off*
│⌯ ${prefix}autoketik *on / off*
│⌯ ${prefix}autobio *on / off*
│⌯ ${prefix}antihidetag *on / off*
│⌯ ${prefix}autovn *on / off*
│⌯ ${prefix}register *on / off*
│⌯ ${prefix}autorespon *on / off*
│⌯ ${prefix}setthumb
│⌯ ${prefix}settarget
│⌯ ${prefix}setfakeimg
│⌯ ${prefix}setreply
│⌯ ${prefix}term *code*
│⌯  $  *termux code*
│⌯  =>  *eval async*
│⌯  x or > *code*
╰─⊸ *Wudy ⌕*`
}

const setStcCmd = (prefix) => {
	return`*</SET STC CMD/>*

╭⌯ ${prefix}set_stc_menu
│⌯ ${prefix}set_stc_ping
│⌯ ${prefix}set_stc_gclose
│⌯ ${prefix}set_stc_gopen
│⌯ ${prefix}set_stc_itos
│⌯ ${prefix}set_stc_toimg
│⌯ ${prefix}set_stc_self
│⌯ ${prefix}set_stc_public
╰─⊸ *Wudy ⌕*

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`*</STORAGE MENU/>*

╭⌯ ${prefix}addstik 
│⌯ ${prefix}addimg 
│⌯ ${prefix}addvid 
│⌯ ${prefix}addvn   
│⌯ ${prefix}liststick
│⌯ ${prefix}listimg
│⌯ ${prefix}listvid
│⌯ ${prefix}listvn
│⌯ ${prefix}addrespon
│⌯ ${prefix}delrespon
│⌯ ${prefix}listrespon
╰─⊸ *Wudy ⌕*`
}
const cecanmenu = (prefix) => {
	return`*</GACHA CECAN/>*

╭⌯ ${prefix}china
│⌯ ${prefix}indonesia
│⌯ ${prefix}malaysia
│⌯ ${prefix}thailand
│⌯ ${prefix}korea
│⌯ ${prefix}japan
│⌯ ${prefix}vietnam
│⌯ ${prefix}jenni
│⌯ ${prefix}jiso
│⌯ ${prefix}lisa
│⌯ ${prefix}rose
╰─⊸ *Wudy ⌕*`
}

const tag = (prefix) => {
	return`*</TAG MENU/>*

╭⌯ ${prefix}hidetag
│⌯ ${prefix}kontag
│⌯ ${prefix}sticktag
│⌯ ${prefix}totag
│⌯ ${prefix}woii
╰─⊸ *Wudy ⌕*`
}

const upmenu = (prefix) => {
	return`*</UP ESWE/>*

╭⌯ ${prefix}upswteks
│⌯ ${prefix}upswimage
│⌯ ${prefix}upswvideo
╰─⊸ *Wudy ⌕*`
}
const nsfw = (prefix) => {
	return`*</NSFW & SFW/>*

╭⌯ ${prefix}8ball
│⌯ ${prefix}ahegao
│⌯ ${prefix}anal
│⌯ ${prefix}ass
│⌯ ${prefix}avatar
│⌯ ${prefix}baka
│⌯ ${prefix}bdsm
│⌯ ${prefix}bj
│⌯ ${prefix}blowjob
│⌯ ${prefix}blowjob2
│⌯ ${prefix}boobs
│⌯ ${prefix}classic
│⌯ ${prefix}cry
│⌯ ${prefix}cuckold
│⌯ ${prefix}cuddle
│⌯ ${prefix}cum
│⌯ ${prefix}cum_jpg
│⌯ ${prefix}doujin
│⌯ ${prefix}ero
│⌯ ${prefix}erofeet
│⌯ ${prefix}erok
│⌯ ${prefix}erokemo
│⌯ ${prefix}eron
│⌯ ${prefix}eroyuri
│⌯ ${prefix}feed
│⌯ ${prefix}feet
│⌯ ${prefix}feetg
│⌯ ${prefix}femdom
│⌯ ${prefix}fendom
│⌯ ${prefix}foot
│⌯ ${prefix}foxgirl
│⌯ ${prefix}fox_girl
│⌯ ${prefix}futanari
│⌯ ${prefix}gangbang
│⌯ ${prefix}gasm
│⌯ ${prefix}gecg
│⌯ ${prefix}glasses
│⌯ ${prefix}goose
│⌯ ${prefix}hentai
│⌯ ${prefix}hentai_gif
│⌯ ${prefix}holo
│⌯ ${prefix}holoero
│⌯ ${prefix}hololewd
│⌯ ${prefix}holoyero
│⌯ ${prefix}hug
│⌯ ${prefix}jahy
│⌯ ${prefix}kemonomimi
│⌯ ${prefix}keta
│⌯ ${prefix}kiss
│⌯ ${prefix}kitsune
│⌯ ${prefix}kuni
│⌯ ${prefix}les
│⌯ ${prefix}lewd
│⌯ ${prefix}lewdk
│⌯ ${prefix}lewdkemo
│⌯ ${prefix}lizard
│⌯ ${prefix}maid
│⌯ ${prefix}manga
│⌯ ${prefix}masturbation
│⌯ ${prefix}meow
│⌯ ${prefix}neko
│⌯ ${prefix}nekogif
│⌯ ${prefix}netorare
│⌯ ${prefix}ngif
│⌯ ${prefix}nsfw_avatar
│⌯ ${prefix}nsfw_neko_gif
│⌯ ${prefix}orgy
│⌯ ${prefix}panties
│⌯ ${prefix}pat
│⌯ ${prefix}poke
│⌯ ${prefix}pussy
│⌯ ${prefix}pussy_jpg
│⌯ ${prefix}pwankg
│⌯ ${prefix}school
│⌯ ${prefix}slap
│⌯ ${prefix}smug
│⌯ ${prefix}solo
│⌯ ${prefix}solog
│⌯ ${prefix}spank
│⌯ ${prefix}tentacles
│⌯ ${prefix}thighs
│⌯ ${prefix}tickle
│⌯ ${prefix}tits
│⌯ ${prefix}trap
│⌯ ${prefix}uglybastard
│⌯ ${prefix}Uniform
│⌯ ${prefix}waifu
│⌯ ${prefix}wallpaper
│⌯ ${prefix}woof
│⌯ ${prefix}yuri
│⌯ ${prefix}zettai-ryouiki
│⌯ ${prefix}zettai
╰─⊸ *Wudy ⌕*`
}
const asupan = (prefix) => {
	return`*</ASUPAN MENU/>*

╭⌯ ${prefix}rikagusriani 
│⌯ ${prefix}ukhty 
│⌯ ${prefix}santuy 
│⌯ ${prefix}geayubi   
│⌯ ${prefix}bocil
│⌯ ${prefix}asupan
│⌯ ${prefix}chika 
│⌯ ${prefix}delvira 
│⌯ ${prefix}ayu   
│⌯ ${prefix}bunga
│⌯ ${prefix}aura
│⌯ ${prefix}nisa 
│⌯ ${prefix}ziva 
│⌯ ${prefix}yana   
│⌯ ${prefix}viona
│⌯ ${prefix}syania
│⌯ ${prefix}riri   
│⌯ ${prefix}syifa
│⌯ ${prefix}mama_gina
│⌯ ${prefix}alcakenya 
│⌯ ${prefix}mangayutri
╰─⊸ *Wudy ⌕*`
}
const telestiker = (prefix) => {
	return`*</STICKERS MENU/>*

╭⌯ ${prefix}awoawo
│⌯ ${prefix}benedict
│⌯ ${prefix}chat
│⌯ ${prefix}dbfly
│⌯ ${prefix}dino_kuning
│⌯ ${prefix}doge
│⌯ ${prefix}gojosatoru
│⌯ ${prefix}hope_boy
│⌯ ${prefix}jisoo
│⌯ ${prefix}kr_robot
│⌯ ${prefix}kucing
│⌯ ${prefix}lonte
│⌯ ${prefix}manusia_lidi
│⌯ ${prefix}menjamet
│⌯ ${prefix}meow
│⌯ ${prefix}nicholas
│⌯ ${prefix}patrick
│⌯ ${prefix}popoci
│⌯ ${prefix}sponsbob
│⌯ ${prefix}kawan_sponsbob
│⌯ ${prefix}tyni
╰─⊸ *Wudy ⌕*`
}
const image_effect_menu = (prefix) => {
	return`*</IMAGE EFFECT/>*

╭⌯ ${prefix}trigger
│⌯ ${prefix}gay
│⌯ ${prefix}glass
│⌯ ${prefix}passed
│⌯ ${prefix}jail
│⌯ ${prefix}comrade
│⌯ ${prefix}hijau
│⌯ ${prefix}biru
│⌯ ${prefix}greyscale
│⌯ ${prefix}invert
│⌯ ${prefix}invert_greyscale
│⌯ ${prefix}red
│⌯ ${prefix}blurple
│⌯ ${prefix}blurple2
│⌯ ${prefix}wasted
│⌯ ${prefix}pelangi
│⌯ ${prefix}wanted
│⌯ ${prefix}utatoo
│⌯ ${prefix}unsharpen
│⌯ ${prefix}thanos
│⌯ ${prefix}sniper
│⌯ ${prefix}sharpen
│⌯ ${prefix}scary
│⌯ ${prefix}rip
│⌯ ${prefix}rejected
│⌯ ${prefix}redple
│⌯ ${prefix}posterize
│⌯ ${prefix}ps4
│⌯ ${prefix}pixelize
│⌯ ${prefix}missionpassed
│⌯ ${prefix}moustache
│⌯ ${prefix}lookwhatkarenhave
│⌯ ${prefix}instagram
│⌯ ${prefix}glitch
│⌯ ${prefix}frame
│⌯ ${prefix}fire
│⌯ ${prefix}distort
│⌯ ${prefix}dictator
│⌯ ${prefix}deepfry
│⌯ ${prefix}ddungeon
│⌯ ${prefix}circle
│⌯ ${prefix}challenger
│⌯ ${prefix}burn
│⌯ ${prefix}brazzers
│⌯ ${prefix}beautiful
│⌯ ${prefix}sepia
╰─⊸ *Wudy ⌕*`
}
const coganmenu = (prefix) => {
	return`*</GACHA COGAN/>*

╭⌯ ${prefix}baekhyung  
│⌯ ${prefix}dohkyungsoo  
│⌯ ${prefix}huangzitao  
│⌯ ${prefix}jhope  
│⌯ ${prefix}jimin 
│⌯ ${prefix}jungkook 
│⌯ ${prefix}kimjondae  
│⌯ ${prefix}kimjong  
│⌯ ${prefix}kimjunmyeon  
│⌯ ${prefix}kimminseok 
│⌯ ${prefix}kimnanjoon  
│⌯ ${prefix}kimseok  
│⌯ ${prefix}kimtaehyung  
│⌯ ${prefix}luhan  
│⌯ ${prefix}ohsehun 
│⌯ ${prefix}parkchanyeol 
│⌯ ${prefix}suga  
│⌯ ${prefix}wuyifan  
╰─⊸ *Wudy ⌕*`
}

const quotesmenu = (prefix) => {
	return`*</QUOTES MENU/>*

╭⌯ ${prefix}katailham  
│⌯ ${prefix}dare   
│⌯ ${prefix}truth  
│⌯ ${prefix}katabijak_lucu   
│⌯ ${prefix}katacaklontong 
│⌯ ${prefix}artinama *nama*
│⌯ ${prefix}artimimpi *mimpi*
│⌯ ${prefix}artikata *kata*
│⌯ ${prefix}zodiak *text*
│⌯ ${prefix}katadilan  
╰─⊸ *Wudy ⌕*`
}
const shopmenu = (prefix) => {
	return`*</SHOP MENU/>*

╭⌯ ${prefix}shop  
│⌯ ${prefix}price  
│⌯ ${prefix}pubg   
│⌯ ${prefix}ml   
│⌯ ${prefix}ff   
│⌯ ${prefix}aov   
│⌯ ${prefix}cod  
│⌯ ${prefix}sausage   
│⌯ ${prefix}lol  
│⌯ ${prefix}valo  
╰─⊸ *Wudy ⌕*`
}
const animemenu = (prefix) => {
	return`*</ANIME MENU/>*

╭⌯ ${prefix}random
│⌯ ${prefix}topmanga *text*
│⌯ ${prefix}topanime *text*
│⌯ ${prefix}anna
│⌯ ${prefix}asuna_yuki 
│⌯ ${prefix}ayuzawa 
│⌯ ${prefix}chitoge 
│⌯ ${prefix}emilia
│⌯ ${prefix}erza 
│⌯ ${prefix}hinata 
│⌯ ${prefix}inori 
│⌯ ${prefix}kaga_kouko 
│⌯ ${prefix}kaori_miyazono 
│⌯ ${prefix}kotori_minami
│⌯ ${prefix}mikasa 
│⌯ ${prefix}mio_akiyama 
│⌯ ${prefix}mizore_sirayuki 
│⌯ ${prefix}nakiri_alice 
│⌯ ${prefix}naruto 
│⌯ ${prefix}riyas_gremori
│⌯ ${prefix}sakura 
│⌯ ${prefix}sasuke 
│⌯ ${prefix}sento_isuzu 
│⌯ ${prefix}shana 
│⌯ ${prefix}shiina 
│⌯ ${prefix}shinka
│⌯ ${prefix}winry
│⌯ ${prefix}yukino 
│⌯ ${prefix}yuzuki 
│⌯ ${prefix}akame
│⌯ ${prefix}wallanime *text*
│⌯ ${prefix}mikosiba
╰─⊸ *Wudy ⌕*`
}

exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.coganmenu = coganmenu
exports.image_effect = image_effect_menu
exports.quotesmenu = quotesmenu
exports.animemenu = animemenu
exports.shopmenu = shopmenu
