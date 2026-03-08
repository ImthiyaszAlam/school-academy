

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './ChooseUsSection.style';
import ChooseUsCard from './components/ChooseUsCard/ChooseUsCard';


const chooseUsData = [
	{
		icon: '⭐',
		title: 'Expert Team',
		subtitle: 'Qualified professionals',
	},
	{
		icon: '🎯',
		title: 'Goal Oriented',
		subtitle: 'Focus on your success',
	},
	{
		icon: '🤝',
		title: 'Support',
		subtitle: 'Always here for you',
	},
	{
		icon: '🚀',
		title: 'Growth',
		subtitle: 'Achieve more',
	},
];

const ChooseUsSection = () => {
	return (
		<View style={styles.sectionContainer}>
			{/* Left Side */}
			<View style={styles.leftContainer}>
				<Text style={styles.heading}>We are experts & do our best for your goal</Text>
				<Text style={styles.paragraph}>
					Our team is dedicated to providing the best service and support to help you reach your goals. We combine expertise, passion, and commitment to ensure your success.
				</Text>
				<View style={styles.cardsGrid}>
					<View style={styles.cardsRow}>
						{chooseUsData.slice(0, 2).map((item, idx) => (
							<ChooseUsCard
								key={idx}
								icon={item.icon}
								title={item.title}
								subtitle={item.subtitle}
							/>
						))}
					</View>
					<View style={styles.cardsRow}>
						{chooseUsData.slice(2, 4).map((item, idx) => (
							<ChooseUsCard
								key={idx + 2}
								icon={item.icon}
								title={item.title}
								subtitle={item.subtitle}
							/>
						))}
					</View>
				</View>
			</View>
			{/* Right Side (empty for now, can add image or illustration) */}
			<View style={styles.rightContainer} />
		</View>
	);
};


export default ChooseUsSection;
