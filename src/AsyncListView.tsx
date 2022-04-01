import { createElement, useMemo } from "react";
import { ValueStatus } from "mendix";

import { AsyncListViewContainerProps } from "../typings/AsyncListViewProps";

import "./ui/AsyncListView.css";

const AsyncListView = (props: AsyncListViewContainerProps): JSX.Element => {
    console.log("props", props);
    useMemo(() => props.data.setLimit(0), []);
    setTimeout(() => {
        props.data.setLimit(undefined);
    }, 100);

    if (props.data.status === ValueStatus.Available && props.data.items !== undefined) {
        return (
            <div className={props.class ? "widget-asynclistview " + props.class : "widget-asynclistview"}>
                {props.data.items?.map(i => {
                    console.log(i);
                    return <div className="widget-asynclistview-row">{props.content(i)}</div>;
                })}
            </div>
        );
    } else {
        return <div className="widget-asynclistview-spinner" />;
    }
};

export default AsyncListView;
