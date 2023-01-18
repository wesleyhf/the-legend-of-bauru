const app = {
    // slides: [
    //     {
    //         image: null,
    //         animationDurationInSeconds: null,
    //         captions: [
    //             'Você está pronto para uma aventura?',
    //         ],
    //     },
    //     {
    //         image: null,
    //         animationDurationInSeconds: null,
    //         captions: [
    //             'Mas eles precisam de heróis corajosos e destemidos para ajudar nessa jornada. Heróis como você! Você está preparado para essa aventura?',
    //         ],
    //     },
    // ],

    // sceneDurationInMilliseconds: 10000, // 10s
    sceneDurationInMilliseconds: 5000, // 10s

    sceneIndex: -1,
    scenes: [
        'imgs/scene-1.png',
        'imgs/scene-2.png',
        'imgs/scene-3.png',
    ],

    captionIndex: -1,
    captions: [
        'A muito tempo atrás, existia um belo e próspero reino, chamado Bauru.',
        'Onde duas almas estavam predestinadas a se encontrar.',
        'Um certo dia, o herói do tempo e a princesa da luz finalmente uniram suas forças.',
        'Juntos, seus poderes cresceram e eles trouxeram luz para todo o reino.',
        'Anos se passaram e eles partiram em busca de aventuras, desbravando novas terras.',
        'Mas agora eles precisam retornar, para realizar a aventura mais importante de suas vidas!',
    ],

    startStory() {
        this.nextScene(this.sceneDurationInMilliseconds);
        this.nextCaption(this.sceneDurationInMilliseconds / 2);
    },

    nextScene(timeoutInMilliseconds) {
        this.sceneIndex++;

        if (this.sceneIndex < (this.scenes.length - 1)) {
            setTimeout(
                () => this.nextScene(timeoutInMilliseconds),
                timeoutInMilliseconds
            );
        }
    },

    nextCaption(timeoutInMilliseconds) {
        this.captionIndex++;

        if (this.captionIndex < (this.captions.length - 1)) {
            setTimeout(
                () => this.nextCaption(timeoutInMilliseconds),
                timeoutInMilliseconds
            );
        }
    },

    init() {
        this.startStory();
    },
};