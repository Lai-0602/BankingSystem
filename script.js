lucide.createIcons();

const users = [
    {
        id: 0,
        username: "lai0602",
        password: "urmom",
        nickname: "Jace",
        balance: 10,
        admin: true,
    },
    {
        id: 1,
        username: "louis",
        password: "123456",
        nickname: "Louis",
        balance: "100",
        admin: true,
    },
    {
        id: 2,
        username: "hei0727",
        password: "654321",
        nickname: "Jeremy",
        balance: -10,
        admin: false,
    },
    {
        id: 3,
        username: "mum",
        password: "love",
        nickname: "Mum",
        balance: 99999,
        admin: true,
    },
];

const currentId = 1;

// Greeting text
const greeting = document.getElementById("greeting");
greeting.innerHTML = `Hello, ${users[currentId].nickname}`;

// Status text
const userStatus = document.getElementById("status");
userStatus.innerHTML = `Your balance as of today is ${
    users[currentId].balance > 0
        ? `<span style="color: green">${users[currentId].balance}</span>`
        : users[currentId].balance === 0
        ? `<span>${users[currentId].balance}</span>`
        : `<span style="color: red">${users[currentId].balance}</span>`
}`;

// Profile icon
const profileIcon = document.getElementById("profileIcon");
