// --- Transpilation Mappings (JS Parity) ---

const ODIA_TO_PY = {
    // Keywords
    "ଛାପନ୍ତୁ": "print",
    "ଯଦି": "if",
    "ନଚେତ୍": "else",
    "ଅନ୍ୟଥା": "elif",
    "ପାଇଁ": "for",
    "ଯେପର୍ଯ୍ୟନ୍ତ": "while",
    "ପରିଭାଷା": "def",
    "ଫେରାନ୍ତୁ": "return",
    "ସତ୍ୟ": "True",
    "ମିଥ୍ୟା": "False",
    "ଶୂନ୍ୟ": "None",
    "ମଧ୍ୟରେ": "in",
    "ଶ୍ରେଣୀ": "class",
    "ଆମଦାନୀ": "import",
    "ଚେଷ୍ଟା": "try",
    "ତ୍ରୁଟି": "except",
    "ଭାଙ୍ଗନ୍ତୁ": "break",
    "ଜାରିରଖନ୍ତୁ": "continue",
    "ଉଠାନ୍ତୁ": "raise",
    "ପାସ୍": "pass",
    "ଏବଂ": "and",
    "କିମ୍ବା": "or",
    "ନୁହେଁ": "not",
    "ହେଉଛି": "is",
    "ଯେପରି": "as",
    "비ଶ୍ୱବ୍ୟାପୀ": "global",
    "ସ୍ଥାନୀୟ_ନୁହେଁ": "nonlocal",
    "ସହିତ": "with",
    "ଉତ୍ପନ୍ନ": "yield",
    "ଲାମଡା": "lambda",
    "ନିଶ୍ଚିତ": "assert",
    "ଲିଭାନ୍ତୁ": "del",

    // Built-ins
    "ପରିସର": "range",
    "ଲମ୍ବ": "len",
    "ନିଅନ୍ତୁ": "input",
    "ଲେଖା": "str",
    "ପୂର୍ଣ୍ଣସଂଖ୍ୟା": "int",
    "ଦଶମିକ": "float",
    "ତାଲିକା": "list",
    "ଅଭିଧାନ": "dict",
    "ସେଟ୍": "set",
    "ଟ୍ୟୁପଲ୍": "tuple",
    "ସମଷ୍ଟି": "sum",
    "ସର୍ବାଧିକ": "max",
    "ସର୍ବନିମ୍ନ": "min",
    "ପରମମାନ": "abs",
    "ଗୋଲକାର": "round",
    "କ୍ରମବଦ୍ଧ": "sorted",
    "ପ୍ରକାର": "type",
    "ଜିପ୍": "zip",
    "ଗଣନା": "enumerate",
    
    // Methods
    "ଯୋଡନ୍ତୁ": "append",
    "ବିଭାଜନ": "split",
    "ସଂଯୋଗ": "join",
    "ଛାଣ୍ଟନ୍ତୁ": "strip",
    "ବଦଳାନ୍ତୁ": "replace",
    "ସଜାନ୍ତୁ": "format",

    // AI Functions
    "ଏଆଇ_ଦେଖ": "ai_dekha",
    "ଏଆଇ_ପଚାର": "ai_pachara",
};

const PHONETIC_MAP = {
    "chhapantu": "ଛାପନ୍ତୁ",
    "jadi": "ଯଦି",
    "nachet": "ନଚେତ୍",
    "anyatha": "ଅନ୍ୟଥା",
    "pain": "ପାଇଁ",
    "jeparjyatna": "ଯେପର୍ଯ୍ୟନ୍ତ",
    "paribhasa": "ପରିଭାଷା",
    "pherantu": "ଫେରାନ୍ତୁ",
    "satya": "ସତ୍ୟ",
    "mithya": "ମିଥ୍ୟା",
    "shunya": "ଶୂନ୍ୟ",
    "madhyare": "ମଧ୍ୟରେ",
    "sreni": "ଶ୍ରେଣୀ",
    "amadani": "ଆମଦାନୀ",
    "chesta": "ଚେଷ୍ଟା",
    "truti": "ତ୍ରୁଟି",
    "bhangantu": "ଭାଙ୍ଗନ୍ତୁ",
    "jarirakhantu": "ଜାରିରଖନ୍ତୁ",
    "uthantu": "ଉଠାନ୍ତୁ",
    "pass": "ପାସ୍",
    "ebam": "ଏବଂ",
    "kimba": "କିମ୍ବା",
    "nuhen": "ନୁହେଁ",
    "heuchi": "ହେଉଛି",
    "jepari": "ଯେପରି",
    "biswabyapee": "ବିଶ୍ୱବ୍ୟାପୀ",
    "sthaniya_nuhen": "ସ୍ଥାନୀୟ_ନୁହେଁ",
    "sahita": "ସହିତ",
    "utpanna": "ଉତ୍ପନ୍ନ",
    "lambda": "ଲାମଡା",
    "nischit": "ନିଶ୍ଚିତ",
    "libhantu": "ଲିଭାନ୍ତୁ",
    "parisara": "ପରିସର",
    "lamba": "ଲମ୍ବ",
    "niantu": "ନିଅନ୍ତୁ",
    "lekha": "ଲେଖା",
    "purnasankhya": "ପୂର୍ଣ୍ଣସଂଖ୍ୟା",
    "dasamika": "ଦଶମିକ",
    "talika": "ତାଲିକା",
    "abhidhana": "ଅଭିଧାନ",
    "set": "ସେଟ୍",
    "tuple": "ଟ୍ୟୁପଲ୍",
    "samasti": "ସମଷ୍ଟି",
    "sarbadhika": "ସର୍ବାଧିକ",
    "sarbanimna": "ସର୍ବନିମ୍ନ",
    "paramamana": "ପରମମାନ",
    "golakara": "ଗୋଲକାର",
    "kramabaddha": "କ୍ରମବଦ୍ଧ",
    "prakara": "ପ୍ରକାର",
    "zip": "ଜିପ୍",
    "ganana": "ਗଣନା",
    "jodantu": "ଯୋଡନ୍ତୁ",
    "bibhajana": "ବିଭାଜନ",
    "sanjoga": "ସଂଯୋଗ",
    "chhantantu": "ଛାଣ୍ଟନ୍ତୁ",
    "badalantu": "ବଦଳାନ୍ତୁ",
    "sajantu": "ସଜାନ୍ତୁ",
    "eai_dekha": "ଏଆଇ_ଦେଖ",
    "eai_pachara": "ଏଆଇ_ପଚାର",
};

// Combine for full mapping
const FULL_TRANSPILE_MAP = { ...ODIA_TO_PY };
for (const [phone_k, odia_v] of Object.entries(PHONETIC_MAP)) {
    if (ODIA_TO_PY[odia_v]) {
        FULL_TRANSPILE_MAP[phone_k] = ODIA_TO_PY[odia_v];
    }
}

const ODIA_DIGITS = {
    '୦': '0', '୧': '1', '୨': '2', '୩': '3', '୪': '4',
    '୫': '5', '୬': '6', '୭': '7', '୮': '8', '୯': '9'
};

// --- Helper functions ---

function translateOdiaDigits(code) {
    let result = '';
    let inString = false;
    let stringChar = null;
    let inComment = false;
    let i = 0;
    const n = code.length;

    while (i < n) {
        const char = code[i];

        if (!inString) {
            if (char === '#') {
                inComment = true;
            } else if (char === '\n') {
                inComment = false;
            }
        }

        if (!inComment) {
            if (char === '"' || char === "'") {
                if (!inString) {
                    inString = true;
                    stringChar = char;
                } else if (char === stringChar) {
                    // Check escape character
                    let escaped = false;
                    let j = i - 1;
                    while (j >= 0 && code[j] === '\\') {
                        escaped = !escaped;
                        j--;
                    }
                    if (!escaped) {
                        inString = false;
                        stringChar = null;
                    }
                }
            }
        }

        if (!inString && !inComment && ODIA_DIGITS[char]) {
            result += ODIA_DIGITS[char];
        } else {
            result += char;
        }
        i++;
    }
    return result;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function transpile(odiaCode) {
    // 1. Translate Odia digits
    let translatedCode = translateOdiaDigits(odiaCode);

    // Preprocess "ଅନ୍ୟଥା ଯଦି" / "anyatha jadi" to "ଅନ୍ୟଥା" / "anyatha" (which maps to "elif")
    translatedCode = translatedCode.replace(/ଅନ୍ୟଥା\s+ଯଦି/g, "ଅନ୍ୟଥା");
    translatedCode = translatedCode.replace(/\banyatha\s+jadi\b/gi, "anyatha");

    // 2. Perform word-by-word transpilation using safe unicode word boundary lookarounds
    // In JS we match words excluding Odia and English identifier chars.
    for (const [odiaWord, pyWord] of Object.entries(FULL_TRANSPILE_MAP)) {
        const escaped = escapeRegExp(odiaWord);
        const regex = new RegExp(`(?<![a-zA-Z0-9_\\u0b00-\\u0b7f])${escaped}(?![a-zA-Z0-9_\\u0b00-\\u0b7f])`, 'g');
        translatedCode = translatedCode.replace(regex, pyWord);
    }
    return translatedCode;
}

// --- VLM Local Mock Data ---
const MOCK_IMAGE_LABELS = {
    "apple": "ସେଓ (Apple)",
    "dog": "କୁକୁର (Dog)",
    "snack": "ଫଳ (Fruit)",
};

const MOCK_TEXT_ANSWERS = {
    "capital of odisha": "ଓଡ଼ିଶାର ରାଜଧାନୀ ହେଉଛି ଭୁବନେଶ୍ୱର।",
    "odisha": "ଓଡ଼ିଶା ଭାରତର ଏକ ପୂର୍ବ ତଟବର୍ତ୍ତୀ ରାଜ୍ୟ।",
    "india": "ଭାରତ ଦକ୍ଷିଣ ଏସିଆର ସବୁଠାରୁ ବଡ଼ ଦେଶ।",
    "python": "ପାଇଥନ୍ ଏକ ସରଳ ଓ ଶକ୍ତିଶାଳୀ ପ୍ରୋଗ୍ରାମିଂ ଭାଷା।",
    "ai": "ଏଆଇ (AI) ହେଉଛି କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା, ଯାହା କମ୍ପ୍ୟୁଟରକୁ ଚିନ୍ତା କରିବା ଶିଖାଏ।",
};

// VLM functions in JS that update UI elements
function js_ai_dekha(imagePath, prompt) {
    const filename = imagePath.split('/').pop().toLowerCase();
    
    // Find preview elements
    const placeholder = document.getElementById("ai-preview-placeholder");
    const imgEl = document.getElementById("ai-preview-img");
    const select = document.getElementById("sample-image-select");

    // Map file name to UI preview image source
    let imgSrc = "";
    if (filename.includes("apple")) {
        imgSrc = "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&auto=format&fit=crop";
        select.value = "apple.jpg";
    } else if (filename.includes("dog")) {
        imgSrc = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&auto=format&fit=crop";
        select.value = "dog.jpg";
    } else if (filename.includes("snack")) {
        imgSrc = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&auto=format&fit=crop"; // Healthy fruit bowl
        select.value = "snack.jpg";
    }

    if (imgSrc) {
        placeholder.style.display = "none";
        imgEl.style.display = "block";
        imgEl.src = imgSrc;
    }

    // Heuristics for classifications
    for (const [key, val] of Object.entries(MOCK_IMAGE_LABELS)) {
        if (filename.includes(key)) {
            return val;
        }
    }
    return "ଅଜ୍ଞାତ ବସ୍ତୁ (Unknown Object)";
}

function js_ai_pachara(prompt) {
    const promptLower = prompt.toLowerCase();
    for (const [key, val] of Object.entries(MOCK_TEXT_ANSWERS)) {
        if (promptLower.includes(key)) {
            return val;
        }
    }
    return "ମୁଁ ଏହି ପ୍ରଶ୍ନର ଉତ୍ତର ଜାଣେ ନାହିଁ। (I don't know the answer to this question.)";
}

// --- Lessons Data ---
const CONCEPTS = {
    "ଚଳକ (Variables)": {
        "title": "ଚଳକ (Variables)",
        "desc": `
            <h1>ଚଳକ (Variables) କ’ଣ?</h1>
            <p>କମ୍ପ୍ୟୁଟର ପ୍ରୋଗ୍ରାମିଂରେ ଚଳକ (Variable) ହେଉଛି ଏକ ମେମୋରୀ ସ୍ଥାନର ନାମ, ଯେଉଁଠାରେ ତଥ୍ୟ ସାଇତି ରଖାଯାଏ। ଏହାକୁ ଆପଣ ଏକ 'ଲେବେଲ୍ ଲଗାଯାଇଥିବା ଡବା' (Labeled Box) ସହ ତୁଳନା କରିପାରିବେ। ଡବାର ନାମ ହେଉଛି ଚଳକର ନାମ, ଏବଂ ତାହା ଭିତରେ ଥିବା ସାମଗ୍ରୀ ହେଉଛି ତଥ୍ୟ ବା ଭାଲ୍ୟୁ।</p>
            
            <h2>କାହିଁକି ବ୍ୟବହାର କରିବେ?</h2>
            <ul>
                <li><strong>ତଥ୍ୟର ସଂରକ୍ଷଣ:</strong> କମ୍ପ୍ୟୁଟରକୁ କୌଣସି ତଥ୍ୟ ମନେ ରଖିବାକୁ ହେଲେ ଚଳକ ଆବଶ୍ୟକ।</li>
                <li><strong>ପୁନଃବ୍ୟବହାର:</strong> ଗୋଟିଏ ମାନକୁ ବାରମ୍ବାର ନ ଲେଖି, ସେହି ଚଳକକୁ ବ୍ୟବହାର କରିପାରିବା।</li>
            </ul>
            
            <h2>ସିଣ୍ଟାକ୍ସ:</h2>
            <pre class="code-snippet">ଚଳକ_ନାମ = ମୂଲ୍ୟ</pre>
        `,
        "code": "ବୟସ = ୨୫\nନାମ = \"ଆଲୋକ\"\nଛାପନ୍ତୁ(\"ନାମ ହେଉଛି:\")\nଛାପନ୍ତୁ(ନାମ)\nଛାପନ୍ତୁ(\"ବୟସ ହେଉଛି:\")\nଛାପନ୍ତୁ(ବୟସ)"
    },
    "ଡାଟା ପ୍ରକାର (Data Types)": {
        "title": "ଡାଟା ପ୍ରକାର (Data Types)",
        "desc": `
            <h1>ଡାଟା ପ୍ରକାର (Data Types) କ’ଣ?</h1>
            <p>ପ୍ରତ୍ୟେକ ତଥ୍ୟର ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ରକାର ଥାଏ। ଏହା କମ୍ପ୍ୟୁଟରକୁ ଜଣାଏ ଯେ ସେହି ତଥ୍ୟ ଉପରେ କି ପ୍ରକାର କାର୍ଯ୍ୟ କରାଯାଇପାରିବ।</p>
            
            <h2>ପ୍ରମୁଖ ଡାଟା ପ୍ରକାର:</h2>
            <ul>
                <li><strong>ଲେଖା (str):</strong> ଯାହାକୁ " " ଭିତରେ ରଖାଯାଏ। ଉଦାହରଣ: "ଓଡ଼ିଶା"</li>
                <li><strong>ପୂର୍ଣ୍ଣସଂଖ୍ୟା (int):</strong> ଦଶମିକ ନଥିବା ସଂଖ୍ୟା। ଉଦାହରଣ: ୧୦୦, ୨୫</li>
                <li><strong>ଦଶମିକ (float):</strong> ଦଶମିକ ଥିବା ସଂଖ୍ୟା। ଉଦାହରଣ: ୩.୧୪</li>
                <li><strong>ତାଲିକା (list):</strong> ଏକାଧିକ ତଥ୍ୟକୁ କ୍ରମରେ ରଖିବା ପାଇଁ [ ] ବ୍ୟବହୃତ ହୁଏ।</li>
            </ul>
        `,
        "code": "ସଂଖ୍ୟା = ୧୦୦\nଦଶମିକ_ସଂଖ୍ୟା = ୩.୧୪\nନାମ = \"ଓଡ଼ିଶା\"\nଫଳ_ତାଲିକା = [\"ଆମ୍ବ\", \"କଦଳୀ\", \"ପଣସ\"]\n\nଛାପନ୍ତୁ(ସଂଖ୍ୟା)\nଛାପନ୍ତୁ(ଦଶମିକ_ସଂଖ୍ୟା)\nଛାପନ୍ତୁ(ନାମ)\nଛାପନ୍ତୁ(ଫଳ_ତାଲିକା)\nଛାପନ୍ତୁ(ଲମ୍ବ(ଫଳ_ତାଲିକା))"
    },
    "ସର୍ତ୍ତ (Conditions)": {
        "title": "ସର୍ତ୍ତ (Conditions)",
        "desc": `
            <h1>ସର୍ତ୍ତମୂଳକ ନିଷ୍ପତ୍ତି (Conditions) କ’ଣ?</h1>
            <p>ପ୍ରୋଗ୍ରାମକୁ କୌଣସି ସର୍ତ୍ତ ଆଧାରରେ ଭିନ୍ନ ଭିନ୍ନ ନିଷ୍ପତ୍ତି ନେବାକୁ ହେଲେ Conditions ବ୍ୟବହାର କରାଯାଏ।</p>
            
            <h2>ପ୍ରମୁଖ ଶବ୍ଦାବଳୀ:</h2>
            <ul>
                <li><strong>ଯଦି (if):</strong> ସର୍ତ୍ତ ସତ୍ୟ ହେଲେ ଚାଲେ।</li>
                <li><strong>ଅନ୍ୟଥା (elif):</strong> ପୂର୍ବ ସର୍ତ୍ତ ଭୁଲ ହେଲେ ନୂଆ ସର୍ତ୍ତ ଯାଞ୍ଚ କରେ।</li>
                <li><strong>ନଚେତ୍ (else):</strong> ସବୁ ସର୍ତ୍ତ ଭୁଲ ହେଲେ ଚାଲେ।</li>
            </ul>
        `,
        "code": "ମାର୍କ = ୮୫\nଯଦି ମାର୍କ >= ୯୦:\n    ଛାପନ୍ତୁ(\"ଗ୍ରେଡ୍: A\")\nଅନ୍ୟଥା ଯଦି ମାର୍କ >= ୮୦:\n    ଛାପନ୍ତୁ(\"ଗ୍ରେଡ୍: B\")\nନଚେତ୍:\n    ଛାପନ୍ତୁ(\"ଗ୍ରେଡ୍: C\")"
    },
    "ଲୁପ୍ (Loops)": {
        "title": "ଲୁପ୍ (Loops)",
        "desc": `
            <h1>ଲୁପ୍ (Loops) କ’ଣ?</h1>
            <p>ଗୋଟିଏ କାର୍ଯ୍ୟକୁ ବାରମ୍ବାର କରିବା ପାଇଁ ଲୁପ୍ ବ୍ୟବହୃତ ହୁଏ।</p>
            
            <h2>ଲୁପ୍ ର ପ୍ରକାର:</h2>
            <ul>
                <li><strong>ପାଇଁ (for):</strong> ନିର୍ଦ୍ଦିଷ୍ଟ ପରିସର ମଧ୍ୟରେ ଚାଲିବା ପାଇଁ।</li>
                <li><strong>ଯେପର୍ଯ୍ୟନ୍ତ (while):</strong> ସର୍ତ୍ତ ସତ୍ୟ ଥିବା ପର୍ଯ୍ୟନ୍ତ ଚାଲିବା ପାଇଁ।</li>
            </ul>
        `,
        "code": "# ପାଇଁ ଲୁପ୍\nପାଇଁ i ମଧ୍ୟରେ ପରିସର(୫):\n    ଛାପନ୍ତୁ(i)"
    },
    "ପରିଭାଷା (Functions)": {
        "title": "ପରିଭାଷା (Functions)",
        "desc": `
            <h1>ପରିଭାଷା (Functions) କ’ଣ?</h1>
            <p>ଏହା ହେଉଛି ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରୁଥିବା କୋଡ୍‌ର ଗୋଷ୍ଠୀ, ଯାହାକୁ ଆମେ ଗୋଟିଏ ଥର ତିଆରି କରି ବାରମ୍ବାର ବ୍ୟବହାର କରିପାରିବା।</p>
        `,
        "code": "ପରିଭାଷା ଯୋଗ_କରନ୍ତୁ(କ, ଖ):\n    ଫେରାନ୍ତୁ କ + ଖ\n\nଫଳାଫଳ = ଯୋଗ_କରନ୍ତୁ(୧୫, ୨୫)\nଛାପନ୍ତୁ(ଫଳାଫଳ)"
    },
    "ଏଆଇ ସହିତ କୋଡିଂ (AI Coding)": {
        "title": "ଏଆଇ ସହିତ କୋଡିଂ (AI Coding)",
        "desc": `
            <h1>ଏଆଇ (AI) ସହିତ କୋଡିଂ କ’ଣ?</h1>
            <p>କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା (AI) ବ୍ୟବହାର କରି ଆପଣ ଚିତ୍ର ଚିହ୍ନଟ କରିପାରିବେ କିମ୍ବା ଏଆଇକୁ ପ୍ରଶ୍ନ ପଚାରିପାରିବେ।</p>
            
            <h2>ଏଆଇ କମାଣ୍ଡସ:</h2>
            <ul>
                <li><strong>ଏଆଇ_ଦେଖ (ai_dekha):</strong> ଏକ ଚିତ୍ର ଦେଖି ତାର ବିବରଣୀ ଫେରାଏ।</li>
                <li><strong>ଏଆଇ_ପଚାର (ai_pachara):</strong> ପ୍ରଶ୍ନ ପଚାରି ଉତ୍ତର ପାଇବା ପାଇଁ।</li>
            </ul>
        `,
        "code": "# ପାଠ ୧: ଏଆଇ ସହିତ କୋଡିଂ\n\nଫଳାଫଳ = ଏଆଇ_ଦେଖ(\"apple.jpg\")\nଛାପନ୍ତୁ(\"ଛବି ବିଷୟରେ:\")\nଛାପନ୍ତୁ(ଫଳାଫଳ)\n\nଉତ୍ତର = ଏଆଇ_ପଚାର(\"capital of odisha?\")\nଛାପନ୍ତୁ(\"ଏଆଇ ଉତ୍ତର:\")\nଛାପନ୍ତୁ(ଉତ୍ତର)\n\n# AI + if/else ଚ୍ୟାଲେଞ୍ଜ୍\nଫଳ = ଏଆଇ_ଦେଖ(\"snack.jpg\")\nଯଦି \"ଫଳ\" ମଧ୍ୟରେ ଫଳ:\n    ଛାପନ୍ତୁ(\"ଏହା ସ୍ୱାସ୍ଥ୍ୟକର!\")\nନଚେତ୍:\n    ଛାପନ୍ତୁ(\"ଏହା ସାବଧାନ ହୋଇ ଖାଆନ୍ତୁ\")"
    }
};

// --- App State ---
let pyodideInstance = null;
let currentEditor = null;
let activeLesson = null;
let currentFontSize = 14;

// --- Lint Marker State ---
let _lintMarkers = [];      // CodeMirror TextMarker objects
let _lintGutterLines = [];  // line numbers that have gutter markers

function clearLintMarkers() {
    _lintMarkers.forEach(m => m.clear());
    _lintMarkers = [];
    _lintGutterLines.forEach(line => {
        currentEditor.setGutterMarker(line, "cm-lint-gutter", null);
    });
    _lintGutterLines = [];
}

/**
 * Mark a line in the editor with a wavy underline and gutter icon.
 * @param {number} oneBased  - 1-based line number from Python traceback
 * @param {'error'|'warning'} severity
 * @param {string} message   - tooltip text
 */
function applyLintMarker(oneBased, severity, message) {
    if (!currentEditor) return;
    const line = Math.max(0, oneBased - 1); // CodeMirror is 0-based
    const lineText = currentEditor.getLine(line);
    if (lineText === undefined) return;

    // Wavy underline over entire line
    const marker = currentEditor.markText(
        { line, ch: 0 },
        { line, ch: lineText.length || 1 },
        {
            className: severity === "error" ? "cm-lint-error" : "cm-lint-warning",
            title: message
        }
    );
    _lintMarkers.push(marker);

    // Gutter icon
    const icon = document.createElement("div");
    icon.className = severity === "error" ? "cm-lint-gutter-error" : "cm-lint-gutter-warning";
    icon.title = message;
    icon.innerHTML = severity === "error" ? "●" : "▲";
    currentEditor.setGutterMarker(line, "cm-lint-gutter", icon);
    _lintGutterLines.push(line);
}

// --- Initialize App ---
window.addEventListener("DOMContentLoaded", async () => {
    // 1. Initialize CodeMirror Editor
    const textArea = document.getElementById("code-textarea");
    currentEditor = CodeMirror.fromTextArea(textArea, {
        mode: "python",
        theme: "dracula",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "cm-lint-gutter", "CodeMirror-foldgutter"],
        extraKeys: {
            "Ctrl-Q": (cm) => cm.foldCode(cm.getCursor())
        }
    });

    // Set Default Code
    const defaultCode = 'ପରିଭାଷା ସ୍ୱାଗତ(ନାମ):\n    ଯଦି ନାମ == ଶୂନ୍ୟ:\n        ଛାପନ୍ତୁ("ନମସ୍କାର, ଅଜ୍ଞାତ ବ୍ୟକ୍ତି!")\n    ନଚେତ୍:\n        ଛାପନ୍ତୁ("ନମସ୍କାର, " + ନାମ + "!")\n\nସ୍ୱାଗତ("ଛାତ୍ର")';
    currentEditor.setValue(defaultCode);

    // 2. Render Lessons Sidebar Buttons
    const buttonsContainer = document.getElementById("lesson-buttons-container");
    for (const [key, value] of Object.entries(CONCEPTS)) {
        const btn = document.createElement("button");
        btn.className = "lesson-btn";
        btn.innerHTML = `<i class="fa-solid fa-circle-play"></i> ${key}`;
        btn.onclick = () => openLesson(key);
        buttonsContainer.appendChild(btn);
    }

    // 3. Render Dictionary Content
    renderDictionary();

    // 4. Initialize Pyodide
    try {
        pyodideInstance = await loadPyodide();

        // Override input() to use browser prompt() dialog
        pyodideInstance.globals.set("input", (prompt) => {
            const val = window.prompt(prompt || "");
            return val === null ? "" : val;
        });

        // Expose JavaScript AI functions to Python environment
        pyodideInstance.globals.set("ai_dekha", js_ai_dekha);
        pyodideInstance.globals.set("ai_pachara", js_ai_pachara);

        // Update indicator
        const indicator = document.getElementById("status-indicator");
        indicator.className = "status ready";
        indicator.innerHTML = `<i class="fa-solid fa-circle-check"></i> ପ୍ରସ୍ତୁତ (Ready)`;
        
        document.getElementById("run-btn").disabled = false;
    } catch (err) {
        document.getElementById("console-output").textContent = `ତ୍ରୁଟି (Error initializing Pyodide):\n${err}`;
    }

    // 5. Wire up Event Handlers
    document.getElementById("run-btn").onclick = runCode;
    document.getElementById("clear-btn").onclick = clearEditor;
    document.getElementById("help-btn").onclick = openHelp;
    document.getElementById("modal-close").onclick = closeLesson;
    document.getElementById("help-modal-close").onclick = closeHelp;
    document.getElementById("modal-load-btn").onclick = loadLessonCode;

    // Dropdown selection change handler
    document.getElementById("sample-image-select").onchange = (e) => {
        const imgName = e.target.value;
        const placeholder = document.getElementById("ai-preview-placeholder");
        const imgEl = document.getElementById("ai-preview-img");

        if (imgName === "none") {
            placeholder.style.display = "flex";
            imgEl.style.display = "none";
        } else {
            js_ai_dekha(imgName, "");
        }
    };

    // New feature event listeners
    document.getElementById("theme-select").onchange = (e) => changeTheme(e.target.value);
    document.getElementById("font-increase-btn").onclick = () => changeFontSize(1);
    document.getElementById("font-decrease-btn").onclick = () => changeFontSize(-1);
    document.getElementById("download-btn").onclick = downloadCode;

    // Status bar updates
    currentEditor.on("cursorActivity", updateStatusBar);
    currentEditor.on("change", updateStatusBar);
    updateStatusBar();

    // CodeMirror Phonetic Auto-Replace on Typing Space/Colons/Brackets
    currentEditor.on("keyup", (cm, event) => {
        const triggers = [" ", "Enter", "(", ":", ")"];
        if (!triggers.includes(event.key)) return;

        const cursor = cm.getCursor();
        const lineContent = cm.getLine(cursor.line);
        const lineStartToCursor = lineContent.slice(0, cursor.ch);

        // Find the last typed word
        const match = lineStartToCursor.match(/\b([a-zA-Z]+)(\s|\(|\:|\)|\n)?$/);
        if (match) {
            const engWord = match[1].toLowerCase();
            const triggerChar = match[2] || "";

            if (PHONETIC_MAP[engWord]) {
                const odiaWord = PHONETIC_MAP[engWord];
                const startCh = cursor.ch - engWord.length - triggerChar.length;
                const endCh = cursor.ch - triggerChar.length;
                
                cm.replaceRange(odiaWord, {line: cursor.line, ch: startCh}, {line: cursor.line, ch: endCh});
            }
        }
    });
});

// --- Font Size Control ---
function changeFontSize(delta) {
    currentFontSize = Math.max(10, Math.min(26, currentFontSize + delta));
    const cm = document.querySelector(".CodeMirror");
    if (cm) cm.style.fontSize = currentFontSize + "px";
    document.getElementById("font-size-display").textContent = currentFontSize + "px";
    if (currentEditor) currentEditor.refresh();
}

// --- Theme Switcher ---
function changeTheme(theme) {
    if (currentEditor) currentEditor.setOption("theme", theme);
}

// --- Download Code ---
function downloadCode() {
    const code = currentEditor ? currentEditor.getValue() : "";
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "kalinga_code.kal";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// --- Status Bar ---
function updateStatusBar() {
    if (!currentEditor) return;
    const cursor = currentEditor.getCursor();
    const code = currentEditor.getValue();
    const lineColEl = document.getElementById("status-line-col");
    const charsEl = document.getElementById("status-chars");
    if (lineColEl) lineColEl.textContent = `Ln ${cursor.line + 1}, Col ${cursor.ch + 1}`;
    if (charsEl) charsEl.textContent = `${code.length} chars`;
}

// --- Translate common Python error detail messages to Odia ---
function translateErrorDetail(detail) {
    const patterns = [
        // NameError
        [/^name '(.+)' is not defined$/,
            (m) => `'${m[1]}' ନାମ ସଂଜ୍ଞାୟିତ ହୋଇ ନାହିଁ — ଏହାକୁ ପ୍ରଥମେ ଘୋଷଣା କରନ୍ତୁ`],

        // TypeError: can only concatenate
        [/^can only concatenate (.+) \(not "(.+)"\) to \1$/,
            (m) => `କେବଳ ${m[1]} ସହ ${m[1]} ଯୋଗ ହୋଇ ପାରିବ, ${m[2]} ନୁହଁ`],

        // TypeError: unsupported operand
        [/^unsupported operand type\(s\) for (.+): '(.+)' and '(.+)'$/,
            (m) => `'${m[2]}' ଏବଂ '${m[3]}' ମଧ୍ୟରେ '${m[1]}' ଅପରେଶନ ସମ୍ଭବ ନୁହଁ`],

        // TypeError: argument
        [/^(\w+)\(\) takes (\d+) positional argument[s]? but (\d+) (?:was|were) given$/,
            (m) => `'${m[1]}' ଫଙ୍କସନ ${m[2]}ଟି argument ଆଶା କଲା, କିନ୍ତୁ ${m[3]}ଟି ଦିଆ ଗଲା`],

        // TypeError: missing argument
        [/^(\w+)\(\) missing (\d+) required positional argument[s]?: (.+)$/,
            (m) => `'${m[1]}' ଫଙ୍କସନରେ ${m[2]}ଟି argument ଅନୁପସ୍ଥିତ: ${m[3]}`],

        // TypeError: not callable
        [/^'(.+)' object is not callable$/,
            (m) => `'${m[1]}' ଏକ ଫଙ୍କସନ ନୁହଁ, ଏହାକୁ () ସହ ଡାକ ହୁଏ ନାହିଁ`],

        // IndexError
        [/^list index out of range$/,
            () => `ତାଲିକା ସୂଚକ ସୀମା ବାହାରୁ — ତାଲିକାର ଆକାର ଯାଞ୍ଚ କରନ୍ତୁ`],

        // KeyError (key is usually quoted)
        [/^'(.+)'$/,
            (m) => `ଅଭିଧାନରେ '${m[1]}' ଚାବି ନାହିଁ`],

        // ZeroDivisionError
        [/^division by zero$/,
            () => `ଶୂନ୍ୟ ଦ୍ୱାରା ଭାଗ ହୁଏ ନାହିଁ`],

        // ZeroDivisionError (modulo)
        [/^integer division or modulo by zero$/,
            () => `ଶୂନ୍ୟ ଦ୍ୱାରା ଭାଗ ବା ଶେଷଭାଗ ହୁଏ ନାହିଁ`],

        // ValueError: invalid literal
        [/^invalid literal for int\(\) with base (\d+): '(.+)'$/,
            (m) => `'${m[2]}' ଏକ ବୈଧ ସଂଖ୍ୟା ନୁହଁ — ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଦେବା ଆବଶ୍ୟକ`],

        // IndentationError
        [/^expected an indented block(?: after .+)?$/,
            () => `ଇଣ୍ଡେଣ୍ଟ ହୋଇଥିବା ବ୍ଲକ ଆଶା କରାଯାଉଛି — ⬆ space ଦେଇ ସ୍ଥାନ ଭିତରକୁ ଯାଆନ୍ତୁ`],

        [/^unexpected indent$/,
            () => `ଅପ୍ରତ୍ୟାଶିତ ଇଣ୍ଡେଣ୍ଟ — ଖାଲି ଜାଗା ଅଧିକ ହୋଇ ଗଲା`],

        // SyntaxError
        [/^invalid syntax$/,
            () => `ଅବୈଧ ବାକ୍ୟଗଠନ — ଶବ୍ଦ ବା ବ୍ରାକେଟ ଯାଞ୍ଚ କରନ୍ତୁ`],

        [/^EOL while scanning string literal$/,
            () => `ଷ୍ଟ୍ରିଂ ଶେଷ ହୋଇ ନାହିଁ — ବନ୍ଧ ଉଦ୍ଧୃତି (" ଅଥବା ') ଦେବାକୁ ଭୁଲ ଗଲେ`],

        [/^EOF while scanning triple-quoted string literal$/,
            () => `ତ୍ରିଗୁଣ ଉଦ୍ଧୃତି ଷ୍ଟ୍ରିଂ ଶେଷ ହୋଇ ନାହିଁ`],

        // AttributeError
        [/^'(.+)' object has no attribute '(.+)'$/,
            (m) => `'${m[1]}' ଅବଜେକ୍ଟରେ '${m[2]}' ଗୁଣ ନାହିଁ`],

        // RecursionError
        [/^maximum recursion depth exceeded/,
            () => `ଅଧିକ ପୁନରାବୃତ୍ତି — ଫଙ୍କସନ ନିଜକୁ ଅତ୍ୟଧିକ ଥର ଡାକୁଛି`],
    ];

    for (const [regex, translate] of patterns) {
        const m = detail.match(regex);
        if (m) return translate(m);
    }

    // If no Odia translation matched, return original with a note
    return `${detail}`;
}

function formatPythonError(errMessage) {
    const msg = String(errMessage);

    // --- 1. Find the LAST line number in the traceback (innermost frame = actual error)
    let lineNum = "?";
    const allLineMatches = [...msg.matchAll(/File\s+"[^"]*",\s+line\s+(\d+)/g)];
    if (allLineMatches.length > 0) {
        // Last match is the deepest frame = actual error location
        lineNum = allLineMatches[allLineMatches.length - 1][1];
    } else {
        // Fallback: SyntaxError sometimes uses a simpler "line N" format
        const fallback = msg.match(/line\s+(\d+)/);
        if (fallback) lineNum = fallback[1];
    }

    // --- 2. Error type mapping
    const errorTypes = {
        "SyntaxError":      "ବାକ୍ୟଗଠନ ତ୍ରୁଟି (Syntax Error)",
        "IndentationError": "ଇଣ୍ଡେଣ୍ଟେସନ ତ୍ରୁଟି (Indentation Error)",
        "NameError":        "ନାମ ତ୍ରୁଟି (Name Error)",
        "TypeError":        "ପ୍ରକାର ତ୍ରୁଟି (Type Error)",
        "ValueError":       "ମୂଲ୍ୟ ତ୍ରୁଟି (Value Error)",
        "IndexError":       "ସୂଚକ ତ୍ରୁଟି (Index Error)",
        "KeyError":         "ଚାବି ତ୍ରୁଟି (Key Error)",
        "AttributeError":   "ବିଶେଷତ୍ୱ ତ୍ରୁଟି (Attribute Error)",
        "ZeroDivisionError":"ଶୂନ୍ୟ ଭାଗ ତ୍ରୁଟି (Zero Division Error)",
        "RecursionError":   "ପୁନରାବୃତ୍ତି ତ୍ରୁଟି (Recursion Error)",
        "ImportError":      "ଆମଦାନୀ ତ୍ରୁଟି (Import Error)",
        "StopIteration":    "ପୁନରାବୃତ୍ତି ଶେଷ (Stop Iteration)",
        "RuntimeError":     "ଚଳଚ୍ଚଳ ତ୍ରୁଟି (Runtime Error)",
    };
    let odiaErrorType = "ଅଜ୍ଞାତ ତ୍ରୁଟି (Unknown Error)";
    let matchedEnType = null;
    for (const [enType, odiaType] of Object.entries(errorTypes)) {
        if (msg.includes(enType)) {
            odiaErrorType = odiaType;
            matchedEnType = enType;
            break;
        }
    }

    // --- 3. Extract the detail message after "ErrorType: ..." and translate to Odia
    let detail = "";
    if (matchedEnType) {
        const detailMatch = msg.match(new RegExp(matchedEnType + ":\\s*(.+)"));
        if (detailMatch) {
            const rawDetail = detailMatch[1].split("\n")[0].trim();
            detail = translateErrorDetail(rawDetail);
        }
    }

    // --- 4. Build readable Odia output
    let output = `⚠️  ଲାଇନ୍ ${lineNum} ରେ ତ୍ରୁଟି ଅଛି! (Error on Line ${lineNum})\n`;
    output += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    output += `ତ୍ରୁଟି ପ୍ରକାର : ${odiaErrorType}\n`;
    if (detail) {
        output += `ବିବରଣ       : ${detail}\n`;
    }
    return output;
}

// --- AST Lint Check (runs before execution) ---
async function lintCode(transpiledCode) {
    const lintScript = `
import ast, sys, io, json

_warnings = []
_code = ${JSON.stringify(String(transpiledCode))}

try:
    _tree = ast.parse(_code)
    
    # Collect all names assigned/defined at any scope
    _defined = set()
    for _node in ast.walk(_tree):
        if isinstance(_node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            _defined.add(_node.name)
            for _arg in _node.args.args:
                _defined.add(_arg.arg)
        elif isinstance(_node, ast.Assign):
            for _t in _node.targets:
                if isinstance(_t, ast.Name):
                    _defined.add(_t.id)
        elif isinstance(_node, (ast.Import, ast.ImportFrom)):
            for _alias in _node.names:
                _defined.add(_alias.asname or _alias.name.split('.')[0])
        elif isinstance(_node, ast.For):
            if isinstance(_node.target, ast.Name):
                _defined.add(_node.target.id)
        elif isinstance(_node, ast.NamedExpr):
            _defined.add(_node.target.id)
    
    # Walk again for suspicious patterns
    for _node in ast.walk(_tree):
        # 1. Bare name on its own line (likely split keyword like ଛା / ପନ୍ତୁ)
        if isinstance(_node, ast.Expr) and isinstance(_node.value, ast.Name):
            _name = _node.value.id
            if _name not in _defined and not hasattr(__builtins__, _name):
                _warnings.append({
                    "line": _node.lineno,
                    "msg": f"'{_name}' ଏକୁଟା ଲିଖା ଅଛି — ସ୍ପ୍ଲିଟ୍ ଶବ୍ଦ ବା ଟାଇପୋ? (Bare name — split keyword or typo?)"
                })
        # 2. input() call but return value is discarded (bare statement)
        elif isinstance(_node, ast.Expr) and isinstance(_node.value, ast.Call):
            _fn = _node.value.func
            _fname = _fn.id if isinstance(_fn, ast.Name) else None
            if _fname == "input":
                _warnings.append({
                    "line": _node.lineno,
                    "msg": f"'ନିଅନ୍ତୁ/input' ଲାଇନ୍ {_node.lineno}ରେ ବ୍ୟବହୃତ ହୋଇଛି କିନ୍ତୁ ଫଳ ସଂରକ୍ଷଣ ହୋଇ ନାହିଁ। ଛାପିବାକୁ 'ଛାପନ୍ତୁ' ବ୍ୟବହାର କରନ୍ତୁ କି? (input() return value not stored — did you mean print?)"
                })

    print(json.dumps({"ok": True, "warnings": _warnings}))

except SyntaxError as _e:
    print(json.dumps({"ok": False, "line": _e.lineno or "?", "msg": str(_e.msg)}))
except Exception as _e:
    print(json.dumps({"ok": True, "warnings": []}))
`;

    try {
        pyodideInstance.runPython(`import sys, io; sys.stdout = io.StringIO()`);
        pyodideInstance.runPython(lintScript);
        const raw = pyodideInstance.runPython(`sys.stdout.getvalue()`);
        return JSON.parse(raw.trim());
    } catch (e) {
        return { ok: true, warnings: [] };
    }
}

// --- Run Code ---
async function runCode() {
    if (!pyodideInstance) return;

    const odiaCode = currentEditor.getValue();
    const consoleOut = document.getElementById("console-output");
    consoleOut.textContent = "କୋଡ୍ ଯାଞ୍ଚ ହେଉଅଛି... (Checking...)";
    consoleOut.className = "console-output";

    // Clear previous markers on every new run
    clearLintMarkers();

    try {
        const transpiledCode = transpile(odiaCode);

        // --- Step 1: AST Lint before running ---
        const lint = await lintCode(transpiledCode);

        if (!lint.ok) {
            // SyntaxError caught at parse time
            const syntaxLine = parseInt(lint.line) || 1;
            const odiaMsg = translateErrorDetail(lint.msg) || lint.msg;
            applyLintMarker(syntaxLine, "error", `ବାକ୍ୟଗଠନ ତ୍ରୁଟି: ${odiaMsg}`);
            consoleOut.className = "console-output error";
            consoleOut.textContent =
                `⚠️  ଲାଇନ୍ ${lint.line} ରେ ତ୍ରୁଟି ଅଛି! (Error on Line ${lint.line})\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `ତ୍ରୁଟି ପ୍ରକାର : ବାକ୍ୟଗଠନ ତ୍ରୁଟି (Syntax Error)\n` +
                `ବିବରଣ       : ${odiaMsg}\n`;
            return;
        }

        // Build warning prefix if there are suspicious patterns
        let warnText = "";
        if (lint.warnings && lint.warnings.length > 0) {
            warnText += `🔍 ଯାଞ୍ଚ ସତର୍କତା (Lint Warnings):\n`;
            warnText += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
            for (const w of lint.warnings) {
                warnText += `  ⚠ ଲାଇନ୍ ${w.line}: ${w.msg}\n`;
                applyLintMarker(w.line, "warning", w.msg);
            }
            warnText += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        }

        // --- Step 2: Clear stdout & run ---
        pyodideInstance.runPython(`
            import sys
            import io
            sys.stdout = io.StringIO()
        `);

        await pyodideInstance.runPythonAsync(transpiledCode);

        const stdout = pyodideInstance.runPython(`sys.stdout.getvalue()`);

        if (warnText) {
            consoleOut.className = "console-output warning";
            consoleOut.textContent = warnText + (stdout.trim() ? `\n📤 ଆଉଟ୍‌ପୁଟ୍ (Output):\n${stdout}` : "✓ ଅଉଟ୍‌ପୁଟ୍ ନାହିଁ");
        } else if (stdout.trim()) {
            consoleOut.textContent = stdout;
        } else {
            consoleOut.textContent = "✓ କୋଡ୍ ସଫଳତାର ସହ ଚାଲିଲା (Code ran successfully without output)";
        }
    } catch (err) {
        const errText = formatPythonError(err.message || String(err));
        consoleOut.textContent = errText;
        consoleOut.className = "console-output error";
        // Extract line number and mark in editor
        const lineMatch = errText.match(/ଲାଇନ୍\s+(\d+)/);
        if (lineMatch) {
            const errLine = parseInt(lineMatch[1]);
            applyLintMarker(errLine, "error", errText.split("\n").find(l => l.startsWith("ବିବରଣ")) || "");
        }
    }
}

// --- Editor Actions ---
function clearEditor() {
    if (confirm("ଆପଣ କୋଡ୍ ସମ୍ପାଦକ ସଫା କରିବାକୁ ଚାହାଁନ୍ତି କି? (Clear Editor?)")) {
        currentEditor.setValue("");
    }
}

function openHelp() {
    document.getElementById("help-modal").classList.add("open");
}

function closeHelp() {
    document.getElementById("help-modal").classList.remove("open");
}

// --- Lesson Actions ---
function openLesson(key) {
    activeLesson = key;
    const lesson = CONCEPTS[key];
    document.getElementById("modal-title").textContent = lesson.title;
    
    // Build descriptive HTML + Example Code Box
    let fullDescHtml = lesson.desc;
    if (lesson.code) {
        fullDescHtml += `
            <div class="lesson-example">
                <h2>ସମ୍ପୂର୍ଣ୍ଣ କୋଡ୍ ଉଦାହରଣ (Complete Code Example):</h2>
                <pre class="code-snippet">${lesson.code}</pre>
            </div>
        `;
    }
    
    document.getElementById("modal-body-content").innerHTML = fullDescHtml;
    document.getElementById("lesson-modal").classList.add("open");
}

function closeLesson() {
    document.getElementById("lesson-modal").classList.remove("open");
}

function loadLessonCode() {
    if (activeLesson && CONCEPTS[activeLesson]) {
        currentEditor.setValue(CONCEPTS[activeLesson].code);
        closeLesson();
    }
}

// --- Render Dictionary ---
function renderDictionary() {
    const dictBox = document.getElementById("dictionary-box");
    
    const items = [
        { header: "ମୂଳ ଶବ୍ଦ (Core Keywords)" },
        { phone: "chhapantu", odia: "ଛାପନ୍ତୁ", eng: "print" },
        { phone: "niantu", odia: "ନିଅନ୍ତୁ", eng: "input" },
        { phone: "paribhasa", odia: "ପରିଭାଷା", eng: "def" },
        { phone: "pherantu", odia: "ଫେରାନ୍ତୁ", eng: "return" },
        { phone: "sreni", odia: "ଶ୍ରେଣୀ", eng: "class" },
        { phone: "amadani", odia: "ଆମଦାନୀ", eng: "import" },
        { phone: "chesta", odia: "ଚେଷ୍ଟା", eng: "try" },
        { phone: "truti", odia: "ତ୍ରୁଟି", eng: "except" },
        { phone: "bhangantu", odia: "ଭାଙ୍ଗନ୍ତୁ", eng: "break" },
        { phone: "jarirakhantu", odia: "ଜାରିରଖନ୍ତୁ", eng: "continue" },
        { phone: "uthantu", odia: "ଉଠାନ୍ତୁ", eng: "raise" },
        { phone: "pass", odia: "ପାସ୍", eng: "pass" },
        { phone: "libhantu", odia: "ଲିଭାନ୍ତୁ", eng: "del" },
        
        { header: "ସର୍ତ୍ତ ଓ ଲୁପ୍ (Logic & Loops)" },
        { phone: "jadi", odia: "ଯଦି", eng: "if" },
        { phone: "anyatha", odia: "ଅନ୍ୟଥା", eng: "elif" },
        { phone: "nachet", odia: "ନଚେତ୍", eng: "else" },
        { phone: "pain", odia: "ପାଇଁ", eng: "for" },
        { phone: "jeparjyatna", odia: "ଯେପର୍ଯ୍ୟନ୍ତ", eng: "while" },
        
        { header: "ତଥ୍ୟ ପ୍ରକାର (Data Types)" },
        { phone: "lekha", odia: "ଲେଖା", eng: "str" },
        { phone: "purnasankhya", odia: "ପୂର୍ଣ୍ଣସଂଖ୍ୟା", eng: "int" },
        { phone: "dashamika", odia: "ଦଶମିକ", eng: "float" },
        { phone: "talika", odia: "ତାଲିକା", eng: "list" },
        { phone: "abhidhana", odia: "ଅଭିଧାନ", eng: "dict" },
        { phone: "set", odia: "ସେଟ୍", eng: "set" },
        { phone: "tuple", odia: "ଟ୍ୟୁପଲ୍", eng: "tuple" },
        { phone: "satya", odia: "ସତ୍ୟ", eng: "True" },
        { phone: "mithya", odia: "ମିଥ୍ୟା", eng: "False" },
        { phone: "shunya", odia: "ଶୂନ୍ୟ", eng: "None" },
        
        { header: "비ଲ୍ଟ-ଇନ୍ ଓ ସମଷ୍ଟି (Built-ins)" },
        { phone: "lamba", odia: "ଲମ୍ବ", eng: "len" },
        { phone: "parisara", odia: "ପରିସର", eng: "range" },
        { phone: "samasti", odia: "ସମଷ୍ଟି", eng: "sum" },
        { phone: "sarbadhika", odia: "ସର୍ବାଧିକ", eng: "max" },
        { phone: "sarbanimna", odia: "ସର୍ବନିମ୍ନ", eng: "min" },
        { phone: "paramamana", odia: "ପରମମାନ", eng: "abs" },
        { phone: "golakara", odia: "ଗୋଲକାର", eng: "round" },
        { phone: "kramabaddha", odia: "କ୍ରମବଦ୍ଧ", eng: "sorted" },
        { phone: "prakara", odia: "ପ୍ରକାର", eng: "type" },
        { phone: "zip", odia: "ଜିପ୍", eng: "zip" },
        { phone: "ganana", odia: "ଗଣନା", eng: "enumerate" },
        
        { header: "ଅନ୍ୟାନ୍ୟ (Others)" },
        { phone: "ebam", odia: "ଏବଂ", eng: "and" },
        { phone: "kimba", odia: "କିମ୍ବା", eng: "or" },
        { phone: "nuhen", odia: "ନୁହେଁ", eng: "not" },
        { phone: "heuchi", odia: "ହେଉଛି", eng: "is" },
        { phone: "jepari", odia: "ଯେପରି", eng: "as" },
        { phone: "biswabyapee", odia: "ବିଶ୍ୱବ୍ୟାପୀ", eng: "global" },
        { phone: "sthaniya_nuhen", odia: "ସ୍ଥାନୀୟ_ନୁହେଁ", eng: "nonlocal" },
        { phone: "sahita", odia: "ସହିତ", eng: "with" },
        { phone: "utpanna", odia: "ଉତ୍ପନ୍ନ", eng: "yield" },
        { phone: "lambda", odia: "ଲାମଡା", eng: "lambda" },
        { phone: "nischit", odia: "ନିଶ୍ଚିତ", eng: "assert" },
        
        { header: "ମେଥଡ୍ସ (Methods)" },
        { phone: "jodantu", odia: "ଯୋଡନ୍ତୁ", eng: "append" },
        { phone: "bibhajana", odia: "ବିଭାଜନ", eng: "split" },
        { phone: "sanjoga", odia: "ସଂଯୋଗ", eng: "join" },
        { phone: "chhantantu", odia: "ଛාଣ୍ଟନ୍ତୁ", eng: "strip" },
        { phone: "badalantu", odia: "ବଦଳାନ୍ତୁ", eng: "replace" },
        { phone: "sajantu", odia: "ସଜାନ୍ତୁ", eng: "format" },
        
        { header: "ଏଆଇ (AI Functions)" },
        { phone: "eai_dekha", odia: "ଏଆଇ_ଦେଖ", eng: "AI Vision" },
        { phone: "eai_pachara", odia: "ଏଆଇ_ପଚାର", eng: "AI Ask" }
    ];

    let html = "";
    for (const item of items) {
        if (item.header) {
            html += `<div class="dict-header">${item.header}</div>`;
        } else {
            html += `• ${item.phone} -> ${item.odia} (${item.eng})\n`;
        }
    }
    dictBox.innerHTML = html;
}
