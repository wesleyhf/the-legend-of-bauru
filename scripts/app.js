const app = {
    sfxs: {
        scream: new Audio('sfxs/scream.wav'),
        listen: new Audio('sfxs/listen.wav'),
        secret: new Audio('sfxs/secret.wav'),
    },

    themeSong: new Audio('theme.mp3'),

    sceneDurationInMilliseconds: 1000, // 20s

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

    confirmModal: {
        open: true,
        message: null,
        okLabel: null,
        cancelLabel: null,
        callback: null,
    },

    openConfirmModal(message, okLabel, cancelLabel) {
        this.confirmModal.message = message;
        this.confirmModal.okLabel = okLabel;
        this.confirmModal.cancelLabel = cancelLabel;
        this.confirmModal.open = true;

        return new Promise(resolve => {
            this.confirmModal.callback = resolve;
        });
    },

    closeConfirmModal() {
        this.confirmModal.open = false;
        this.confirmModal.callback = null;
    },

    async startStory() {
        this.sfxs.listen.play();
        // this.themeSong.play();
        this.closeConfirmModal();

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

        // wait scenes and captions to finish
        await Promise.all([scenesPromise, captionsPromise]);

        const areYouReady = await this.openConfirmModal(
            'Mas eles precisam de heróis corajosos e destemidos para ajudar nessa jornada. Heróis como você! Você está preparado para essa aventura?',
            'Sim ❤️',
            'Não',
        );

        let finalMessage = '';

        if (areYouReady) {
            this.sfxs.secret.play();
            finalMessage = 'Você foi escolhido pelo destino, o mundo com certeza ficará bem aos seus cuidados! Mas é perigoso ir sozinho...';
        } else {
            this.sfxs.scream.play();
            finalMessage = 'Não tema! Você foi escolhido pelo destino. Não duvide da suas capacidades, você está preparado para isso! Mas é perigoso ir sozinho...';
        }

        await this.openConfirmModal(finalMessage, 'Pegue isto 🗡️');
        this.openGoogleMeet();
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

    openGoogleMeet() {
        const urlParams = new URLSearchParams(window.location.search);
        const meetId = urlParams.get('id');
        window.open(`https://meet.google.com/${meetId}`);
    },

    async init() {
        await this.openConfirmModal(
            'Você está pronto para uma aventura?',
            'Sim ❤️',
            'Com certeza!'
        );

        this.startStory();
    },
};