import * as React from 'react';
import { Transition } from 'react-transition-group';

import { Anchor } from '../outlet/anchor';

export interface IMenuProps {
	width?: number;
	anchor: HTMLButtonElement | null;
	onClose: () => void;
}

export interface IMenuState {
	hide: boolean;
}

export class Menu extends React.PureComponent<IMenuProps, IMenuState> {
	public static defaultProps: Partial<IMenuProps> = {
		onClose: () => { /* */ },
	};

	public menuRef: React.RefObject<HTMLDivElement>;

	constructor(props: IMenuProps) {
		super(props);

		this.state = { hide: false };
		this.menuRef = React.createRef();
		this.close = this.close.bind(this);
	}

	public componentWillReceiveProps(prev: IMenuProps, next: IMenuProps): void {
		if (prev.anchor !== next.anchor) {
			this.setState({
				hide: false,
			});
		}
	}

	public componentDidUpdate(): void {
		if (this.props.anchor) {
			document.addEventListener('click', this.close, { capture: true });
		}
	}

	public componentWillUnmount(): void {
		document.removeEventListener('click', this.close, { capture: true });
	}

	public close(event: MouseEvent): void {
		if (!this.menuRef.current || !this.menuRef.current.contains(event.target as any)) {
			event.stopPropagation();
			event.preventDefault();
		}

		this.setState({
			hide: true,
		});

		setTimeout(() => {
			this.componentWillUnmount();
			this.props.onClose();
		}, 100);
	}

	public render(): JSX.Element | null {
		const { anchor, children } = this.props;
		const { hide } = this.state;

		const DEFAULT: React.CSSProperties = {
			marginTop: -30,
			opacity: 0,
			transition: '200ms ease-in-out',
		};

		const CLASSES: { [key: string]: React.CSSProperties} = {
			entered: { opacity: 1, marginTop: 0 },
			entering: { opacity: 1, marginTop: 0 },
			exiting: { opacity: 0, marginTop: -30 },
		};

		if (anchor) {
			return <Anchor el={anchor}>
				<Transition in={!hide} appear={true} unmountOnExit={true} timeout={500} children={state => {
					return <div ref={this.menuRef} className='jar-menu layout-column' style={{...DEFAULT, ...CLASSES[state]}}>
						{ children }
					</div>;
				}} />
			</Anchor>;
		}

		return (null);
	}
}
