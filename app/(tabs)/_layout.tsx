import React from "react";
import { Tabs } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "black",
				tabBarInactiveTintColor: "silver",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerTitle: "Feed",
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={24} color={color} />
					),
					tabBarLabel: "Home",
				}}
			/>
			<Tabs.Screen
				name="post"
				options={{
					headerTitle: "Create Post",
					tabBarIcon: ({ color }) => (
						<AntDesign name="plus" size={24} color={color} />
					),
					tabBarLabel: "Create",
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerTitle: "Feed",
					tabBarIcon: ({ color }) => (
						<AntDesign name="user" size={24} color={color} />
					),
					tabBarLabel: "Profile",
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
