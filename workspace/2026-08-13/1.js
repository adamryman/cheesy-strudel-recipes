await initHydra()

osc(5).add(noise(5, 0.402)).color(0, 0.257,4).out()

$: s("[bd <hh oh>]*<4>").bank("tr909").dec(.4).gain(0.4)._scope()
$: s("[bd]*<128 64>").bank("tr909").dec(.4).lpf("1000 500").gain(0.4)._scope()
$: n("2 3 5 <[9 4 2] [7 9]>").scale("g:minor").sound("gm_banjo")._pianoroll()
$: n("<5 4 9>*4").scale("g:minor").sound("gm_banjo")._pianoroll()
