Pages = []
TempElements = [];
var IndexNow = 0;
var Title = document.querySelector(".title");
var IsOnAnimation = false;
var DoriDori;
var UserMenu;

var PageMove = async (idx) =>
{
    if (IsOnAnimation) return IsOnAnimation;
    IsOnAnimation = true;
    if (idx == -1)
    {
        IsOnAnimation = false;
        return `Invaild Key ${idx}`
    }
    if (idx == Pages.length)
    {
        IsOnAnimation = false;
        return `Invaild Key ${idx}`
    }

    Pages[IndexNow].style.left = '150%'

    switch (idx)
    {
        case 2:
            var elements = Pages[idx].querySelectorAll('div.webzenImg');
            var texts = Pages[idx].querySelectorAll('div.logo, div.text li');
            var banners = Pages[idx].querySelectorAll('div.banner');

            //#region Unload====================================

            texts.forEach(v => {
                v.style.transition = 'none';
                v.style.opacity = `0%`;
                v.style.left = `${Number(v.style.left.slice(0, -1)) - 100}%`
            });

            console.log(texts.length);
            elements.forEach(element => {
                element.style.top = `${Number(element.style.top.slice(0, -1)) - 100}%`;
                element.style.opacity = `0%`;
            });

            banners.forEach(v => {
                v.style.transition = 'none';
                v.style.opacity = '0';
            });
            banners[0].style.left = '-100%';
            banners[1].style.left = '100%';

            //#endregion
            await delay(500);
            Pages[idx].style.left = '0%';
            await delay(750);
            //#region Load ========================================

            for (let idx = 0; idx < banners.length; idx++) {
                const element = banners[idx];
                element.style.transition = 'all 1s';
                element.style.left = '0%';
                element.style.opacity = '100%';
                
                await delay(100);
            }

            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];
                element.style.top = `${Number(element.style.top.slice(0, -1)) + 100}%`;
                element.style.opacity = `100%`;
                
                await delay(100);
            }
                
            texts.forEach(v => {
                v.style.transition = 'all 1.5s';
                v.style.left = '-5%';
                v.style.opacity = `100%`;
            });
            //#endregion
            break;
        default:
            UnloadElements(idx, idx % 4);
            await delay(500);
            Pages[idx].style.left = '0%'; 
            await delay(750);
            LoadElements(idx, idx % 4);
            break;
    }
    IndexNow = idx;
    IsOnAnimation = false;
    Title.style.display = Title.style.display == 'none' ? Title.style.display : 'none';
    DoriDori.style.display = 'block';

    
    await delay(1000);
    return idx;

};

// method =========================================
function delay(ms = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function Lerp(min, max, f)
{
    var v = max - min > min - max ? max - min : min - max;
    return v * f + min;
}

function UnloadElements(PageIndex, dir)
{   
    var elements = Pages[PageIndex].querySelectorAll('*');
   
    switch (dir)
    {
        case 0:  
            elements.forEach(element => {
                element.style.top = element.style.top == '' ? `${element.style.top + 100}%` : `${Number(element.style.top.slice(0, -1)) + 100}%`;
                element.style.opacity = `0%`;
            });
        break;
        case 1: 
            elements.forEach(element => {
                element.style.top = element.style.top == '' ? `${element.style.top - 100}%` : `${Number(element.style.top.slice(0, -1)) - 100}%`;
                element.style.opacity = `0%`;
            });
        break;
        case 2:  
            elements.forEach(element => {
            element.style.left = element.style.left == '' ? `${element.style.left + 200}%` : `${Number(element.style.left.slice(0, -1)) + 200}%`;
            element.style.opacity = `0%`;
        });
        case 3:  
            elements.forEach(element => {
            element.style.left = element.style.left == '' ? `${element.style.left - 100}%` : `${Number(element.style.left.slice(0, -1)) - 100}%`;
            element.style.opacity = `0%`;
        });
    break;
    }
}
async function LoadElements(PageIndex, dir)
{
    var elements = Pages[PageIndex].querySelectorAll('*');
    switch (dir)
    {
        case 0:  
            elements.forEach(element => {
                element.style.top = `${Number(element.style.top.slice(0, -1)) - 100}%`;
                element.style.opacity = `100%`;
            });
        break;
        case 1: 
            elements.forEach(element => {
                element.style.top = `${Number(element.style.top.slice(0, -1)) + 100}%`;
                element.style.opacity = `100%`;
            });
        break;
        case 2:  
            elements.forEach(element => {
            element.style.left = `${Number(element.style.left.slice(0, -1)) - 200}%`;
            element.style.opacity = `100%`;
            console.log(element.style.left)
        });
        case 3:  
            elements.forEach(element => {
            element.style.left = `${Number(element.style.left.slice(0, -1)) + 100}%`;
            element.style.opacity = `100%`;
            console.log(element.style.left)
        });
    break;
    }
}
// ==============================================

// 실제 진입점 ========================================================
window.addEventListener("DOMContentLoaded", async (e) =>
{
    //Member & local init==============================================
    Pages = document.querySelectorAll(".content");
    Title = document.querySelector(".title");
    //UserMenu = document.querySelector(".usermenu");
    DoriDori = document.querySelector(".bgVideo");
    StartButton = document.querySelector(".title a.startBtn");
    titleElements = Title.querySelectorAll(".menu *");
    //================================================================
    
    // UserMenu.addEventListener("mouseover", () =>{
    //     UserMenu.querySelectorAll("ul").forEach(element => {
    //         element.style.top = "-20%";
    //     });
    // });
    // UserMenu.addEventListener("mouseleave", () =>{
    //     UserMenu.querySelectorAll("ul").forEach(element => {
    //         element.style.top = "20%";
    //     });
    // }); 


    titleElements.forEach(element => {
        element.style.top = "80%";
    });
    for (let i = 0; i < 42; i ++) {
        Title.style.width = `${Lerp(
            Number(Title.style.width.slice(0, -1))
            ,100,0.1)}%`;
        Title.style.opacity = `${Lerp(0, 100, i/40)}%`;
        
        await delay(10);
    }
    Title.style.width = '100%';
    for (let index = 0; index < titleElements.length; index++) {
        const element = titleElements[index];
        element.style.top = "0%";
        await delay(200);
    }


    StartButton.addEventListener("click", async () =>
    {
        PageMove(0);

        document.addEventListener("keydown", function (e)
        {
            console.log(e.key)
            switch(e.key)
            {
                case 'ArrowLeft':
                    console.log(PageMove(IndexNow - 1))
                    break;
                case ' ':
                case 'ArrowRight':
                    console.log(PageMove(IndexNow + 1))
                    break;
            }
        });
    });
    
    addEventListener('resize', (event) => {
        var elements = Pages[2].querySelectorAll('div.webzenImg');
        elements.forEach(element => {
            if(window.innerHeight == window.screen.height)
                {
                    element.style.width = '78%';
                    element.style.height = '65%';
                    element.style.marginLeft = '25%';  
                }
                else
                {   
                    element.style.width = '70%';
                    element.style.height = '65%';
                    element.style.marginLeft = '28%';
                }
        });
      });
    
});