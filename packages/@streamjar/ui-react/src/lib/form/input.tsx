import * as classnames from 'classnames';
import * as React from 'react';
import { InputLabel } from './input-label';
import { FormEvent } from 'react';

export interface IInputProps {
	type: string;
	title: string;
	value?: string;

	prefix?: JSX.Element;
	suffix?: JSX.Element;

	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
	step?: number;
	pattern?: string;
	readonly?: boolean;
	placeholder?: string;

	onChange?: (value: string) => void;
}

export interface IInputState {
	value: string;
	focus: boolean;
}

export class Input extends React.PureComponent<IInputProps, IInputState> {
	public static defaultProps: Partial<IInputProps> = {
		onChange: () => { /* */ },
	};

	constructor(props: IInputProps) {
		super(props);

		this.state = { value: this.props.value || '', focus: false };
	}

	public focus(): void {
		this.setState({
			focus: true,
		});
	}

	public blur(): void {
		this.setState({
			focus: false,
		});
	}

	public change(event: React.SyntheticEvent<HTMLInputElement>): void {
		this.setState({
			value: event.currentTarget.value,
		});

		this.props.onChange!(event.currentTarget.value);
	}

	public render() {
		const {
			title,
			prefix,
			suffix,
			type,

			minLength,
			maxLength,
			min,
			max,
			step,
			pattern,
			readonly,
			placeholder,
		} = this.props;


		const { focus, value } = this.state;

		const classes = classnames({
			'jar-input': true,
			'jar-input-error': false,
			'jar-input-focus': focus,
			'layout-align-center-center': true,
			'layout-row': true,
		});

		const prefixStyles: React.CSSProperties = {
			fontWeight: 'bold',
			padding: '0px 0px 0px 5px',
		};

		const suffixStyles: React.CSSProperties = {
			fontWeight: 'bold',
			padding: '0px 5px',
		};

		return <React.Fragment>
			{ title && <InputLabel>{title}</InputLabel>}

			<div className={classes}>
				{ prefix && <div style={prefixStyles}> {prefix} </div>}

				<input
					className='jar-input__container'
					style={{ width: '100%' }}
					type={type}
					value={value}
					readOnly={readonly}
					minLength={minLength}
					maxLength={maxLength}
					min={min}
					max={max}
					step={step}
					pattern={pattern}
					onChange={this.change.bind(this)}
					placeholder={placeholder}
					onFocus={this.focus.bind(this)}
					onBlur={this.blur.bind(this)}
					tabIndex={0}
					/>

				{ suffix && <div style={suffixStyles}> {suffix} </div>}
			</div>
		</React.Fragment>;
	}
}
