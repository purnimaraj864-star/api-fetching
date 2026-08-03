const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    const username = document.getElementById("username").value;

    getUser(username);

});

async function getUser(username) {

    if (username === "") {
        alert("Enter username");
        return;
    }

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error("User Not Found");
        }

        const data = await response.json();

        document.getElementById("avatar").src =
            data.avatar_url;

        document.getElementById("name").innerHTML =
            data.name || "No Name";

        document.getElementById("login").innerHTML =
            "@" + data.login;

        document.getElementById("bio").innerHTML =
            data.bio || "No Bio";

        document.getElementById("location").innerHTML =
            data.location || "Location Not Available";

        document.getElementById("repos").innerHTML =
            data.public_repos;

        document.getElementById("followers").innerHTML =
            data.followers;

        document.getElementById("following").innerHTML =
            data.following;

        document.getElementById("profileLink").href =
            data.html_url;

    }

    catch (error) {

        alert(error.message);

    }

}