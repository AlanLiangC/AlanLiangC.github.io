(function(){
    const c = document.getElementById('stars');
    const ctx = c.getContext('2d');
    let w,h,stars;
  
    function resize(){ w = c.width = innerWidth; h = c.height = 420; }
    function init(){
      stars = Array.from({length: 120}, () => ({
        x: Math.random()*w,
        y: Math.random()*h,
        z: Math.random()*1+.2,
        r: Math.random()*1.2+.3
      }));
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      for(const s of stars){
        s.x += s.z; if(s.x>w) s.x=0;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle = `rgba(173,216,230,${0.25+s.z*0.5})`; ctx.fill();
      }
      requestAnimationFrame(draw);
    }
  
    addEventListener('resize', ()=>{resize(); init();});
    resize(); init(); draw();
  })();
  