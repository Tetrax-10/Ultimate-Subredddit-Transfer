(function () {
    let link = "";

    noOfSubreddits = document
        .querySelector("body > div.side > div:nth-child(4) > div > div > h1")
        .innerText.split("(")[1]
        .split(")")[0];

    cycle = Math.round(noOfSubreddits / 100);

    function createLink() {
        for (let i = 1; i <= noOfSubreddits; i++) {
            let component = document.querySelector(
                `body > div.side > div:nth-child(4) > div > ul > li > div > div.clear > ul > li:nth-child(${
                    i + 2
                }) > a`
            );
            if (typeof component.innerText === "string") {
                link += component.innerText + "+";
            }
        }
        return (bigLink = "https://old.reddit.com/r/" + link);
    }
    bigLink = createLink();

    subRedditSplitter = bigLink.split("/r/")[1];
    cycleSplitter = subRedditSplitter.split("+");
    splitLink = "";
    for (let i = 0; i <= 20; i++) {
        console.log(`${i}\n`);
    }
    console.log(
        "--------------------------------OPEN THESE LINKS IN YOUR NEW ACCOUNT------------------------------------"
    );
    for (let i = 1; i <= cycle + 1; i++) {
        array = cycleSplitter.splice(0, 100);
        for (let i = 0; i < array.length; i++) {
            if (array[i].includes("u/")) {
                temp = array[i].split("/");
                array[i] = temp[0] + "_" + temp[1];
            }
        }
        linker(array);
    }
    console.log(
        "------------------------------RIGHT CLICK AND COPY, DON'T CTRL+C AND CTRL+V-----------------------------"
    );
    function linker(array) {
        for (let i = 0; i <= array.length - 1; i++) {
            splitLink += array[i] + "+";
        }
        finalLink = "https://old.reddit.com/r/" + splitLink;
        console.log(finalLink);
        splitLink = "";
    }
})();
