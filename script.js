/* =========================
   LETTER
========================= */

const letterText = `
Котя,

Сегодня твой день.

И я хочу сказать тебе то,
что иногда сложно выразить словами.

Спасибо тебе за то,
что ты появилась в моей жизни.

Спасибо за каждую улыбку,
за каждый разговор,
за поддержку,
за наши маленькие моменты,
которые для меня стали
большими воспоминаниями.

Я знаю, я не всегда был идеален,
но я хочу, чтобы ты знала,
ты делаешь меня лучше,
и я стараюсь быть достойным тебя.

Я хочу, чтобы ты всегда была счастлива.

Чтобы твои мечты становились реальностью,
чтобы рядом были люди,
которые действительно тебя любят,
а каждый новый день
приносил что-то прекрасное.

И самое главное...

Я хочу быть рядом.

Сегодня.
Завтра.
И ещё очень-очень долго.

С днём рождения,
мой сладенький котёнок ❤️
`;


let envelopeOpened = false;


/* =========================
   START
========================= */

function startExperience() {

    createParticles(20);

    document
        .querySelector('.envelope-section')
        .scrollIntoView({
            behavior: 'smooth'
        });
}


/* =========================
   OPEN ENVELOPE
========================= */

function openEnvelope() {

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    const envelope =
        document.querySelector('.envelope-wrapper');

    envelope.classList.add('open');


    setTimeout(() => {

        typeWriter(
            letterText,
            'typingText',
            28
        );

    }, 700);


    setTimeout(() => {

        document
            .getElementById('signature')
            .style.opacity = '1';

    }, 11500);


    createParticles(25);
}


/* =========================
   TYPEWRITER
========================= */

function typeWriter(
    text,
    elementId,
    speed
) {

    const element =
        document.getElementById(elementId);

    element.innerHTML = '';

    let index = 0;


    function type() {

        if (index < text.length) {

            element.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(
                type,
                speed
            );
        }
    }


    type();
}


/* =========================
   BLOW CANDLES
========================= */

function blowCandles() {

    const flames =
        document.querySelectorAll('.flame');


    flames.forEach(
        (flame, index) => {

            setTimeout(
                () => {

                    flame.classList.add('off');

                },
                index * 300
            );

        }
    );


    setTimeout(() => {

        document
            .getElementById('wishMessage')
            .innerHTML =
            '✨ Пусть твоё желание обязательно сбудется! ✨';

        createParticles(50);

    }, 1200);


    setTimeout(() => {

        document
            .querySelector('.final')
            .scrollIntoView({
                behavior: 'smooth'
            });

    }, 3500);
}


/* =========================
   PARTICLES
========================= */

function createParticle() {

    const particle =
        document.createElement('div');

    particle.className =
        'particle';


    const symbols = [
        '❤️',
        '💗',
        '💕',
        '💖',
        '✨',
        '♥'
    ];


    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + 'vw';


    particle.style.fontSize =
        12 +
        Math.random() * 28 +
        'px';


    particle.style.animationDuration =
        4 +
        Math.random() * 4 +
        's';


    document.body.appendChild(
        particle
    );


    setTimeout(
        () => {
            particle.remove();
        },
        8000
    );
}


/* =========================
   AUTOMATIC HEARTS
========================= */

function createParticles(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            createParticle,
            i * 100
        );

    }
}


setInterval(() => {

    if (
        Math.random() > .45
    ) {

        createParticle();

    }

}, 1700);


/* =========================
   HERO PARALLAX
========================= */

window.addEventListener(
    'scroll',
    () => {

        const hero =
            document.querySelector(
                '.hero-content'
            );

        const scroll =
            window.scrollY;


        if (
            scroll <
            window.innerHeight
        ) {

            hero.style.transform =
                `translateY(${scroll * .2}px)`;


            hero.style.opacity =
                1 -
                scroll /
                window.innerHeight;
        }

    }
);