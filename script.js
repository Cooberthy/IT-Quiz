let list = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "so carefull of the type? but no from scarped cliff and quarried stone se cries a thousands types are fona i care for nothing all shall go", "never gonna give you up never gonna let you down never gonna run around and desert you", "God said, Let there be light: and there was light.", "dette sitatet er sponset av Raid: Shadow Legends™", "this is pointless"]
let word = list[Math.floor(Math.random() * list.length)]

function wow(){
    test = Math.floor(Math.random() * list.length)
    word = list[test]
    document.getElementById("question").textContent = word
    console.log(word)
}
