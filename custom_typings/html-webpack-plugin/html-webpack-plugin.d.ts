declare module 'html-webpack-plugin' {
  import {
    Plugin, Webpack,
  } from 'webpack';
  class HtmlWebpackPlugin implements Plugin{
    constructor (args?: {
      title?: string,
      filename?: string,
      template?: string,
    })
    apply(thisArg: Webpack, ...args: any[]): void;
  }
  module HtmlWebpackPlugin { }
  export = HtmlWebpackPlugin;
}