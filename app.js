let myName = 'Amanda Parrott'
console.log("Name: " + myName.toUpperCase());


let myCareer = 'Career: Professional Grape Eater'
console.log(myCareer);

let myDescription = 'Description: Grapes are good'
console.log(myDescription);

let lineBreak = '\n'
console.log(lineBreak);

let myInterests = 'My Interests:' 
console.log(myInterests);

let interest1 = '*Eating Grapes'
let interest2 = '*Identifying Grapes'
let interest3 = '*Finding Grapes'
let interest4 = '*Watching Grapes Grow'
console.log(interest1);
console.log(interest2);
console.log(interest3);
console.log(interest4);

console.log(lineBreak);

let prevEx = 'My Previous Experience:'
console.log(prevEx);

function displayPosition (jobTitle, companyName, jobDescription)  {
    console.log("*" + jobTitle + " at " + companyName + ": " + jobDescription);
};
displayPosition ("Quality Control", "Grapes R Us", "ensure tasty grapes are tasty");
displayPosition ("Grape Master", "Whole Grapes", "reseident grape expert");
displayPosition ("Grape Taster", "Targrapes", "tasted the tasty grapes");

console.log(lineBreak);

let mySkills = 'My Skills:'
console.log(mySkills);

function displaySkill (skill, isCool) {
    if (isCool){
        console.log("*BAM: " + skill);
    } else {
        console.log("*" + skill);
    }
    
};
displaySkill ("Can say the word Grape in 12 languages", false);
displaySkill ("Can fit 17 grapes in my mouth at once", true);
displaySkill ("Can identify 36 different strains of grape vines", false);
displaySkill ("Can stopm grapes real good", true);