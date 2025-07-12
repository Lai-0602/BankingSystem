lucide.createIcons();

const users = [
    {
        id: 0,
        username: "lai0602",
        password: "urmom",
        nickname: "Jace",
        balance: 10,
    },
    {
        id: 1,
        username: "louis",
        password: "123456",
        nickname: "Louis",
        balance: 100,
    },
];

// let logined = false;

const currentId = 1;

const greeting = document.getElementById("greeting");
greeting.innerHTML = `Hello, ${users[currentId].nickname}`;

const userStatus = document.getElementById("status");
userStatus.innerHTML = `Your balance as of today is ${
    users[currentId].balance > 0
        ? `<span style="color: green">${users[currentId].balance}</span>`
        : `<span style="color: red">${users[currentId].balance}</span>`
}`;
