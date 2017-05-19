SystemJS.config({
    map: {
        src: 'dist',
        three: 'node_modules/three/build/three.js'
    },
    packages: {
        src: {
            defaultExtension: 'js'
        },
        three: {
            defaultExtension: 'js'
        }
    }
});