let snowflakeSize = { min: 3, max: 15 }; // Initial size range in em

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❅';

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // between 2 to 5 seconds
    snowflake.style.fontSize = `${Math.random() * (snowflakeSize.max - snowflakeSize.min) + snowflakeSize.min}em`; // between min and max em
    snowflake.style.opacity = `${Math.random()}`;

    document.body.appendChild(snowflake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

function startSnowfall() {
    setInterval(createSnowflake, 200);
}

function changeSnowflakeSize(min, max) {
    snowflakeSize = { min, max };
}

function startApp() {
    document.getElementById('start').style.display = 'none';
    document.querySelector('header').style.display = 'block';
    document.querySelector('.content').style.display = 'block';
    changeSnowflakeSize(1, 2); // Set the new snowflake size range
    startSnowfall();
}

startSnowfall();
