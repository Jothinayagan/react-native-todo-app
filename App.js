import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
    return (
        <View style={styles.container}>
            {/* Today's task container */}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.taskItem}>
                    {/* This is where the tasks will go */}
                    <Task taskDetails={"task 1"} />
                    <Task taskDetails={"task 2"} />
                    <Task taskDetails={"task 3"} />
                    <Task taskDetails={"task 4"} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: "bold",
    },
    taskItem: {
      marginTop: 30
    },
});
