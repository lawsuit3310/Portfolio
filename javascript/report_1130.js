Pages = []
SlideImgs = [];
TempElements = [];
CircleSinParam = [];
CircleCosParam = [];
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
        case 3:
            var text = Pages[idx].querySelector(".text");
            var line = Pages[idx].querySelector(".banner");
            var imgs = Pages[idx].querySelectorAll(".img");
            var texts = ['굿', '즈', ' ', '획','득']; 
            text.innerHTML = "";

            //Unload=====================================================
            line.style.transition = 'none';
            line.style.opacity = `0%`;
            line.style.top = `${Number(line.style.top.slice(0, -1)) - 100}%`
            imgs.forEach(v => {
                v.style.transition = 'none';
                v.style.opacity = `0%`;
                v.style.left = `${Number(v.style.left.slice(0, -1)) + 100}%`
            });

            await delay(500);
            Pages[idx].style.left = '0%';
            await delay(500);

            //Load========================================================
            line.style.transition = 'all 1s';
            line.style.top = '0%';
            line.style.opacity = '100%';

            await delay(100);

            for (let i = 0; i < imgs.length; i++) {
                const img = imgs[i];
                
                img.style.transition = 'all 1.5s';
                img.style.opacity = `100%`;
                img.style.left = `${Number(img.style.left.slice(0, -1)) - 100}%`
                await delay(100);
            }
            await delay(750);

            for (let i = 0; i < texts.length; i++) {
                const t = texts[i];
                await delay(150);
                text.innerHTML = text.innerHTML + t;
            }            
        break;
        case 4:
            var webPg = Pages[idx].querySelector(".stove");
            var video = Pages[idx].querySelector(".GreatToyShowdown");
            var annotation = Pages[idx].querySelector(".annotation");
            var texts = Pages[idx].querySelectorAll("li");
            var line = Pages[idx].querySelector(".banner");
            var originalText = annotation.innerHTML.split('');

            //Unload
            annotation.innerHTML = '';
            webPg.style.transition = 'none';
            webPg.style.opacity = `0%`;
            video.style.transition = 'none';
            video.style.opacity = `0%`;
            video.style.left = `${Number(video.style.left.slice(0, -1)) + 100}%`
            texts.forEach(text => {
                text.style.transition = 'none';
                text.style.opacity = `0%`;
                text.style.left = `${Number(text.style.left.slice(0, -1)) + 100}%`
            });
            line.style.transition = 'none';
            line.style.opacity = `0%`;
            line.style.left = `${Number(line.style.left.slice(0, -1)) + 100}%`

            await delay(500);
            Pages[idx].style.left = '0%';
            await delay(500);

            webPg.style.transition = 'all 2s';
            webPg.style.opacity = `100%`;
            await delay(100);
            
            line.style.transition = 'all 1s';
            line.style.left = '0%';
            line.style.opacity = '100%';

            await delay(150);

            video.style.transition = 'all 1.5s';
            video.style.opacity = `100%`;
            video.style.left = `${Number(video.style.left.slice(0, -1)) - 100}%`
            await delay(500);

            for (let i = 0; i < texts.length; i++) {
                const text = texts[i];
                text.style.transition = 'all 1.5s';
                text.style.opacity = `100%`;
                text.style.left = `${Number(text.style.left.slice(0, -1)) - 100}%`
                await delay(250);
            }          
            for (let i = 0; i < originalText.length; i++) {
                const t = originalText[i];
                annotation.innerHTML = annotation.innerHTML + t;
                await delay(100);
            }

        break;
        case 6:

        var imgs = Pages[idx].querySelectorAll("div.img");
        var texts = Pages[idx].querySelectorAll("li");
        var videoBox = Pages[idx].querySelector("div.videoBox");

        imgs.forEach(img => {
            img.style.transition = 'none';
            img.style.top = '100%'
            img.style.opacity = "0%";
            img.style.transition = 'opacity 1.5s';
        });
        texts.forEach(text => {
            text.style.transition = 'none';
            text.style.left = '-100%'
            text.style.opacity = "0%";
        });

        videoBox.style.transition = 'none';
        videoBox.style.left = '100%';
        videoBox.style.opacity = "0%";

        await delay(500);
        Pages[idx].style.left = '0%'; 
        await delay(750);

        for (let i = 0; i < imgs.length; i++) {
            var v = imgs.length - i;
            const img = imgs[v - 1];
            
            img.style.opacity = "100%";
            CircleMove(img, 4, 0, 157 - i * 10, 2.5, 35 - i * 12.5, 110)
            await delay(250)
        }
        await delay(100);
        for (let i = 0; i < texts.length; i++) {
            const text = texts[i];
            text.style.transition = 'all 1s';
            text.style.left = '0%'
            text.style.opacity = "100%";
            await delay(200);
        }

        videoBox.style.transition = 'all 1s';
        videoBox.style.left = '0%';
        videoBox.style.opacity = "100%";
        await delay(200);

        break;
        case 7:
            Pages[idx].style.left = '0%'; 
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
async function SlideNext(idxNow = 0) {
    var v = idxNow-1 < 0 ? SlideImgs.length - 1 : idxNow - 1;
    SlideImgs[v].style.top = "-200%";
    SlideImgs[idxNow].style.top = "0%";
    console.log(v);
    await delay(4000);
    SlideNext((idxNow + 1) % SlideImgs.length);
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
        });
        case 3:  
            elements.forEach(element => {
            element.style.left = `${Number(element.style.left.slice(0, -1)) + 100}%`;
            element.style.opacity = `100%`;
        });
    break;
    }
}

async function CircleMove(target, radius = 2, Min = 0, Max = CircleCosParam.length, spd = 4, posX = 40, posY = 20)
{
    var v = target.style.transition;
    //target.style.transition = 'none';
    for (let rad = Min; rad < Max; rad += spd) {
        const sin = CircleSinParam[rad];
        const cos = CircleCosParam[rad];
        
        target.style.transform = `rotate(${(rad - 157) / 100}rad)`
        target.style.top = `${posY - sin * radius * 16}%`;
        target.style.left = `${posX - cos * radius * 9}%`;
        console.log(rad);
        await delay(10);   
    }
    target.transition = v;
}
// ==============================================

for (let rad = 0; rad < Math.PI * 2 ; rad += 0.01)
{
    CircleSinParam.push(Math.sin(rad));
    CircleCosParam.push(Math.cos(rad));
}

// 실제 진입점 ========================================================
window.addEventListener("DOMContentLoaded", async (e) =>
{
    //Member & local init==============================================
    Pages = document.querySelectorAll(".content");
    Title = document.querySelector(".title");
    //UserMenu = document.querySelector(".usermenu");
    DoriDori = document.querySelector(".bgVideo");
    StartButton = document.querySelector(".title a.startBtn");
    SlideImgs = document.querySelectorAll(".page8 .img");
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

    SlideNext(0);

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