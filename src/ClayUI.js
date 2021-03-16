import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import ClayAlert from '@clayui/alert';
import ClayIcon from '@clayui/icon';


export default class ClayUI extends Component {

    render() {

        return (
            <div>
                <ClayAlert displayType="info" title="Info">
                    This is a default alert
                </ClayAlert>

                <ClayAlert displayType="warning" title="Warning" variant="stripe">
                    This is a stripe alert
                </ClayAlert>
            </div>
        )
    }
}
