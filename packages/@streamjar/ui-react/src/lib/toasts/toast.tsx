import * as React from 'react';
import { Transition } from 'react-transition-group';

import { Button } from '../button';
import { IToast, Toaster } from './toasts';

export interface IToastProps {
	toasts: Toaster;
}

export interface IToastState {
	toasts: IToast[];
	current: IToast | null;
	focused: boolean;
	isRemovingSoon: boolean;
}

const THEMES = {
	error: 'danger',
	info: 'platform-smashcast',
	success: 'success',
};

const ICONS = {
	'error': 'warning',
	'info': 'info_outline',
	'success': 'done_all',
};

const ANIMATION = 500;

export class Toast extends React.PureComponent<IToastProps, IToastState> {
	public timeout?: any;

	constructor(props: IToastProps) {
		super(props);

		this.state = {
			current: null,
			focused: false,
			isRemovingSoon: true,
			toasts: [],
		};

		this.iconLostFocus = this.iconLostFocus.bind(this);
		this.iconFocus = this.iconFocus.bind(this);
		this.clearToast = this.clearToast.bind(this);
	}

	public componentDidMount(): void {
		this.props.toasts.on((toast: IToast) => {
			if (this.state.current) {
				this.setState((state: IToastState) => ({ toasts: [...state.toasts, toast] }));

				return;
			}

			this.showToast(toast);
		});
	}

	public showToast(toast: IToast): void {
		this.timeout = setTimeout(() => {
			this.clearToast();
		}, toast.duration);

		this.setState({ current: toast, isRemovingSoon: false  });
	}

	public clearToast(): void {
		clearTimeout(this.timeout!);

		this.setState({ isRemovingSoon: true });

		setTimeout(() => {
			this.setState({ current: null });

			if (this.state.toasts.length) {
				this.showToast(this.state.toasts[0]);

				this.setState(toasts => {
					return {
						toasts: toasts.toasts.slice(1),
					};
				});
			}
		}, ANIMATION);
	}

	public iconFocus(): void {
		this.setState({ focused: true });
	}

	public iconLostFocus(): void {
		this.setState({ focused: false });
	}

	public render(): JSX.Element {
		const { current, isRemovingSoon } = this.state;

		const icon: string = this.state.focused || !current ? 'delete' : ICONS[current.type];

		const defaults: React.CSSProperties = {
			opacity: 0,
			transition: `all ${ANIMATION}ms cubic-bezier(0.25, 0.8, 0.25, 1)`,
		};

		const trans: { [key: string]: React.CSSProperties } = {
			entered:  { opacity: 1, transform: 'translateY(0%) scale(1)' },
			entering:  { opacity: 0, transform: 'translateY(25%) scale(.5)' },
			exiting:  { opacity: 0, transform: 'translateY(25%) scale(.5)' },
		};

		return (
			<div className='jar-toasts'>
				<Transition in={!isRemovingSoon} timeout={ANIMATION}>
				{ (state) => {
					return current && <div className='jar-toast' style={{...defaults, ...trans[state]}}>
						<div className='layout-row layout-align-center-center'>
							<div onMouseEnter={this.iconFocus} onMouseLeave={this.iconLostFocus}>
								<Button onClick={this.clearToast} round raised colour={THEMES[current.type]} icon={icon}></Button>
							</div>
							<div className='jar-toast__status'> { current.message } </div>
						</div>
					</div>;
				}}
				</Transition>
			</div>
		);
	}
}
