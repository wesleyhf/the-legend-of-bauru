const app = {
    slides: [
        {
            image: null,
            animationDurationInSeconds: null,
            captions: [
                'Você está pronto para uma aventura?',
            ],
        },
        {
            image: 'imgs/scene-1.png',
            animationDurationInSeconds: 15,
            captions: [
                'A muito tempo atrás, existia um belo e próspero reino, chamado Bauru.',
                'Onde duas almas estavam predestinadas a se encontrar.',
            ],
        },
        {
            image: 'imgs/scene-2.png',
            animationDurationInSeconds: 10,
            captions: [
                'Um certo dia, o herói do tempo e a princesa da luz finalmente uniram suas forças.',
                'Juntos, seus poderes cresceram e eles trouxeram luz para todo o reino.',
            ],
        },
        {
            image: 'imgs/scene-3.png',
            animationDurationInSeconds: 10,
            captions: [
                'Anos se passaram e eles partiram em busca de aventuras, desbravando novas terras.',
                'Mas agora eles precisam retornar, para realizar a aventura mais importante de suas vidas!',
            ],
        },
        {
            image: null,
            animationDurationInSeconds: null,
            captions: [
                'Mas eles precisam de heróis corajosos e destemidos para ajudar nessa jornada. Heróis como você! Você está preparado para essa aventura?',
            ],
        },
    ],

    slide: null,
    currentSlideIndex: 0,
    currentCaptionIndex: -1,
    captionTimeOutId: null,

    next() {
        if (this.currentSlideIndex < (this.slides.length - 1)) {
            this.currentSlideIndex++;
            this.slide = this.slides[this.currentSlideIndex];

            this.setAutoCaptions(this.slide);
        }
    },

    setAutoCaptions(slide) {
        // reset caption
        this.currentCaptionIndex = -1;
        clearTimeout(this.captionTimeOutId);

        const captionDurationInMilliseconds = (slide.animationDurationInSeconds / slide.captions.length) * 1000;
        this.setCaptionsTimeout(captionDurationInMilliseconds);
    },

    setCaptionsTimeout(captionDurationInMilliseconds ) {
        this.currentCaptionIndex++;

        if (this.currentCaptionIndex < (this.slide.captions.length - 1)) {
            this.captionTimeOutId = setTimeout(() => {
                this.setCaptionsTimeout(captionDurationInMilliseconds);
            }, captionDurationInMilliseconds);
        }
    },

    getSceneStyle(slide) {
        const style = {};

        if (slide.image) {
            style.backgroundImage = `url(${slide.image})`;
        }

        if (slide.animationDurationInSeconds) {
            style.animationDuration = `${slide.animationDurationInSeconds}s`;
        }

        return style;
    },

    init() {
        this.slide = this.slides[this.currentSlideIndex];
    },
};