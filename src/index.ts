import blessed from "blessed";

const screen = blessed.screen({
    smartCSR: true,
    title: "Internet Simulator",
    fullUnicode: true,
});

const box = blessed.box({
    top: "center",
    left: "center",
    width: "50%",
    height: "50%",
    content: "{bold}Internet Simulator{/bold}",
    align: "center",
    valign: "middle",
    tags: true,
    border: {
        type: "line",
    },
    style: {
        fg: "white",
        bg: "black",
        border: {
            fg: "white",
            bg: "black",
        },
    },
});

screen.append(box);

screen.key(["escape", "q", "C-c"], function (ch, key) {
    return process.exit(0);
});

box.focus();

screen.render();
