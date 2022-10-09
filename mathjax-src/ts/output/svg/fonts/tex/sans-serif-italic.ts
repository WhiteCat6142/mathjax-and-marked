/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {SVGCharMap, AddPaths} from '../../FontData.js';
import {sansSerifItalic as font} from '../../../common/fonts/tex/sans-serif-italic.js';

export const sansSerifItalic: SVGCharMap = AddPaths(font, {
    0x21: '160 187L257 694H306Q355 694 355 693L238 186H199Q160 186 160 187ZM110 2Q111 3 120 49T131 96Q131 98 180 98T229 96L219 50Q209 3 208 2V0H110V2',
    0x22: '171 647L180 694H229Q278 694 278 693L276 686Q275 680 273 668T268 644L258 597L182 471H157Q133 471 133 472L189 595Q189 596 174 596H160V598Q160 601 171 647ZM365 647L374 694H423Q472 694 472 693L470 686Q469 680 467 668T462 644L452 597L376 471H351Q327 471 327 472L383 595Q383 596 368 596H354V598Q354 601 365 647',
    0x23: '793 170Q809 162 809 149Q809 145 807 141T802 135T796 132L793 130H547L472 -27Q397 -184 394 -187Q389 -194 379 -194Q367 -194 362 -183Q359 -179 359 -173Q360 -168 431 -20L503 129Q503 130 410 130H317L242 -27Q167 -184 164 -187Q159 -194 149 -194Q137 -194 132 -183Q129 -179 129 -173Q130 -168 201 -19L273 130H187L100 131Q87 141 87 150Q87 162 102 170H294L331 248Q339 265 349 286T365 318L370 328Q370 330 258 330Q145 330 142 332Q129 338 129 351Q129 362 140 368Q146 370 267 370L391 371L467 527Q542 684 544 686Q544 688 549 691T560 694H562Q565 693 567 692T571 690T575 686T578 681T579 672Q577 665 507 520T436 373L435 370H528L621 371L692 518Q767 675 769 677Q775 694 789 694Q798 694 804 688T809 672Q806 664 737 519L665 371L751 370Q835 370 841 368Q851 362 851 350Q851 337 841 334T799 330H765H741H645L606 250L568 170H793ZM600 328Q600 330 508 330H415Q412 326 338 171Q338 170 431 170H524L561 248Q569 265 579 286T595 318L600 328',
    0x24: '228 70Q233 92 246 155T270 266T280 316Q271 318 265 320T237 333T200 360T172 403T159 468Q159 537 205 600T325 691Q352 701 360 701Q361 701 361 701T362 703T364 711T368 727L372 750H409Q445 750 445 749L436 705Q436 703 450 702T494 691T554 657L565 649Q562 642 548 604L534 568Q511 591 484 605T440 621L424 623L419 624L372 405Q399 400 424 384Q490 338 490 247V240Q490 156 430 85Q374 13 294 -5L284 -7L280 -30Q279 -35 278 -41T275 -52L274 -55Q274 -56 237 -56Q201 -56 201 -54Q202 -53 205 -34T211 -11Q211 -9 206 -9Q154 -2 115 19Q80 35 56 59L88 141L99 131Q109 121 119 113T141 99T160 89T180 82T197 77T214 73T228 70ZM303 426Q304 427 313 471T332 564T345 620L335 616Q287 596 263 549Q252 525 252 499Q252 470 267 451T298 426Q303 424 303 426ZM302 75Q305 75 315 80T340 98T367 125T390 164T399 214Q399 247 384 268T349 297Q338 247 326 186L302 75',
    0x25: '268 347Q224 347 195 386T165 488Q165 517 173 552Q191 637 246 693T349 749Q389 749 414 725T448 673T456 614Q456 506 396 427T268 347ZM372 604Q372 674 339 674Q311 674 290 633T261 549T253 482V474Q253 438 272 426Q277 424 286 424Q319 424 345 485T372 604ZM189 -56Q179 -56 173 -49T167 -37Q167 -30 347 198Q425 296 475 360Q780 745 785 747Q790 750 796 750Q814 748 814 730Q814 725 811 719L204 -49Q198 -56 189 -56ZM523 87Q523 184 583 265T713 347Q758 347 786 308T815 207Q815 110 757 28T629 -55Q576 -55 550 -12T523 87ZM729 200Q729 271 696 271Q675 271 658 247T631 189T616 125T611 76Q611 21 644 21H647Q672 21 700 77T729 200',
    0x26: '219 -22Q158 -22 117 13T71 111Q71 131 74 150T84 185T98 215T118 241T137 262T159 281T179 295T199 308L214 318L258 348L256 362Q254 373 254 413V435Q254 483 271 537T325 641T411 708Q427 715 441 715Q446 716 455 716Q504 716 534 681T565 590Q565 522 519 468T377 347L358 334Q359 333 363 320T374 290T387 262Q404 227 428 187T460 139Q521 183 574 251T651 362T674 409L710 398Q746 388 747 388Q747 381 720 333T635 213T517 94L510 87Q542 57 598 57Q649 57 708 72Q716 75 718 75L709 34L701 -7Q636 -22 578 -22Q531 -22 498 -8T428 34L408 25Q314 -22 219 -22ZM480 579Q480 640 436 640Q410 640 385 615T351 554Q340 513 340 457Q340 413 343 410Q343 406 360 419Q431 471 455 505T480 579ZM245 57Q279 59 311 67T359 81T375 89T358 113T318 178T281 260L274 277L245 257Q167 205 167 135Q167 110 174 93T194 69T217 60T237 57H245',
    0x27: '228 647L237 694H286Q335 694 335 693L334 686Q332 680 330 668T325 644L315 597L239 471H214Q190 471 190 472L246 595Q246 596 231 596H217V598Q217 601 228 647',
    0x28: '195 37Q195 -7 200 -47T213 -113T231 -166T250 -204T268 -232T280 -250H204L194 -238Q104 -124 104 55Q104 238 181 432T405 740L417 750H454Q491 750 491 749L468 729Q446 709 411 667T337 565T262 405T208 188Q195 110 195 37',
    0x29: '300 463Q300 634 222 740L214 750H290L299 740Q300 738 309 726T323 707T337 682T353 651T367 613T379 566T387 510T390 444Q390 314 344 156T203 -125Q179 -155 145 -191Q111 -224 89 -241L78 -250H2Q4 -248 27 -227T65 -189T107 -140T155 -71T200 16T244 129T278 266Q300 372 300 463',
    0x2A: '193 608Q193 628 210 644T246 660Q250 660 252 660T257 658T264 654T272 648T284 638T302 623Q340 590 340 593Q341 594 345 623T354 682T360 715Q365 729 378 739T407 750Q424 750 433 740T443 720Q443 712 427 652L410 591L462 623Q505 650 514 655T534 660Q549 660 558 650T568 625Q568 617 567 611T560 599T551 590T536 580T519 571T496 561T470 548L429 528L474 500Q482 495 492 489T506 481T516 475T523 469T527 464T529 458T530 450Q530 430 514 414T479 397H475Q468 397 460 402T423 433Q414 440 404 448T388 461L383 465L365 344Q348 306 314 306Q302 306 292 313T281 338Q281 347 297 404L313 464L260 433Q201 397 195 397H189Q173 397 165 407T156 432Q156 438 157 443T161 452T166 460T175 468T185 475T198 482T212 489T230 497T250 506L295 528L250 556Q203 582 202 585Q193 591 193 608',
    0x2B: '108 244T108 250T112 261T119 268T124 270H426V272Q428 274 457 419Q489 565 492 573Q497 583 508 583Q516 583 522 577T528 565Q528 553 498 417Q491 384 483 346T471 288L467 270H760Q775 262 775 250T760 230H458Q456 221 426 77T394 -71Q389 -83 375 -83Q367 -83 362 -78T356 -64Q356 -58 387 84Q394 118 401 155T413 210L417 229Q417 230 271 230H124Q123 230 120 232T112 239',
    0x2C: '90 2Q91 3 100 49T111 96Q111 98 160 98T209 96L199 50Q189 3 188 2Q188 0 149 -63L112 -125H63L120 0H105Q90 0 90 2',
    0x2D: '66 257V259H332V257L324 220L317 186H184Q51 186 51 187T58 220T66 257',
    0x2E: '90 2Q91 3 100 49T111 96Q111 98 160 98T209 96L199 50Q189 3 188 2V0H90V2',
    0x2F: '564 744L568 747Q573 750 579 750Q588 750 594 744T599 729Q597 721 321 241T41 -243Q37 -250 27 -250Q6 -250 6 -230Q6 -228 8 -222Q9 -219 285 261T564 744',
    0x30: '245 -22Q209 -22 181 -11T135 20T107 65T92 116T88 171Q88 235 114 354T194 557Q226 606 269 635T340 671T392 678H395Q422 678 446 670T495 643T534 582T549 481Q549 430 534 350T499 213Q459 89 379 25Q315 -22 247 -22H245ZM430 582Q408 601 378 601Q313 601 269 534Q234 475 205 341Q181 232 181 174Q181 104 209 76Q231 54 260 54T318 73T368 125Q410 194 447 375Q460 445 460 487Q460 555 430 582',
    0x31: '234 613Q277 613 331 628T428 678H439Q451 678 451 676Q450 671 387 373T323 74T384 73H445L430 0H259L88 1L104 73H229L332 560Q278 541 198 539Q198 540 198 541T199 546T200 554T202 564T205 576L213 612H219Q221 612 226 612T234 613',
    0x32: '190 460Q189 460 181 475T164 507T155 527Q155 535 182 571Q259 678 380 678Q462 678 506 630T551 513V507Q551 418 487 349Q469 329 441 305T391 265T344 232T316 212Q158 87 158 86T188 85Q194 85 234 85T311 86Q467 86 467 85Q451 9 449 2V0H50Q54 18 58 40L67 79L133 133Q246 226 269 243Q369 318 410 373T452 492Q452 535 433 560T393 592T350 599Q311 599 279 578T231 532T203 484T190 460',
    0x33: '446 542Q446 576 424 590T372 605Q330 605 288 583T216 524Q209 515 208 516Q207 517 192 549L178 580L187 589Q224 627 276 652T386 678Q456 678 500 642T544 550Q544 515 530 482T495 427T453 387T418 362L403 353L413 348Q440 335 462 313Q500 271 500 217Q500 135 423 57T236 -22T63 59L56 68L85 141Q106 112 125 98Q177 54 254 54Q315 54 355 105T396 218Q396 242 393 254Q380 301 335 313Q327 315 280 316Q233 316 233 318L249 392Q298 392 322 399Q373 408 409 453T446 542',
    0x34: '78 235L411 656H465Q519 656 519 655T475 447T430 237V235H521V233L505 160Q505 159 459 159H414L380 0H286L320 159H62L63 164Q64 169 66 179T70 198L78 235ZM342 235L421 607Q420 607 419 604Q409 535 197 267Q173 236 173 235H342',
    0x35: '330 350Q263 350 214 272H133V275Q134 276 174 467L214 655Q214 656 385 656H555V653Q555 652 554 647T550 631T546 613L539 577H284L265 486Q261 464 256 441T248 406L246 395L250 398Q255 401 264 406T286 415T315 423T350 427Q412 427 455 381T498 256Q498 150 415 64T222 -22Q186 -22 155 -12T105 12T74 41T55 65T50 77L51 79Q61 89 78 112L104 145L107 138Q110 130 114 123T125 106T142 88T165 72T196 60T236 55Q282 55 316 79T366 140T389 208T396 267Q396 310 378 330T337 350H330',
    0x36: '437 605Q397 605 361 585T301 536T261 477T236 426T228 401L236 408Q244 414 260 424T296 445T345 462T402 469H404Q422 469 434 467T465 446T498 394Q515 351 515 307Q515 254 497 193T439 85Q352 -22 246 -22Q220 -22 196 -14T148 15T109 78T94 179Q94 272 123 373Q163 505 257 591T450 678Q474 678 498 674T535 664T548 656L540 621L532 586L520 590Q509 594 485 599T437 605ZM339 392Q281 392 233 334T185 163V158Q185 87 230 61Q244 54 262 54Q325 54 371 122Q395 158 407 217T419 298Q419 337 401 364T339 392',
    0x37: '173 614L181 656H389Q596 656 596 655L595 650Q594 645 592 635T588 616L580 578L554 551Q313 307 245 4L242 -11H192Q143 -11 143 -10Q144 0 148 17T169 89T212 198T285 327T393 470Q423 504 472 550Q479 555 485 561T496 571L329 570Q163 570 163 571L164 577Q166 583 168 593T173 614',
    0x38: '159 470Q159 547 229 612T394 678Q467 678 510 636T554 533Q554 512 549 493T535 458T515 429T492 405T467 386T443 372T423 362T409 356L404 354Q404 353 405 353Q411 353 432 341T476 295T500 218Q500 134 424 56T246 -22Q175 -22 126 22T77 143Q77 204 110 251T188 327L202 334Q216 340 229 346T243 353T235 358T214 372T189 393T168 426T159 470ZM467 527Q467 605 375 605Q317 605 281 566T244 472Q244 429 271 411T334 392Q392 392 429 430T467 527ZM405 228Q405 262 384 289T315 316Q257 316 216 266T174 144Q174 95 199 75T262 54Q329 54 367 109T405 228',
    0x39: '220 594Q303 677 389 677Q545 677 545 479Q545 413 526 327Q493 175 398 77T202 -22Q124 -22 77 25L130 91L137 83Q169 54 218 54Q255 54 290 76T347 129Q364 151 380 182T403 232T411 256Q410 255 390 241T353 217T303 197T236 187Q195 187 173 209Q155 226 140 263T124 352Q124 392 135 435Q154 527 220 594ZM455 497Q455 605 383 605Q340 605 305 577T246 492Q220 411 220 360Q220 278 279 264Q280 264 287 264T299 263Q347 263 387 302Q455 375 455 497',
    0x3A: '174 396L184 444H233Q282 444 282 443Q277 421 272 394L262 346H213Q164 346 164 347Q169 369 174 396ZM90 2Q91 3 100 49T111 96Q111 98 160 98T209 96L199 50Q189 3 188 2V0H90V2',
    0x3B: '174 396L184 444H233Q282 444 282 443Q277 421 272 394L262 346H213Q164 346 164 347Q169 369 174 396ZM90 2Q91 3 100 49T111 96Q111 98 160 98T209 96L199 50Q189 3 188 2Q188 0 149 -63L112 -125H63L120 0H105Q90 0 90 2',
    0x3D: '142 368Q145 370 463 370Q780 370 784 368Q796 364 796 350T784 332Q780 330 463 330Q145 330 142 332Q129 338 129 351Q129 362 142 368ZM88 137T88 150T102 170H738Q739 170 742 168T750 161T754 150T750 139T743 132T738 130H102Q88 137 88 150',
    0x3F: '194 652Q194 654 218 666T284 691T362 704Q444 704 490 678T536 583Q536 541 516 500T459 433Q415 400 387 371T343 313T321 266T307 216L301 186H262Q223 186 223 187Q224 199 228 218T250 288T294 377Q317 413 344 440T391 481T414 499Q442 527 442 574Q442 584 441 590T433 607T409 623T362 629Q335 629 310 624T267 610T235 595T214 582T205 576L200 614Q194 651 194 652ZM173 2Q174 3 183 49T194 96Q194 98 243 98T292 96L282 50Q272 3 271 2V0H173V2',
    0x40: '120 267Q120 377 179 478T336 642T538 705Q610 705 658 662T707 513Q707 425 681 331Q658 241 590 179T447 117Q386 117 343 163T300 288Q300 397 374 486T544 576Q575 576 608 562Q590 628 517 628Q406 628 309 522T212 278Q212 179 267 122T404 65T550 91H631Q513 -10 390 -10Q265 -10 193 70T120 267ZM600 397Q600 441 581 471T530 501Q476 501 433 436T390 298Q390 254 409 224T462 193Q512 193 556 257T600 397',
    0x5B: '148 252L253 750H339Q425 750 425 749L424 744Q423 739 421 729T417 711L409 675L367 674H325L235 252Q145 -167 145 -172Q145 -174 187 -174H229V-176Q213 -240 213 -250H127Q41 -250 41 -248Q41 -245 148 252',
    0x5D: '353 749Q353 746 303 512T200 27T141 -250H-31Q-31 -240 -15 -176V-174H70L250 674H208L165 675L181 750H267Q353 750 353 749',
    0x5E: '190 527L360 694H434L484 611Q533 528 533 527H457L390 632L385 639L266 527H190',
    0x5F: '59 -75L66 -38H316Q565 -38 565 -39T558 -75T549 -112Q549 -114 299 -114Q50 -114 50 -113L52 -108Q53 -103 55 -93T59 -75',
    0x7E: '330 327Q356 326 388 298T446 269Q470 269 484 327H522Q560 327 560 325L557 316Q554 306 549 292T535 263T512 232T480 208Q453 193 429 193T370 222T315 251Q285 251 275 193H199V197Q214 257 251 292T330 327',
    0x131: '168 442T168 443T213 444T258 443T212 225T164 2V0H74V2Q75 7 121 224',
    0x237: '-54 -96L-48 -104Q-41 -111 -27 -118T7 -126Q60 -126 82 -87Q85 -81 140 181L196 443Q196 444 241 444T286 443Q286 441 232 186T175 -75Q163 -120 122 -162T19 -204Q-13 -204 -41 -196T-83 -180T-96 -170Q-55 -96 -54 -96',
    0x300: '-262 681L-270 694H-177L-132 612Q-89 530 -87 528Q-87 527 -125 527H-163L-208 598Q-254 670 -262 681',
    0x301: '-96 625L-29 694H63Q42 673 -31 605L-114 527H-190L-176 541Q-160 559 -96 625',
    0x302: '-310 527L-140 694H-66L-16 611Q33 528 33 527H-43L-110 632L-115 639L-234 527H-310',
    0x303: '-170 677Q-144 676 -112 648T-54 619Q-30 619 -16 677H22Q60 677 60 675L57 666Q54 656 49 642T35 613T12 582T-20 558Q-47 543 -71 543T-130 572T-185 601Q-215 601 -225 543H-301V547Q-286 607 -249 642T-170 677',
    0x304: '-314 553L-297 631H-116Q64 631 64 630Q60 612 56 591L47 553L-133 552Q-314 552 -314 553',
    0x306: '-142 508Q-205 508 -244 548T-284 652Q-284 666 -281 683L-280 694H-204Q-205 689 -205 677Q-205 650 -196 631T-173 604T-147 593T-125 590Q-85 590 -50 618T-5 686L-2 694H73V690Q53 610 -10 559T-142 508',
    0x307: '-180 578Q-179 579 -170 627T-158 678V680H-54V678Q-56 675 -65 627T-76 578V576H-180V578',
    0x308: '-273 584Q-272 585 -262 632L-252 678V680H-154V678L-164 632Q-174 585 -175 584Q-175 582 -224 582T-273 584ZM-78 586Q-78 587 -69 632T-58 678V680H40L39 677Q39 676 38 670T34 651T29 628L19 583L-30 582H-79L-78 586',
    0x30A: '-227 597Q-227 639 -186 666T-102 693H-97Q-29 693 -8 649Q-2 637 -2 623Q-2 582 -43 555T-132 527Q-171 527 -199 546T-227 597ZM-59 619Q-59 635 -68 643T-104 652Q-142 652 -156 636T-171 602Q-171 569 -123 569Q-119 569 -111 570T-99 571Q-59 582 -59 619',
    0x30B: '-236 619L-195 694H-149Q-103 694 -103 693L-211 527H-287L-282 536Q-281 539 -236 619ZM-70 619L-29 694H17Q63 694 63 693L-45 527H-121L-116 536Q-115 539 -70 619',
    0x30C: '-283 654H-207L-140 549L-135 542L-16 654H60L-109 487H-147L-184 488L-234 570Q-283 653 -283 654',
    0x391: '28 0L429 694H533L585 350Q596 275 610 182T632 46L638 3V0H530L528 18Q527 25 515 103T503 183H223L135 29L118 1L73 0H28ZM492 254Q492 256 473 398T454 589V610Q433 552 290 301L264 255L378 254H492',
    0x392: '501 363Q557 355 605 316T653 222Q653 148 586 85T403 2Q394 1 240 0Q90 0 90 1L100 46Q109 90 128 177T164 348L238 694H375Q518 693 546 688Q614 674 655 635T696 544Q696 490 648 441T516 368L501 363ZM601 530Q601 568 566 590T479 621Q472 622 394 623H320L297 513Q292 489 286 459T276 415L273 401V399H339H372Q504 399 571 466Q601 498 601 530ZM257 322Q256 320 230 197T203 73Q203 71 289 71Q379 72 387 73Q459 84 507 122T556 210Q556 255 519 283T428 320Q415 322 336 323Q257 323 257 322',
    0x393: '87 2Q88 4 160 346T234 689Q234 691 440 691T646 689Q643 686 629 611H475L321 612Q193 4 191 2V0H87V2',
    0x394: '273 343L510 694H617Q790 2 790 0H416L42 1L273 343ZM539 576Q536 597 536 600Q536 602 535 605Q534 607 534 607Q527 580 222 130L201 98H651L648 110Q645 123 639 149T627 198Q554 489 539 576',
    0x395: '86 2Q88 4 160 346T233 689Q233 691 461 691Q688 691 688 689Q685 686 671 611H495L320 612L319 609Q319 607 297 501L274 397H436Q597 397 597 396L596 391Q595 386 593 376T589 358L581 322L420 321Q258 321 258 320Q209 89 208 87Q208 85 390 85Q417 85 460 85T518 86L572 85Q556 8 554 2V0H86V2',
    0x396: '67 54Q551 615 551 617Q543 618 517 618Q510 618 463 618T376 617Q200 617 200 618T209 657L216 694H459Q702 694 702 692Q702 689 697 667L692 643L207 80H392Q493 81 577 81Q577 70 560 2V0H55V2L67 54',
    0x397: '517 2Q518 3 551 161T585 322Q586 323 557 323T422 323H259L190 0H138Q86 0 86 1L96 46Q105 90 124 177T160 348L234 694H337V691Q336 690 306 545T275 399H602L603 403Q603 407 634 551L665 694H768V691Q768 690 695 348T621 2V0H517V2',
    0x398: '119 260Q119 348 157 433T254 579T387 677T533 715Q701 715 772 574Q804 511 804 431Q804 315 744 209T586 41T384 -22Q262 -22 191 59T119 260ZM706 426Q706 524 655 582T525 640Q454 640 395 600T293 502Q256 447 237 383T218 266Q218 168 269 112T401 55Q518 55 612 166T706 426ZM283 349L293 397H473Q652 397 652 396Q647 374 642 347L632 299H452Q273 299 273 300Q278 322 283 349',
    0x399: '161 348L235 694H338V691Q338 690 265 348T191 2V0H139Q87 0 87 1L96 46Q106 90 125 177T161 348',
    0x39A: '236 223Q235 222 213 113T188 2V0H138Q88 0 88 1L98 46Q107 90 126 177T162 348L236 694H285Q335 694 335 693L330 671Q326 649 316 603T298 518Q289 477 280 433T266 366L261 343L672 694H729L784 693L465 420L651 0H596L541 1L384 350Q383 351 310 288T236 223',
    0x39B: '28 0L401 694H504V690Q505 686 543 345T582 1Q582 0 528 0H473V3Q472 6 460 113T435 359T422 558Q422 593 424 603L425 610L424 608Q414 572 343 431Q287 316 143 49L117 1L73 0H28',
    0x39C: '375 691Q456 215 459 124V106Q488 177 762 641L793 694H929V691Q929 690 856 348T782 2V0H689V2Q691 4 753 304Q817 604 818 606Q819 611 817 608Q817 607 815 603Q798 559 540 117L484 22H440L397 23L393 42Q393 47 373 169T334 422T315 594V609L250 306Q186 3 185 2Q185 0 138 0Q92 0 92 1L102 46Q111 90 130 177T166 348L240 694H375V691',
    0x39D: '311 609Q310 608 246 306T181 2V0H134Q88 0 88 1L98 46Q107 90 126 177T162 348L236 694H382L383 691Q383 688 418 561T493 286T541 97L544 84L545 89Q545 90 553 128T578 246T610 394L674 694H766V691Q766 690 693 348T619 2V0H472L469 13Q468 17 393 293T312 605L311 609',
    0x39E: '193 687Q193 688 479 688H765V686Q764 685 755 642L747 600H461L175 601Q175 602 184 645L193 687ZM196 400Q196 401 418 401T640 400L622 315Q622 314 400 314T178 315L196 400ZM42 2Q43 3 51 44T60 87H64Q68 87 75 87T93 87T119 87T151 88T190 88T237 88T291 88T352 88H643Q638 66 634 44T627 13T624 2V0H42V2',
    0x39F: '118 254Q118 366 174 473T324 648T517 716Q627 716 695 638T763 435Q763 321 706 215T555 43T362 -22Q256 -22 187 56T118 254ZM380 58Q452 58 518 116T622 263T661 442Q661 496 646 535T608 594T567 622T534 634Q516 636 496 636Q400 636 313 528T225 264Q225 172 267 115T380 58',
    0x3A0: '86 2Q88 4 160 346T233 689Q233 691 501 691Q768 691 768 689Q766 688 694 346T621 2V0H517V2Q518 3 582 304T646 609L648 615H321L190 0H86V2',
    0x3A1: '162 348L236 694H378Q522 693 530 692Q604 680 647 635T690 524Q690 474 665 430T612 359Q550 299 465 280Q443 275 343 274H250V271Q250 269 235 201T206 68T192 2V0H140Q88 0 88 1L98 46Q107 90 126 177T162 348ZM594 513Q594 560 562 588T477 622Q470 623 394 623H321L293 487L263 349V347H342H347H375Q530 347 578 449Q594 483 594 513',
    0x3A3: '194 655L202 694H508Q813 694 813 693Q809 675 805 653L797 614H559L321 615Q327 606 405 478L485 347Q449 311 348 203T247 86Q247 84 294 84Q303 84 359 84T465 85H684Q684 84 675 42L666 0H360L55 1L195 154Q346 319 347 320L359 333L273 473Q187 614 186 614L187 620Q188 625 190 635T194 655',
    0x3A4: '165 608L182 687Q182 688 486 688H790L789 685L781 645L773 609H521L457 306Q393 3 392 2Q392 0 340 0H288V2Q289 5 353 304T417 605V609L291 608H165',
    0x3A5: '357 637Q320 637 297 612T266 555H173Q178 576 188 598Q214 651 265 683T373 716Q497 716 497 542V509L504 526Q579 715 711 715Q773 715 808 677T843 589Q843 576 840 555H747L748 557Q748 559 748 563T749 574V580Q749 604 731 622Q715 638 693 638Q591 638 543 465Q531 425 506 309T462 98T441 2V0H337V2Q425 401 436 486Q438 504 438 526Q438 637 364 637H357',
    0x3A6: '124 308Q124 399 208 481T433 587Q437 587 437 589Q438 590 449 643L459 694H508Q557 694 557 693Q557 691 546 641T535 587Q543 587 562 583T614 565T674 531T722 472T743 387Q743 288 656 209T449 110L433 106Q411 3 410 2Q410 0 361 0H312L313 3Q313 5 324 56L335 107H331L321 108Q311 110 297 114T266 124T228 141T190 168Q124 225 124 308ZM227 315Q227 282 239 257T270 218T306 197T338 186L350 184H351L386 346Q420 507 420 509H419Q411 509 393 505T342 485T284 444Q227 387 227 315ZM642 381Q642 413 629 437T599 475T563 496T533 507T519 510Q518 510 484 348T450 184Q544 201 593 258T642 381',
    0x3A7: '14 0Q17 3 184 184T352 367L265 529Q244 567 222 609T188 672L176 692Q176 694 236 694H297L338 612Q387 515 400 489L421 448L645 694H758L708 640Q481 393 456 368Q455 366 500 281T596 104T652 0H531L388 293L128 0H14',
    0x3A8: '325 556Q325 524 310 447T294 330Q294 289 304 260Q314 234 333 216T364 192T380 187L488 694H585V691Q584 689 531 438L478 188H479Q485 188 503 195T555 231T613 305Q637 352 654 435Q662 470 669 496T681 538T690 562T698 578T704 587Q719 609 733 615T772 621H802H854V619L838 546Q838 545 832 545Q775 539 749 418Q716 274 638 196Q616 173 590 156T543 131T503 117T473 110T460 106Q460 105 450 54T438 2V0H340V2Q341 3 351 54T362 106Q363 107 358 108T344 111T322 117T295 128T267 145T239 171T216 207T200 256T194 319Q194 356 203 408T213 483Q213 517 203 530T182 544T171 546Q184 609 187 619V621H239Q286 621 294 620T309 612Q325 596 325 556',
    0x3A9: '148 407Q148 475 182 534T269 633T386 694T511 716Q622 716 695 658T769 507Q769 461 747 409T699 321T628 225T562 136Q533 90 533 86Q542 85 557 85Q564 85 583 85T614 86Q695 86 695 85Q679 9 677 2V0H425Q426 3 433 30T447 72T480 131T549 241L554 248Q558 254 563 261T576 281T592 306T609 335T625 366T640 400T653 434T661 466T664 498Q664 562 618 601T497 640Q416 640 351 596T262 482Q250 441 250 392T276 237T302 70V56Q302 28 296 2V0H44V2L62 85Q62 86 143 86L225 85V88Q224 89 224 89T224 91T224 95T223 101T222 110T220 123T216 140T209 163T200 191T188 227Q148 344 148 407',
    0x2013: '59 275L66 312H316Q565 312 565 311T558 275T549 238Q549 236 299 236Q50 236 50 237L52 242Q53 247 55 257T59 275',
    0x2014: '59 275L66 312H566Q1065 312 1065 311T1058 275T1049 238Q1049 236 549 236Q50 236 50 237L52 242Q53 247 55 257T59 275',
    0x2015: '59 275L66 312H566Q1065 312 1065 311T1058 275T1049 238Q1049 236 549 236Q50 236 50 237L52 242Q53 247 55 257T59 275',
    0x2017: '59 -75L66 -38H316Q565 -38 565 -39T558 -75T549 -112Q549 -114 299 -114Q50 -114 50 -113L52 -108Q53 -103 55 -93T59 -75',
    0x2018: '309 567L299 520Q289 474 288 473Q288 471 239 471T190 473L192 480Q193 486 196 499T201 522L211 569L287 694H312L335 693L332 685Q328 677 321 661T307 630L279 570L294 569Q309 569 309 567',
    0x2019: '228 647L237 694H286Q335 694 335 693L334 686Q332 680 330 668T325 644L315 597L239 471H214Q190 471 190 472L246 595Q246 596 231 596H217V598Q217 601 228 647',
    0x201C: '393 567L383 520Q373 474 372 473Q372 471 323 471T274 473L276 480Q277 486 280 499T285 522L295 569L371 694H396L419 693L416 685Q412 677 405 661T391 630L363 570L378 569Q393 569 393 567ZM587 567L577 520Q567 474 566 473Q566 471 517 471T468 473L470 480Q471 486 474 499T479 522L489 569L565 694H590L613 693L610 685Q606 677 599 661T585 630L557 570L572 569Q587 569 587 567',
    0x201D: '171 647L180 694H229Q278 694 278 693L276 686Q275 680 273 668T268 644L258 597L182 471H157Q133 471 133 472L189 595Q189 596 174 596H160V598Q160 601 171 647ZM365 647L374 694H423Q472 694 472 693L470 686Q469 680 467 668T462 644L452 597L376 471H351Q327 471 327 472L383 595Q383 596 368 596H354V598Q354 601 365 647',
    0x2044: '564 744L568 747Q573 750 579 750Q588 750 594 744T599 729Q597 721 321 241T41 -243Q37 -250 27 -250Q6 -250 6 -230Q6 -228 8 -222Q9 -219 285 261T564 744',
    0x2206: '273 343L510 694H617Q790 2 790 0H416L42 1L273 343ZM539 576Q536 597 536 600Q536 602 535 605Q534 607 534 607Q527 580 222 130L201 98H651L648 110Q645 123 639 149T627 198Q554 489 539 576',
},{
});
