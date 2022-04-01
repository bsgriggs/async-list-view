/**
 * This file was generated from AsyncListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties } from "react";
import { ListValue, ListWidgetValue } from "mendix";

export interface AsyncListViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    data: ListValue;
    content: ListWidgetValue;
}

export interface AsyncListViewPreviewProps {
    class: string;
    style: string;
    data: {} | null;
    content: { widgetCount: number; renderer: ComponentType };
}
