let logo = document.querySelector(".logoAutoral")

export function hoverLogo(){
    logo.addEventListener("mouseenter", () => {
        logo.setAttribute('src', "./img/logo/LogoVitorGabriel-DARK.png")
    
    })
    logo.addEventListener("mouseleave", () => {
        logo.setAttribute('src', "./img/logo/LogoVitorGabriel-LIGHT.png")
    })
}