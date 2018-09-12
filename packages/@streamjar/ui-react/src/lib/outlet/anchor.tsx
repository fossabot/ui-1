import * as React from 'react';
import { Portal } from './portal';

import { default as EventListener } from 'react-event-listener';

export interface IAnchorProps {
	width: number;
	position: string;
	el: HTMLElement;
}

export interface IAnchorState {
	location: {
		width: number;
		top: number;
		left: number;
	};
}

const EL_OFFSET = 7;

export class Anchor extends React.PureComponent<IAnchorProps, IAnchorState> {
	public static defaultProps: Partial<IAnchorProps> = {
		position: 'bottom',
	};

	public anchorRef: React.RefObject<HTMLDivElement>;

	constructor(props: IAnchorProps) {
		super(props);

		this.anchorRef = React.createRef();
		this.setPosition = this.setPosition.bind(this);
	}

	public componentDidMount(): void {
		this.setPosition();
	}

	public calculateWidth(): { width: number, left: number, top: number, height: number} {
		let itemWidth = this.props.width ? this.props.width : this.anchorRef.current!.getBoundingClientRect().width;
		let itemHeight = this.anchorRef.current!.getBoundingClientRect().height;

		const anchorTop = this.props.el.getBoundingClientRect().top;
		const anchorLeft = this.props.el.getBoundingClientRect().left;
		const anchorWidth = this.props.el.getBoundingClientRect().width;
		const anchorHeight = this.props.el.getBoundingClientRect().height;
		const middleAnchorY = anchorTop + (this.props.el.getBoundingClientRect().height / 2);
		const middleAnchorX = anchorLeft + (this.props.el.getBoundingClientRect().width / 2);

		const windowWidth = document.documentElement.clientWidth;
		const windowHeight = document.documentElement.clientHeight;

		let top = 0;
		let left = 0;

		// Calculate positioning
		if (this.props.position === 'top') {
			top = anchorTop - itemHeight - EL_OFFSET;
			left = middleAnchorX - (itemWidth / 2);
		} else if (this.props.position === 'bottom') {
			top = anchorTop + anchorHeight + EL_OFFSET;
			left = middleAnchorX - (itemWidth / 2);
		} else if (this.props.position === 'right') {
			top = middleAnchorY - (itemHeight / 2);
			left = anchorLeft + anchorWidth + EL_OFFSET;
		} else { // left
			top = middleAnchorY - (itemHeight / 2);
			left = anchorLeft - itemWidth - EL_OFFSET;
		}

		// If item is larger than window, 100%
		if (itemWidth >= windowWidth) {
			itemWidth = windowWidth - EL_OFFSET - EL_OFFSET;
			left = EL_OFFSET;
		}

		if (itemHeight >= windowHeight) {
			itemHeight = windowHeight - EL_OFFSET - EL_OFFSET;
			top = EL_OFFSET;
		}

		if (left + itemWidth >= windowWidth) {
			left = windowWidth - EL_OFFSET - itemWidth;
		}

		if (top + itemHeight >= windowHeight) {
			top = windowHeight - EL_OFFSET - itemHeight;
		}

		if (top < 0) {
			top = EL_OFFSET;
		}

		if (left < 0) {
			left = EL_OFFSET;
		}

		return { width: itemWidth, height: itemHeight, left, top };
	}

	public setPosition(): void  {
		const { width, left, top, height } = this.calculateWidth();

		if (this.anchorRef.current) {
			this.anchorRef.current.style.left = `${Math.floor(left)}px`;
			this.anchorRef.current.style.top = `${Math.floor(top)}px`;
			this.anchorRef.current.style.width = `${width}px`;
			this.anchorRef.current.style.height = `${height}px`;
		}
	}

	public render(): JSX.Element {
		return (<Portal>
			<div className='anchor' style={{ position: 'fixed', overflow: 'hidden' }} ref={this.anchorRef}>
				{ this.props.children }
			</div>

			<EventListener target={window} onResize={this.setPosition} onScroll={this.setPosition} />
		</Portal>);
	}
}
