// https://en.wikipedia.org/wiki/Twinkle,_Twinkle,_Little_Star#Melody

$: cat(
"0 0 4 4", "5 5 4@2", "3 3 2 2", "1 1 0@2",
"4 4 3 3", "2 2 1@2", "4 4 3 3", "2 2 1@2",
"0 0 4 4", "5 5 4@2", "3 3 2 2", "1 1 0@2"
).note().scale("<c:major>").gain(0.5).sound("[gm_banjo]")
