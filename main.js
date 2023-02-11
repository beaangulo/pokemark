const button = document.querySelector('.borgor')
const menu = document.querySelector('.menu')
const dragonite1 = document.getElementById('dragonite1')
const logo = document.getElementById('pokemarklogo')
const markonite = document.getElementById('markonite')
const ludimarko = document.getElementById('ludimarko')
const charkey = document.getElementById('charkey')
const fuemarko = document.getElementById('fuemarko')
const marklup = document.getElementById('marklup')
const marklet = document.getElementById('marklet')
const dexpic = document.getElementById('dexpic')

button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("data-state", "opened");
        menu.classList.remove("hidden");
        dragonite1.classList.add("hidden");
        logo.classList.add("hidden");
    } else {
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("data-state", "closed");
        menu.classList.add("hidden");
        dragonite1.classList.remove("hidden");
        logo.classList.add("hidden");
    }
})

markonite.addEventListener ("click", function(){
    dexpic.src="https://64.media.tumblr.com/14f0369faa516524d2512abeb2e373b6/6b72f2f883d32dff-95/s1280x1920/4447d33538fcacf070a8e8b11285cb3fe38bbbdf.pnj";
});

ludimarko.addEventListener ("click", function(){
    dexpic.src="https://64.media.tumblr.com/01d66d1b545dd1d181250dd27cdd68b0/6b72f2f883d32dff-c6/s1280x1920/76a27f59469604f4c476d040897af9fe3cc8a6d6.pnj";
});

charkey.addEventListener ("click", function(){
    dexpic.src="https://64.media.tumblr.com/09cd71e598c67e3a60186c52a23456a8/6b72f2f883d32dff-8c/s1280x1920/6a3bff2dfc3f876869d5aa28a6d6445c9c2d26a5.pnj";
});

fuemarko.addEventListener ("click", function(){
    dexpic.src="https://64.media.tumblr.com/993df7325e33a2381e428628d532aabd/6b72f2f883d32dff-af/s1280x1920/146d5fad1e5f6229d12cc88acfe3099c73bc4b57.pnj";
});

marklet.addEventListener ("click", function(){
    dexpic.src="https://64.media.tumblr.com/fe6042f9a82c6abc5ca7e53b85da7cc3/6b72f2f883d32dff-71/s1280x1920/2add1845098868281f3fe9c997156e7e82210184.pnj";
});


marklup.addEventListener ("click", function(){
    dexpic.src="https://64.media.tumblr.com/45ad78f0d623057fcfa7ff904d218ade/6b72f2f883d32dff-22/s1280x1920/851b501a6be08f608dccec8e596e7a639d6aa275.pnj";
});

dragonite1.addEventListener("click", function(){
    var elem = document.getElementById("bday");
    elem.scrollIntoView({behavior: 'smooth'});
});
