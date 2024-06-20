for (let i = 0; i < 26; i++) {
    let alph = String.fromCharCode(65 + i)
    area1.innerHTML += `<p id="p${i}"" name="letters" value="${i}"" >${alph}</p>`
}
let letters = document.getElementsByName("letters");

for (let i = 0; i < 26; i++) {
    letters[i].style.margin = "5px";
    letters[i].style.border = "thin solid black"
}
let row = [true, false, false, false, false];
let letterrow = document.getElementsByName("letters");
window.addEventListener("keydown", word)
let wordtyped = ""
let letcount = 0
let wordlist = ["abbey", "about", "above", "abuse", "actor", "acute", "adapt", "admit", "adobe", "adopt", "adult", "after", "again", "agent", "aging", "agony", "agree", "ahead", "aisle", "alarm", "album", "alert", "alien", "align", "alike", "alive", "alley", "allow", "alloy", "alone", "along", "aloud", "alpha", "altar", "alter", "amber", "amend", "amino", "among", "ample", "angel", "anger", "angle", "angry", "ankle", "apart", "apple", "apply", "arena", "argue", "arise", "armor", "arose", "array", "arrow", "aside", "assay", "asset", "atlas", "audio", "audit", "avoid", "await", "awake", "award", "aware", "awful", "bacon", "badge", "badly", "baked", "baker", "baron", "bases", "basic", "basil", "basin", "basis", "batch", "beach", "beard", "beast", "began", "begin", "begun", "being", "belly", "below", "bench", "berry", "billy", "birth", "black", "blade", "blame", "blank", "blast", "blaze", "bleak", "blend", "blind", "block", "blood", "bloom", "blown", "blues", "blunt", "board", "boast", "bobby", "bonus", "boost", "booth", "borne", "bound", "bowel", "boxer", "brain", "brake", "brand", "brass", "brave", "bread", "break", "breed", "brent", "brick", "bride", "brief", "bring", "brink", "brisk", "broad", "broke", "brook", "brown", "brush", "buddy", "build", "built", "bunch", "burke", "burnt", "burst", "buyer", "cabin", "cable", "cache", "calif", "canal", "candy", "canon", "cargo", "carol", "carry", "catch", "cater", "cause", "cease", "chain", "chair", "chalk", "chaos", "charm", "chart", "chase", "cheap", "check", "cheek", "cheer", "chess", "chest", "chick", "chief", "child", "chile", "chill", "china", "choir", "chose", "chuck", "cisco", "civic", "civil", "claim", "clash", "class", "clean", "clear", "clerk", "click", "cliff", "climb", "clock", "close", "cloth", "cloud", "coach", "coast", "colon", "color", "comic", "condo", "coral", "corps", "costa", "couch", "cough", "could", "count", "court", "cover", "crack", "craft", "crane", "crash", "crazy", "cream", "creed", "creek", "crest", "cried", "cries", "crime", "crisp", "cross", "crowd", "crown", "crude", "cruel", "crush", "crust", "cubic", "curry", "curve", "cycle", "daddy", "daily", "dairy", "daisy", "dance", "dated", "dealt", "death", "debit", "debut", "decay", "decor", "delay", "delta", "dense", "depot", "depth", "derby", "deter", "devil", "diary", "digit", "dirty", "dodge", "doing", "donor", "doubt", "dozen", "draft", "drain", "drama", "drank", "drawn", "dream", "dress", "dried", "drift", "drill", "drink", "drive", "drove", "drunk", "dusty", "dying", "eager", "eagle", "early", "earth", "eaten", "eight", "elbow", "elder", "elect", "elite", "empty", "enemy", "enjoy", "enter", "entry", "equal", "error", "essay", "ethic", "event", "every", "exact", "excel", "exert", "exile", "exist", "extra", "faint", "fairy", "faith", "false", "famed", "fancy", "fatal", "fatty", "fault", "favor", "feast", "fence", "ferry", "fetch", "fever", "fiber", "fibre", "field", "fiery", "fifth", "fifty", "fight", "final", "first", "fitch", "fixed", "flame", "flash", "fleet", "flesh", "flies", "flint", "float", "flock", "flood", "floor", "flora", "flour", "flown", "fluid", "flung", "flush", "focal", "focus", "force", "forge", "forth", "forty", "forum", "found", "frame", "frank", "fraud", "fresh", "fried", "front", "frost", "fruit", "fully", "funny", "gamma", "gauge", "genre", "ghost", "giant", "given", "glass", "globe", "glory", "glove", "going", "grace", "grade", "grain", "grams", "grand", "grant", "graph", "grasp", "grass", "grave", "great", "greed", "green", "greet", "grief", "grill", "gross", "group", "grove", "grown", "guard", "guess", "guest", "guide", "guild", "guilt", "habit", "handy", "happy", "hardy", "harry", "harsh", "hatch", "haven", "heart", "heath", "heavy", "hedge", "hefty", "hello", "hence", "henry", "hobby", "holly", "homer", "honey", "honor", "horse", "hotel", "house", "human", "hurry", "ideal", "image", "imply", "incur", "index", "inner", "input", "Intel", "inter", "irate", "irony", "issue", "ivory", "japan", "jenny", "jewel", "jimmy", "joint", "jones", "judge", "juice", "knife", "knock", "known", "label", "labor", "laden", "lance", "large", "laser", "later", "laugh", "layer", "learn", "lease", "least", "leave", "legal", "lemon", "level", "lever", "lewis", "light", "limit", "linen", "links", "liver", "lives", "lobby", "local", "lodge", "logic", "loose", "lotus", "lover", "lower", "loyal", "lucky", "lunch", "lying", "lynch", "magic", "major", "maker", "manor", "maple", "march", "maria", "marry", "marsh", "mason", "match", "maxim", "maybe", "mayor", "meant", "medal", "media", "mercy", "merge", "merit", "merry", "metal", "meter", "metre", "metro", "micro", "midst", "might", "minor", "minus", "Mitch", "mixed", "model", "modem", "moist", "molly", "money", "monte", "month", "moody", "moral", "motif", "motor", "mound", "mount", "mouse", "mouth", "movie", "mummy", "music", "naive", "naked", "nancy", "nasty", "naval", "needs", "nerve", "never", "newly", "niche", "night", "ninth", "noble", "noise", "noisy", "north", "notch", "noted", "novel", "nurse", "nylon", "occur", "ocean", "offer", "often", "olive", "onion", "onset", "opera", "optic", "orbit", "order", "organ", "other", "ought", "ounce", "outer", "overt", "oxide", "ozone", "paint", "panel", "panic", "paper", "party", "pasta", "paste", "patch", "patio", "pause", "peace", "pearl", "Peggy", "penny", "perry", "peter", "petty", "phase", "phone", "photo", "piano", "piece", "piles", "pilot", "pinch", "piper", "pitch", "pizza", "place", "plain", "plane", "plant", "plate", "plaza", "point", "polar", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize", "probe", "prone", "proof", "prose", "proud", "prove", "proxy", "pulse", "punch", "pupil", "purse", "queen", "query", "quest", "queue", "quick", "quiet", "quite", "quota", "quote", "radar", "radio", "raise", "rally", "ralph", "ranch", "randy", "range", "rapid", "ratio", "reach", "react", "ready", "realm", "rebel", "refer", "rehab", "reign", "relax", "relay", "renal", "renew", "repay", "reply", "resin", "rider", "ridge", "rifle", "right", "rigid", "riley", "risky", "rival", "river", "roast", "robin", "robot", "rocky", "roger", "roman", "rouge", "rough", "round", "route", "rover", "royal", "ruler", "rural", "rusty", "saint", "salad", "sally", "salon", "sandy", "sauce", "scale", "scare", "scene", "scent", "scope", "score", "scout", "scrap", "screw", "seize", "sense", "serum", "serve", "setup", "seven", "shade", "shaft", "shake", "shaky", "shall", "shame", "shape", "share", "sharp", "sheep", "sheer", "sheet", "shelf", "shell", "shift", "shine", "shiny", "shirt", "shock", "shook", "shoot", "shore", "short", "shout", "shown", "sided", "siege", "sight", "sigma", "silly", "since", "sixth", "sixty", "sized", "skies", "skill", "skirt", "skull", "slate", "slave", "sleek", "sleep", "slept", "slice", "slide", "slope", "slump", "small", "smart", "smash", "smell", "smile", "smith", "smoke", "snack", "snake", "solar", "solid", "solve", "sorry", "sound", "south", "space", "spare", "spark", "speak", "speed", "spell", "spend", "spent", "spike", "spill", "spine", "spite", "split", "spoke", "spoon", "sport", "spray", "squad", "stack", "staff", "stage", "stake", "stall", "stamp", "stand", "stare", "stark", "start", "state", "steak", "steal", "steam", "steel", "steep", "steer", "stein", "stern", "stick", "stiff", "still", "sting", "stock", "stole", "stone", "stood", "stool", "store", "storm", "story", "straw", "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "sunny", "super", "surge", "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swing", "sword", "sworn", "swung", "table", "taken", "tales", "taste", "taxes", "teach", "teddy", "teeth", "telco", "tense", "tenth", "terry", "texas", "thank", "theft", "their", "theme", "there", "these", "thick", "thief", "thigh", "thing", "think", "third", "those", "three", "threw", "throw", "thumb", "tiger", "tight", "times", "tired", "title", "toast", "today", "token", "tommy", "tonne", "tooth", "topic", "torch", "total", "touch", "tough", "towel", "tower", "toxic", "trace", "track", "tract", "trade", "trail", "train", "trash", "treat", "trend", "trial", "tribe", "trick", "tried", "tries", "troop", "trout", "truck", "truly", "trunk", "trust", "truth", "tutor", "twice", "twist", "tying", "ultra", "uncle", "under", "undue", "union", "unite", "unity", "until", "upper", "upset", "urban", "urine", "usage", "usual", "utter", "vague", "valid", "value", "valve", "vapor", "vault", "venue", "verge", "verse", "video", "villa", "vinyl", "viral", "virus", "visit", "vista", "vital", "vivid", "vocal", "voice", "voter", "wagon", "waist", "waste", "watch", "water", "weary", "weber", "weigh", "weird", "welsh", "wheat", "wheel", "where", "which", "while", "white", "whole", "whose", "widow", "width", "wired", "witch", "wives", "woman", "women", "world", "worry", "worse", "worst", "worth", "would", "wound", "woven", "wrist", "write", "wrong", "wrote", "yacht", "yield", "young", "yours", "youth"];
let wordtoguess = Math.floor(Math.random() * wordlist.length)
let gamepause = false
console.log(wordlist[wordtoguess])
function word(event) {
    let l = event.key.toUpperCase()
    if (event.key == "Enter") {
        if (letcount >= 5) {
            document.getElementById("unvalid").innerHTML = ""
            for (i = 0; i <= 5; i++) {
                if (row[i]) {
                    for (x = 0; x <= 4; x++) {
                        let wordguess = wordlist[wordtoguess]
                        wordtyped += lettypedarray[i][x].innerHTML
                        console.log(wordtyped)
                        if (lettypedarray[i][x].innerHTML == wordguess.charAt(x).toUpperCase()) {
                            lettypedarray[i][x].style.backgroundColor = "#2cff2b"
                            for (let z = 0; z <= 25; z++) {
                                if (lettypedarray[i][x].innerHTML == letterrow[z].innerHTML) {
                                    letterrow[z].style.backgroundColor = "#2cff2b"
                                }
                            }
                        }
                        else if (wordguess.toUpperCase().includes(lettypedarray[i][x].innerHTML)) {
                            lettypedarray[i][x].style.backgroundColor = "yellow"
                            for (let z = 0; z <= 25; z++) {
                                if (lettypedarray[i][x].innerHTML == letterrow[z].innerHTML) {
                                    letterrow[z].style.backgroundColor = "yellow"
                                }
                            }
                        }
                        else {
                            lettypedarray[i][x].style.backgroundColor = "grey"
                            for (let z = 0; z <= 25; z++) {
                                if (lettypedarray[i][x].innerHTML == letterrow[z].innerHTML) {
                                    letterrow[z].style.backgroundColor = "grey"
                                }
                            }
                        }
                        if (wordtyped == wordguess.toUpperCase()) {
                            document.getElementById("unvalid").style.color = "#2cff2b"
                            document.getElementById("unvalid").innerHTML = "You Win"
                            gamepause = true

                        }
                    }
                    letcount = 0
                    row[i] = false
                    row[i + 1] = true
                    break
                }
            }
        }
        else {
            document.getElementById("unvalid").style.color = "red"
            document.getElementById("unvalid").innerHTML = "Please Enter 5 Characters"
        }
    }
    if (event.key == "Backspace") {
        for (i = 0; i <= 5; i++) {
            if (row[i]) {
                lettypedarray[i][letcount - 1].innerHTML = ""
                letcount -= 1
            }
        }
    }
    for (let i = 65; i < 91; i++) {
        if (l == String.fromCharCode(i)) {
            console.log("number before add= " + letcount)
            letcount += 1
            typed(l)
        }
    }
}



let lettyped1 = document.getElementsByClassName("letgrid1")
let lettyped2 = document.getElementsByClassName("letgrid2")
let lettyped3 = document.getElementsByClassName("letgrid3")
let lettyped4 = document.getElementsByClassName("letgrid4")
let lettyped5 = document.getElementsByClassName("letgrid5")
let lettyped6 = document.getElementsByClassName("letgrid6")
let lettypedarray = [document.getElementsByClassName("letgrid1"), document.getElementsByClassName("letgrid2"), document.getElementsByClassName("letgrid3"), document.getElementsByClassName("letgrid4"), document.getElementsByClassName("letgrid5"), document.getElementsByClassName("letgrid6")]

function typed(l) {
    if(!gamepause){
    for (let i = 0; i <= 5; i++) {
        if (row[i]) {
            if (letcount > 5) {
                letcount = 5
            }
            lettypedarray[i][letcount - 1].innerHTML = l
            console.log("letters typed =" + letcount)
        }
    }
}
}
function reset() {
    wordtoguess = Math.floor(Math.random() * wordlist.length)
    console.log(wordlist[wordtoguess])
    for (let i = 0; i <= 5; i++) {
        for (let x = 0; x < 5; x++) {
            lettypedarray[i][x].innerHTML = ""
            lettypedarray[i][x].style.backgroundColor = "antiquewhite"
        }
    }
    for (let i = 0; i < 26; i++) {
        letterrow[i].style.backgroundColor = "antiquewhite"
    }
    row[0] = true
    row[1] = false
    row[2] = false
    row[3] = false
    row[4] = false
    letcount = 0
    document.getElementById("unvalid").innerHTML = ""
    gamepause=false
    wordtyped = ""
}
