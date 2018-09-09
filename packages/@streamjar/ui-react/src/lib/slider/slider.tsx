import * as React from 'react';

export interface ISliderProps {
	disabled?: boolean;
	max?: number;
	min?: number;
	step?: number;
}

export interface ISliderState {
	value: number;
}

export class Slider extends React.PureComponent<ISliderProps, ISliderState> {
	public static defaultProps: Partial<ISliderProps> = {
		disabled: false,
		max: 100,
		min: 0,
		step: 1,
	};

	constructor(props: ISliderProps) {
		super(props);

		this.onChange = this.onChange.bind(this);

		this.state = { value: 0 };
	}

	public onChange(e: React.SyntheticEvent<HTMLInputElement>): void {
		this.setState({
			value: +e.currentTarget.value,
		});
	}

	public render(): JSX.Element {
		const { min, max, step, disabled } = this.props;
		const { value } = this.state;

		return (
			<div className='jar-slider'>
				<input
					className='jar-slider__input' type='range' min={min} max={max} step={step} disabled={disabled} value={value} onChange={this.onChange}/>
			</div>
		);
	}
}