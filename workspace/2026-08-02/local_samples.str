
// Note, all of the s("misc") will not work without samples running locally
// check out https://github.com/adamryman/cheesy-strudel-samples
// not uploading this sample
samples('http://localhost:5432/')
$: n("0").s("misc")

$: n("0 <0 2> <[2 3]*<1 2 4> 0> 7 <[5 4] 8>").scale("g:minor").lpf("1000 2000").sound("gm_synth_bass_1 gm_synth_bass_2")
$: n("0 <0 2> <[2 3]*<1 2 4> 0> 7 <[5 4] 8>").scale("g:minor").lpf("1000 2000").sound("gm_synth_bass_2 gm_synth_bass_1")

_$: n("0").s("misc").begin(0.0).end(0.2).gain("<0 0 0 <0 0 0.5>>").speed("0.8")
_$: n("0").s("misc").begin(0.2).end(0.35).gain("<0 0 0 <0 1>>")
_$: n("0").s("misc").begin(0.4).end(0.6).gain("<0 0 1>").speed(1.5).lpf("1000")
_$: n("0").s("misc").begin(0.4).end(0.6).gain("0.3").note("0").fast(2)

_$: n("0").s("misc").begin(0.2).end(0.35).fast(2).gain("0 0.5").lpf("1000").speed(0.5)
_$: n("[0 0 0 0]").s("misc").begin(0.2).end(0.35).fast(2).gain("0 0.5").lpf("1000").speed("1 2 3 2 4")

_$: n("[0 0 0 0]*<1 2>").s("misc").begin(0.4).end(0.6).gain("0.2 0.7 0").speed(0.8).lpf("1000")

_$: n("0").s("misc").begin(0.4).end(0.6).gain("0 <0 0.9>").speed(1.3).lpf("2000 1000")

_$: n("0").s("misc").begin(0.1).end(0.35)

_$: n("0").s("misc").begin(0.1).end(0.35)

_$: n("[<2 3>*<1 2> 4 <2 5 6>*2]").scale("g:major").sound("gm_pad_new_age").fast("2 1 1 0.5")
