export const checkIdSessionStorage = () => {
    if(sessionStorage.getItem("idAnimal") == null){
        window.location.href = "../public/index.html"
    }
}