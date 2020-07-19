const path = require('path');
const puppeteer = require('puppeteer');
module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
        modules: ['node_modules'],
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: './pages',
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            }
        }]
    },
    externals: {
        puppeteer
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    }

}