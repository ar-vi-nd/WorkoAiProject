// const path = require('path');
// const nodeExternals = require('webpack-node-externals');

// module.exports = {
//   mode: 'development', // or 'production' as per your environment
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     libraryTarget: 'commonjs2', // Set libraryTarget to 'commonjs2' for Node.js environment
//   },
//   target: 'node', // Target Node.js environment
//   externals: [
//     nodeExternals(), // Exclude node_modules from bundling
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader', // Use babel-loader to transpile JavaScript files
//           options: {
//             presets: [
//               ['@babel/preset-env', { targets: { node: 'current' } }], // Target current Node.js version
//             ],
//           },
//         },
//       },
//     ],
//   },
// };



// ====================================================================================
// code below is for when you use import as es6 modules in bundle.js
// to run build also add type modele in package.json



import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';
import Dotenv from 'dotenv-webpack';

// Convert the file URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.js', // Entry point of your application
    target: 'node', // This makes webpack handle built-in modules like fs, path etc. correctly
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'module', // Ensure libraryTarget is set to 'module'
        chunkFormat: 'module',   // Ensure chunkFormat is set to 'module'
        module: true             // Ensure output is treated as ES modules
    },
    experiments: {
        outputModule: true
    },
    mode: 'development', // Set mode to 'development' or 'production'
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    
    plugins: [
        new Dotenv({
            path: './.env', // Specify your .env file
        })
    ],
    resolve: {
        extensions: ['.js']
    }
};
