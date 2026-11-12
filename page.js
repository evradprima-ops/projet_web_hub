const colors = [
    "#00ffff",
    "#ff00ff",
    "#00ff00",
    "#ff0000",
    "#ffff00",
    "#0080ff"
];

let index = 0;

setInterval(() => {
    document.body.style.borderColor = colors[index];
    document.body.style.boxShadow = `
        0 0 10px ${colors[index]},
        0 0 20px ${colors[index]},
        0 0 40px ${colors[index]},
        0 0 80px ${colors[index]}
    `;

    index = (index + 1) % colors.length;
}, 500);