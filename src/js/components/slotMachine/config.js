class ComponentsSlotMachineConfig {

    getBasicConfig() {
        return {
            reelsCount: 5,
            rowsCount: 3,
            vectors: false, // or vectors length array like [5, 4, 3, 2, 1]  //todo

            rowsXoffset: [],
            rowsYoffset: [],

            blurSymbolsCount: [5, 10, 15, 20, 25],

            blurAlpha: 0.5,
            borderSymbolsCount: 2,
            regularEasingParam: 0,
            dropEasingParam: 0,

            spinCompleteDelay: 200, //event delay, after reels stops

            bounce: {
                top: false, // { to: { y: -80, x: 0 }, duration: 200 }
                bottom: false // { to: { y: 80, x: 0 }, duration: 200 }
            },

            symbolSpeed: 1.5, //pixels in MS
            spinStartInterval: 100, //per reel

            speedUpReelsFactor: 2.5,

            //intrigue
            intrigueSpeedReelsFactor: 1.5,
            intrigueAdditionalSymbols: 20,

            symbolsBlurKeys: [], //array or array of arrays for each reel
            lastSymbolsBlurStaticKeys: [] //array or array of arrays for each reel [1,2,3,4] or [false,false,[1]]
        }
    }

    getReel15Row1Config() {
        const basic = this.getBasicConfig(); 
        return {
            ...basic,
            reelsCount: 15,
            rowsCount: 1,
            
            rowsXoffset: [0, 0, 0, 0, 0, -5, -5, -5, -5, -5, -10, -10, -10, -10, -10], // or array like [15, 20, 30, 40, 50]   //todo
            rowsYoffset: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2], // or array like [15, 20, 30, 40, 50]   //todo

            symbolWidth: 790 / 5,
            symbolHeight: 501 / 3,
        }
    }

    getCascadeConfig() {
        const basic = this.getBasicConfig();
        return {
            ...basic,
            regularEasingParam: 75,
            borderSymbolsCount: 0,
            cascadeDuration: 400
        }
    }

    getDropConfig() {
        const basic = this.getBasicConfig();
        return {
            ...basic,
            dropEasingParam: 70,
            symbolSpeed: 0.2
        }
    }

    getAllConfigsMap() {
        const basic = this.getBasicConfig();
        const reel15Row1 = this.getReel15Row1Config();
        const cascade = this.getCascadeConfig();
        const drop = this.getDropConfig();

        return {
            basic,
            reel15Row1,
            cascade,
            drop
        };
    }

    getConfigById(id) {
        const configs = this.getAllConfigsMap();
        return configs[id] || this.getBasicConfig();
    }
};

module.exports = ComponentsSlotMachineConfig;
