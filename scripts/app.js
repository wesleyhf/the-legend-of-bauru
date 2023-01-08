const app = {
    slides: [
        {
            image: null,
            orientation: null,
            animationDurationInSeconds: null,
            texts: [
                'Você está pronto para uma aventura?',
            ],
        },
        {
            image: 'imgs/scene-1.png',
            orientation: 'portrait',
            animationDurationInSeconds: 10,
            texts: [
                'A muito tempo atrás, existia um belo e próspero reino, chamado Bauru.',
                'Onde duas almas estavam predestinadas a se encontrar.',
            ],
        },
        {
            image: 'imgs/scene-2.png',
            orientation: 'portrait',
            animationDurationInSeconds: 10,
            texts: [
                'Um certo dia, o herói do tempo e a princesa da luz finalmente uniram suas forças.',
                'Juntos, seus poderes cresceram e eles trouxeram luz para todo o reino.',
            ],
        },
        {
            image: 'imgs/scene-3.png',
            orientation: 'portrait',
            animationDurationInSeconds: 10,
            texts: [
                'Anos se passaram e eles partiram em busca de aventuras, desbravando novas terras.',
                'Mas agora eles precisam retornar, para realizar a aventura mais importante de suas vidas!',
            ],
        },
        {
            image: null,
            animationDurationInSeconds: null,
            orientation: null,
            texts: [
                'Mas eles precisam de heróis corajosos e destemidos para ajudar nessa jornada. Heróis como você! Você está preparado para essa aventura?',
            ],
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

    getSceneClass(slide) {
        return {
            'scene--landscape': slide.orientation === 'landscape',
            'scene--portrait': slide.orientation === 'portrait',
            'scene--center': slide.orientation === 'center',
        };
    },

    getSceneStyle(slide) {
        const style = {};

        if (slide.image) {
            style.backgroundImage =  `url(${slide.image})`;
        }

        if (slide.animationDuration) {
            style.animationDuration = `${slide.animationDurationInSeconds}s`;
        }

        return style;
    },

    init() {
        this.slide = this.slides[this.currentIndex];
    },
};