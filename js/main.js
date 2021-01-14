let foodElements=[]
let windowHeight=$(document).height()
async function getFood(type){
    let food = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
    let foodReadable= await food.json()
    foodElements=foodReadable.recipes
    displayFood()
}

getFood('fries')

$('.header').css('height',windowHeight-56+'px')

$('.nav-link').click(function(event){
    event.preventDefault();
    let foodType =$(this).attr('id')
    getFood(foodType)
})

function displayFood(){

    $('.food-display .row').html('')

    foodElements.forEach(ele=>{

        $('.food-display .row').append(
            `<div class="col-lg-4 mb-3">
                <div class="item">
                  <img class="w-100" src="${ele.image_url}" alt="">
                  <div class="info p-3">
                    <h2>
                      ${ele.title}
                    </h2>
                    <a target="_blank" class="btn btn-danger" href=${ele.source_url}>Site</a>
                  </div>
                </div>
              </div>
                `
        )
    })
}

$(window).scroll(function(){
    
    if($(window).scrollTop() > 600){
        $('#Top').css('display','flex')
        $('.navbar').addClass('navMove')
    }else{
        $('.navbar').removeClass('navMove')
        $('#Top').css('display','none')
    }
})

$('#Top').click(function(){
    $('html,body').animate({scrollTop:0},2000)
})

