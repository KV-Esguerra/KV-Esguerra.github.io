const attackCard = document.querySelector("#attackCard")

const attackItems = {
    source : attackCard.querySelector('source'),
    videos : attackCard.querySelector('div'),
    buttons : attackCard.querySelector('.buttons'),
}

let currentAttack = "light"

function bindAttackData(attackType, parent)
{
    let elmnt = parent == null ? document : parent;

    let button = elmnt.querySelector(`button#${attackType}`);
    
    button.onclick = () => {
        attackItems.videos.querySelector(`.${currentAttack}`).pause();
        currentAttack = attackType

        changeAttack(currentAttack);
        let currentVid = attackItems.videos.querySelector(`.${currentAttack}`);
        currentVid.currentTime = 0;
        currentVid.play()
    };
}


function changeAttack(attackType)
{
    for (let child of document.querySelectorAll('.light,.medium,.heavy'))
    {   
        if (child.classList.contains(attackType))
        {
            child.classList.remove('hidden')
        }
        else
        {
            child.classList.add('hidden')
        }
    }
    for (const button of attackItems.buttons.children)
    {
        if(button.id == attackType)
        {
            button.classList.add('active')
        }
        else
        {
            button.classList.remove('active')
        }
    }
}

// The "OnStart" function
for(const video of attackItems.videos.children)
{
    video.addEventListener('mouseenter',() => {
        video.controls = true
    })
    video.addEventListener('mouseleave',() => {
        video.controls = false
    })
}


bindAttackData("light",attackCard)
bindAttackData("medium",attackCard)
bindAttackData("heavy",attackCard)

changeAttack(currentAttack)

