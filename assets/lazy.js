const listImgs = document.querySelectorAll('img')
const decal = 5; // from the 5-th image
for (let i=decal-1;i<listImgs.length;i++){
    const img = listImgs[i]
    img.setAttribute('loading','lazy')
}