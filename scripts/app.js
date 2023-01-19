const app = {
    themeSong: new Audio('theme.mp3'),
    screamSound: new Audio('scream.mp3'),
    sceneDurationInMilliseconds: 20000, // 20s

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

    modal: {
        open: true,
        content: null,
        actions: [],
    },

    openModal(content, actions) {
        this.modal.content = content;
        this.modal.actions = actions;
        this.modal.open = true;
    },

    closeModal() {
        this.modal.open = false;
    },

    async startStory() {
        this.closeModal();
        this.themeSong.play();

        // loop through scenes
        const scenesPromise = this.setInterval(() => {
            this.sceneIndex++;
            return this.sceneIndex < (this.scenes.length - 1);
        }, this.sceneDurationInMilliseconds);

        // loop through captions
        const captionsPromise = this.setInterval(() => {
            this.captionIndex++;
            return this.captionIndex < (this.captions.length - 1);
        }, this.sceneDurationInMilliseconds / 2);

        // wait scenes and captions
        await Promise.all([scenesPromise, captionsPromise]);

        this.openModal(
            'Mas eles precisam de heróis corajosos e destemidos para ajudar nessa jornada. Heróis como você! Você está preparado para essa aventura?',
            [
                {
                    label: 'Sim',
                    callback: () => {
                        this.themeSong.pause();

                        const urlParams = new URLSearchParams(window.location.search);
                        const meetId = urlParams.get('id');
                        window.open(`https://meet.google.com/${meetId}`);
                    },
                },
                {
                    label: 'Não',
                    callback: () => {
                        this.screamSound.play();
                        alert('whoops');
                    },
                },
            ],
        );
    },

    setInterval(callback, timeoutInMilliseconds) {
        return new Promise(resolve => {
            const hasNexTick = callback();
            setTimeout(
                () => resolve(hasNexTick ? this.setInterval(callback, timeoutInMilliseconds) : true),
                timeoutInMilliseconds
            )
        });
    },

    init() {
        this.openModal(
            'Você está pronto para uma aventura?',
            [
                {
                    label: 'Sim',
                    callback: () => {
                        this.startStory();
                    },
                },
                {
                    label: 'Com certeza!',
                    callback: () => {
                        this.startStory();
                    },
                },
            ],
        );
    },
};