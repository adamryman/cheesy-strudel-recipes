samples('github:adamryman/cheesy-strudel-samples')

//s("quotes:1").clip(.1).fast(2)
//s("<~ quotes:1 ~>").slow(4)
_$: s("<quotes:1>").slow(10000)

_$: s("<quotes:1>").begin(.05).end(.24)
//const acid = s("<quotes:1>").begin(.25).end(.31)
//const well = s("<quotes:1>").begin(.34).end(.41)
//const amISaying = s("<quotes:1>").begin(.02).end(.31)
//const haha = s("<quotes:1>").begin(.75).end(.99)
_$: s("<quotes:1>*4").begin(.25).end(.35)
_$: s("<quotes:1>*3").begin(.24).end(.36).lpf("300")


_$: s("<quotes:1>").begin(.3).end(.65)

//const something = s("<quotes:1>").begin(.50).end(.65).lpf("<0 0 0 0 0 0 0 0 0 1000 0 0 0 0>")

//const test = amISaying.lpf("<0 0 0 0 [1000] 0 0 0 0 0 0 [0] 0 0>")
//const test = amISaying.lpf("<<0 0> <0 0> <0 0> <0 0> <1000 0> <0 0> <0 0>>")

$: n("[0 1 2 3 4 5 6 7]*<<2 0> 2 <2 0> 2 <0 2> <0 2> 2>").scale("a:minor").s("square").lpf("<1000 [500 2000]*<4 8>>*1/2")//.dec("<0.05 .05 .1 .1 1>")
$: n("[0 1 2 3 4 5 6 7]*<<2 0> 2 <2 0> 2 <0 2> <0 2> 2>").scale("a:minor").s("square").lpf("<1000 [1000 2000]*<4 8>>*1/2").trans(-12).dec("<0 1 0 1 0 1>")
$: n("[0 1 2 3 4 5 6 7]*<<2 0> 2 <2 0> 2 <0 2> <0 2> 2>").scale("a:minor").s("supersaw").lpf("<1000 [500 800 1000 2000]*8>*1/2").trans(-24).dec("<0 1 0>")
//_$: test
//_$: something
//_$: well.lpf("<0 0 0 0 [0] 0 0 1000 000 0 0 [0] 0 0>")
//stack(test)
//_$: haha.lpf("<0 0 0 0 [0] 0 0 0 0 0 0 0 0 000>")

_$: s("[tolle:3]*8").lpf("200").vowel("[a e i o u]")
_$: s("[tolle:1]")
_$: s("<<tolle_acid:0 ~> ~>")
_$: s("<~ [~ ~ tolle_acid:1]>")
_$: s("<~ ~ <tolle_acid:2>>")
_$: n("0 1 2 3").scale("a:minor")
_$: n("0 1 2 3 4 5 6 7").scale("a:minor")

_$: s("<<tolle_acid:0 tolle_acid:2> ~ <tolle_acid:1 ~>>").lpf("1000")

$: s("<tolle_acid:0>").lpf("<0 0 0 0 [1000] 0 0 0 0 0 0 [0] 0 0>")
$: s("<tolle_acid:1>").lpf("<0 0 0 0 [0] 0 0 1000 0 0 0 [0] 0 0>")
$: s("<tolle_acid:2>").lpf("<0 0 0 0 [0] 0 0 0 0 1000 0 [0] 0 0>")
