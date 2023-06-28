import { Module } from './type';
/**
 * module 配置自动完成
 */
declare const modulesConfig: {
    react: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    'react-dom': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    'react-router-dom': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    antd: {
        var: string;
        jsdeliver: {
            path: string;
            css: string;
        };
    };
    ahooks: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    '@ant-design/charts': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    vue: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    vue2: {
        var: string;
        jsdeliver: {
            name: string;
            path: string;
        };
    };
    '@vueuse/shared': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    '@vueuse/core': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    moment: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    eventemitter3: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    'file-saver': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    'browser-md5-file': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    xlsx: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    axios: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    lodash: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    'crypto-js': {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
    localforage: {
        var: string;
        jsdeliver: {
            path: string;
        };
    };
};
export declare type ModuleName = keyof typeof modulesConfig;
export default function autoComplete(name: ModuleName): (prodUrl: string) => Module;
export {};
