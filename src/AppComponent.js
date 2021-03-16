import React from 'react';
import ReactDOM from 'react-dom';
import ClayUI from './ClayUI';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import { Routes } from './Routes';

export default class extends React.Component {
	render() {
		const spritemap = `${this.props.contextPath}/images/icons/icons.svg`;
		return (
            <div>
				<div>
        	        <span className="tag">{Liferay.Language.get('portlet-namespace')}:</span> 
					<span className="value">{this.props.portletNamespace}</span>
				</div>
				<div>
    	            <span className="tag">{Liferay.Language.get('context-path')}:</span>
					<span className="value">{this.props.contextPath}</span>
				</div>
				<div>
	                <span className="tag">{Liferay.Language.get('portlet-element-id')}:</span>
					<span className="value">{this.props.portletElementId}</span>
				</div>
				
				<div>
					<span className="tag">{Liferay.Language.get('configuration')}:</span>
					<span className="value pre">{JSON.stringify(this.props.configuration, null, 2)}</span>
				</div>
				
				<div>
					<span className="tag">spritemap:</span>
					<span className="value pre">{spritemap}</span>
				</div>
				

				<hr/>
				<ClayIconSpriteContext.Provider value={spritemap}>

					

					<Routes/>
				</ClayIconSpriteContext.Provider>
				
			</div>
		);
	}	
}