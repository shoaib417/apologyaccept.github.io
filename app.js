const textareaa=document.getElementById('prin');
const curser=document.getElementById('movingcurser');
const phrase=['Its ok Akrati.','I accept your apology.','I forgive you.'];
let printingele='';
var i=0;
var j=0;
let bool=true;
let flag=true;
let timee=100;
function curserhide()
{
    curser.style.display="none"; 
}
function cursershow()
{
    curser.style.display="inline";
}

function typewriter()
{
    textareaa.innerHTML=printingele;
    timee=100;
    if(i<phrase.length)
    {
        if(bool && j<phrase[i].length)
        {
            printingele=printingele+phrase[i][j];
            if(j<=phrase[i].length)
            {
                j++;
            }
            if(j==phrase[i].length)
            {
                bool=false;
            }
        }
        if((bool==false) && j>=0)
        {
            if(j==phrase[i].length-1)
            {
                timee=2000;
            }
            printingele=printingele.substring(0,j);
            j--;
            if(j==-1)
            {
                bool=true;
                j=0;
                i++;
            }
            
        }

    }
    if(i==phrase.length)
    {
        i=0;
    }
    if(timee==2000)
    {
        setTimeout(curserhide,400); 
        setTimeout(cursershow,500);   
        setTimeout(curserhide,900); 
        setTimeout(cursershow,1000); 
        setTimeout(curserhide,1400); 
        setTimeout(cursershow,1500);
    }
    setTimeout(typewriter,timee);

}
typewriter();