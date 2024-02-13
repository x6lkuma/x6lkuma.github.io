//Lets assign some variables
$body = document.querySelector('body');

//All "yes" buttons + OG yes texts
const $yes = document.querySelector('.js-yes');
const $OGyes = $yes.textContent;

const $yes2 = document.querySelector('.js-yes2');
const $OGyes2 = $yes2.textContent;

const $yes2_5 = document.querySelector('.js-yes2-5');
const $OGyes2_5 = $yes2_5.textContent;

const $yes3 = document.querySelector('.js-yes3');
const $OGyes3 = $yes3.textContent;

//all "no" buttons
$no = document.querySelector('.js-no');
$no2 = document.querySelector('.js-no2');
$no3 = document.querySelector('.js-no3');

//aLL "prompt" containers + answer container
$prompt = document.querySelector('.js-prompt');
$prompt2 = document.querySelector('.js-prompt2');
$prompt2_5 = document.querySelector('.js-prompt2-5');
$prompt3 = document.querySelector('.js-prompt3');
$answer = document.querySelector('.js-answer');
let counter = 0;
let counter1 = 0;
let counter2 = 0;

//Lets make a sentence bank for the message
const sentences = 
  [
    "No",
    "Are you sure?",
    "Really sure?",
    "Pookie please",
    "Don't do this to me",
    "I'm gonna cry...",
    "You're breaking my heart ;(",
  ];


// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 100000);
  }



        //FIRST PROMPT//
//yes button
$yes.addEventListener('mouseover', (e) => 
    {
        e.target.innerHTML = "Good choice! uwu <3";
    });


$yes.addEventListener('click', () => 
    {
        $prompt.style.display = 'none';
        document.getElementById("hello").style.display = "none";
        document.getElementById("cute-bear").style.display = "block";
        $prompt2.style.display = 'block';
    });


$yes.addEventListener('mouseout', (e) => 
    {
        $yes.textContent = $OGyes;
    });

//no button
$no.addEventListener('mouseover', (e) => 
    {
        //create constant target
        const $target = e.target

        //Randomize the position of the target
        $target.style.top = `${Math.random() *  200}px`
        $target.style.right = `${Math.random() * 200}px`

        //Make the target smaller
        $target.style.transform = `scale(${1 - counter * 0.1})`;
        
        //Change the text of the target
        $target.innerHTML = sentences[counter % sentences.length];

        counter++

    }
);//end of mouse over event


        //SECOND PROMPT//
//yes button
$yes2.addEventListener('mouseover', (e) => 
    {
        e.target.innerHTML = "Well . . .";
    });


$yes2.addEventListener('click', () => 
    {
        $prompt2.style.display = 'none';
        document.getElementById("cute-bear").style.display = "none";

        document.getElementById("ani-boy").style.display = "block";
        $prompt2_5.style.display = 'block';

    });



$yes2.addEventListener('mouseout', (e) => 
    {
        $yes2.textContent = $OGyes2;
    });

//no button
$no2.addEventListener('click', (a) => 
    {
        //create constant target
        const $target_a = a.target
        
        //Make the target smaller
        $target_a.style.transform = `scale(${1 - counter1 * 0.1})`;
        $target_a.innerHTML = "HEY! stop that . .  please . . . qwq";

        if (counter1 == 1) {
            $target_a.innerHTML = "If you press that again, I'm gonna cry...";
        }
        if (counter1 == 2) {
            $target_a.innerHTML = "TT^TT why'd you do that?";
        }
        if (counte1r == 3) {
            $target_a.innerHTML = "HMMPH! FINE THEN IMMA LEAVE >:(";
        }
        if (counter1 == 4) {
            $no2.style.display = 'none';
            $yes2.style.width = '100%';
        }
    
        counter1++

    }
);//end of mouse over event


                    //SEGWAY PROMPT//
            //yes button
            $yes2_5.addEventListener('mouseover', (e) => 
                {
                    e.target.innerHTML = "*just say it >:0";
                });


            $yes2_5.addEventListener('click', () => 
                {
                    $prompt2_5.style.display = 'none';
                    document.getElementById("cute-bear").style.display = "none";
                    document.getElementById("ani-boy").style.display = "none";
                    
                    document.getElementById("anime-sakura").style.display = "block";
                    document.getElementById("kitty-heart").style.display = "block";
                    document.getElementById("kitty-heart-2").style.display = "block";
                    document.getElementById("uwu").style.display = "block";
                    $prompt3.style.display = 'block';
                });



            $yes2_5.addEventListener('mouseout', (e) => 
                {
                    $yes2_5.textContent = $OGyes2_5;
                });

            
        //THIRD PROMPT//
//yes button
$yes3.addEventListener('mouseover', (y3) => 
    {
        y3.target.innerHTML = "AWW, really? good choice! uwu <3";
    });


$yes3.addEventListener('click', () => 
    {

        $prompt3.style.display = 'none';
        document.getElementById("anime-sakura").style.display = "none";
        document.getElementById("kitty-heart").style.display = "none";
        document.getElementById("kitty-heart-2").style.display = "none";
        document.getElementById("uwu").style.display = "none";
        
        document.getElementById("poggers").style.display = "block";
        document.getElementById("bear-couple").style.display = "block";
        document.getElementById("bear-hugs").style.display = "block";
        document.getElementById("confetti-canvas").style.display = "block";
        $answer.style.display = 'block';
        showConfetti();
    });


$yes3.addEventListener('mouseout', (e) => 
    {
        $yes3.textContent = $OGyes3;
    });

//no button
$no3.addEventListener('click', (n3) => 
    {
        //create constant target
        const $target = n3.target

        //Randomize the position of the target
        $target.style.top = `${Math.random() *  150}px`
        $target.style.right = `${Math.random() * 150}px`

        //Make the target smaller
        $target.style.transform = `scale(${1 - counter2 * 0.1})`;
        $yes3.style.transform = `scale(${1 + counter2 * 0.15})`;
        
        //Change the text of the target
        $target.innerHTML = sentences[counter2 % sentences.length];

        if (counter2 == 7) {
            $no3.style.display = 'none';
            $yes3.style.width = '100%';
        }
    
        counter2++

    }
);//end of mouse over event

