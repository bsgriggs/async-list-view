import { Component, ReactNode, createElement } from "react";
import { AsyncListViewPreviewProps } from "../typings/AsyncListViewProps";

declare function require(name: string): string;

export class preview extends Component<AsyncListViewPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/AsyncListView.css");
}
