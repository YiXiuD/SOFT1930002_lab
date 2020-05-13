function f() {
    const works = [
        {
            author: "Micheal Jackson",
            lifetime: "1022-1055",
            tips: "Human",
            photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
        },
        {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
        {
            author: "John Herry UY",
            lifetime: "1894-1928",
            tips: "Abstract",
            photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
        },
        {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
    ];
    for (let i = 0; i <= works.length; i++) {
        var content = '<div class="item">' +
            '<h4>Grene: ' + works[i].tips + '</h4>' +
            '<div class="inner-box">' +
            '<h3>' + works[i].author + '</h3>' +
            '<h5>lifetime:' + works[i].lifetime + '</h5>' +
            '</div>' +
            '<div class="inner-box">' +
            '<h3>Popular Photos</h3>';
        for (var j = 0; j < works[i].photos.length; j++) {
            content += '<img style="width: 50px;height: 50px;padding: 3px" src=./' + works[i].photos[j] + '>';
        }
        content += '</div> ' +
            '<button>Visit</button>' +
            '</div>';
        document.write(content);
    }
}
var justify=document.getElementsByClassName('flex-container justify');
document.body.addEventListener('dblclick', f());