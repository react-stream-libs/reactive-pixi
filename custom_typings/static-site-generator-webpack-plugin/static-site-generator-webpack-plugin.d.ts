declare module 'static-site-generator-webpack-plugin' {
  import {
    Plugin, Webpack,
  } from 'webpack';
  class StaticSiteGeneratorWebpackPlugin implements Plugin{
    constructor (
      entry: string,
      paths: Array<string>
    )
    apply(thisArg: Webpack, ...args: any[]): void;
  }
  module StaticSiteGeneratorWebpackPlugin { }
  export = StaticSiteGeneratorWebpackPlugin;
}