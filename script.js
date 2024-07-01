let user = ''
    let stdata =localStorage.getItem('data');
      let data = {
  win:0,
  lost:0,
  tie:0,};
    function botres() {
      let bot = Math.random()
      let resbot = ''
      if (bot >= 0.7) {
        return ('batt')
      }
      else if ((bot >= 0.4) && (bot < 0.7)) {
        return ('ball')
      }
      else {
        return ('stump')
      }
    }
    function userRes(usermove, computermove) {
      if (usermove === 'batt') {
        if (computermove === 'ball') {
          data.win= data.win+1 ;       
          return 'you won the match';
        }
        else if (computermove === 'batt') {
          data.tie= data.tie+1 ;
        
          return 'tie';
        }
        else if (computermove === 'stump') {
          data.lost= data.lost+1 ;
          
          return 'you lost the match';
        }
      }
      else if (usermove === 'ball') {
        if (computermove === 'ball') {
          data.tie= data.win+1 ;
          
          return 'tie';
        }
        else if (computermove === 'batt') {
          data.lost= data.tie+1 ;
          
          return 'you lost the match';
        }
        else if (computermove === 'stump') {
          data.win= data.lost+1 ;
          
          return 'you won the match';
        }
      }
      else if (usermove === 'stump') {
        if (computermove === 'ball') {
          data.lost= data.win+1 ;
          
          return 'bot lost the match';
        }
        else if (computermove === 'batt') {
          data.win= data.tie+1 ;
          
          return 'you won the match';
        }
        else if (computermove === 'stump') {
          data.tie= data.lost+1 ;
        
          return 'tie';
        }
      }
    }
    function showResult( user,computermove,end){
      document.querySelector('.selection').innerText=`👤- ${user} 🤖- ${computermove} `
      document.querySelector('.score').innerText=`${end} `
      document.querySelector('.last').innerText=`you won:${data.win} , lost:${data.lost} , tie:${data.tie}`
    }
   