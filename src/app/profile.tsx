import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.subtitle}>Ball</Text>
        <Text style={styles.textbody}>Mr.Weerayut Pliankaew</Text>
        <Text style={styles.textbody}>รหัสนักศึกษา: 68319010012</Text>
        <Text style={styles.textbody}>สาขา: เทคโนโลยีสารสนเทศ</Text>

        <Text style={styles.subtitle}>ความสามารถพิเศษ</Text>
        <Text style={styles.textbody}>1. ฟังเพลง</Text>
        <Text style={styles.textbody}>2. เล่นเกม</Text>
        <Text style={styles.textbody}>3. คุยคนเดียว</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>ติดต่อ</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f1f5f9",
    padding: 20
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
    marginBottom: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})