import * as React from 'react';

export interface IDemoProps {
	config: {
		name: string,
	};
}

export class Demo extends React.PureComponent<IDemoProps> {
	public render() {
		const { name } = this.props.config;

		return (
			<div>
				<h2 className='demo__name'> { name } </h2>

				<div className='demo__section'>
					<h5> Example </h5>

					{this.props.children}
				</div>

				<div className='demo__section'>
					<h5> Documentation </h5>
					<p> soom tm </p>
				</div>

				<div className='demo__section'>
					<h5> Code </h5>
					<p> soon tm </p>
				</div>
			</div>
		);
	}
}
