import * as React from 'react';

import { Button } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class ButtonDemo extends React.Component {
	public config = {
		name: 'Button',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<div>
					<Button> Normal </Button>
					<Button colour='accent' > Accent </Button>
					<Button colour='success'> Success </Button>
					<Button colour='danger'> DANGER </Button>
					<Button disabled> Disabled </Button>
				</div>

				<div>
					<Button raised> Normal </Button>
					<Button raised colour='accent'> Accent </Button>
					<Button raised colour='success'> Success </Button>
					<Button raised colour='danger'> DANGER </Button>
					<Button raised disabled> Disabled </Button>
				</div>

				<div>
					<Button raised icon='star'> Hello </Button>
					<Button raised icon='star'></Button>
					<Button raised iconRight icon='star'> Hello </Button>
					<Button raised round icon='star' colour='accent'></Button>
					<Button raised round icon='star' colour='success'></Button>
					<Button raised round icon='warning' colour='danger'></Button>
					<Button raised round disabled icon='warning' colour='danger'></Button>
				</div>

				<div>
					<Button raised colour='platform-mixer' > Mixer </Button>
					<Button raised colour='platform-twitch'> Twitch </Button>
					<Button raised colour='platform-smashcast'> Smashcast </Button>
					<Button raised colour='platform-youtube'> YouTube </Button>
					<Button raised colour='platform-discord'> Discord </Button>
					<Button raised colour='platform-paypal'> PayPal </Button>
					<Button raised colour='platform-stripe'> Stripe </Button>
					<Button raised colour='platform-gamewisp'> Gamewisp </Button>
					<Button raised colour='platform-twitter'> Twitter </Button>
					<Button raised colour='platform-patreon'> Patreon </Button>
					<Button raised colour='platform-extralife'> Extralife </Button>
					<Button raised colour='platform-tiltify'> Tiltify </Button>
					<Button raised colour='platform-spotify'> Spotify </Button>
				</div>
			</Demo>
		);
	}
}
