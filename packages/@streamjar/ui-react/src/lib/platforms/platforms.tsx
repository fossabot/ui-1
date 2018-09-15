import * as React from 'react';

import { Checkbox } from '../checkbox';

export interface IPlatformsProps {
	supported?: string[];
	value?: string[];
	onChange: (platforms: string[]) => void;
}

export interface IPlatformsState {
	value: string[];
	all: boolean;
}

export class Platforms extends React.PureComponent<IPlatformsProps, IPlatformsState> {
	public static defaultProps: Partial<IPlatformsProps> = {
		onChange: () => { /* */ },
		supported: ['mixer', 'twitch', 'smashcast'],
	};

	constructor(props: IPlatformsProps) {
		super(props);

		this.disableAll = this.disableAll.bind(this);

		this.state = this.handleProps();
	}

	private handleProps(): IPlatformsState {
		if (this.props.value) {
			const val = this.props.value.filter(i => this.props.supported!.indexOf(i) !== -1);

			return { value: val, all: val.length === this.props.supported!.length };
		} else {
			return { value: this.props.supported!, all: true };
		}
	}

	public componentWillUpdate(prev: IPlatformsProps): void  {
		if (prev.value !== this.props.value) {
			this.setState(this.handleProps());
		}
	}

	public onChecked(type: string, value: boolean): void {
		this.setState(state => {
			let val = { value: [...state.value, type] };

			if (state.value.includes(type)) {
				val = { value: state.value.filter(i => i !== type) };
			}

			this.props.onChange(val.value);

			return val;
		});
	}

	public disableAll(value: boolean): void {
		if (!value) {
			this.setState({ all: false });
		} else {
			this.props.onChange(this.props.supported!);

			this.setState({
				all: true,
				value: this.props.supported!,
			});
		}
	}

	public render(): JSX.Element {
		const { supported } = this.props;
		const { value, all } = this.state;

		const last = value.length === 1;

		return (
			<React.Fragment>
				<Checkbox value={all} onChange={this.disableAll} colour='accent'> All </Checkbox>
				<hr style={{ border: '1px solid rgb(105, 76, 127)'}} />
				<div style={{ opacity: all ? .2 : 1 }}>
					{supported!.includes('mixer') && <div onClick={() => this.disableAll(false) }>
						<Checkbox
							value={value!.includes('mixer')}
							colour='platform-mixer'
							onChange={this.onChecked.bind(this, 'mixer')}
							disabled={value!.includes('mixer') && last}>
							Mixer
						</Checkbox>
					</div>}

					{supported!.includes('twitch') && <div onClick={() => this.disableAll(false) }>
						<Checkbox
							value={value!.includes('twitch')}
							colour='platform-twitch'
							onChange={this.onChecked.bind(this, 'twitch')}
							disabled={value!.includes('twitch') && last}>
							Twitch
						</Checkbox>
					</div>}

					{supported!.includes('smashcast') && <div onClick={() => this.disableAll(false) }>
						<Checkbox
							value={value!.includes('smashcast')}
							colour='platform-smashcast'
							onChange={this.onChecked.bind(this, 'smashcast')}
							disabled={value!.includes('smashcast') && last}>
							Smashcast
						</Checkbox>
					</div>}
				</div>
			</React.Fragment>
		);
	}
}
