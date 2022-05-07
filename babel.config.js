const path = require('path');

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: [
                        '.ios.ts',
                        '.android.ts',
                        '.ts',
                        '.ios.tsx',
                        '.android.tsx',
                        '.tsx',
                        '.jsx',
                        '.js',
                        '.json',
                    ],
                    alias: {
                        components: path.resolve(__dirname, 'src/components'),
                        router: path.resolve(__dirname, 'src/router'),
                        pages: path.resolve(__dirname, 'src/pages'),
                        constants: path.resolve(__dirname, 'src/constants'),
                        store: path.resolve(__dirname, 'src/store'),
                        core: path.resolve(__dirname, 'src/core'),
                        services: path.resolve(__dirname, 'src/services'),
                        widgets: path.resolve(__dirname, 'src/widgets'),
                        config: path.resolve(__dirname, 'src/config'),
                    },
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
