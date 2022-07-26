
//Metamaskt verification
if(typeof window.ethereum !== 'undefined'){

    document.querySelector('#connect').addEventListener('click', async()=>{
        try {
            const accounts = await ethereum.request({method:'eth_requestAccounts'})
            const account = accounts[0]
            document.querySelector('#account').innerHTML = account

            //Redirect to home after connected metamask
            setTimeout(()=> {
                window.location.href = "./cryptoPage.html";
            }, 2000);

        } catch(error){
            console.log(error)
        }
    })

    
}else{
    let error = document.querySelector(".error")
    error.style.display = 'block'
    document.querySelector('#close-btn').addEventListener('click', ()=>{
        error.style.display = 'none'
    })
}