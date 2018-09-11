import * as React from 'react';
import { Portal } from './portal';

import { default as EventListener } from 'react-event-listener';

export interface IAnchorProps {
	el: HTMLButtonElement;
}

export interface IAnchorState {
	location: {
		width: number;
		top: number;
		left: number;
	};
}

const STATIC_WIDTH = 165;
const WINDOW_OFFSET = 15;

export class Anchor extends React.PureComponent<IAnchorProps, IAnchorState> {
	public anchorRef: React.RefObject<HTMLDivElement>;

	constructor(props: IAnchorProps) {
		super(props);

		this.anchorRef = React.createRef();
		this.setPosition = this.setPosition.bind(this);
	}

	public componentDidMount(): void {
		this.setPosition();
	}

	public calculateWidth(): { width: number, left: number } {
		let width = STATIC_WIDTH;
		const windowWidth = document.documentElement.clientWidth;
		const middleBtn = this.props.el.getBoundingClientRect().left + (this.props.el.offsetWidth / 2);
		const pos = middleBtn - (width / 2);

		let offset = pos;

		if (width >= windowWidth) {
			width = windowWidth;
			offset = 0;
		} else if ((pos + width) >= windowWidth) {
			offset = windowWidth - WINDOW_OFFSET - width;
		} else if (pos < 0) {
			offset = WINDOW_OFFSET;
		}

		return { width, left: offset };
	}

	public setPosition(): void  {
		const top: number = this.props.el.getBoundingClientRect().top + this.props.el.offsetHeight;
		const { width, left } = this.calculateWidth();

		if (this.anchorRef.current) {
			this.anchorRef.current.style.left = `${left}px`;
			this.anchorRef.current.style.top = `${top}px`;
			this.anchorRef.current.style.width = `${width}px`;
		}
	}

	public render(): JSX.Element {
		return (<Portal>
			<div className='anchor' style={{ position: 'fixed' }} ref={this.anchorRef}>
				{ this.props.children }
			</div>

			<EventListener target={window} onResize={this.setPosition} onScroll={this.setPosition} />
		</Portal>);
	}
}
