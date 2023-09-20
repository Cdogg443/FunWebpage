// Define an array of words for the game.
const words = ["apple", "banana", "cherry", "grape", "orange", "strawberry", "watermelon",
"prose", "gout", "mail", "birch", "slash", "plan", "wee", "bag", "perch", "fig", "thorn",
"nine", "them", "grab", "whale", "bad", "back", "help", "serf", "slink", "churn", "belt",
"hit", "lock", "cone", "mew", "leg", "prim", "tow", "fork", "jack", "slop", "shape", "jock",
"fun", "chop", "food", "barb", "dune", "carp", "car", "eat", "pad", "kite", "chuck", "steel", "chive", "math", "lick",
"deck", "pale", "her", "tar", "mark", "hack", "flaunt", "dupe", "tire", "flute", "feed", "sale", "cork", "den", "shorn",
"garb", "jug", "drum", "pouch", "smug", "peek", "bark", "win", "shop", "whip", "price", "grab", "kid", "bird", "bowl",
"shush", "tooth", "dote", "wave", "hint", "drive", "shriek", "pine", "ship", "fact", "pew", "like", "frame", "spin",
"set", "sun", "wet", "pier", "spit", "quite", "jock", "dark", "brute", "sea", "ford", "blimp", "chip", "puce", "cart",
"burn", "prawn", "park", "rule", "bud", "shack", "haunt", "hunt", "speech", "dash", "stub", "pork", "scat", "hark",
"ten", "fog", "lark", "sheer", "nut", "cab", "drab", "woke", "wit", "shrub", "gush", "shark", "hum", "grasp", "tweed",
"shut", "fish", "mirth", "mist", "char", "tug", "self", "glaze", "bray", "sat", "stint", "kick", "cash", "pack",
"curl", "deep", "gag", "surf", "spilt", "blade", "oath", "dog", "hard", "rate", "may", "mile", "shrink", "sack",
"cob", "poke", "lad", "snark", "shin", "chase", "slid", "did", "tuck", "shot", "gap", "cope", "elf", "shout",
"elk", "scout", "rush", "map", "flock", "chop", "tin", "jean", "flit", "stone", "torn", "chick", "whet", "jay",
"day", "shuck", "gear", "truck", "quiz", "lard", "caring", "abstracted", "produce", "eggs", "tender", "help",
"guarded", "sign", "encourage", "enthusiastic", "bedroom", "toothsome", "ethereal", "object", "force", "corn",
"enter", "ragged", "spotless", "fat", "dispensable", "battle", "collect", "smash", "plate", "admit", "venomous",
"chemical", "well-to-do", "powerful", "cakes", "hungry", "hole", "subtract", "red", "rescue", "best", "river",
"sink", "toad", "miniature", "stupendous", "nine", "wall", "wasteful", "available", "evanescent", "move",
"interesting", "men", "savory", "blind", "cowardly", "memorize", "hellish", "stale", "tremble", "pop", "afraid",
"bird", "death", "great", "wave", "ashamed", "jobless", "lovely", "grape", "hope", "bolt", "wandering",
"present", "rural", "preach", "dirt", "cagey", "imported", "able", "chunky", "man", "pinch", "servant", "knee",
"pine", "troubled", "woman", "disturbed", "giants", "letters", "strip", "decide", "equable", "sun", "easy",
"dramatic", "delirious", "special", "elated", "stupid", "board", "discreet", "group", "soggy", "thoughtless",
"suggestion", "soft", "square", "delicious", "tug", "salt", "previous", "fairies", "aftermath", "glue",
"bikes", "ablaze", "sisters", "tramp", "automatic", "smiling", "verdant", "request", "paddle", "whip", "spicy",
"picture", "periodic", "hate", "rate", "support", "kindly", "cannon", "attempt", "illegal", "pray", "shy",
"screw", "rose", "sleepy", "letter", "slim", "simplistic", "clumsy", "neat", "respect", "ceaseless", "veil",
"zephyr", "connect", "large", "underwear", "lip", "motionless", "sidewalk", "property", "ground", "pizzas",
"deer", "fallacious", "hard", "closed", "aboriginal", "spectacular", "disagreeable", "sore", "fence",
"appreciate", "wait", "desk", "flap", "noise", "thoughtful", "skin", "range", "humdrum", "rabid",
"heartbreaking", "bulb", "receive", "desert", "flower", "yell", "analyze", "strong", "precede", "bite",
"internal", "unequal", "instruct", "club", "representative", "actually", "colour", "next", "symptomatic",
"queen", "glib", "prevent", "sick", "surround", "descriptive", "skip", "texture", "pot", "far", "protest",
"wail", "interfere", "pour", "serious", "divide", "inexpensive", "adaptable", "gabby", "replace", "actor",
"windy", "sedate", "word", "plastic", "absorbed", "payment", "potato", "realize", "imaginary", "impartial",
"kettle", "houses", "neighborly", "hysterical", "stiff", "punish", "bike", "pink", "weak", "fumbling",
"ship", "language", "post", "tight", "five", "test", "sponge", "use", "inform", "kaput", "crayon", "blood",
"snail", "slap", "grubby", "rule", "telling", "succeed", "shaky", "second-hand", "many", "horrible", "minute",
"tidy", "uncovered", "plane", "observe", "fork", "act", "tree", "bad", "love", "calculating", "development",
"plantation", "likeable", "lumpy", "cart", "eatable", "fax", "rightful", "jar", "examine", "guarantee",
"agonizing", "flippant", "happy", "moan", "prickly", "sticks", "cellar", "dysfunctional", "hateful",
"earsplitting", "fear", "testy", "vest", "hospital", "vagabond", "decision", "envious", "knowing",
"complex", "cover", "cheat", "downtown", "probable", "grip", "thin", "humorous", "abaft", "somber",
"efficacious", "unkempt", "exercise", "bang", "greasy", "crow", "tip", "jelly", "frightened", "fry",
"roof", "bomb", "division", "nice", "low", "four", "tense", "base", "nasty", "action", "key", "harsh",
"crawl", "talented", "zoom", "guttural", "fantastic", "scrub", "plan", "slope", "enchanted", "holistic",
"end", "bag", "spark", "frantic", "attractive", "ban", "accidental", "visit", "bear", "expensive",
"free", "stingy", "consist", "lock", "moor", "hall", "learn", "hard-to-find", "womanly", "depressed",
"bitter", "puffy", "equal", "things", "chalk", "army", "treat", "glossy", "eminent", "repair", "last",
"reading", "pets", "erect", "whine", "fearless", "glove", "flagrant", "furniture", "feeling", "film",
"bewildered", "foamy", "joke", "truck", "alluring", "compare", "machine", "tasty", "song", "rub", "hammer",
"sad", "sordid", "sharp", "abiding", "shivering", "haircut", "outgoing", "wicked", "island", "puncture",
"tooth", "donkey", "hair", "idiotic", "star", "ritzy", "cherries", "grey", "gaze", "expert", "exciting",
"shoe", "x-ray", "title", "cream", "innocent", "blush", "threatening", "drown", "meek", "immense", "waiting",
"courageous", "thrill", "ugliest", "stamp", "dislike", "tangible", "limit", "day", "mine", "stone", "reaction",
"crash", "effect", "bed", "number", "count", "curtain", "prefer", "tempt", "mute", "helpful", "hallowed",
"naughty", "dark", "bent", "offer", "bell", "trick", "premium", "frequent", "cloistered", "therapeutic",
"flawless", "wistful", "muddled", "rare", "finicky", "thing", "butter", "heavy", "murky", "pull", "mug",
"stain", "scorch", "deliver", "wipe", "encouraging", "panicky", "loutish", "experience", "chief", "distance",
"dashing", "bustling", "pig", "ask", "sloppy", "road", "hydrant", "suggest", "offend", "adhesive", "flood",
"slip", "handsome", "grate", "look", "scarce", "save", "lavish", "painful", "injure", "elfin", "uncle",
"government", "better", "caring", "abstracted", "produce", "eggs", "tender", "help", "guarded", "sign",
"encourage", "enthusiastic", "bedroom", "toothsome", "ethereal", "object", "force", "corn", "enter", "ragged",
"spotless", "fat", "dispensable", "battle", "collect", "smash", "plate", "admit", "venomous", "chemical",
"well-to-do", "powerful", "cakes", "hungry", "hole", "subtract", "red", "rescue", "best", "river", "sink",
"toad", "miniature", "stupendous", "nine", "wall", "wasteful", "available", "evanescent", "move",
"interesting", "men", "savory", "blind", "cowardly", "memorize", "hellish", "stale", "tremble", "pop",
"afraid", "bird", "death", "great", "wave", "ashamed", "jobless", "lovely", "grape", "hope", "bolt",
"wandering", "present", "rural", "preach", "dirt", "cagey", "imported", "able", "chunky", "man", "pinch",
"servant", "knee", "pine", "troubled", "woman", "disturbed", "giants", "letters", "strip", "decide",
"equable", "sun", "easy", "dramatic", "delirious", "special", "elated", "stupid", "board", "discreet",
"group", "soggy"];

let secretWord; // Stores the secret word.
let attempts = 3; // Number of attempts allowed.

// Function to start the game.
function startGame() {
    // Randomly choose a word from the array.
    secretWord = words[Math.floor(Math.random() * words.length)];

    // Display the game interface.
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('startButton').style.display = 'none';
}

// Function to handle the player's guess.
function guessWord() {
    const guess = document.getElementById('guessInput').value.toLowerCase();

    if (guess === secretWord) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the word!';
        document.getElementById('guessButton').disabled = true;
    } else {
        attempts--;
        document.getElementById('attemptsLeft').textContent = attempts;

        if (attempts === 0) {
            document.getElementById('message').textContent = `Sorry, you're out of attempts. The secret word was "${secretWord}".`;
            document.getElementById('guessButton').disabled = true;
        } else {
            document.getElementById('message').textContent = 'Incorrect guess. Try again.';
        }
    }
}

// Attach event listeners to buttons.
document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('guessButton').addEventListener('click', guessWord);

// Get the form and input element by their IDs.
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');

// Add an event listener to the form to handle the Enter key press.
guessForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior.
    checkGuess();
});
