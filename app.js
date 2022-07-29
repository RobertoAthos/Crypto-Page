let connect =  document.querySelector('#connect')
//Metamaskt verification
if(typeof window.ethereum !== 'undefined'){

   if(connect){
    connect.addEventListener('click', async()=>{
        try {
            const accounts = await ethereum.request({method:'eth_requestAccounts'})
            const account = accounts[0]
            document.querySelector('#account').innerHTML = account
            //Redirect to home after connected metamask
            setTimeout(()=> {
                let congrats = document.querySelector('.congrats')
                congrats.style.display = "block"
                document.querySelector('.congrats-btn').addEventListener('click', ()=>{
                    congrats.style.display = 'none'
                })
            }, 2000); 

        } catch(error){
            console.log(error)
        }
    })
   }

    
}else{
    let error = document.querySelector(".error")
    error.style.display = 'block'
    document.querySelector('.close-btn').addEventListener('click', ()=>{
        error.style.display = 'none'
    })
}
