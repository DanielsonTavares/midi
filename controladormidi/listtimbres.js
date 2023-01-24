var  listpianos = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-0" value="Pf001 - 88StageGrand">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-1" value="Pf002 - 88StgGrand 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-2" value="Pf003 - 88StgGrand 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-3" value="Pf004 - JUNO Piano 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-4" value="Pf005 - Rich Grand 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-5" value="Pf006 - Rich Grand 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-6" value="Pf007 - Piano+Str 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-7" value="Pf008 - Fairy Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-8" value="Pf009 - Pop Piano 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-9" value="Pf010 - ConcertGrand">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-10" value="Pf011 - Warm Tune">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-11" value="Pf012 - Hall Concert">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-12" value="Pf013 - Mellow Tune">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-13" value="Pf014 - Mono Piano 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-14" value="Pf015 - Piano+Pad 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-15" value="Pf016 - Piano+Pad 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-16" value="Pf017 - Piano+Vox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-17" value="Pf018 - Piano+Str 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-18" value="Pf019 - Layers">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-19" value="Pf020 - Grand Hall">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-20" value="Pf021 - Cicada Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-21" value="Pf022 - Rapsody">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-22" value="Pf023 - Pop Piano 4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-23" value="Pf024 - Radio Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-24" value="Pf025 - Rokkin' pF">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-25" value="Pf026 - JD Piano 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-26" value="Pf027 - JD Piano 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-27" value="Pf028 - JD Piano&Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-28" value="Pf029 - SA Dance Pno">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-29" value="Pf030 - E-Grand">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-30" value="Pf031 - Back E-Grand">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-31" value="Pf032 - Dark Grand">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-32" value="Pf033 - Grand+FM">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-33" value="Pf034 - Blend Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-34" value="Pf035 - Piano Oz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-35" value="Pf036 - Meditate Pno">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-36" value="Pf037 - FX Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-37" value="Pf038 - AmbientPiano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-38" value="Pf039 - Pure EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-39" value="Pf040 - Pure EP Trem">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-40" value="Pf041 - Stage Phazer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-41" value="Pf042 - SA EPiano 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-42" value="Pf043 - FM EP 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-43" value="Pf044 - Pure Wurly 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-44" value="Pf045 - Wurly Trem 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-45" value="Pf046 - VelSpdWurly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-46" value="Pf047 - Phase EP 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-47" value="Pf048 - Phase Stg EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-48" value="Pf049 - Flanger EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-49" value="Pf050 - TEL Stage EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-50" value="Pf051 - Vintage EP 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-51" value="Pf052 - Stage EP 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-52" value="Pf053 - StageCabinet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-53" value="Pf054 - StageEP Trem">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-54" value="Pf055 - EP Trem 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-55" value="Pf056 - EP Trem 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-56" value="Pf057 - EP Chorus 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-57" value="Pf058 - EP Chorus 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-58" value="Pf059 - Phase EP 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-59" value="Pf060 - 80s EP 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-60" value="Pf061 - Dyno EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-61" value="Pf062 - E.Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-62" value="Pf063 - Back2the60s">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-63" value="Pf064 - Tine EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-64" value="Pf065 - LEO EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-65" value="Pf066 - SA EPiano 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-66" value="Pf067 - SA EP Trem">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-67" value="Pf068 - FM EP mix">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-68" value="Pf069 - FM-777">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-69" value="Pf070 - FM EP 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-70" value="Pf071 - FM EP 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-71" value="Pf072 - FM EP 4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-72" value="Pf073 - Pure Wurly 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-73" value="Pf074 - EP Layer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-74" value="Pf075 - 80s EP 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-75" value="Pf076 - Pop EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-76" value="Pf077 - EP Bell 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-77" value="Pf078 - LonesomeRoad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-78" value="Pf079 - Ageâ€™nâ€™Tines">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-79" value="Pf080 - Brill TremEP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-80" value="Pf081 - Crystal EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-81" value="Pf082 - Vintage Tine">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-82" value="Pf083 - Mk2 Stg phsr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-83" value="Pf084 - Celestial EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-84" value="Pf085 - Psycho EP 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-85" value="Pf086 - TineEP+Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-86" value="Pf087 - Wurly+Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-87" value="Pf088 - Dreaming EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-88" value="Pf089 - Balladeer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-89" value="Pf090 - Remember">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-90" value="Pf091 - Vibe EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-91" value="Pf092 - sin(EP)">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-92" value="Pf093 - Fonky Fonky">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-93" value="Pf094 - FM EPad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-94" value="Pf095 - EP Stack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-1" value="Pf096 - Piano 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Pf097 - Piano 1w">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Pf098 - European Pf">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-2" value="Pf099 - Piano 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Pf100 - Piano 2w">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-3" value="Pf101 - Piano 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Pf102 - Piano 3w">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-4" value="Pf103 - Honky-tonk">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Pf104 - Honky-tonk 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-5" value="Pf105 - E.Piano 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Pf106 - St.Soft EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Pf107 - FM+SA EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Pf108 - Wurly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-6" value="Pf109 - E.Piano 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Pf110 - Detuned EP 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Pf111 - St.FM EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Pf112 - EP Legend">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-4-0" value="Pf113 - EP Phase">

`

var  listkeys = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-95" value="Ky001 - HardRockORG1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-96" value="Ky002 - HardRockORG2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-97" value="Ky003 - GT Org Stack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-98" value="Ky004 - GT Org Std">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-99" value="Ky005 - GT Org Clean">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-100" value="Ky006 - Perc Organ 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-101" value="Ky007 - FullStop Org">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-102" value="Ky008 - FullDraw Org">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-103" value="Ky009 - StakDraw Org">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-104" value="Ky010 - JUNO PercOrg">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-105" value="Ky011 - VKHold4Speed">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-106" value="Ky012 - Pop Organ 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-107" value="Ky013 - B Org 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-108" value="Ky014 - D.Bar Org 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-109" value="Ky015 - D.Bar Org 6">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-110" value="Ky016 - D.Bar Org 7">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-111" value="Ky017 - D.Bar Org 8">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-112" value="Ky018 - Perc Organ 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-113" value="Ky019 - X Perc Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-114" value="Ky020 - RhythmnB">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-115" value="Ky021 - Phono Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-116" value="Ky022 - Rochno Org">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-117" value="Ky023 - R&B Organ 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-118" value="Ky024 - R&B Organ 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-119" value="Ky025 - SuperDistOrg">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-120" value="Ky026 - SuperDist Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-121" value="Ky027 - Dist Bee">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-122" value="Ky028 - LoFi PercOrg">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-123" value="Ky029 - 60s Org 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-124" value="Ky030 - Smoky Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-125" value="Ky031 - Soap Opera">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-126" value="Ky032 - Crummy Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-127" value="Ky033 - Aqua Org/Pno">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-0" value="Ky034 - Positive Org">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-1" value="Ky035 - Chapel Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-2" value="Ky036 - Cathedral">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-3" value="Ky037 - Grand Pipe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-4" value="Ky038 - Pipe Organ 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-5" value="Ky039 - Masked Opera">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-6" value="Ky040 - Clavi 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-7" value="Ky041 - Phase Clavi1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-8" value="Ky042 - Phase Clavi2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-9" value="Ky043 - AnalogClavi1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-10" value="Ky044 - Pulse Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-11" value="Ky045 - VintageClavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-12" value="Ky046 - Cutter Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-13" value="Ky047 - Over-D6">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-14" value="Ky048 - Cell Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-15" value="Ky049 - Funky D">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-16" value="Ky050 - Funky Line">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-17" value="Ky051 - PWM Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-18" value="Ky052 - Biting Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-19" value="Ky053 - Reso Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-20" value="Ky054 - BPF Clavi Ph">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-21" value="Ky055 - Snappy Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-22" value="Ky056 - Harpsy Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-23" value="Ky057 - JUNO Harpsi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-24" value="Ky058 - Amadeus">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-25" value="Ky059 - Music Bells">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-26" value="Ky060 - D50Fantasia1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-27" value="Ky061 - Frends Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-28" value="Ky062 - FM Syn Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-29" value="Ky063 - Dreaming Box">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-30" value="Ky064 - Himalaya Ice">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-31" value="Ky065 - Wine Glass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-32" value="Ky066 - MuBox Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-33" value="Ky067 - Pop Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-34" value="Ky068 - Candy Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-35" value="Ky069 - FM Heaven">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-36" value="Ky070 - JUNO Celesta">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-37" value="Ky071 - Celesta Trem">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-38" value="Ky072 - Glocken">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-39" value="Ky073 - Music Box 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-40" value="Ky074 - Kalimbells">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-41" value="Ky075 - JUNO Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-42" value="Ky076 - Grained Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-43" value="Ky077 - Chime">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-44" value="Ky078 - Bell Ring">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-45" value="Ky079 - Tubular Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-46" value="Ky080 - 5th Key">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-47" value="Ky081 - Bell Monitor">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-48" value="Ky082 - TubyRuesday">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-49" value="Ky083 - Step Ice">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-50" value="Ky084 - Vibe Trem 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-51" value="Ky085 - Pure Vibe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-52" value="Ky086 - Ringy Vibes">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-53" value="Ky087 - Airie Vibez">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-54" value="Ky088 - JUNO Marimba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-55" value="Ky089 - Soft Marimba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-56" value="Ky090 - FM Wood">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-57" value="Ky091 - Xylo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-58" value="Ky092 - Ethno Keys">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-59" value="Ky093 - Synergy MLT">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-60" value="Ky094 - JUNO SteelDr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-61" value="Ky095 - 50'SteelDrms">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-62" value="Ky096 - Xylosizer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-63" value="Ky097 - AirPluck">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-64" value="Ky098 - Toy Box">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-65" value="Ky099 - Icy Keys">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-66" value="Ky100 - Squeeze Me!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-67" value="Ky101 - Vodkakordion">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-68" value="Ky102 - Guinguette">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-69" value="Ky103 - JUNO Harm">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-70" value="Ky104 - Blues harp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-71" value="Ky105 - Green Bullet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-7" value="Ky106 - Harpsichord">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky107 - Coupled Hps.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Ky108 - Harpsi.w">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Ky109 - Harpsi.o">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-8" value="Ky110 - Clav.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky111 - Pulse Clav">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-9" value="Ky112 - Celesta">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-10" value="Ky113 - Glockenspiel">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-11" value="Ky114 - Music Box">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-12" value="Ky115 - Vibraphone">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky116 - Vibraphone w">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-13" value="Ky117 - Marimba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky118 - Marimba w">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-14" value="Ky119 - Xylophone">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-15" value="Ky120 - Tubular-bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky121 - Church Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Ky122 - Carillon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-17" value="Ky123 - Organ 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky124 - Trem. Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Ky125 - 60s Organ 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Ky126 - 70s E.Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-18" value="Ky127 - Organ 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky128 - Chorus Or.2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Ky129 - Perc. Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-19" value="Ky130 - Organ 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-20" value="Ky131 - Church Org.1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky132 - Church Org.2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Ky133 - Church Org.3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-21" value="Ky134 - Reed Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky135 - Puff Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-22" value="Ky136 - Accordion Fr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky137 - Accordion It">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-23" value="Ky138 - Harmonica">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-24" value="Ky139 - Bandoneon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-99" value="Ky140 - Crystal">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Ky141 - Syn Mallet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-113" value="Ky142 - Tinkle Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-115" value="Ky143 - Steel Drums">

`

var liststrings = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-72" value="St001 - String Ens">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-73" value="St002 - JUNO Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-74" value="St003 - Chamber Str1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-75" value="St004 - Chamber Str2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-76" value="St005 - Staccato">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-77" value="St006 - Pizzicato">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-78" value="St007 - Pizz/Stacc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-79" value="St008 - Sahara Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-80" value="St009 - Random Mood">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-81" value="St010 - X Hall Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-82" value="St011 - DelayQuartet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-83" value="St012 - Pop Str 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-84" value="St013 - Pop Str 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-85" value="St014 - WhiteStrings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-86" value="St015 - JV Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-87" value="St016 - Marcato">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-88" value="St017 - Strings 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-89" value="St018 - Strings 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-90" value="St019 - Stringz 101">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-91" value="St020 - Crossed Bows">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-92" value="St021 - Small Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-93" value="St022 - Warm Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-94" value="St023 - DynaStrSect1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-95" value="St024 - Full Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-96" value="St025 - X StrSection">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-97" value="St026 - Oct Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-98" value="St027 - Strings 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-99" value="St028 - Monkey Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-100" value="St029 - Hybrid Str 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-101" value="St030 - Biggie Bows">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-102" value="St031 - Str Stacc mp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-103" value="St032 - So Staccato">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-104" value="St033 - Long/Stacc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-105" value="St034 - Pizz/Long">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-106" value="St035 - Vls PizzHall">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-107" value="St036 - DelicatePizz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-108" value="St037 - Orch Pizz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-109" value="St038 - BrightViolin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-110" value="St039 - Bright Cello">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-111" value="St040 - Gang Strangs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-112" value="St041 - Clustered!?!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-113" value="St042 - Movie Scene">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-114" value="St043 - Mellow Tron">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-115" value="St044 - Tronic Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-116" value="St045 - Wind & Str 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-117" value="St046 - Farewell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-118" value="St047 - Orch & Horns">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-119" value="St048 - Soft Orch 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-120" value="St049 - Henry IX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-121" value="St050 - Ending Scene">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-122" value="St051 - Symphonika">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-123" value="St052 - Cheezy Movie">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-124" value="St053 - Philly Hit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-125" value="St054 - Smear Hit 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-126" value="St055 - Good Old Hit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-65-127" value="St056 - Mix Hit 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-0" value="St057 - Mix Hit 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-1" value="St058 - Lo-Fi Hit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-2" value="St059 - 2ble Action">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-3" value="St060 - In da Cave">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-4" value="St061 - Housechord">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-5" value="St062 - Mod Chord">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-6" value="St063 - Dance Steam">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-7" value="St064 - JUNO Nylon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-8" value="St065 - Comp Stl Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-9" value="St066 - Pre Mass Hum">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-10" value="St067 - Uncle Martin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-11" value="St068 - 12str Guitar">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-12" value="St069 - Nylon Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-13" value="St070 - SoftNyln Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-14" value="St071 - Wet Nyln Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-15" value="St072 - Bright Nylon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-16" value="St073 - Pure Nylon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-17" value="St074 - Nylon Delay">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-18" value="St075 - Thick Steel">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-19" value="St076 - Wide Ac Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-20" value="St077 - So good !">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-21" value="St078 - Jazz Guitar1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-22" value="St079 - Jazz Guitar2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-23" value="St080 - DynoJazz Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-24" value="St081 - Clean Gtr 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-25" value="St082 - Pick Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-26" value="St083 - Strat Gtr 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-27" value="St084 - Funk Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-28" value="St085 - StratSeqnce">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-29" value="St086 - Plug n Gig1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-30" value="St087 - Plug n Gig2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-31" value="St088 - Kinda Kurt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-32" value="St089 - Nice Oct Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-33" value="St090 - Crimson Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-34" value="St091 - Plugged!!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-35" value="St092 - Punker 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-36" value="St093 - Rockin Dly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-37" value="St094 - Loud Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-38" value="St095 - Searing Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-39" value="St096 - Searing COSM">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-40" value="St097 - OctSearingGt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-41" value="St098 - Dist.Fingerz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-42" value="St099 - Fuzz Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-43" value="St100 - Crunch Twin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-44" value="St101 - Larsen">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-45" value="St102 - Trem-o-Vibe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-46" value="St103 - Touch Drive">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-47" value="St104 - Chunk Atk">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-48" value="St105 - LP Dist">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-49" value="St106 - Hurtling Gtr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-50" value="St107 - Power Chord">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-51" value="St108 - Punker 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-25" value="St109 - Nylon-str.Gt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St110 - Ukulele">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St111 - Nylon Gt.o">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="St112 - Nylon Gt.2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-26" value="St113 - Steel-str.Gt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St114 - 12-str.Gt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St115 - Mandolin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="St116 - Steel + Body">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-27" value="St117 - Jazz Gt.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St118 - Pedal Steel">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-28" value="St119 - Clean Gt.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St120 - Chorus Gt.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St121 - Mid Tone GTR">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-29" value="St122 - Muted Gt.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St123 - Funk Pop">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St124 - Funk Gt.2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="St125 - Jazz Man">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-30" value="St126 - Overdrive Gt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St127 - Guitar Pinch">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-31" value="St128 - DistortionGt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St129 - Feedback Gt.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St130 - Dist Rtm GTR">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-32" value="St131 - Gt.Harmonics">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St132 - Gt. Feedback">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-41" value="St133 - Violin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St134 - Slow Violin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-42" value="St135 - Viola">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-43" value="St136 - Cello">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-44" value="St137 - Contrabass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-45" value="St138 - Tremolo Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-46" value="St139 - PizzicatoStr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-49" value="St140 - Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St141 - Orchestra">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St142 - 60s Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-50" value="St143 - Slow Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-51" value="St144 - Syn.Strings1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St145 - Syn.Strings3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-56" value="St146 - OrchestraHit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St147 - Bass Hit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St148 - 6th Hit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="St149 - Euro Hit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-100" value="St150 - Atmosphere">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-111" value="St151 - Fiddle">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-121" value="St152 - Gt.FretNoise">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="St153 - Gt.Cut Noise">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="St154 - String Slap">

`

var  listbrass = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-52" value="Bs001 - Bright Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-53" value="Bs002 - BreakOut Brs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-54" value="Bs003 - StackTp Sect">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-55" value="Bs004 - Tb Section">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-56" value="Bs005 - TpTb Sect.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-57" value="Bs006 - Brass Sect 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-58" value="Bs007 - Brass Sect 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-59" value="Bs008 - Brass & Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-60" value="Bs009 - Simple Tutti">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-61" value="Bs010 - Tpts & Tmbs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-62" value="Bs011 - BrassPartOut">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-63" value="Bs012 - Full sForza">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-64" value="Bs013 - Stereo Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-65" value="Bs014 - F.Horns Sect">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-66" value="Bs015 - Solo Tp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-67" value="Bs016 - Ambi Tp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-68" value="Bs017 - Horn Chops">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-69" value="Bs018 - Mute Tp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-70" value="Bs019 - Harmon Mute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-71" value="Bs020 - Soft Tb">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-72" value="Bs021 - Solo Tb">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-73" value="Bs022 - Solo Bone">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-74" value="Bs023 - Flugel Horn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-75" value="Bs024 - Spit Flugel">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-76" value="Bs025 - XP Horn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-77" value="Bs026 - Grande Tuba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-78" value="Bs027 - JUNO Tuba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-79" value="Bs028 - 80s Brass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-80" value="Bs029 - Wide Syn Brs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-81" value="Bs030 - Poly Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-82" value="Bs031 - JP8000 Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-83" value="Bs032 - JUNO Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-84" value="Bs033 - DetuneSawBrs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-85" value="Bs034 - J-Pop Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-86" value="Bs035 - 80s Brass 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-87" value="Bs036 - 80s Brass 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-88" value="Bs037 - 80s Brass 4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-89" value="Bs038 - 80s Brass 5">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-90" value="Bs039 - Ana Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-91" value="Bs040 - Soft Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-92" value="Bs041 - Ox Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-93" value="Bs042 - Syn Brass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-94" value="Bs043 - Syn Brass 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-95" value="Bs044 - Xpand Brass1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-96" value="Bs045 - Xpand Brass2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-97" value="Bs046 - Super Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-98" value="Bs047 - SoftSynBrass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-99" value="Bs048 - Windy Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-100" value="Bs049 - Silky JP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-101" value="Bs050 - Silk Brs Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-102" value="Bs051 - X-Saw Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-103" value="Bs052 - Cheesy Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-104" value="Bs053 - Dual Saw Brs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-105" value="Bs054 - JUNO-106 Brs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-106" value="Bs055 - BreakOut Key">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-107" value="Bs056 - Stacked Brs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-108" value="Bs057 - Sax Sect. 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-109" value="Bs058 - Horny Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-110" value="Bs059 - JUNO Sop Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-111" value="Bs060 - Solo Sop Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-112" value="Bs061 - JUNO AltoSax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-113" value="Bs062 - AltoLead Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-114" value="Bs063 - FXM Alto Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-115" value="Bs064 - XP TnrBrethy">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-116" value="Bs065 - JUNO Tnr Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-117" value="Bs066 - Fat TenorSax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-118" value="Bs067 - JUNO BariSax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-119" value="Bs068 - JUNO Flute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-120" value="Bs069 - JUNO Piccolo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-121" value="Bs070 - Clarence.net">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-122" value="Bs071 - JUNO Oboe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-123" value="Bs072 - JUNO E.Horn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-124" value="Bs073 - JUNO Bassoon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-125" value="Bs074 - Good Old Day">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-126" value="Bs075 - WindWood">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-66-127" value="Bs076 - Ac Bass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-0" value="Bs077 - Ac Bass 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-1" value="Bs078 - Ulti Ac Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-2" value="Bs079 - Downright Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-3" value="Bs080 - Cmpd Fng Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-4" value="Bs081 - FingerMaster">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-5" value="Bs082 - Return2Base!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-6" value="Bs083 - Finger Bs 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-7" value="Bs084 - Finger Bs 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-8" value="Bs085 - Finger Bs 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-9" value="Bs086 - Fretless Bs1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-10" value="Bs087 - RichFretless">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-11" value="Bs088 - NewAge Frtls">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-12" value="Bs089 - P-Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-13" value="Bs090 - Roomy Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-14" value="Bs091 - All Round Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-15" value="Bs092 - Pick Bass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-16" value="Bs093 - Thumb Up!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-17" value="Bs094 - Tubby Mute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-18" value="Bs095 - Chicken Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-19" value="Bs096 - Snug Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-20" value="Bs097 - Chorus Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-21" value="Bs098 - A Big Pick">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-22" value="Bs099 - Slap Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-23" value="Bs100 - Slap w/Fx">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-24" value="Bs101 - Basement">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-25" value="Bs102 - Low Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-26" value="Bs103 - Foundation">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-27" value="Bs104 - SH Sawtooth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-28" value="Bs105 - Fat RubberBs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-29" value="Bs106 - Garage Bass1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-30" value="Bs107 - Reso SynBs 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-31" value="Bs108 - TB Dist Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-32" value="Bs109 - JUNO Acid Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-33" value="Bs110 - Monster Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-34" value="Bs111 - Oil Can Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-35" value="Bs112 - Pedal Syn Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-36" value="Bs113 - Big Mini 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-37" value="Bs114 - SH-2 Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-38" value="Bs115 - SH-101 Bs 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-39" value="Bs116 - R&B Bass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-40" value="Bs117 - Moogy Bass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-41" value="Bs118 - JUNO Reso">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-42" value="Bs119 - Alpha SynBs1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-43" value="Bs120 - SH Square">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-44" value="Bs121 - Pedal Square">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-45" value="Bs122 - Doze Bass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-46" value="Bs123 - VirtualRnBs1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-47" value="Bs124 - Saw&MG Bass1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-48" value="Bs125 - Square Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-49" value="Bs126 - Bs MG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-50" value="Bs127 - Bs Reso">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-51" value="Bs128 - Bs SH">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-52" value="Bs129 - Bs TB">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-53" value="Bs130 - Bs MC">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-54" value="Bs131 - Bs Pedal">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-55" value="Bs132 - Bs Release">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-56" value="Bs133 - Bs Cheeze">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-57" value="Bs134 - Mini Like!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-58" value="Bs135 - MC-404 Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-59" value="Bs136 - Soft SynBass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-60" value="Bs137 - JUNO-106 Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-61" value="Bs138 - Smooth Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-62" value="Bs139 - Flat Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-63" value="Bs140 - Punch MG 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-64" value="Bs141 - Electro Rubb">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-65" value="Bs142 - Enorjizor">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-66" value="Bs143 - LowFat Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-67" value="Bs144 - DCO Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-68" value="Bs145 - MG+SubOsc Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-69" value="Bs146 - Not a Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-70" value="Bs147 - SH-1 Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-71" value="Bs148 - SH-101 Bs 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-72" value="Bs149 - Punch MG 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-73" value="Bs150 - MKS-50 SynBs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-74" value="Bs151 - Gashed Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-75" value="Bs152 - Q Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-76" value="Bs153 - Super-G DX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-77" value="Bs154 - Kickin Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-78" value="Bs155 - OilDrum Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-79" value="Bs156 - Dust Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-80" value="Bs157 - Glide-iator">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-81" value="Bs158 - Acid Punch">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-82" value="Bs159 - Unison Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-83" value="Bs160 - Detune Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-84" value="Bs161 - Lo Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-85" value="Bs162 - Sub Sonic">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-86" value="Bs163 - Jungle Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-87" value="Bs164 - R&B Bass 7">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-88" value="Bs165 - Simply Basic">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-89" value="Bs166 - Beepin Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-90" value="Bs167 - MC-TB Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-91" value="Bs168 - Acdg Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-92" value="Bs169 - Loco Voco">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-93" value="Bs170 - Unplug it!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-94" value="Bs171 - S&H Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-95" value="Bs172 - Destroyed Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-96" value="Bs173 - Lo-Fi TB">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-97" value="Bs174 - Drop Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-98" value="Bs175 - Muffled MG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-99" value="Bs176 - Intrusive Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-100" value="Bs177 - TransistorBs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-101" value="Bs178 - JUNO-60 Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-102" value="Bs179 - Storm Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-103" value="Bs180 - Alpha ResoBs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-104" value="Bs181 - SH-101 Vibe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-105" value="Bs182 - Fazee Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-106" value="Bs183 - Hi-Energy Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-107" value="Bs184 - Low Nz Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-33" value="Bs185 - Acoustic Bs.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-34" value="Bs186 - Fingered Bs.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs187 - Finger Slap">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-35" value="Bs188 - Picked Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-36" value="Bs189 - Fretless Bs.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-37" value="Bs190 - Slap Bass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-38" value="Bs191 - Slap Bass 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-39" value="Bs192 - Synth Bass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs193 - SynthBass101">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Bs194 - Acid Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Bs195 - Clavi Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-4-0" value="Bs196 - Hammer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-40" value="Bs197 - Synth Bass 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs198 - Beef FM Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Bs199 - RubberBass 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Bs200 - Attack Pulse">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-57" value="Bs201 - Trumpet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs202 - Dark Trumpet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-58" value="Bs203 - Trombone">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs204 - Trombone 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Bs205 - Bright Tb">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-59" value="Bs206 - Tuba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-60" value="Bs207 - MutedTrumpet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs208 - MuteTrumpet2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-61" value="Bs209 - French Horns">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs210 - Fr.Horn 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-62" value="Bs211 - Brass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs212 - Brass 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-63" value="Bs213 - Synth Brass1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs214 - JP Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Bs215 - Oct SynBrass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Bs216 - Jump Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-64" value="Bs217 - Synth Brass2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Bs218 - SynBrass sfz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Bs219 - Velo Brass 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-65" value="Bs220 - Soprano Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-66" value="Bs221 - Alto Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-67" value="Bs222 - Tenor Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-68" value="Bs223 - Baritone Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-69" value="Bs224 - Oboe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-70" value="Bs225 - English Horn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-71" value="Bs226 - Bassoon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-72" value="Bs227 - Clarinet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-73" value="Bs228 - Piccolo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-74" value="Bs229 - Flute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-75" value="Bs230 - Recorder">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-76" value="Bs231 - Pan Flute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-77" value="Bs232 - Bottle Blow">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-79" value="Bs233 - Whistle">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-80" value="Bs234 - Ocarina">

`

var listsynth = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-108" value="Sy001 - Porta Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-109" value="Sy002 - Porta Lead 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-110" value="Sy003 - Solo Saw Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-111" value="Sy004 - Wind Syn Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-112" value="Sy005 - GR Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-113" value="Sy006 - Sync Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-114" value="Sy007 - JupiterLead1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-115" value="Sy008 - Alpha Spit 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-116" value="Sy009 - Pro Fat Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-117" value="Sy010 - Saw Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-118" value="Sy011 - Saw Lead 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-119" value="Sy012 - Saw Lead 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-120" value="Sy013 - Saw Lead 4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-121" value="Sy014 - Saw Lead 5">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-122" value="Sy015 - Saw Lead 6">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-123" value="Sy016 - JUNO Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-124" value="Sy017 - Jump Poly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-125" value="Sy018 - Octa Juice">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-126" value="Sy019 - Octa Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-67-127" value="Sy020 - Octa Sync 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-0" value="Sy021 - Hot Sync">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-1" value="Sy022 - Hot Coffee">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-2" value="Sy023 - Phase Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-3" value="Sy024 - Waspy Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-4" value="Sy025 - Follow Me 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-5" value="Sy026 - Classic Ld 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-6" value="Sy027 - Digi Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-7" value="Sy028 - DC Triangle">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-8" value="Sy029 - Sqr-Seqence">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-9" value="Sy030 - Pure Square">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-10" value="Sy031 - Griggley">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-11" value="Sy032 - Legato Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-12" value="Sy033 - Dual Profs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-13" value="Sy034 - Gwyo Press">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-14" value="Sy035 - Q DualSaws">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-15" value="Sy036 - Mogulator Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-16" value="Sy037 - DirtyVoltage">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-17" value="Sy038 - Clean?">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-18" value="Sy039 - Distortion">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-19" value="Sy040 - Syn Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-20" value="Sy041 - Syn Lead 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-21" value="Sy042 - X-Sink Delay">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-22" value="Sy043 - Destroyed Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-23" value="Sy044 - Synchro Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-24" value="Sy045 - Sync Tank">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-25" value="Sy046 - Sync Ld Mono">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-26" value="Sy047 - SyncModulate">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-27" value="Sy048 - 2krazy Brite">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-28" value="Sy049 - Distorted MG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-29" value="Sy050 - Dist Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-30" value="Sy051 - Ringmod Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-31" value="Sy052 - BodyElectric">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-32" value="Sy053 - SonicVampire">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-33" value="Sy054 - Stimulation">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-34" value="Sy055 - Wire Sync">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-35" value="Sy056 - Epic Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-36" value="Sy057 - Bag Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-37" value="Sy058 - Wezcoast">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-38" value="Sy059 - HyperJupiter">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-39" value="Sy060 - Vintagolizer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-40" value="Sy061 - C64 Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-41" value="Sy062 - 303 NRG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-42" value="Sy063 - Feat Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-43" value="Sy064 - Cell SquLead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-44" value="Sy065 - Theramax 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-45" value="Sy066 - Pulse Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-46" value="Sy067 - Mid Saw Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-47" value="Sy068 - On Air">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-48" value="Sy069 - Tri Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-49" value="Sy070 - Sine Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-50" value="Sy071 - Sqr Lead 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-51" value="Sy072 - SH Sqr Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-52" value="Sy073 - Sinetific">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-53" value="Sy074 - JUNO Soft Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-54" value="Sy075 - Spooky Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-55" value="Sy076 - PeakArpSine">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-56" value="Sy077 - Howards Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-57" value="Sy078 - SoloNzPeaker">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-58" value="Sy079 - R&B Tri Ld 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-59" value="Sy080 - R&B Tri Ld 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-60" value="Sy081 - JupiterLead2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-61" value="Sy082 - JupiterLead3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-62" value="Sy083 - Dig-n-Duke">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-63" value="Sy084 - Sqr Diamond">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-64" value="Sy085 - Soft Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-65" value="Sy086 - Soft Saw Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-66" value="Sy087 - X-Pulse Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-67" value="Sy088 - Mild 2-SawLd">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-68" value="Sy089 - Mew Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-69" value="Sy090 - Shy Soloist">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-70" value="Sy091 - Theramax 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-71" value="Sy092 - Therasqu">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-72" value="Sy093 - GR Lead 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-73" value="Sy094 - SH-2 Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-74" value="Sy095 - Jucy Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-75" value="Sy096 - Reso Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-76" value="Sy097 - Modulated Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-77" value="Sy098 - Synthi Fizz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-78" value="Sy099 - Pulstar Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-79" value="Sy100 - Naked Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-80" value="Sy101 - JP Saw Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-81" value="Sy102 - Violin Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-82" value="Sy103 - Mod Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-83" value="Sy104 - Tristar">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-84" value="Sy105 - Chubby Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-85" value="Sy106 - Sneaky Leady">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-86" value="Sy107 - Shaku Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-87" value="Sy108 - Legato Tkno">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-88" value="Sy109 - Reso Saw Ld">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-89" value="Sy110 - SliCed Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-90" value="Sy111 - Mini Growl">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-91" value="Sy112 - Evangelized">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-92" value="Sy113 - Air Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-93" value="Sy114 - Stacc Heaven">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-94" value="Sy115 - Sugar Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-95" value="Sy116 - Synth Key">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-96" value="Sy117 - Frontier Syn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-97" value="Sy118 - Summer Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-98" value="Sy119 - JUNO Poly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-99" value="Sy120 - SuperSawSlow">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-100" value="Sy121 - Cue Tip">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-101" value="Sy122 - Waspy Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-102" value="Sy123 - Europe Xpres">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-103" value="Sy124 - Squeepy">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-104" value="Sy125 - DOC Stack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-105" value="Sy126 - Sweep Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-106" value="Sy127 - 80s Saws 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-107" value="Sy128 - Digitaless">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-108" value="Sy129 - Flip Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-109" value="Sy130 - Short Detune">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-110" value="Sy131 - forSequence">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-111" value="Sy132 - Memory Pluck">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-112" value="Sy133 - Metalic Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-113" value="Sy134 - Aqua">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-114" value="Sy135 - Round SQR">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-115" value="Sy136 - Big Planet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-116" value="Sy137 - Wet Atax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-117" value="Sy138 - Houze Clavi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-118" value="Sy139 - Saw Stack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-119" value="Sy140 - Frgile Saws">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-120" value="Sy141 - Steamed Sawz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-121" value="Sy142 - RAVtune">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-122" value="Sy143 - Bustranza">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-123" value="Sy144 - Digi Saw Syn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-124" value="Sy145 - JP OctAttack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-125" value="Sy146 - Oct Unison">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-126" value="Sy147 - Xtatic">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-68-127" value="Sy148 - Dirty Combo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-0" value="Sy149 - FMs Attack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-1" value="Sy150 - Digi-vox Syn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-2" value="Sy151 - Fairy Factor">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-3" value="Sy152 - Tempest">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-4" value="Sy153 - X-Racer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-5" value="Sy154 - TB Booster">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-6" value="Sy155 - Syn-Orch/Mod">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-7" value="Sy156 - Pressyn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-8" value="Sy157 - High Five">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-9" value="Sy158 - Magnetic 5th">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-10" value="Sy159 - DigimaX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-11" value="Sy160 - Exhale">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-12" value="Sy161 - X-panda">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-13" value="Sy162 - Saw Keystep">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-14" value="Sy163 - Blue Meanie">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-15" value="Sy164 - 4mant Cycle">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-16" value="Sy165 - Modular">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-17" value="Sy166 - Analog Dream">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-18" value="Sy167 - DCO Bell Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-19" value="Sy168 - Cell Fanta">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-20" value="Sy169 - JUNO 5th">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-21" value="Sy170 - DoubleBubble">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-22" value="Sy171 - JUNO-D Maj7">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-23" value="Sy172 - Sweet House">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-24" value="Sy173 - Periscope">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-25" value="Sy174 - 5th Voice">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-26" value="Sy175 - HPF Sweep">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-27" value="Sy176 - BPF Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-28" value="Sy177 - Moon Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-29" value="Sy178 - DelyResoSaws">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-30" value="Sy179 - JUNO Trance1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-31" value="Sy180 - Trancy Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-32" value="Sy181 - Cell Trance">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-33" value="Sy182 - Trancy X">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-34" value="Sy183 - JUNO Trance2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-35" value="Sy184 - R-Trance">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-36" value="Sy185 - Braatz...">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-37" value="Sy186 - AllinOneRiff">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-38" value="Sy187 - YZ Again">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-39" value="Sy188 - Flazzy Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-40" value="Sy189 - Coffee Bee">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-41" value="Sy190 - TB-Sequence">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-42" value="Sy191 - SC-303">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-43" value="Sy192 - Dance Saws">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-44" value="Sy193 - AluminmWires">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-45" value="Sy194 - Fred&Barney">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-46" value="Sy195 - Electrostars">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-47" value="Sy196 - LoFiSequence">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-48" value="Sy197 - MelodicDrums">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-49" value="Sy198 - Monkey Arpg">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-50" value="Sy199 - TB Wah">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-51" value="Sy200 - Waving TB303">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-52" value="Sy201 - Digi Seq">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-53" value="Sy202 - Seq Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-54" value="Sy203 - Reso Seq Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-55" value="Sy204 - DetuneSeqSaw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-56" value="Sy205 - Technotribe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-57" value="Sy206 - Teethy Grit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-58" value="Sy207 - Repertition">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-59" value="Sy208 - Killerbeez">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-60" value="Sy209 - Acid Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-61" value="Sy210 - Tranceformer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-62" value="Sy211 - Anadroid">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-63" value="Sy212 - Shroomy">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-64" value="Sy213 - Noize R us">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-65" value="Sy214 - Beep Melodie">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-66" value="Sy215 - Morpher">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-67" value="Sy216 - Power Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-68" value="Sy217 - Hoover Again">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-69" value="Sy218 - Alpha Said..">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-70" value="Sy219 - Ravers Awake">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-71" value="Sy220 - Tekno Gargle">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-72" value="Sy221 - Tranceiver">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-73" value="Sy222 - Techno Dream">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-74" value="Sy223 - Techno Pizz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-75" value="Sy224 - VirtualHuman">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-76" value="Sy225 - Strobot">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-77" value="Sy226 - Strobe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-78" value="Sy227 - Strobe X">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-79" value="Sy228 - Mr. Fourier">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-80" value="Sy229 - Rhythmic 5th">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-81" value="Sy230 - Sorry4theDLY">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-82" value="Sy231 - Cell Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-83" value="Sy232 - Shape of X">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-84" value="Sy233 - ShapeURMusic">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-85" value="Sy234 - Synth Force">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-86" value="Sy235 - Trance Split">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-87" value="Sy236 - Step Trance">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-88" value="Sy237 - Chop Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-89" value="Sy238 - Euro Teuro">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-90" value="Sy239 - Auto Trance1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-91" value="Sy240 - Eureggae">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-92" value="Sy241 - Beat Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-93" value="Sy242 - TMT Seq Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-94" value="Sy243 - ForYourBreak">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-95" value="Sy244 - HPF Slicer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-96" value="Sy245 - Sliced Choir">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-97" value="Sy246 - Digi-Doo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-98" value="Sy247 - PanningFrmnt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-99" value="Sy248 - Dirty Beat">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-100" value="Sy249 - Electrons">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-101" value="Sy250 - Protons">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-102" value="Sy251 - Brisk Vortex">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-103" value="Sy252 - Throbulax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-104" value="Sy253 - Lonizer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-105" value="Sy254 - diGital Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-106" value="Sy255 - StepPitShift">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-107" value="Sy256 - Pad Pulses">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-108" value="Sy257 - Seq-Pad 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-109" value="Sy258 - DSP Chaos">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-110" value="Sy259 - Dance floor">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-111" value="Sy260 - Minor Thirds">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-112" value="Sy261 - FX World">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-113" value="Sy262 - Nu Trance X">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-114" value="Sy263 - Auto 5thSaws">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-115" value="Sy264 - Cross Talk">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-116" value="Sy265 - Reanimation">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-117" value="Sy266 - VoX Chopper">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-118" value="Sy267 - Trevors Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-119" value="Sy268 - Fantomas Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-120" value="Sy269 - Jazzy Arps">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-121" value="Sy270 - Keep Running">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-122" value="Sy271 - Step In">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-123" value="Sy272 - Echo Echo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-124" value="Sy273 - Keep going">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-125" value="Sy274 - Arposphere">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-126" value="Sy275 - Voco Riff">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-69-127" value="Sy276 - Pulsator">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-0" value="Sy277 - Motion Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-1" value="Sy278 - Sine Magic">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-2" value="Sy279 - JUNO-D Slice">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-3" value="Sy280 - Pulsatron">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-4" value="Sy281 - Mega Sync">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-5" value="Sy282 - Passing by">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-6" value="Sy283 - Lazer Points">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-7" value="Sy284 - Retro Sci-Fi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-8" value="Sy285 - Magic Chime">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-9" value="Sy286 - Try This!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-10" value="Sy287 - New Planetz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-11" value="Sy288 - Jet Noise">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-12" value="Sy289 - Chaos 2003">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-13" value="Sy290 - Control Room">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-14" value="Sy291 - OutOf sortz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-15" value="Sy292 - Scatter">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-16" value="Sy293 - Low Beat-S">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-17" value="Sy294 - WaitnOutside">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-18" value="Sy295 - Breath Echo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-19" value="Sy296 - SoundStrange">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-20" value="Sy297 - Cosmic Pulse">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-21" value="Sy298 - Faked Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-22" value="Sy299 - JUNO Crystal">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-23" value="Sy300 - ResoSweep Dn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-24" value="Sy301 - Zap B3 & C4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-25" value="Sy302 - PolySweep Nz">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-26" value="Sy303 - Strange Land">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-27" value="Sy304 - S&H Voc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-28" value="Sy305 - 12th Planet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-29" value="Sy306 - Scare">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-30" value="Sy307 - Hillside">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-31" value="Sy308 - Mod Scanner">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-32" value="Sy309 - SoundOnSound">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-33" value="Sy310 - Gasp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-34" value="Sy311 - ResoSweep Up">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-35" value="Sy312 - Magic Wave">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-36" value="Sy313 - Shangri-La">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-37" value="Sy314 - CerealKiller">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-38" value="Sy315 - Cosmic Drops">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-39" value="Sy316 - Space Echo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-40" value="Sy317 - Robot Sci-Fi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-41" value="Sy318 - Jazz Scat">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-42" value="Sy319 - Jazz Doos">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-43" value="Sy320 - Choir Aahs 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-44" value="Sy321 - Choir Aahs 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-45" value="Sy322 - Choir Oohs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-46" value="Sy323 - AngelsChoir1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-47" value="Sy324 - AngelsChoir2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-48" value="Sy325 - Syn Opera">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-49" value="Sy326 - Angelique">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-50" value="Sy327 - Vox Pad 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-51" value="Sy328 - Vox Pad 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-52" value="Sy329 - Gospel Oohs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-53" value="Sy330 - Choir&Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-54" value="Sy331 - SynVox 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-55" value="Sy332 - SynVox 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-56" value="Sy333 - Aah Vox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-57" value="Sy334 - Sweet Keys">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-58" value="Sy335 - JUNO Synvox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-59" value="Sy336 - Uhmmm">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-60" value="Sy337 - Morning Star">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-61" value="Sy338 - BeautifulOne">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-62" value="Sy339 - Ooze">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-63" value="Sy340 - Aerial Choir">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-64" value="Sy341 - 3D Vox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-65" value="Sy342 - Sample Opera">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-66" value="Sy343 - Film Cue">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-67" value="Sy344 - Paradise">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-68" value="Sy345 - Sad ceremony">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-69" value="Sy346 - Lost Voices">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-70" value="Sy347 - Beat Vox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-71" value="Sy348 - Talk 2 Me">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-72" value="Sy349 - FM Vox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-73" value="Sy350 - Lets Talk!">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-74" value="Sy351 - Cosmic Rays">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-75" value="Sy352 - Phaser Pad 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-76" value="Sy353 - PhaseStrings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-77" value="Sy354 - Super SynStr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-78" value="Sy355 - 80s Str 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-79" value="Sy356 - 80s Str 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-80" value="Sy357 - BreakOut Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-81" value="Sy358 - Frends Syn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-82" value="Sy359 - Comb">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-83" value="Sy360 - Voyager">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-84" value="Sy361 - Stringship">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-85" value="Sy362 - DarknessSide">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-86" value="Sy363 - Fat Stacks">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-87" value="Sy364 - Strings R Us">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-88" value="Sy365 - Electric Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-89" value="Sy366 - Neo RS-202">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-90" value="Sy367 - OB Rezo Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-91" value="Sy368 - Synthi Ens">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-92" value="Sy369 - Giant Sweep">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-93" value="Sy370 - Mod Dare">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-94" value="Sy371 - Cell Space">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-95" value="Sy372 - Digi-Swell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-96" value="Sy373 - New Year Day">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-97" value="Sy374 - Polar Morn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-98" value="Sy375 - Distant Sun">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-99" value="Sy376 - PG Chimes">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-100" value="Sy377 - Saturn Rings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-101" value="Sy378 - Brusky">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-102" value="Sy379 - 2.2 Pad 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-103" value="Sy380 - SaturnHolida">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-104" value="Sy381 - Neuro-Drone">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-105" value="Sy382 - In The Pass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-106" value="Sy383 - Polar Night">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-107" value="Sy384 - Cell 5th">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-108" value="Sy385 - MistOver5ths">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-109" value="Sy386 - Gritty Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-110" value="Sy387 - India Garden">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-111" value="Sy388 - BillionStars">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-112" value="Sy389 - Sand Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-113" value="Sy390 - ReverseSweep">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-114" value="Sy391 - HugeSoundMod">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-115" value="Sy392 - Metal Swell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-116" value="Sy393 - NuSoundtrack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-117" value="Sy394 - Phat Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-118" value="Sy395 - Hollow">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-119" value="Sy396 - Heaven Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-120" value="Sy397 - Soft OB Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-121" value="Sy398 - Reso Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-122" value="Sy399 - Slow Saw Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-123" value="Sy400 - Terra Nostra">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-124" value="Sy401 - Summer Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-125" value="Sy402 - Frends Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-126" value="Sy403 - Pop Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-70-127" value="Sy404 - Sqr Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-0" value="Sy405 - Silk Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-1" value="Sy406 - WarmReso Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-2" value="Sy407 - Soft Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-3" value="Sy408 - Air Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-4" value="Sy409 - Soft Breeze">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-5" value="Sy410 - JP Strings 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-6" value="Sy411 - DelayStrings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-7" value="Sy412 - NorthStrings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-8" value="Sy413 - Syn Strings1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-9" value="Sy414 - OB Strings 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-10" value="Sy415 - Strings Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-11" value="Sy416 - R&B SoftPad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-12" value="Sy417 - Phat Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-13" value="Sy418 - Mystic Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-14" value="Sy419 - Glass Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-15" value="Sy420 - Wind Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-16" value="Sy421 - Combination">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-17" value="Sy422 - HumanKindnes">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-18" value="Sy423 - Beauty Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-19" value="Sy424 - Atmospherics">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-20" value="Sy425 - OB Aaahs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-21" value="Sy426 - Vulcano Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-22" value="Sy427 - Cloud #9">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-23" value="Sy428 - Organic Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-24" value="Sy429 - Hum Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-25" value="Sy430 - Vox Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-26" value="Sy431 - Digital Aahs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-27" value="Sy432 - Tri 5th Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-28" value="Sy433 - Movin Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-29" value="Sy434 - Follow">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-30" value="Sy435 - Consolament">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-31" value="Sy436 - Spacious Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-32" value="Sy437 - JD Pop Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-33" value="Sy438 - JP-8 Phase">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-34" value="Sy439 - Nu Epic Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-35" value="Sy440 - Flange Dream">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-36" value="Sy441 - Evolution X">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-37" value="Sy442 - Angelis Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-38" value="Sy443 - JUNO-106 Str">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-39" value="Sy444 - JupiterMoves">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-40" value="Sy445 - Oceanic Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-41" value="Sy446 - Fairys Song">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-42" value="Sy447 - Borealis">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-43" value="Sy448 - JX Warm Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-44" value="Sy449 - Analog Bgrnd">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-52" value="Sy450 - Syn.Strings2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-53" value="Sy451 - Choir Aahs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy452 - Chorus Aahs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-54" value="Sy453 - Voice Oohs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy454 - Humming">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-55" value="Sy455 - SynVox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy456 - Analog Voice">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-81" value="Sy457 - Square Wave">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy458 - MG Square">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Sy459 - 2600 Sine">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-82" value="Sy460 - Saw Wave">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy461 - OB2 Saw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Sy462 - Doctor Solo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Sy463 - Natural Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-4-0" value="Sy464 - SequencedSaw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-83" value="Sy465 - Syn.Calliope">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-84" value="Sy466 - Chiffer Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-85" value="Sy467 - Charang">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy468 - Wire Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-86" value="Sy469 - Solo Vox">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-87" value="Sy470 - 5th Saw Wave">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-88" value="Sy471 - Bass & Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy472 - Delayed Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-89" value="Sy473 - Fantasia">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-90" value="Sy474 - Warm Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy475 - Sine Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-91" value="Sy476 - Polysynth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-92" value="Sy477 - Space Voice">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy478 - Itopia">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-93" value="Sy479 - Bowed Glass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-94" value="Sy480 - Metal Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-95" value="Sy481 - Halo Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-96" value="Sy482 - Sweep Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-97" value="Sy483 - Ice Rain">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-98" value="Sy484 - Soundtrack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-101" value="Sy485 - Brightness">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-102" value="Sy486 - Goblin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-103" value="Sy487 - Echo Drops">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy488 - Echo Bell">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Sy489 - Echo Pan">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-104" value="Sy490 - Star Theme">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-122" value="Sy491 - Breath Noise">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Sy492 - Fl.Key Click">

`

var listworld = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-45" value="Wr001 - Nice Piano">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-46" value="Wr002 - MIDIed Grand">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-47" value="Wr003 - West Coast">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-48" value="Wr004 - JV EP+">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-49" value="Wr005 - 80s FM">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-50" value="Wr006 - AllSkate!SRX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-51" value="Wr007 - Blues Perc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-52" value="Wr008 - Perky Twin B">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-53" value="Wr009 - Rotary Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-54" value="Wr010 - ParisRomance">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-55" value="Wr011 - Acc.Master">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-56" value="Wr012 - Bandoneon 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-57" value="Wr013 - Ac.Gtrs SRX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-58" value="Wr014 - X Brs Sect 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-59" value="Wr015 - J-Pop Brs GW">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-60" value="Wr016 - DC Tri GW">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-61" value="Wr017 - 2600 Sine GW">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-62" value="Wr018 - P5 Sync Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-63" value="Wr019 - SuperSaws">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-64" value="Wr020 - Attack! Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-65" value="Wr021 - Erhu/Vib">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-66" value="Wr022 - Pipa/Trem">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-67" value="Wr023 - Guzhng/Trm">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-68" value="Wr024 - Qudi/Orn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-69" value="Wr025 - Xiao/Orn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-70" value="Wr026 - Suona /3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-71" value="Wr027 - Xun/Orn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-72" value="Wr028 - Matouqin/4 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-73" value="Wr029 - Dumbra/Strum">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-74" value="Wr030 - Bawu/3 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-75" value="Wr031 - Harmonium 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-76" value="Wr032 - Harmonium 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-77" value="Wr033 - Harmonium 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-78" value="Wr034 - Harmonium LS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-79" value="Wr035 - D.Accordion">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-80" value="Wr036 - Acc.de Paris">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-81" value="Wr037 - Eastern Trio">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-82" value="Wr038 - New Delhi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-83" value="Wr039 - Sorgho Field">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-84" value="Wr040 - Sitar XV">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-85" value="Wr041 - Sitar GW">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-86" value="Wr042 - Drone Sitar">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-87" value="Wr043 - SitarGlisSRX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-88" value="Wr044 - Go2India /C2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-89" value="Wr045 - Sarod">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-90" value="Wr046 - ChoChungRuan">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-91" value="Wr047 - HamrDulcimer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-92" value="Wr048 - Dulcimer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-93" value="Wr049 - Santur LS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-94" value="Wr050 - Santur 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-95" value="Wr051 - Santur+trm">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-96" value="Wr052 - Oygur/Trem">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-97" value="Wr053 - Warm VibesLS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-98" value="Wr054 - Strings LS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-99" value="Wr055 - Stage Str LS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-100" value="Wr056 - Str+Choir 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-101" value="Wr057 - Doos">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-102" value="Wr058 - Mmmms">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-103" value="Wr059 - Chorus LS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-104" value="Wr060 - Qu Di&Flute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-105" value="Wr061 - Qu Di Vibro">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-106" value="Wr062 - Flute+1octLS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-107" value="Wr063 - Alto mp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-108" value="Wr064 - Alto Sax GW">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-109" value="Wr065 - Alto Sax LS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-110" value="Wr066 - Suona">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-111" value="Wr067 - D-50 Stack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-112" value="Wr068 - Fantasia JV">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-113" value="Wr069 - Heavenals">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-114" value="Wr070 - Wave Bells">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-115" value="Wr071 - Pretty Bells">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-116" value="Wr072 - Morning Lite">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-117" value="Wr073 - Prefab Chime">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-118" value="Wr074 - Stacc.Heaven">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-119" value="Wr075 - WindBellPad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-120" value="Wr076 - Vintage Call">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-121" value="Wr077 - 260 & JUNO">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-122" value="Wr078 - Wire Pad GW">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-123" value="Wr079 - Wire Pad XP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-124" value="Wr080 - Far East XP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-125" value="Wr081 - Been LS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-126" value="Wr082 - RajasthaniLS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-71-127" value="Wr083 - Sheng Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-0" value="Wr084 - Suona Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-1" value="Wr085 - ErHu SynLead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-2" value="Wr086 - RhythmicSaw">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-3" value="Wr087 - Blade Racer">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-4" value="Wr088 - Aero Insect">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-5" value="Wr089 - Helium Queen">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-6" value="Wr090 - Sci-Fi FX x4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-7" value="Wr091 - Acid Copter">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-8" value="Wr092 - Plutonium">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-9" value="Wr093 - Creation">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-10" value="Wr094 - 118:TablaByP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-11" value="Wr095 - 92:DholakPh">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-12" value="Wr096 - 120:Dhol Ph">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-13" value="Wr097 - Fat Analog">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-14" value="Wr098 - Tech Bass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-15" value="Wr099 - BigOrchestra">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-16" value="Wr100 - Analog Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-17" value="Wr101 - Tech Rave">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-18" value="Wr102 - Basichord">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-19" value="Wr103 - Bs/Pno+Brs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-20" value="Wr104 - Psycho EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-21" value="Wr105 - D50 NyAtmos">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-22" value="Wr106 - D50 Pizagogo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-23" value="Wr107 - D50 Stack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-24" value="Wr108 - D50 Fantasia">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-25" value="Wr109 - D50 Stac_Hvn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-26" value="Wr110 - D50 FuturePd">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-27" value="Wr111 - D50 DigiNDnc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-28" value="Wr112 - Film Octaves">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-29" value="Wr113 - JP8.Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-30" value="Wr114 - ORBit Pad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-31" value="Wr115 - SynthBrs2 GS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-32" value="Wr116 - BlowAltoVib">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-33" value="Wr117 - Edye Boost">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-34" value="Wr118 - Musette tun">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-35" value="Wr119 - Musette det1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-36" value="Wr120 - Musette det2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-37" value="Wr121 - Master1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-38" value="Wr122 - Master2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-39" value="Wr123 - Jazz Accord">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-40" value="Wr124 - Bandoneon1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-41" value="Wr125 - Bandoneon2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-42" value="Wr126 - Bs/Musettun">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-43" value="Wr127 - Bs/Musetdet1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-44" value="Wr128 - Bs/Musetdet2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-45" value="Wr129 - Bs/Master1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-46" value="Wr130 - Bs/Master2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-47" value="Wr131 - Bs/JazzAccrd">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-48" value="Wr132 - Bs/Bandneon1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-49" value="Wr133 - Bs/Bandneon2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-50" value="Wr134 - Players EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-51" value="Wr135 - Organ 1 XP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-52" value="Wr136 - ChurchOrg XP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-53" value="Wr137 - St.Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-54" value="Wr138 - Soft Strings">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-55" value="Wr139 - Slow Str XP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-56" value="Wr140 - Trumpet RD">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-57" value="Wr141 - Trumpet 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-58" value="Wr142 - Brass 1 RD">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-59" value="Wr143 - R&R Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-60" value="Wr144 - SessionBrass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-61" value="Wr145 - Alto Sax RD">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-62" value="Wr146 - Tenor Sax RD">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-63" value="Wr147 - Pure EP JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-64" value="Wr148 - SA EPiano JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-65" value="Wr149 - 88StgGrandJU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-66" value="Wr150 - Full Str JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-67" value="Wr151 - Jazz Scat JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-68" value="Wr152 - South Africa">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-69" value="Wr153 - FM-777 JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-70" value="Wr154 - SC Marimba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-71" value="Wr155 - Ethno KeysFS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-72" value="Wr156 - N.Kalimba JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-73" value="Wr157 - Smoky Org JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-74" value="Wr158 - Perc OrganJU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-75" value="Wr159 - Atk Flute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-76" value="Wr160 - FS Flute">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-77" value="Wr161 - HimalayaP FS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-78" value="Wr162 - Alto Sax FS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-79" value="Wr163 - JP8000 BrsFS">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-80" value="Wr164 - Jump BrassFG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-81" value="Wr165 - D-50 Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-82" value="Wr166 - Angklung">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-83" value="Wr167 - Khaen">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-84" value="Wr168 - Khim">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-85" value="Wr169 - Klui">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-86" value="Wr170 - Pin 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-87" value="Wr171 - Pin 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-88" value="Wr172 - Pin 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-89" value="Wr173 - Ponglang">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-90" value="Wr174 - Ranad">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-91" value="Wr175 - Sor">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-92" value="Wr176 - Vode">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-93" value="Wr177 - Blow Tenor">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-94" value="Wr178 - SA Dnc PnoJU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-95" value="Wr179 - Stage EP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-96" value="Wr180 - Super Wurly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-97" value="Wr181 - Tine EP JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-98" value="Wr182 - R&B Organ JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-99" value="Wr183 - Perc Organ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-100" value="Wr184 - Elk-Baglama">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-101" value="Wr185 - Aks-Baglama">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-102" value="Wr186 - UD">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-103" value="Wr187 - Kanun">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-104" value="Wr188 - JP StringsJU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-105" value="Wr189 - JP Strings 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-106" value="Wr190 - JupiterMv JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-107" value="Wr191 - G.Keman">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-108" value="Wr192 - Vib-Zurna-A">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-109" value="Wr193 - Flugel HrnJU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-110" value="Wr194 - Soft Tb JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-111" value="Wr195 - Solo Bone JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-112" value="Wr196 - TR-Klarnet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-113" value="Wr197 - FolkClarinet">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-114" value="Wr198 - StackTp S.JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-115" value="Wr199 - Follow Me">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-116" value="Wr200 - Clean? JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-117" value="Wr201 - Pure SinLD 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-118" value="Wr202 - Theramax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-119" value="Wr203 - Tristar FG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-120" value="Wr204 - Solid Pluck">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-121" value="Wr205 - WaspySynthJU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-122" value="Wr206 - DigitalessJU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-123" value="Wr207 - Bustranza JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-124" value="Wr208 - GAIA A-7Poly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-125" value="Wr209 - GAIA F-3Trns">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-126" value="Wr210 - Packfan">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-127" value="Wr211 - 80s Poly">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-0" value="Wr212 - Cue Tip FG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-1" value="Wr213 - WiredSynthFG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-2" value="Wr214 - GAIA A-1 Bs">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-3" value="Wr215 - JP8 PulseLd1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-4" value="Wr216 - Dist TB 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-5" value="Wr217 - Short Bs 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-6" value="Wr218 - Short Bs 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-7" value="Wr219 - Short Bs 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-8" value="Wr220 - Monster Bs 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-9" value="Wr221 - Monster Bs 7">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-10" value="Wr222 - SuperSawBs10">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-11" value="Wr223 - Slap Bass JP">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-12" value="Wr224 - Dist.Fing JU">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-13" value="Wr225 - FullDraw GW">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-14" value="Wr226 - Steierische">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-15" value="Wr227 - G-Accord 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-16" value="Wr228 - G-Accord 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-17" value="Wr229 - G-Accord 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-18" value="Wr230 - C-Accord A1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-19" value="Wr231 - C-Accord A2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-20" value="Wr232 - C-Accord A3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-21" value="Wr233 - C-Accord N1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-22" value="Wr234 - C-Accord N2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-23" value="Wr235 - E-Accord 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-24" value="Wr236 - E-Accord 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-25" value="Wr237 - BajoSxt /2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-26" value="Wr238 - BajoSxt /3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-27" value="Wr239 - BajoSxt Mt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-28" value="Wr240 - Charango Dn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-29" value="Wr241 - Charango Up">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-72-30" value="Wr242 - Chrng Oct Dn">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-31" value="Wr243 - Chrng Oct Up">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-32" value="Wr244 - Charango /C">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-33" value="Wr245 - Chrng Oct /C">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-34" value="Wr246 - Charango D&U">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-35" value="Wr247 - ChrngOct D&U">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-36" value="Wr248 - Guitarron">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-37" value="Wr249 - Guitarn Oct">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-38" value="Wr250 - Banda ClaVib">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-39" value="Wr251 - Banda ClaStc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-40" value="Wr252 - MariTp Vb /2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-41" value="Wr253 - MariTp Vb /3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-42" value="Wr254 - MariTp Stac">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-43" value="Wr255 - CmbiTp Vb /4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-44" value="Wr256 - Banda Tp Vib">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-45" value="Wr257 - Banda Tp Stc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-46" value="Wr258 - Banda TbnVib">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-47" value="Wr259 - Banda TbnStc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-48" value="Wr260 - Banda Tuba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-49" value="Wr261 - BandaTubaStc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-50" value="Wr262 - Switch Fall">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-51" value="Wr263 - Mariachi Tp1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-52" value="Wr264 - Latin Trumpt">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-53" value="Wr265 - Romantic Tp.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-54" value="Wr266 - Snake Eyes">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-55" value="Wr267 - Shake Tp.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-56" value="Wr268 - Tp. Rom/Mar">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-57" value="Wr269 - Tp. Mar/Shk">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-58" value="Wr270 - SuperTnr SRX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-59" value="Wr271 - RS Alto Sax">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-60" value="Wr272 - Sugar Keys">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-61" value="Wr273 - SL Fantasia">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-62" value="Wr274 - SL LivingCal">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-63" value="Wr275 - SL D50Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-64" value="Wr276 - SL D50Brass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-65" value="Wr277 - SLSoundTrack">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-66" value="Wr278 - Gamelan">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-67" value="Wr279 - Anklung">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-68" value="Wr280 - Gambus">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-69" value="Wr281 - Sitar on C">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-70" value="Wr282 - JUNO Sitar 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-71" value="Wr283 - JUNO Sitar 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-72" value="Wr284 - Sitar Baby">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-73" value="Wr285 - Neo Sitar">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-74" value="Wr286 - SaraswatiRvr">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-75" value="Wr287 - Teky Drop">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-76" value="Wr288 - TroubadorEns">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-77" value="Wr289 - Elec Sitar">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-78" value="Wr290 - Pat is away">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-79" value="Wr291 - Nice Kalimba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-80" value="Wr292 - Quiet River">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-81" value="Wr293 - Aerial Harp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-82" value="Wr294 - Harpiness">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-83" value="Wr295 - Skydiver">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-84" value="Wr296 - Jamisen">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-85" value="Wr297 - JUNO Koto">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-86" value="Wr298 - Monsoon">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-87" value="Wr299 - Bend Koto">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-88" value="Wr300 - JUNO Banjo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-89" value="Wr301 - Pan Pipes">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-90" value="Wr302 - Andes Mood">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-91" value="Wr303 - LongDistance">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-92" value="Wr304 - Ambi Shaku">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-93" value="Wr305 - HimalayaPipe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-94" value="Wr306 - Ethnic Lead">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-95" value="Wr307 - Lochscape">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-96" value="Wr308 - PipeDream">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-97" value="Wr309 - Angel Pipes">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-98" value="Wr310 - Far East">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-99" value="Wr311 - Wired Synth">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-100" value="Wr312 - 4DaCommonMan">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-101" value="Wr313 - Orgaenia">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-102" value="Wr314 - Sleeper">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-103" value="Wr315 - Ice Palace">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-104" value="Wr316 - Story Harp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-73-105" value="Wr317 - LostParadise">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-16" value="Wr318 - Santur">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-47" value="Wr319 - Harp">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Wr320 - Yang Qin">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-78" value="Wr321 - Shakuhachi">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-105" value="Wr322 - Sitar">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Wr323 - Sitar 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-106" value="Wr324 - Banjo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-107" value="Wr325 - Shamisen">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-108" value="Wr326 - Koto">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Wr327 - Taisho Koto">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-109" value="Wr328 - Kalimba">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-110" value="Wr329 - Bagpipe">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-112" value="Wr330 - Shanai">


`

var listdrums = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-1" value="Dr001 - Pop Kit 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-2" value="Dr002 - Rock Kit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-3" value="Dr003 - Brush Jz Kit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-4" value="Dr004 - HipHop Kit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-5" value="Dr005 - R&B Kit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-6" value="Dr006 - Dance Kit 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-7" value="Dr007 - Dance Kit 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-8" value="Dr008 - Dance Kit 3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-9" value="Dr009 - Pop Kit 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-10" value="Dr010 - Dance Kit 4">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-11" value="Dr011 - Nu India Kit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-12" value="Dr012 - Indomix Kit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-13" value="Dr013 - BK StudioKt1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-14" value="Dr014 - BK StudioKt2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-15" value="Dr015 - LatinDrmKit">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-16" value="Dr016 - Latin Menu1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-17" value="Dr017 - Latin Menu2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-18" value="Dr018 - Latin Menu3">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="86-64-19" value="Dr019 - LatinPerc06">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-1" value="Dr020 - GM2 STANDARD">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-9" value="Dr021 - GM2 ROOM">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-23" value="Dr022 - GM2 POWER">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-37" value="Dr023 - GM2 ELECTRIC">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-38" value="Dr024 - GM2 ANALOG">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-51" value="Dr025 - GM2 JAZZ">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-65" value="Dr026 - GM2 BRUSH">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-73" value="Dr027 - GM2 ORCHSTRA">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="120-0-87" value="Dr028 - GM2 SFX">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-107" value="Dr029 - Timpani+Low">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-108" value="Dr030 - Timpani Roll">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-109" value="Dr031 - Bass Drum">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-110" value="Dr032 - Ambidextrous">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-111" value="Dr033 - En-co-re">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-112" value="Dr034 - Mobile Phone">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-113" value="Dr035 - ElectroDisco">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-114" value="Dr036 - Groove 007">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-115" value="Dr037 - In Da Groove">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-116" value="Dr038 - Sweet 80s">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-117" value="Dr039 - Auto Trance2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-118" value="Dr040 - JUNO Pop">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-119" value="Dr041 - Compusonic 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-120" value="Dr042 - Compusonic 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-121" value="Dr043 - Mix Drum 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-64-122" value="Dr044 - Mix Drum 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-48" value="Dr045 - Timpani">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-114" value="Dr046 - Agogo">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-116" value="Dr047 - Woodblock">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr048 - Castanets">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-117" value="Dr049 - Taiko">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr050 - Concert BD">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-118" value="Dr051 - Melo. Tom 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr052 - Melo. Tom 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-119" value="Dr053 - Synth Drum">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr054 - 808 Tom">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Dr055 - Elec Perc">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-120" value="Dr056 - Reverse Cym.">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-123" value="Dr057 - Seashore">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr058 - Rain">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Dr059 - Thunder">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Dr060 - Wind">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-4-0" value="Dr061 - Stream">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-5-0" value="Dr062 - Bubble">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-124" value="Dr063 - Bird">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr064 - Dog">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Dr065 - Horse-Gallop">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Dr066 - Bird 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-125" value="Dr067 - Telephone 1">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr068 - Telephone 2">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Dr069 - DoorCreaking">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Dr070 - Door">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-4-0" value="Dr071 - Scratch">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-5-0" value="Dr072 - Wind Chimes">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-126" value="Dr073 - Helicopter">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr074 - Car-Engine">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Dr075 - Car-Stop">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Dr076 - Car-Pass">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-4-0" value="Dr077 - Car-Crash">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-5-0" value="Dr078 - Siren">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-6-0" value="Dr079 - Train">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-7-0" value="Dr080 - Jetplane">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-8-0" value="Dr081 - Starship">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-9-0" value="Dr082 - Burst Noise">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-127" value="Dr083 - Applause">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr084 - Laughing">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Dr085 - Screaming">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Dr086 - Punch">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-4-0" value="Dr087 - Heart Beat">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-5-0" value="Dr088 - Footsteps">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-0-127" value="Dr089 - Gun Shot">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-1-0" value="Dr090 - Machine Gun">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-2-0" value="Dr091 - Lasergun">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="121-3-0" value="Dr092 - Explosion">


`

var listuser = `
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-0" value="501 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-1" value="502 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-2" value="503 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-3" value="504 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-4" value="505 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-5" value="506 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-6" value="507 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-7" value="508 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-8" value="509 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-9" value="510 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-10" value="511 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-11" value="512 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-12" value="513 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-13" value="514 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-14" value="515 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-15" value="516 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-16" value="517 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-17" value="518 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-18" value="519 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-19" value="520 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-20" value="521 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-21" value="522 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-22" value="523 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-23" value="524 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-24" value="525 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-25" value="526 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-26" value="527 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-27" value="528 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-28" value="529 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-29" value="530 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-30" value="531 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-31" value="532 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-32" value="533 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-33" value="534 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-34" value="535 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-35" value="536 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-36" value="537 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-37" value="538 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-38" value="539 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-39" value="540 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-40" value="541 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-41" value="542 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-42" value="543 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-43" value="544 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-44" value="545 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-45" value="546 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-46" value="547 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-47" value="548 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-48" value="549 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-49" value="550 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-50" value="551 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-51" value="552 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-52" value="553 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-53" value="554 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-54" value="555 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-55" value="556 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-56" value="557 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-57" value="558 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-58" value="559 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-59" value="560 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-60" value="561 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-61" value="562 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-62" value="563 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-63" value="564 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-64" value="565 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-65" value="566 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-66" value="567 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-67" value="568 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-68" value="569 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-69" value="570 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-70" value="571 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-71" value="572 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-72" value="573 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-73" value="574 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-74" value="575 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-75" value="576 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-76" value="577 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-77" value="578 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-78" value="579 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-79" value="580 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-80" value="581 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-81" value="582 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-82" value="583 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-83" value="584 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-84" value="585 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-85" value="586 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-86" value="587 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-87" value="588 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-88" value="589 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-89" value="590 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-90" value="591 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-91" value="592 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-92" value="593 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-93" value="594 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-94" value="595 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-95" value="596 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-96" value="597 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-97" value="598 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-98" value="599 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-99" value="600 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-100" value="601 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-101" value="602 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-102" value="603 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-103" value="604 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-104" value="605 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-105" value="606 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-106" value="607 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-107" value="608 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-108" value="609 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-109" value="610 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-110" value="611 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-111" value="612 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-112" value="613 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-113" value="614 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-114" value="615 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-115" value="616 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-116" value="617 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-117" value="618 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-118" value="619 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-119" value="620 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-120" value="621 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-121" value="622 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-122" value="623 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-123" value="624 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-124" value="625 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-125" value="626 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-126" value="627 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-0-127" value="628 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-0" value="629 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-1" value="630 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-2" value="631 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-3" value="632 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-4" value="633 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-5" value="634 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-6" value="635 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-7" value="636 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-8" value="637 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-9" value="638 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-10" value="639 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-11" value="640 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-12" value="641 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-13" value="642 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-14" value="643 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-15" value="644 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-16" value="645 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-17" value="646 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-18" value="647 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-19" value="648 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-20" value="649 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-21" value="650 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-22" value="651 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-23" value="652 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-24" value="653 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-25" value="654 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-26" value="655 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-27" value="656 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-28" value="657 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-29" value="658 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-30" value="659 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-31" value="660 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-32" value="661 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-33" value="662 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-34" value="663 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-35" value="664 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-36" value="665 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-37" value="666 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-38" value="667 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-39" value="668 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-40" value="669 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-41" value="670 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-42" value="671 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-43" value="672 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-44" value="673 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-45" value="674 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-46" value="675 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-47" value="676 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-48" value="677 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-49" value="678 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-50" value="679 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-51" value="680 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-52" value="681 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-53" value="682 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-54" value="683 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-55" value="684 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-56" value="685 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-57" value="686 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-58" value="687 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-59" value="688 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-60" value="689 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-61" value="690 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-62" value="691 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-63" value="692 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-64" value="693 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-65" value="694 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-66" value="695 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-67" value="696 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-68" value="697 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-69" value="698 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-70" value="699 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-71" value="700 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-72" value="701 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-73" value="702 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-74" value="703 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-75" value="704 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-76" value="705 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-77" value="706 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-78" value="707 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-79" value="708 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-80" value="709 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-81" value="710 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-82" value="711 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-83" value="712 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-84" value="713 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-85" value="714 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-86" value="715 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-87" value="716 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-88" value="717 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-89" value="718 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-90" value="719 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-91" value="720 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-92" value="721 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-93" value="722 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-94" value="723 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-95" value="724 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-96" value="725 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-97" value="726 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-98" value="727 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-99" value="728 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-100" value="729 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-101" value="730 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-102" value="731 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-103" value="732 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-104" value="733 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-105" value="734 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-106" value="735 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-107" value="736 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-108" value="737 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-109" value="738 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-110" value="739 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-111" value="740 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-112" value="741 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-113" value="742 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-114" value="743 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-115" value="744 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-116" value="745 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-117" value="746 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-118" value="747 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-119" value="748 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-120" value="749 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-121" value="750 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-122" value="751 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-123" value="752 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-124" value="753 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-125" value="754 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-126" value="755 - User">
<input type="button" class="buttonTimbres" onclick = "timbreselecionado(id)" id="87-1-127" value="756 - User">


`


