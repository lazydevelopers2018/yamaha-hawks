function show(id){
    if(id==='home'){
        document.getElementById('home').style.display='block';
        document.getElementById('products').style.display='none';
        document.getElementById('services').style.display='none';
        document.getElementById('about').style.display='none';
        document.getElementById('login').style.display='none';
    }else if(id==='products'){
        document.getElementById('home').style.display='none';
        document.getElementById('products').style.display='block';
        document.getElementById('services').style.display='none';
        document.getElementById('about').style.display='none';
        document.getElementById('login').style.display='none';
        
    }else if(id==='services'){
        document.getElementById('home').style.display='none';
        document.getElementById('products').style.display='none';
        document.getElementById('services').style.display='block';
        document.getElementById('about').style.display='none';
        document.getElementById('login').style.display='none';
        
    }else if(id==='about'){
        document.getElementById('home').style.display='none';
        document.getElementById('products').style.display='none';
        document.getElementById('services').style.display='none';
        document.getElementById('about').style.display='block';
        document.getElementById('login').style.display='none';
        
    }else if(id==='login'){
        document.getElementById('home').style.display='none';
        document.getElementById('products').style.display='none';
        document.getElementById('services').style.display='none';
        document.getElementById('about').style.display='none';
        document.getElementById('login').style.display='block';
        
    }
    
    
    
    
}