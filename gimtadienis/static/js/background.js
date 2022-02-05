var canvas = document.getElementById('background-canvas');
        canvas.width = document.querySelector('html').offsetWidth;
        canvas.height = document.querySelector('html').offsetHeight;
        var ctx = canvas.getContext('2d');
        var raf;
        var points = [];
        var vx=0.5, vy=0.5;

        var d = function(p1,p2){
        return Math.abs(p1.x-p2.x)+Math.abs(p1.y-p2.y);
        }

        for(var i=0; i<50; i++){
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var xVel = vx, yVel = vy;
        if(i%2==0){
            xVel = vx+0.5;
        }
        else{
            yVel = vy+0.5;
        }
        points.push({x:x,y:y,originx:x,originy:y,vx:xVel,vy:yVel});
        }

        for(var i = 0; i < points.length; i++) {
        var closest;
        var p1 = points[i];
        for(var j = 0; j < points.length; j++) {
            var p2 = points[j]
            if(!(p1 == p2)) {
            var placed = false;
            if(!placed) {
                if(closest == undefined) {
                closest = p2;
                placed = true;
                }
            }

            if(!placed) {
                if(d(p1, p2) < d(p1, closest)) {
                closest = p2;
                placed = true;
                }
            }
            }
        }
        p1.closest = closest;
        }



        var drawPoint = function(p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(p.closest.x,p.closest.y);
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.stroke();
        
        }


        function draw() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        for(var i=0; i<50; i++){
            drawPoint(points[i]);
            points[i].x += points[i].vx;
            points[i].y += points[i].vy;
            points[i].closest.x += points[i].vx;
            points[i].closest.y += points[i].vy;
            if (points[i].y+points[i].vy > points[i].originy+20 || points[i].y+points[i].vy < points[i].originy-20) {
            points[i].vy = -points[i].vy;
            }
            if (points[i].x+points[i].vx > points[i].originx+20 || points[i].x+points[i].vx < points[i].originx-20) {
            points[i].vx = -points[i].vx;
            }
        }
        
        //console.log(ball.x,ball.originx)
        raf = window.requestAnimationFrame(draw);
        }
        draw();
        raf = window.requestAnimationFrame(draw);