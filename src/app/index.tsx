import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>สวัสดี 👋</Text>
            <Text style={styles.title}>Urine Check</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>ตรวจแถบปัสสาวะ</Text>
          <Text style={styles.cardDescription}>
            ถ่ายรูปแถบตรวจปัสสาวะเพื่อวิเคราะห์ผล
            และติดตามแนวโน้มสุขภาพของคุณ
          </Text>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>📷  เริ่มตรวจ</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>เมนู</Text>

        <View style={styles.menuRow}>
          <Pressable style={styles.menuCard}>
            <Text style={styles.menuIcon}>📋</Text>
            <Text style={styles.menuTitle}>ประวัติ</Text>
            <Text style={styles.menuDescription}>
              ดูผลการตรวจที่ผ่านมา
            </Text>
          </Pressable>

          <Pressable style={styles.menuCard}>
            <Text style={styles.menuIcon}>📈</Text>
            <Text style={styles.menuTitle}>แนวโน้ม</Text>
            <Text style={styles.menuDescription}>
              ดูการเปลี่ยนแปลงของผลตรวจ
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9F7',
  },

  content: {
    flex: 1,
    padding: 24,
  },

  header: {
    marginBottom: 30,
  },

  greeting: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1B5E4B',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 15,
    lineHeight: 23,
    color: '#666',
    marginBottom: 22,
  },

  button: {
    backgroundColor: '#2E8B70',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 15,
  },

  menuRow: {
    flexDirection: 'row',
    gap: 14,
  },

  menuCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
  },

  menuIcon: {
    fontSize: 30,
    marginBottom: 12,
  },

  menuTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    marginBottom: 5,
  },

  menuDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#777',
  },
});