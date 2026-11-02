const attackCard = document.querySelector("#attackCard")

const attackItems = {
    source : attackCard.querySelector('source'),
    videos : attackCard.querySelector('div'),
    buttons : attackCard.querySelector('.buttons'),
}

let currentAttack = "Light"

for(const video of attackItems.videos.children)
{
    video.addEventListener('mouseenter',() => {
        video.controls = true
    })
    video.addEventListener('mouseleave',() => {
        video.controls = false
    })
}

function bindAttackData(attackType, parent)
{
    let elmnt = parent == null ? document : parent;

    let button = elmnt.querySelector(`button#${attackType}`);
    
    button.onclick = () => {
        currentAttack = attackType

        changeAttack(currentAttack);
        attackItems.videos.querySelector(`#${currentAttack}`).play();
    };
}

bindAttackData("Light",attackCard)
bindAttackData("Medium",attackCard)
bindAttackData("Heavy",attackCard)

function changeAttack(attackType)
{
    for (let child of attackItems.videos.children)
    {
        if (child.id == attackType)
        {
            child.classList.remove('hidden')
        }
        else
        {
            child.classList.add('hidden')
        }
    }
}

changeAttack(currentAttack)