samples('github:adamryman/cheesy-strudel-samples')

$: s("[bd <hh oh>]*2").bank("tr909").dec(.4).lpf("1000")

$: s("[bd <hh oh>]*<4 8 8>").bank("tr808").dec(.4).lpf("1000")

$: n("[<2 3>*<1 2> 4 <[5 6] 5> <2 5 6>*2]").scale("g:major").sound("gm_pad_new_age").fast("2 1 1 0.5")

$: n("[<2 3>*<1 2> 4 <[5 6] 5> <2 5 6>*2]").scale("g:major").sound("gm_rock_organ").gain("[0 0 0 1.1]").vowel("[a e i o u]")

$: n("0 [2 3]").scale("c:major").hpf("2000")

$: n("3 3 3 3").sound("jazz").gain("[0 .25 0.5 1]")

$: s("<tolle_acid:0>").lpf("<0 0 0 0 <500 0 0 500> 0 0 0 0 0 0 [0] 0 0>").gain("0.25")
$: s("<tolle_acid:1>").lpf("<0 0 0 0 [0] 0 0 <0 250> 0 0 0 [0] 0 0>").gain("0.25").fast(2)
$: s("<tolle_acid:2>").lpf("<0 0 0 0 [0] 0 0 0 0 <500 0> 0 [0] 0 0>").gain("0.25")
