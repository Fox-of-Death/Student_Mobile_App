import { StyleSheet, Text, View } from 'react-native'

export default function profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>Ball</Text>
      <Text style={styles.textbody}>Mr.Weerayut Pliankaew</Text>
      <Text style={styles.textbody}>A</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f1f5f9",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2563eb",
    },
    subtitle: {
        fontSize: 18,
        color: "#475569",
        marginTop: 8,
    },
    textbody: {
      fontSize: 18,
      justifyContent:"space-around"
    }
})