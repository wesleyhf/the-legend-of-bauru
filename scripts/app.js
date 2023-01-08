const app = {
    slides: [
        {
            image: null,
            animationDuration: null,
            texts: [
                'Você está pronto para uma aventura?',
            ],
            auto: false,
        },
        {
            image: 'imgs/scene-1.png',
            animationDuration: '10s',
            texts: [
                'A muito tempo atrás, existia um belo e próspero reino, chamado Bauru.',
                'Onde duas almas estavam predestinadas a se encontrar.',
            ],
            auto: true,
        },
        {
            image: 'imgs/scene-2.png',
            animationDuration: null,
            texts: [
                'Um certo dia, o herói do tempo e a princesa da luz finalmente uniram suas forças.',
                'Juntos, seus poderes cresceram e eles trouxeram luz para todo o reino.',
            ],
            auto: true,
        },
        {
            image: 'imgs/scene-3.png',
            animationDuration: null,
            texts: [
                'Anos se passaram e eles partiram em busca de aventuras, desbravando novas terras.',
                'Mas agora eles precisam retornar, para realizar a aventura mais importante de suas vidas!',
            ],
            auto: true,
        },
        {
            image: null,
            animationDuration: null,
            texts: [
                'Mas eles precisam de heróis corajosos e destemidos para ajudar nessa jornada. Heróis como você! Você está preparado para essa aventura?',
            ],
            auto: false,
        },
    ],

    currentIndex: 0,
    slide: null,

    next() {
        if (this.currentIndex < (this.slides.length - 1)) {
            this.currentIndex++;
            this.slide = this.slides[this.currentIndex];
        }
    },

    getSceneStyle(slide) {
        const style = {};

        if (slide.image) {
            style.backgroundImage =  `url(${slide.image})`;
        }

        if (slide.animationDuration) {
            style.animation = `${slide.animationDuration} linear forwards backgroundScrollY`;
        }

        return style;
    },

    init() {
        this.slide = this.slides[this.currentIndex];
    },
};