//lang_vowel: key map for vowel characters for different languages - 
//contains vowels, numerals, other symbols etc.,
//follow standards like rts,itrans etc
var lang_vowel = 
    new Array(
        "a aa A a' i ii ee ia i' I u uu oo U ua u' e E ea ae e' ai o O oe "  +
        "oa o' au ou aq q Q sri 0 1 2 3 4 5 6 7 8 9 ^",
        "a aa A a' i ii ee ia i' I u uu oo U ua u' r'u Ru e E ea ae e' ai "  +
        "o O oe oa o' au ou ~l ~L M @h @H @M q @2 oM OM 0 1 2 3 4 5 6 7 8 "  +
        "9 | || ^",
        "a aa A a' i ii ee ia i' I u uu oo U ua u' R r' r'u Ru e E ea ae "   +
        "e' ai o O oe oa o' au ou ~l ~L M @h @H @M @2 0 1 2 3 4 5 6 7 8 9 "  +
        "| || ^",
        "` ~ 1 2 3 4 5 6 7 8 9 0 ) _ + q Q w W e E r R t T y Y u U i I o "   +
        "O p P [ { ] } a A s S d D f F g G h H j J k K l L \\ | z Z x X c "  +
        "C v V b B n N m M < . > /",
        "a A b B c C d D e E f F g G h H i I j J k K l L m M n N o O p P q " +
        "Q r R s S t T u U v V w W x X y Y z Z [ ] { } \" ' ; : < > 0 1 2 "  +
        "3 4 5 6 7 8 9 / \\ ~ | ? ! @ # _ + = & ^ * %",
        "a aA ai aI au aU ae aE aY ao aO aOU aq A i I u U e E Y o O OU k g " +
        "f c F t N d n p b m y r l w v l' L R n' s S h j _ 0 1 2 3 4 5 6 7 " +
        "8 9",
        "a aA ai aI au aU aeV ae aE aEY aoV ao aO aOY aq aQ A i I u U eV "   +
        "e E EY oV o O OY M H z q Q k K g G f c C j J F t T d D N w W x "    +
        "X n p P b B m y r l v S s R h lY k_R w_r j_F S_r _ 0 1 2 3 4 5 6 "  +
        "7 8 9"
    );

//lang_vowel_code: unicode value for independent vowel - when added with the 
//starting unicode value of a particular indic language will produce the indic 
//character
var lang_vowel_code = 
    new Array(
        "5,6,6,6,7,8,8,8,8,8,9,10,10,10,10,10,14,15,15,15,15,16,18,19,19,"  +
        "19,19,20,20,3,3,3,56 77 48 64,102,103,104,105,106,107,108,109,"    +
        "110,111,5260",
        "5,6,6,6,7,8,8,8,8,8,9,10,10,10,10,10,11,96,15,15,15,15,14,16,19,"  +
        "19,19,19,18,20,20,12,97,2,3,3,1,60,61,80,80,102,103,104,105,106,"  +
        "107,108,109,110,111,100,101,5900",
        "5,6,6,6,7,8,8,8,8,8,9,10,10,10,10,10,11,11,96,96,14,15,15,15,15,"  +
        "16,18,19,19,19,19,20,20,12,97,2,3,3,1,-707,102,103,104,105,106,"   +
        "107,108,109,110,111,-668,-667,5132",
        "61,60,103,104,105,106,107,108,109,110,111,102,112,82,5900,31,32,"  +
        "76,20,71,72,48,67,36,37,47,30,65,66,63,64,75,19,42,43,7,8,15,16,"  +
        "62,6,56,54,38,39,9,10,23,24,57,5,28,29,21,22,50,51,80,3,55,11,33," +
        "34,27,28,53,1,44,45,40,35,46,2,25,100,101,77",
        "75,19,53,52,46,35,77,5,62,6,63,7,65,9,42,43,23,24,48,49,21,22,"    +
        "36,37,56,54,50,51,38,39,28,29,76,20,64,8,71,15,66,10,57,25,40,41," +
        "72,16,2,1,44,45,70,14,33,60,34,30,32,31,26,27,55,100,102,103,"     +
        "104,105,106,107,108,109,110,111,47,73,74,17,95,13,69,18,3,11,67,"  +
        "21 77 55,36 77 48,54 77 48,28 77 30",
        "5,6,7,8,9,10,14,15,16,18,19,20,3,62,63,64,65,66,70,71,72,74,75,"   +
        "76,21,21,25,26,30,36,35,31,40,42,42,46,47,48,50,53,53,52,51,49,"   +
        "41,56,55,57,28,77,102,103,104,105,106,107,108,109,110,111",
        "5,6,7,8,9,10,14,15,16,13,18,19,20,17,11,96,62,63,64,65,66,70,"     +
        "71,72,69,74,75,76,73,2,3,1,67,68,21,22,23,24,25,26,27,28,29,30,"   +
        "31,32,33,34,35,36,37,38,39,40,42,43,44,45,46,47,48,50,53,54,56,"   +
        "55,57,51,21 77 55,36 77 48,28 77 30,54 77 48,77,102,103,104,105,"  +
        "106,107,108,109,110,111"
    );

//lang_vowel_symbol_code: unicode value for dependent vowel - when added with  
//the starting unicode value of a particular indic language will produce the  
//indic character
var lang_vowel_symbol_code = 
    new Array(
        ",62,62,62,63,64,64,64,64,64,65,66,66,66,66,66,70,71,71,71,71,72," +
        "74,75,75,75,75,76,76,,,,,,,,,,,,,,,",
        ",62,62,62,63,64,64,64,64,64,65,66,66,66,66,66,67,68,71,71,71,71," +
        "70,72,75,75,75,75,74,76,76,98,99,2,3,3,1,60,61,,,,,,,,,,,,,,,",
        ",62,62,62,63,64,64,64,64,64,65,66,66,66,66,66,67,67,68,68,70,71," +
        "71,71,71,72,74,75,75,75,75,76,76,,,2,3,3,1,,,,,,,,,,,,,,"
    );

//lang_consonant: key map for consonant characters for different languages - 
//should follow the same keymap standard as vowel characters.
var lang_consonant = 
    new Array(
        "ksh k kh K Kh g gh G Gh ~m ng c ch C Ch c' j jh J Jh ~n ny T t' "  +
        "Th th' D d' Dh dh' N nh t th d dh n n' p ph f P Ph b bh B Bh m y " +
        "r R r' l L lh Lh l' z Z zh Zh v w S s' sh Sh s h H",
        "k kh kH K Kh KH g gh gH G Gh GH ~m c ch cH C Ch CH c' j jh jH J "  +
        "Jh JH ~n T t' Th TH th' tH' D d' Dh DH dh' dH' N nh nH n' t th "   +
        "tH d dh dH n p ph pH f P Ph PH b bh bH B Bh BH m y r l L lh v w "  +
        "S s' sh sH Sh SH s h H",
        "k kh kH K Kh KH g gh gH G Gh GH ~m c ch cH C Ch CH c' j jh jH J "  +
        "Jh JH ~n T t' Th TH th' tH' D d' Dh DH dh' dH' N nh nH n' t th "   +
        "tH d dh dH n p ph pH f P Ph PH b bh bH B Bh BH m y r l v w S s' "  +
        "sh sH Sh SH s h H L lh Lh l' r\" ~r"
    );

//lang_consonant_code: unicode value for consonants - when added with the 
//starting unicode value of a particular indic language will produce the indic 
//character
var lang_consonant_code = 
    new Array(
        "21 77 55,21,21,21,21,21,21,21,21,25,25,26,26,26,26,26,28,28,28,28," +
        "30,30,31,31,31,31,31,31,31,31,35,35,36,36,36,36,40,41,42,42,42,42," +
        "42,42,42,42,42,46,47,48,49,49,50,51,52,51,51,52,52,52,52,53,53,55," +
        "55,55,55,56,57,57",
        "21,22,22,22,22,22,23,24,24,24,24,24,25,26,26,26,27,27,27,27,28,29," +
        "29,29,29,29,30,31,31,32,32,32,32,33,33,34,34,34,34,35,35,35,35,36," +
        "37,37,38,39,39,40,42,43,43,43,43,43,43,44,45,45,45,45,45,46,47,48," +
        "50,51,52,53,53,54,54,55,55,55,55,56,57,57",
        "21,22,22,22,22,22,23,24,24,24,24,24,25,26,26,26,27,27,27,27,28,29," +
        "29,29,29,29,30,31,31,32,32,32,32,33,33,34,34,34,34,35,35,35,35,36," +
        "37,37,38,39,39,40,42,43,43,43,43,43,43,44,45,45,45,45,45,46,47,48," +
        "50,53,53,54,54,55,55,55,55,56,57,57,51,51,51,51,49,49"
    );


//details stored in lang_details are in the following order
//"keyboard_label","vowel_index","vowel_code_index","vowel_symbol_code_index",
//"consonant_index","consonant_code_index","codebase_value","halant_value"

var lang_details = 
    new Array(
        new Array("tamil_rts",     "0", "0", "0", "0",  "0",   "0x0b80", "77"),
        new Array("hindi_rts",     "1", "1", "1", "1",  "1",   "0x0900", "77"),
        new Array("marathi_rts",   "1", "1", "1", "1",  "1",   "0x0900", "77"),
        new Array("telugu_rts",    "2", "2", "2", "2",  "2",   "0x0c00", "77"),
        new Array("nepali_xkb",    "3", "3", "-1", "-1", "-1", "0x0900", "-1"),
        new Array("bengali_ins",   "4", "4", "-1", "-1", "-1", "0x0980", "-1"),
        new Array("gujarathi_ins", "4", "4", "-1", "-1", "-1", "0x0a80", "-1"),
        new Array("gurumukhi_ins", "4", "4", "-1", "-1", "-1", "0x0a00", "-1"),
        new Array("hindi_ins",     "4", "4", "-1", "-1", "-1", "0x0900", "-1"),
        new Array("kannada_ins",   "4", "4", "-1", "-1", "-1", "0x0c80", "-1"),
        new Array("malayalam_ins", "4", "4", "-1", "-1", "-1", "0x0d00", "-1"),
        new Array("marathi_ins",   "4", "4", "-1", "-1", "-1", "0x0900", "-1"),
        new Array("oriya_ins",     "4", "4", "-1", "-1", "-1", "0x0b00", "-1"),
        new Array("tamil_ins",     "4", "4", "-1", "-1", "-1", "0x0b80", "-1"),
        new Array("telugu_ins",    "4", "4", "-1", "-1", "-1", "0x0c00", "-1"),
        new Array("tamil_wx",      "5", "5", "-1", "-1", "-1", "0x0b80", "-1"),
        new Array("bengali_wx",    "6", "6", "-1", "-1", "-1", "0x0980", "-1"),
        new Array("gujarathi_wx",  "6", "6", "-1", "-1", "-1", "0x0a80", "-1"),
        new Array("gurumukhi_wx",  "6", "6", "-1", "-1", "-1", "0x0a00", "-1"),
        new Array("hindi_wx",      "6", "6", "-1", "-1", "-1", "0x0900", "-1"),
        new Array("kannada_wx",    "6", "6", "-1", "-1", "-1", "0x0c80", "-1"),
        new Array("malayalam_wx",  "6", "6", "-1", "-1", "-1", "0x0d00", "-1"),
        new Array("marathi_wx",    "6", "6", "-1", "-1", "-1", "0x0900", "-1"),
        new Array("oriya_wx",      "6", "6", "-1", "-1", "-1", "0x0b00", "-1"),
        new Array("telugu_wx",     "6", "6", "-1", "-1", "-1", "0x0C00", "-1")
    );

var keyboard_layout_names =
    new Array(
        new Array("bengali_ins",   "Bengali - Inscript"),
        new Array("bengali_wx",    "Bengali - WX"),
        new Array("gujarathi_ins", "Gujarathi - Inscript"),
        new Array("gujarathi_wx",  "Gujarathi - WX"),
        new Array("gurumukhi_ins", "Gurumukhi - Inscript"),
        new Array("gurumukhi_wx",  "Gurumukhi - WX"),
        new Array("hindi_ins",     "Hindi - Inscript"),
        new Array("hindi_rts",     "Hindi - RTS"),
        new Array("hindi_wx",      "Hindi - WX"),
        new Array("kannada_ins",   "Kannada - Inscript"),
        new Array("kannada_wx",    "Kannada - WX"),
        new Array("malayalam_ins", "Malayalam - Inscript"),
        new Array("malayalam_wx",  "Malayalam - WX"),
        new Array("marathi_ins",   "Marathi - Inscript"),
        new Array("marathi_rts",   "Marathi - RTS"),
        new Array("marathi_wx",    "Marathi - WX"),
        new Array("nepali_xkb",    "Nepali - Bolnagari"),
        new Array("oriya_ins",     "Oriya - Inscript"),
        new Array("oriya_wx",      "Oriya - WX"),
        new Array("tamil_ins",     "Tamil - Inscript"),
        new Array("tamil_rts",     "Tamil - RTS"),
        new Array("tamil_wx",      "Tamil - WX"),
        new Array("telugu_ins",    "Telugu - Inscript"),
        new Array("telugu_rts",    "Telugu - RTS"),
        new Array("telugu_wx",     "Telugu - WX")
    );

//isMenu: flag tells us the display status of hint menu
var isMenu = false;

//iexplore: this will be set if the browser is Internet Explorer
var iexplore = !window.opera && (window.event || document.all); 

//needed to get the value for the class attribute for any tag
var classAttrib = (iexplore)? "className":"class";

var vowel;
var vowel_code;
var vowel_symbol_code;
var consonant;
var consonant_code;
var charlist;
var halant;
var codebase;
var map_type;

//prevChar - previously typed character(s), may form another indic character
//while adding new character(s)
var prevChar = "";
var prevLen = 0;    //length of the string stored in 'prevChar'
var seqChar = "";   //character sequence

//isInBothSet - tells us whether the last character typed present in both
//vowel and consonant character set
var isInBothSet = false;

//strInBothSet - contains the previously typed string which is present in
//vowel and consonant character set
var strInBothSet = "";

document.onclick = freeze;
document.onkeyup = splEvent;
document.onkeypress = eventCaptured;

/*
Specific funtion for Internet Explorer. It is called in response to keyup event.
It handles the event for some specific keys.
*/
function splEvent(event)
{
    var key;
    if(iexplore) {
        key = window.event.keyCode;
        switch(key) {
            case 8:   // backspace
            case 17:  // control
            case 18:  // alt
            case 33:  // page up
            case 34:  // page down
            case 35:  // end
            case 36:  // home
            case 37:  // left arrow
            case 38:  // up arrow
            case 39:  // right arrow
            case 40:  // down arrow
            case 45:  // insert
            case 46:  // delete
                //characters typed upto now won't be changed by
                //the addition of characters
                freeze();
        }
    }
}

/*
This function is called in response to keypress event.
*/
function eventCaptured(evt)
{
//alert("eventCaptured");

    var target, event, selectCombo, selectedIndex, keyboardLabel;

    if(iexplore) {  //if the browser is IE
        event = window.event;
        target = window.event.srcElement;
    }
    else { //for other browsers
        event = evt;
        target = evt.target;
    }

    selectCombo     = document.getElementsByName("selectLanguage").item(0);
    selectedIndex   = selectCombo.selectedIndex;
    keyboardLabel   = selectCombo.options[selectedIndex].label;

    if(keyboardLabel == "english")  //English is selected
        return;

    eventHandler(target,event);
}

/*
This function calls the function 'getUniChar' by sending the text to be transliterated
and gets back the transliterated text. Then inserts the transliterated text into the
appropriate place in the editable area.
*/
function eventHandler(textControl,event)
{
//alert("eventHandler");
    var selectionStart,selectionEnd,result,scrollTop,scrollLeft;
    var keyCode=0,str="";

    //events originated from the specified target only be processed
   
    if((textControl.type != "textarea" && textControl.type != "text") ||
      textControl.getAttribute(classAttrib) != "indic_wi")
        return;

    if(iexplore)
        keyCode = event.keyCode;
    else if(event.which)
        keyCode = event.which;

    var key = String.fromCharCode(keyCode);

    if(event.ctrlKey || event.altKey) {
        //don't process the key if control or alt pressed
    }
    else if(charlist.indexOf(key) != -1) {
        //if the key is mapped fully or partially to any indic character

        if(event.preventDefault) //prevent its default functionality
            event.preventDefault();
        else
            event.returnValue = false;
    
        //map_type = one2many means, the key map is framed such that single
        //key will produce one or more indic characters, ie., no combinations are defined.
        //map_type = many2many means, the key map is framed such that more than
        //one keys can combinely produce one or more indic characters.
        //map_type = many2many_woh means, the key map is similar to many2many type 
        //except the halant character will not be added automatically to the consonant 
        //character.

        if(map_type == "one2many") {
            key = getUniCharSimple(key);
        }
        else if(map_type == "many2many" || map_type == "many2many_woh") {
            //str - english character(s) to be converted into Indic character(s)
            str = prevChar + key;
            result = getUniChar(str);
            key = result.str;       //the converted indic character(s)
        }
        else {
            return;
        }

        if(map_type == "many2many" || map_type == "many2many_woh") {
            prevChar = str.substring(result.freezpos);
            //freezpos is a position within the english string. 
            //While converting english string into indic, the characters starting
            //from freezpos won't affect the characters upto freezpos.

            isInBothSet = result.bothcharset;  
            //isInBothSet is true if recently typed character(s) can form combinations
            //both in vowel and consonant charset
            //eg., 'r' can be a consonant or it can be changed to vowel by the addition
            //of a single quote(r')
        
            strInBothSet = result.charsetstr;
            //recently typed character(s) that form combinations both in vowel and
            //consonant charset
        }
        
        if(document.selection) {    // for IE
            textControl.focus();
            sel = document.selection.createRange();
            sel.moveStart('character',-prevLen);
            sel.text = key; //replace the selected text by the character(s) in 'key'
            
            sel.select();       //deselect, if selected
        }
        else if(textControl.setSelectionRange) {    // for Netscape, Firefox
            selectionStart = textControl.selectionStart - prevLen;
            selectionEnd = textControl.selectionEnd;
            scrollTop = textControl.scrollTop;
            scrollLeft = textControl.scrollLeft;
            
            textControl.value = textControl.value.substring(0,selectionStart) +  key +
                                textControl.value.substring(selectionEnd);
            textControl.setSelectionRange(selectionStart + key.length,selectionStart +
                                key.length);

            textControl.scrollTop = scrollTop;   //set the top line to be displayed
            textControl.scrollLeft = scrollLeft; //set the left column to be displayed
        }
        else {      // for other Browsers - opera
            textControl.value = textControl.value.substring(0,textControl.value.length
                                                                    -prevLen) + key;
        } 
        //I don't know how to find the cursor position in a Textarea in Opera, So I
        //just append the converted characters at the end
        
        if(map_type == "many2many" || map_type == "many2many_woh") {
            prevLen = result.indic.length;  
            //prevLen - contains the length of the indic charcter(s) which can be affected
            //by the addition of new characters
        }
        
        var dispChar = (prevChar) ? prevChar : seqChar;
        //show or hide hint menu for typing indic character
        if(dispChar && 
           document.getElementsByName("chk_show_hint").item(0).checked)
        {
            showMenu(dispChar,textControl);
        }
        else
            hideMenu();
            
        return;     //return without calling freeze
        
    }//end of code for converting the key
    
    else if((keyCode >=65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        //prevent displaying of alphabets not mapped
        if(event.preventDefault)
            event.preventDefault();
        else           
            event.returnValue = false;
    }

    freeze();
}

/*
This function is able to transliterate the english string into indic equivalent
for one_to_many type of key map.
*/
function getUniCharSimple(key)
{
//alert("getUniCharSimple");
    var i,resultstr;

    resultstr = "";
    for(i=0;i<vowel.length;i++) {    //searching the vowel character set
        if(vowel[i] == key) {
            resultstr = fromCharCodeArray(parseAndAdd(vowel_code[i],codebase));
            break;
        }
    }
    return resultstr;
}

/*
This function is able to transliterate the english string into indic equivalent
for many_to_many type of key map.
*/
function getUniChar(str, mode)
{
//alert("getUniChar");
    var i,result="",prevresult="",resultstr="",temp="",match="",indic="",start=0;
    var charsetstr="",newstr="",isPrevHalf=false,freezpos=0,tempresult="";
    var bothcharset=false;
    
    for(i=0;i<str.length;i++) {
        //take characters one by one from incoming string 'str' and form a string
        //which needs to be compared with the key map
        newstr = str.substring(start,i+1); 
        
        //find the charset in which the combination exists
        result = findCharSet(newstr);
        match = "";

        if(result.match == "nomatch")     //no matching combinations found
            match = "nomatch";
        else if(result.match == "notexact") {
            match = "notexact";
            //one or more combinations start with the string but not exactly
            //equals to the string
        }
        else if(result.charset == "vowel") {
            //string exactly matches with one combination in vowel charset
            if((result.vowcount + result.conscount) == 1) {
                //the string matches with only one combination in vowel charset only -
                //won't be affected by the addition of new characters               
                match = "vowel";
            }
            else {
                //many combinations in vowel charset(and consonant charset may also)
                //start with the string - can be changed to another vowel or even 
                //consonant by the addition of new characters
                match = "vowel*";
            }
        }
        else if(result.charset == "consonant") { 
            //string exactly matches with one combination in consonant charset
            if((result.vowcount + result.conscount) == 1) {
                //the string matches with only one combination in consonant
                //charset only
                match = "consonant";
            }
            else {
                //many combinations in consonant charset(and vowel charset may also)
                //start with the string
                match = "consonant*";
            }
        }

//alert(match+" "+result.index+" "+result.vowcount);

        if(match == "vowel") {
            if(isPrevHalf && 
            (vowel_code[result.index]=="5"||vowel_symbol_code[result.index]!="")) {
                //the previous character is a consonant and (the current vowel
                //character has dependent vowel sign or it is the first vowel of
                //indic language(don't have dependent vowel sign))
                
                resultstr = resultstr.substring(0,resultstr.length-1);
                //remove the halant from the result string
                
                if(vowel_code[result.index] != "5") {
                    //the current letter is not the first vowel, add dependent
                    //vowel sign
                    resultstr += fromCharCodeArray(
                                    parseAndAdd(vowel_symbol_code[result.index],
                                    codebase)
                                 );
                }
            }
            else {
                //previous character is not a consonant, add the independent vowel
                //to the result
                resultstr += fromCharCodeArray(
                                parseAndAdd(vowel_code[result.index],
                                codebase)
                             );
            }
            start = i+1; indic = ""; isPrevHalf = false;
            freezpos = start;
            //string upto current character can be freezed
        }
        else if(match == "consonant") {
            //add the consonant character and halant to the result
            indic = 
                fromCharCodeArray(
                    parseAndAdd(consonant_code[result.index]+" "+halant,codebase)
                );
            resultstr += indic;
            freezpos = start; start = i+1; isPrevHalf = true;
        }
        else if(match == "nomatch" || (result.match == "notexact" && mode == "inner"))
        {
            //mode will be having the value 'inner' at the time of recursive call
            //inner mode & notexact string is treated as nomatch string
            
            if(newstr.length == 1) {
                //only one mapped character that doesn't match with any combination
                //as it is.
                
                if(isSplChar(newstr.charAt(0))) {
                    //it is a special character like single quote as in r'
                    resultstr += newstr;    //add it to the result
                }
                //'else' is not needed, because a single alphabet with
                //match = nomatch will not have indic equivalent.

                start = i+1; isPrevHalf = false; indic = "";
                freezpos = start;
                //string upto current character can be freezed since the newcoming
                //character can't affect the last special character
            }
            else if(prevresult.match == "notexact") {
                if(newstr.length == 2) {
                    //one character, match = notexact(at the previous iteration)
                    
                    if(isSplChar(newstr.charAt(0))) {
                        //eg., tilde character(~)
                        resultstr += newstr.charAt(0);
                    }
                    //'else' is not needed, because a single alphabet with
                    //match = notexact will not have indic equivalent
                    
                    indic = ""; start = i; freezpos = start; i--; isPrevHalf = false;
                }
                else {
                    //more than one character, match = notexact
                    //(at the previous iteration) eg., r' in Hindi
                    
                    resultstr = resultstr.substring(0,resultstr.length-indic.length);
                    
                    //following is a recursive call to function 'getUniChar'
                    tempresult = getUniChar(
                                    str.substring(freezpos,start)+
                                    newstr.substring(0,newstr.length - 1),"inner"
                                 );
                    indic = tempresult.indic;
                    freezpos += tempresult.freezpos;
                    start = i;   
                    //start from the last character, since addition of this failed to
                    //make any combinations
                    
                    i--;
                    //to compensate the i++ in for loop so that last character
                    //will be used as start
                    
                    resultstr += tempresult.str;
                    
                    if(map_type == "many2many" && 
                       indic.charCodeAt(indic.length-1) == halant + codebase)
                    {
                        //the last character of returned indic string is halant -
                        //so the last character is a consonant
                        isPrevHalf = true;
                    }
                    else
                        isPrevHalf = false;
                }
            }
            else if(prevresult.charset == "vowel" && 
                    (prevresult.vowcount + prevresult.conscount) > 1) {
                //previous match = vowel* - similar to the case match = vowel
                
                if(isPrevHalf && (vowel_code[prevresult.index]=="5"||
                                  vowel_symbol_code[prevresult.index]!="")) {
                    
                    resultstr = resultstr.substring(0,resultstr.length-1);
                    
                    if(vowel_code[prevresult.index] != "5") {
                        resultstr += fromCharCodeArray(
                            parseAndAdd(vowel_symbol_code[prevresult.index],codebase)
                        );
                    }
                }
                else {
                    resultstr += fromCharCodeArray(
                                    parseAndAdd(vowel_code[prevresult.index],
                                    codebase)
                                 );
                }
                start = i; freezpos = start; i--; isPrevHalf = false;
                indic = "";
            }
            else if(prevresult.charset == "consonant" && 
                    (prevresult.vowcount + prevresult.conscount) > 1) {
                //consonant* - similar to the case match = "consonant"
                
                indic = fromCharCodeArray(
                    parseAndAdd(consonant_code[prevresult.index]+" "+halant,codebase)
                );
                resultstr += indic;
                freezpos = start; start = i; i--; isPrevHalf = true;
            }
        }//else if(match=="nomatch" ...) ends here
        else if(i == str.length - 1) {
            //if the final character of the incoming string reached
            
            if(match == "vowel*") {
                //splvowcount - no. of combinations(in vowel charset) which start with
                //the formed string, having no dependent vowel symbol
                //(except 'a') eg., '|' in hindi,telugu
                //so they won't affect the previous character
                
                if(result.splvowcount == result.vowcount) {
                    //all combinations are vowels without dependent vowel sign -
                    //the input string can be freezed upto the previous character
                    freezpos = start;
                    
                    indic = "";
                }
                
                //similar to the case match = vowel
                resultstr = resultstr.substring(0,resultstr.length - indic.length);
                
                if(isPrevHalf && (vowel_code[result.index]=="5"||
                                  vowel_symbol_code[result.index]!="")) {
                    
                    indic = indic.substring(0,indic.length - 1);
                    if(vowel_code[result.index] != "5") {
                        //for 'a' no symbol is needed
                        
                        indic += fromCharCodeArray(
                                    parseAndAdd(vowel_symbol_code[result.index],
                                    codebase)
                                 );
                    }
                }
                else {
                    indic += fromCharCodeArray(
                                parseAndAdd(vowel_code[result.index],
                                codebase)
                             );
                }
                resultstr += indic;
            }
            else if(match == "consonant*") {
                temp = fromCharCodeArray(
                        parseAndAdd(consonant_code[result.index]+" "+halant,codebase)
                    );
                if(result.vowcount == 0 || result.splvowcount == result.vowcount) {
                    //the formed string won't be changed into
                    //a vowel when adding character(s)
                    //so previous characters won't be affected, can be freezed
                    
                    freezpos = start;
                    indic = temp;
                }
                else {
                    //the formed string may be changed into a vowel when adding
                    //one or more characters
                    //eg., consonant character r can be changed to vowel(r')
                    //by adding single quote in telugu_rts keymap
                    
                        bothcharset = true;   
                        charsetstr = newstr;
                        indic += temp;
                }
                resultstr += temp;
            }
            else if(match == "notexact") {
                if(newstr.length == 1) {
                    //only one character in the formed string 'newstr'
                    
                    if(isSplChar(newstr.charAt(0))) {
                        //special character (not an alphabet)  eg., tilde(~)
                        
                        indic += newstr;
                        resultstr += newstr;
                    }
                    //'else' is not needed, because a single alphabet with
                    //match = notexact will not have indic equivalent
                    
                    if(map_type == "many2many") {
                        if(result.vowcount == 0) {
                            indic = newstr;
                            freezpos = start;
                        }
                        else {
                            bothcharset = true;   
                            //indicates the formed string is in both character set
                        
                            charsetstr = newstr;  //the string
                        }
                    }
                }
                else {
                    //the formed character contains more than one character
                    
                    //similar to the case prevresult.match = notexact
                    resultstr = 
                            resultstr.substring(0,resultstr.length - indic.length);
                    
                    tempresult = 
                            getUniChar(str.substring(freezpos,start)+newstr,"inner");
                            
                    indic = tempresult.str;
                    resultstr += tempresult.str;
                }
            }
        }//else if(i == str.length - 1) ends here
        
        prevresult = result;
    }
    return {str:resultstr,indic:indic,freezpos:freezpos,
            bothcharset:bothcharset,charsetstr:charsetstr};
}

/*
finds the character set in which the string exists
*/
function findCharSet(str)
{
//alert("findCharSet");
    var i,match="nomatch",index=-1,charset="",consmatch="",vowmatch="";
    var conscount=0,consindex=-1,vowcount=0,vowindex=-1,splvowcount=0;
    var tempindex,tempstr,exp,pos=-2,tempcount=0;

    tempstr = str;
    while((pos=tempstr.indexOf("|",pos+2)) != -1) {
        tempstr = tempstr.substring(0,pos) + "\\" + tempstr.substring(pos);
    }

    exp = new RegExp(tempstr,"i");
    seqChar = "";

    for(i=0;i<vowel.length;i++) {    //searching the vowel character set
    
        tempindex = vowel[i].indexOf(str);

        if(tempindex != -1 && (tempindex == 0 || 
           isSplChar(vowel[i].charAt(0))))
        {
            vowcount++;
            
            if(map_type == "many2many" && vowel_symbol_code[i] == "" && 
               vowel_code[i] != "5")
            {
                splvowcount++;
            }
      
            if(str == vowel[i]) {
                vowmatch = "exact";
                vowindex = i;
            }
        }

        tempindex = vowel[i].search(exp);

        if(tempindex != -1 && (tempindex == 0 || 
           isSplChar(vowel[i].charAt(0))))
        {
            tempcount++;
        }
    }
    if(vowcount > 0 && vowmatch == "")
        vowmatch = "notexact";
 
    if(map_type == "many2many_woh") {
        if(vowmatch != "")
            match = vowmatch;

        if(tempcount > 1)
            seqChar = str;

        return {match:match,index:vowindex,vowcount:vowcount,conscount:conscount,
                charset:"vowel",splvowcount:vowcount};
    }

    for(i=0;i<consonant.length;i++) {   //searching the consonant character set
        
        tempindex = consonant[i].indexOf(str);

        if(tempindex != -1 && (tempindex == 0 || 
           isSplChar(consonant[i].charAt(0))))
        {
            conscount++;
            
            if(str == consonant[i]) {
                consmatch = "exact";
                consindex = i;
            }
        }

        tempindex = consonant[i].search(exp);

        if(tempindex != -1 && (tempindex == 0 || 
           isSplChar(consonant[i].charAt(0))))
        {
            tempcount++;
        }
    }
    if(conscount > 0 && consmatch == "")
        consmatch = "notexact";
  
    //determine which character set to return according to different conditions
    if((vowmatch == "" && (consmatch == "notexact" || consmatch == "exact")) ||
       (vowmatch == "notexact" && consmatch == "exact")) {
        
        charset = "consonant";
        match = consmatch;
        index = consindex;
    }
    else if(vowmatch != "") {
        charset = "vowel";
        match = vowmatch;
        index = vowindex;
    }

    if(tempcount > 1)
        seqChar = str;

    return {match:match,index:index,vowcount:vowcount,conscount:conscount,
            charset:charset,splvowcount:splvowcount};
}

/*
sets there is no character which will be affected by the forecoming characters
*/
function freeze()
{
//alert("freeze");

    prevChar     = "";
    seqChar      = "";
    prevLen      = 0;
    isInBothSet  = false;
    strInBothSet = "";

    hideMenu();
}

/*
makes arrangement for displaying hint menu. calls init() function
to initialize some global variables.
*/
function load(keyboardLabel)
{
//alert("load");
    var i,parent,style,txtarea,txtfield;
    var body,div,table,tr,td,tbody;
  
    freeze();

    body = document.getElementsByTagName('body').item(0);
 
    txtarea = document.getElementsByTagName('textarea');
    if(txtarea) {
        for(i=0;i<txtarea.length;i++) {
            if(txtarea[i].getAttribute(classAttrib) == "indic_wi")
                txtarea[i].onblur = freeze;
        }
    }
    
    txtfield = document.getElementsByTagName('input');
    if(txtfield) {
        for(i=0;i<txtfield.length;i++) {
            if(txtfield[i].type == "text" && 
               txtfield[i].getAttribute(classAttrib) == "indic_wi")
            {
                txtfield[i].onblur = freeze;
            }
        }
    }
    
    div = document.getElementById("menudiv");
    if(div) {
        parent = div.parentNode;
        parent.removeChild(div);
    }
    div = document.createElement('div');
    div.id = "menudiv";
    div.style.position = "absolute";
    div.style.display = "none";
    body.appendChild(div);
  
    table = document.createElement('table');
    table.id = 'outertbl';
    style = 'width:82px;border-collapse:separate;border-spacing:0px;' +
            'padding:0;background-color:gray';
    table.setAttribute('style',style);

    table.style.backgroundColor = 'gray';    //for IE

    div.appendChild(table);
    tbody = document.createElement('tbody');
    table.appendChild(tbody);
    tr = document.createElement('tr');
    tbody.appendChild(tr);
    td = document.createElement('td');
    tr.appendChild(td);
    
    for(i=0;i<lang_details.length;i++)      //determine wihch language is selected
        if(keyboardLabel == lang_details[i][0])
            break;
  
    if(i < lang_details.length) {
        init(i);
    }
    else {
        alert(
            "Error: This language keymap has some problem. Please use other keymaps"
            );
    }
}

/*
initializes the global variables with character sets and
other language specific details
*/
function init(index)
{
//alert("init");
    
    var i,j,div_keymap_hint, vowel_symbol_code_index;
    var vowel_index,vowel_code_index,consonant_index,consonant_code_index;
    
    vowel_index       = parseInt(lang_details[index][1]);
    vowel_code_index  = parseInt(lang_details[index][2]);
    vowel_symbol_code_index  = parseInt(lang_details[index][3]);
    consonant_index   = parseInt(lang_details[index][4]);
    consonant_code_index = parseInt(lang_details[index][5]);
    codebase = parseInt(lang_details[index][6]);
    halant   = parseInt(lang_details[index][7]);
  
    if(vowel_index >= 0 && vowel_index < lang_vowel.length) {
        vowel = lang_vowel[vowel_index].split(" ");
    }

    if(vowel_code_index >= 0 && vowel_code_index < lang_vowel_code.length) {
        vowel_code = lang_vowel_code[vowel_code_index].split(",");
    }

    map_type = "one2many";
    charlist = "";
    for(i=0;i<vowel.length;i++)
    {
        if(vowel[i].length > 1) {
            map_type = "many2many";
        }
        for(j=0;j<vowel[i].length;j++)
            if(charlist.indexOf(vowel[i].charAt(j)) == -1)
                charlist += vowel[i].charAt(j);
    }
    if(map_type == "many2many" && (consonant_index == "-1" ||
       consonant_code_index == "-1" || halant == "-1"))
    {
        map_type += "_woh";
    }
//alert(map_type);

    freeze();

    div_keymap_hint = document.getElementById("div_keymap_hint");
    div_keymap_hint.style.display = 'none';
    if(map_type == "one2many" || map_type == "many2many_woh") {
        return;
    }
    div_keymap_hint.style.display = '';
        
    if(vowel_symbol_code_index >= 0 && vowel_symbol_code_index < lang_vowel_symbol_code.length) {
        vowel_symbol_code = lang_vowel_symbol_code[vowel_symbol_code_index].split(",");
    }
        
    if(consonant_index >= 0 && consonant_index < lang_consonant.length) {
        consonant = lang_consonant[consonant_index].split(" ");
    }
        
    if(consonant_code_index >= 0 && consonant_code_index < lang_consonant_code.length) {
        consonant_code = lang_consonant_code[consonant_code_index].split(",");
    }
  
    for(i=0;i<consonant.length;i++)
    {
        for(j=0;j<consonant[i].length;j++)
            if(charlist.indexOf(consonant[i].charAt(j)) == -1)
                charlist += consonant[i].charAt(j);
    }
}

/*
parses the string 'str' at space and adds the value 'val' to each string
and returns as an integer array
*/
function parseAndAdd(str,val)
{
//alert("parseAndAdd");
    
    var i,arr;
    
    str = str.split(" ");
    arr = new Array(str.length);
    
    for(i=0;i<str.length;i++)
    {
        arr[i] = parseInt(str[i]) + val;
    }
    return arr;
}

/*
returns the character string for the character codes given as an array
*/
function fromCharCodeArray(arr)
{
//alert("fromCharCodeArray");
    
    var i,str;
    
    str = "";
    
    for(i=0;i<arr.length;i++)
    {
        str += String.fromCharCode(arr[i]);    
    }
    return str;
}

/*
used to hide the hint menu
*/
function hideMenu()
{
//alert("hideMenu");
    var div;
    var innertbl,parent;
    if(isMenu) {    
        isMenu = false;
        div = document.getElementById("menudiv");
        div.style.display = "none";
        innertbl = document.getElementById('innertbl');
        parent = innertbl.parentNode;
        parent.removeChild(innertbl);    
    }
}

/*
used to show the hint menu
*/
function showMenu(str,textControl)
{
//alert("showMenu");
    var div,resultcomb="",result="",style="",tempresult="";
    var innertbl,parent,tr,td,exactindex,tbody;
    var i,keyCode,engkey="",indickey="",count=0,obj;
    
    if(isMenu)
        hideMenu();
  
    if(isInBothSet && str != strInBothSet) {
        result = findSubSet(strInBothSet,true);        //case sensitive
        tempresult = findSubSet(str.substring(0,str.lastIndexOf(strInBothSet)),true);
    }
    else
        result = findSubSet(str,false);               //case insensitive
  
    exactindex = result.exactindex != -1 ? result.exactindex : 0;

    if(map_type == "many2many") {
        if(result.exactindex == -1 && tempresult == "")
        {// for Ru etc.
            resultcomb = makeCharSet(str);
            if((result.vowindex.length + result.consindex.length +
                resultcomb.indic.length) <= 0)
            {
            
                return;
            }
        }
        else if(result.match == "consonant")
            resultcomb = makeCharSet(consonant[result.consindex[exactindex]]);
    }
    
    parent = document.getElementById('outertbl');
  
    parent = parent.getElementsByTagName('td').item(0);
  
    innertbl = document.createElement('table');
    innertbl.id = "innertbl";
    innertbl.width = 80;
    innertbl.cellspacing = 0;
    innertbl.cellpadding = 0;
    style = 'background-color:#cccccc;font-family:sans-serif;font-size:15px;' +
            'font-size-adjust:0.58;line-height:20px;';
    innertbl.setAttribute('style',style);

    innertbl.style.backgroundColor = '#cccccc';    //for IE
    
    parent.appendChild(innertbl);
    tbody = document.createElement('tbody');
    innertbl.appendChild(tbody);

    count += result.vowindex.length + result.consindex.length;
    
    for(i=0;i<result.vowindex.length;i++) {
        tr = document.createElement('tr');
        if(i == exactindex && result.match == "vowel")
            tr.style.backgroundColor = 'gray';
    
        if(isInBothSet && str != strInBothSet) {
            engkey = consonant[tempresult.consindex[tempresult.exactindex]] +
                     vowel[result.vowindex[i]];
            keyCode = 
                parseAndAdd(
                    consonant_code[tempresult.consindex[tempresult.exactindex]],
                    codebase
                );
                
            indickey = fromCharCodeArray(keyCode);
            keyCode = parseAndAdd(vowel_symbol_code[result.vowindex[i]],codebase);
                      
            indickey += fromCharCodeArray(keyCode);
        }
        else {
            engkey = vowel[result.vowindex[i]];
            keyCode = parseAndAdd(vowel_code[result.vowindex[i]],codebase);
            indickey = fromCharCodeArray(keyCode);
        }
        
        td = document.createElement('td');
        td.appendChild(document.createTextNode(engkey));
        td.setAttribute('align',"center");
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(indickey));
        td.setAttribute('align',"center");
        tr.appendChild(td);
        tbody.appendChild(tr);
        
    }//for loop ends here
   
    for(i=0;i<result.consindex.length;i++) {
        tr = document.createElement('tr');
        
        if(i == exactindex && result.match == "consonant")
            tr.style.backgroundColor = "gray";
            
        td = document.createElement('td');
        td.appendChild(document.createTextNode(consonant[result.consindex[i]]));
        td.setAttribute('align',"center");
        tr.appendChild(td);
        td = document.createElement('td');

        keyCode = 
            parseAndAdd(consonant_code[result.consindex[i]] + " " + halant, codebase);
            
        td.appendChild(
                document.createTextNode(fromCharCodeArray(keyCode))
            );
           
        td.setAttribute('align',"center");
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    
    if(resultcomb != "") {
        count += resultcomb.indic.length;
        
        for(i=0;i<resultcomb.indic.length;i++) {
            tr = document.createElement('tr');
            
            if(result.consindex.length <= 0 ) {
                if(resultcomb.exactindex != -1) {
                    if(i == resultcomb.exactindex)
                        tr.style.backgroundColor = "gray";
                }
                else if(i == 0)
                    tr.style.backgroundColor = "gray";          
            }
            
            td = document.createElement('td');
            td.appendChild(document.createTextNode(resultcomb.eng[i]));
            td.setAttribute('align',"center");
            tr.appendChild(td);
            td = document.createElement('td');
            td.appendChild(document.createTextNode(resultcomb.indic[i]));
            td.setAttribute('align',"center");
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }
  
    var charHeight,menuHeight,menuLeft,menuTop,offsetLeft,offsetTop,scrollTop;
    var scrollBot,midMenu,midObjPos,menuBot;
    
    offsetLeft = 0;
    offsetTop = 0;
    obj = textControl;
    
    if(obj.offsetParent) {
        while (obj.offsetParent) {
            offsetLeft += obj.offsetLeft;
            offsetTop += obj.offsetTop;
            obj = obj.offsetParent;
        }
    }
    
    if (self.pageYOffset)   // all except Explorer
        scrollTop = self.pageYOffset;
    else if (document.documentElement && document.documentElement.scrollTop) {
        // Explorer 6 Strict
        scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) // all other Explorers
        scrollTop = document.body.scrollTop;
    
    charHeight = 15 * 0.58 * 2 + 2;
    menuHeight = charHeight * count + count;
  
    scrollBot = scrollTop;
    if (self.innerHeight) // all except Explorer
        scrollBot += self.innerHeight;
    else if (document.documentElement && document.documentElement.clientHeight) {
        // Explorer 6 Strict Mode
        scrollBot += document.documentElement.clientHeight;
    }
    else if (document.body) // other Explorers
        scrollBot += document.body.clientHeight;
  
    midMenu = menuHeight / 2;
    midObjPos = offsetTop + textControl.clientHeight / 2;
  
    menuLeft = offsetLeft - 5 * charHeight;
    if(menuLeft < 0)
        menuLeft = offsetLeft + textControl.clientWidth + 2;
    if(menuHeight <= textControl.clientHeight) {
        menuTop = offsetTop;
        menuBot = offsetTop + menuHeight;
    }
    else {
        menuTop = midObjPos - midMenu;
        menuBot = midObjPos + midMenu;
    }
  
    if(menuBot > scrollBot)
        menuTop = scrollBot - menuHeight;
    if(menuTop < scrollTop)
        menuTop = scrollTop;

    div = document.getElementById('menudiv');
    div.style.left = menuLeft+'px';
    div.style.top = menuTop+'px';
    div.style.display = "";
    isMenu = true;
}

/*
used to find the combinations that start with the character(s) in 'str'
*/
function findSubSet(str,isCaseSensitive)
{
//alert("findSubSet");
    var i,j,vowindex,consindex,exp,exact=-1,tempstr,match="",exactindex=-1,pos=-2;
    var tempindex;
    
    vowindex = new Array();
    consindex = new Array();

    tempstr = str;
    while((pos=tempstr.indexOf("|",pos+2)) != -1) {
        tempstr = tempstr.substring(0,pos) + "\\" + tempstr.substring(pos);
    }
    
    if(isCaseSensitive)
        exp = new RegExp(tempstr);
    else
        exp = new RegExp(tempstr,"i");
  
    for(i=0,j=0;i<vowel.length;i++) {
    
        tempindex = vowel[i].search(exp);
        if(tempindex != -1 && (tempindex ==0 ||
           isSplChar(vowel[i].charAt(0))) &&
          (!isCaseSensitive || vowel_symbol_code[i] != "")) {
          
            if(vowel[i] == str)
                exact = j;
            vowindex[j++] = i;
        }
    }
    
    if(exact != -1) {
        match = "vowel";
        exactindex = exact;
    }

    if(map_type == "many2many_woh") {
        return {vowindex:vowindex,consindex:consindex,match:match,exactindex:exactindex};
    }
 
    exact = -1;
    for(i=0,j=0;i<consonant.length;i++) {
    
        tempindex = consonant[i].search(exp);
        if(tempindex != -1 && (tempindex ==0 ||
           isSplChar(consonant[i].charAt(0)))) {
          
            if(consonant[i] == str)
                exact = j;
            consindex[j++] = i;
        }
    }
    
    if(exact != -1) {
        match = "consonant";
        exactindex = exact;
    }
    return {vowindex:vowindex,consindex:consindex,match:match,exactindex:exactindex};
}

/*
used to find the consonant + vowel combinations
*/
function makeCharSet(str)
{
//alert("makeCharSet");
    var i,j,exp,index=0,eng,indic,exactindex=-1,vowkey,conskey,temp;
  
    eng = new Array();
    indic = new Array();
  
    for(i=0;i<consonant.length;i++) {
    
        if(str.indexOf(consonant[i]) == -1)
            continue;
            
        for(j=0;j<vowel.length;j++) {
        
            if((vowel_symbol_code[j] != "" || vowel_code[j] == "5") &&
               (consonant[i]+vowel[j]).indexOf(str) == 0) {
               
                conskey = parseAndAdd(consonant_code[i],codebase);
                temp = fromCharCodeArray(conskey);
                
                if(vowel_code[j] != "5") {
                    vowkey = parseAndAdd(vowel_symbol_code[j],codebase);
                    temp += fromCharCodeArray(vowkey);
                }
                
                if(index == 0 || temp != indic[index-1]) {
                    eng[index] = consonant[i]+vowel[j];
                    indic[index] = temp;
                    if(str == eng[index])
                        exactindex = index;
                    index++;
                }
            }
        }
    }
    return {eng:eng,indic:indic,exactindex:exactindex};
}

function togHintMenu()
{
//alert("togHintMenu");

    var selectedIndex;
    var showHint,selectCombo;

    selectCombo     = document.getElementsByName("selectLanguage").item(0);

    selectedIndex   = selectCombo.selectedIndex;
    showHint        = document.getElementsByName("chk_show_hint").item(0).checked;

    writeCookie(selectedIndex,showHint);
}

function selectLang(selectCombo)
{
//alert("selectLang");

    var selectedIndex, keyboardLabel;
    var showHint, div_keymap_hint;

    div_keymap_hint = document.getElementById("div_keymap_hint");
    div_keymap_hint.style.display = 'none';

    selectedIndex = selectCombo.selectedIndex;
    showHint        = document.getElementsByName("chk_show_hint").item(0).checked;

    writeCookie(selectedIndex,showHint);

    keyboardLabel = selectCombo.options[selectCombo.selectedIndex].label;

    if(keyboardLabel != "english")
        load(keyboardLabel);
}

function writeCookie(selectedIndex,showHint) {
//alert("writeCookie");

    var today   = new Date();
    var expires = new Date(today.getTime() + (56 * 86400000));
    var indexes = new String();
    indexes     = selectedIndex +"-"+ showHint;

    setCookie("indicLangCookie",indexes,expires);
}

function loadKeyboardLayouts() {
//alert("loadKeyboardLayouts");

    var languageIndex, cookieValue, indicCookie;
    var showHint,div_keymap_hint, keyboardLabel;
    var form_element,selectCombo, i;

    form_element =
        "<div title=\"Language and Keyboard Layout\">" +
        "<select name=\"selectLanguage\" onChange=\"selectLang(this);\">" +
        "<option label=\"english\">-- Select Keyboard --</option>";

    for(i=0;i<keyboard_layout_names.length;i++)
    {
        form_element += "<option label='" + keyboard_layout_names[i][0] + "'>" +
                        keyboard_layout_names[i][1] + "</option>";
    }

    form_element += 
        "</select>" +
        "</div>" +
        "<div title=\"Show keyboard layout hint while typing\"" +
             "id=\"div_keymap_hint\" style=\"display:none\">" +
        "<small>Show Hint</small>" +
        "<input type=\"checkbox\" name=\"chk_show_hint\" onClick=\"togHintMenu();\">" +
        "</div>";

    document.write(form_element);

    selectCombo = document.getElementsByName("selectLanguage").item(0);

    indicCookie   = getCookie("indicLangCookie");

    if(indicCookie) {

        cookieValue     = new String(indicCookie);
        languageIndex   = cookieValue.substring(0,cookieValue.indexOf("-"));
        cookieValue     = cookieValue.substring(cookieValue.indexOf("-")+1,cookieValue.length);
        showHint        = cookieValue.substring(cookieValue.indexOf("-")+1,cookieValue.length);

        selectCombo.selectedIndex = languageIndex;

        showHint = (showHint == "true")? true : false;
        document.getElementsByName("chk_show_hint").item(0).checked = showHint;
    }

    keyboardLabel = selectCombo.options[selectCombo.selectedIndex].label;

    if(keyboardLabel != "english")
        load(keyboardLabel);
}

/* 
Functions to Set and Get Cookies
*/

function getCookie(name) {
  var start = document.cookie.indexOf(name+"=");
  var len = start+name.length+1;
  if ((!start) && (name != document.cookie.substring(0,name.length)))
    return null;
  if (start == -1)
    return null;
  var end = document.cookie.indexOf(";",len);
  if (end == -1)
    end = document.cookie.length;
  return unescape(document.cookie.substring(len,end));
}

function setCookie(name,value,expires,path,domain,secure) {
  document.cookie = name + "=" +escape(value) +
        ( (expires) ? ";expires=" + expires.toGMTString() : "") +
        ( (path) ? ";path=" + path : "") +
        ( (domain) ? ";domain=" + domain : "") +
        ( (secure) ? ";secure" : "");
}

/*
used to find whether the character is an alphabet or not
*/
function isSplChar(chr)
{
//alert("isSplChar");
    var ascii = chr.charCodeAt(0);
    if(ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122)
        return true;
    return false;
}
