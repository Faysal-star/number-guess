let t = 1;
function mainGame(){
    let max = 1000 ;
    let min = 1
    let mid = 500;

    function displayMid(mid){
        
        document.getElementById('num').innerText = mid ;
    }
    displayMid(mid);

    document.getElementById('sm').addEventListener('click' , function(){
        max = mid - 1 ;
        mid =min+ Math.floor((max - min) / 2);
        console.log(max , mid , min);
        displayMid(mid);
        t++;
        
        
    })

    document.getElementById('big').addEventListener('click' , function(){
        min = mid + 1 ;
        mid =min+ Math.floor((max - min) / 2);
        console.log(max , mid , min);
        displayMid(mid);
        t++;
        
        
    })

    document.getElementById('yes').addEventListener('click' , function(){
        // document.getElementById('num').innerText = 'Yessss !';
        document.getElementById('scss').style.transform = 'translateY(0)';
        document.getElementById('try').innerText = t ;
        
    })
}

document.getElementById('srt').addEventListener('click',function(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    mainGame();
})

document.getElementById('srt2').addEventListener('click',function(){
    location.reload();
})


