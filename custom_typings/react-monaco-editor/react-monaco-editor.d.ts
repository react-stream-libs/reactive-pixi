/// <reference path="../../node_modules/monaco-editor/monaco.d.ts" />

declare module 'react-monaco-editor' {
  import { Component } from 'react';
  export type ReactMonacoEditorProps = {
    width: string,
    height: string,
    language: string,
    options: monaco.editor.IEditorOptions,
  };
  export default class ReactMonacoEditor
      extends Component<ReactMonacoEditorProps, void> { }
}