async function getData() {
    const response = await fetch('https://6398b8d529930e2bb3c0276a.mockapi.io/test')
    const data = await response.json()
    let rooms = document.querySelector(".rooms");
    let arr = [];
    for (let index = 0; index < 100; index++) {
        const element = `<div class="room">
<p class="room_number">
    ${index}
</p>
    <img src="./assets/img/room.png"  alt="">
    <div class="room_members">

    <img src="./assets/img/member.png"  alt="">
    <img src="./assets/img/member.png"  alt="">
    <img src="./assets/img/member.png"  alt="">

    <img src="./assets/img/member.png"  alt="">
    </div>
    </div>`;
        arr.push(element);
    }
    rooms.innerHTML = arr.join("");
    console.log(data);
}
getData();