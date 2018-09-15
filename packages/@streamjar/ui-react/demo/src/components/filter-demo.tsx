import * as React from 'react';

import { Button, Filter, FilterSection, Icon, Platforms, Radio, RadioGroup } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class FilterDemo extends React.Component {
	public config = {
		name: 'Filter',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<div style={{ textAlign: 'right' }}>
					<Filter>
						<FilterSection name='Platform'>
							<Platforms />
						</FilterSection>

						<FilterSection name='Sort'>
							<RadioGroup value='true' name='sort' onChange={() => {/**/ }}>
								<Radio value='true'> Ascending </Radio>
								<Radio value='false'> Descending </Radio>
							</RadioGroup>
						</FilterSection>
					</Filter>
				</div>
			</Demo>
		);
	}
}
