import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

import { Anchor } from '../outlet/anchor';

export interface ITooltipProps {
	position?: string;
	message: string;
}

export class Tooltip extends React.PureComponent<ITooltipProps, { anchor: HTMLElement | null, hide: boolean }> {
	public childRef?: HTMLElement;

	constructor(props: ITooltipProps) {
		super(props);

		this.state = { anchor: null, hide: false };

		this.mouseLeave = this.mouseLeave.bind(this);
		this.mouseOver = this.mouseOver.bind(this);
	}

	public componentDidMount(): void {
		this.getTarget();
	}

	public componentWillReceiveProps(prev: any, next: any): void {
		if (prev.children !== next.children) {
			this.getTarget();
		}
	}

	public getTarget(): void {
		if (this.childRef) {
			this.clearTarget(this.childRef);
		}

		const ref: HTMLElement = ReactDOM.findDOMNode(this) as any;

		ref.addEventListener('mouseover', this.mouseOver);
		ref.addEventListener('mouseleave', this.mouseLeave);

		this.childRef = ref;
	}

	public clearTarget(el: HTMLElement): void {
		if (!el) {
			return;
		}

		el.removeEventListener('mouseover', this.mouseOver);
		el.removeEventListener('mouseleave', this.mouseLeave);
	}

	public mouseOver(): void {
		if (this.childRef) {
			this.setState({
				anchor: this.childRef,
				hide: false,
			});
		}
	}

	public mouseLeave(): void {
		this.setState({
			hide: true,
		});

		setTimeout(() => {
			this.setState({
				anchor: null,
			});
		}, 100);
	}

	public render(): JSX.Element {
		const { message, position } = this.props;
		const { anchor, hide } = this.state;

		const DEFAULT: React.CSSProperties = {
			opacity: 0,
			transform: 'translateY(25%) scale(1)',
			transition: '300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
		};

		const CLASSES: { [key: string]: React.CSSProperties} = {
			entered: { opacity: 1, transform: 'translateY(0%) scale(1)' },
			entering: { opacity: 1, transform: 'translateY(0%) scale(1)' },
			exiting: { opacity: 0, transform: 'translateY(50%) scale(1)' },
		};

		const pos = position ? position : 'bottom';

		return <React.Fragment>
			{anchor && <Anchor el={anchor} position={pos}>
				<Transition in={!hide} appear={true} timeout={300} children={state => {
					return <div className='jar-tooltip' style={{ ...DEFAULT, ...CLASSES[state]} }> {message} </div>;
				}} />
			</Anchor>}
			{this.props.children}
		</React.Fragment>;
	}
}
