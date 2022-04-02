import React, { createElement } from "react";
import { ValueStatus } from "mendix";
import MendixSpinner from "./components/mendix-spinner";
// import ListViewHandler from "./components/listviewhandler";

import { AsyncListViewContainerProps } from "../typings/AsyncListViewProps";

import "./ui/AsyncListView.css";

const AsyncListView = (props: AsyncListViewContainerProps): JSX.Element => {
    console.log("main props", props);
    const refreshDatasource = () => {
        if (props.refreshBool.status === ValueStatus.Available && props.refreshBool.value === false) {
            console.log("updating refresh bool");
            props.refreshBool.setValue(true);
            props.refreshAction?.execute();
        }
    };

    // render
    if (
        props.data.status === ValueStatus.Available &&
        props.data.items &&
        props.refreshBool.status === ValueStatus.Available &&
        props.refreshBool.value === true
    ) {
        console.log("rendering list", props);
        if (props.data.items.length > 0) {
            if (props.useMxListViewStyling) {
                //render with ul and li to match the mendix styling
                return (
                    <div
                        className={
                            props.class
                                ? "widget-asynclistview mx-listview " + props.class
                                : "widget-asynclistview mx-listview"
                        }
                    >
                        <ul>
                            {props.data.items.map(mxObj => {
                                return <li className="widget-asynclistview-item">{props.content(mxObj)}</li>;
                            })}
                        </ul>
                    </div>
                );
            } else {
                //render with basic divs for custom styling
                return (
                    <div className={props.class ? "widget-asynclistview " + props.class : "widget-asynclistview "}>
                        {props.data.items.map(mxObj => {
                            return <div className="widget-asynclistview-item">{props.content(mxObj)}</div>;
                        })}
                    </div>
                );
            }
        } else {
            return (
                <div
                    className={
                        props.class ? "widget-asynclistview-nodata " + props.class : "widget-asynclistview-nodata "
                    }
                >
                    {props.emptyText.value}
                </div>
            );
        }
    } else if (
        props.useSpinner &&
        props.spinnerColor.status === ValueStatus.Available &&
        props.spinnerSize.status === ValueStatus.Available
    ) {
        refreshDatasource();
        return <MendixSpinner color={props.spinnerColor.value} size={props.spinnerSize.value} />;
    } else {
        refreshDatasource();
        return <React.Fragment />;
    }
};

export default AsyncListView;
