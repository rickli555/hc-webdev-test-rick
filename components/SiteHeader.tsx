import React, { useState } from 'react';
import Link from 'next/link';

import { Anchor, Burger, Container, Drawer, Group, Header, Image, Space } from '@mantine/core';

import useStyles from './SiteHeader.styles';

const HEADER_HEIGHT = 140;

interface Props {
	userName: string;
}

const SiteHeader: React.FC<Props> = (props) => {
	const { userName } = props;
	const [isOpened, setOpened] = useState(false);
	const { classes } = useStyles();

	return (
		<Header height={HEADER_HEIGHT} mb={120} className={classes.mainHeader}>
			<Container className={classes.inner} size="lg">
				<Group grow className={classes.logos}>
					<div>
						<Link href="/" passHref legacyBehavior>
							<Anchor component="a">
								<Image
									alt="Holy Cross Logo"
									className="hcLogo"
									fit="contain"
									height={80}
									radius="md"
									src="/hclogo.svg"
									width={220}
								/>
							</Anchor>
						</Link>
						<h1>Example App</h1>
					</div>
				</Group>
				<div className={classes.links}>
					<span>Welcome ${userName}</span>
				</div>

				<Drawer
					opened={isOpened}
					onClose={() => setOpened(false)}
					title="Menu"
					position="right"
					padding="xl"
					size="lg"
				>
					<Space h="xl" />
					<div className={classes.drawerLinks}>
						<span>Welcome ExampleAdmin</span>
						<Space h="md" />
						<Space h="md" />
					</div>
				</Drawer>

				<Burger
					opened={isOpened}
					onClick={() => setOpened((o) => !o)}
					className={classes.burger}
					size="sm"
				/>
			</Container>
		</Header>
	);
};

export default SiteHeader;
