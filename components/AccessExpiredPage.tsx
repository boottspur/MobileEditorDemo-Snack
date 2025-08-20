import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';

export const AccessExpiredPage: React.FC = () => {
  const handleRequestAccess = () => {
    const email = 'me@chrismerchant.work';
    const subject = 'Requesting Access to Mobile Editor Demo';
    const body = 'Hello,\n\nI would like to request access to the Mobile Editor Demo.\n\nThank you!';
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    Linking.openURL(mailtoUrl).catch((err) => {
      console.error('Failed to open email client:', err);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.lockIcon}>🔒</Text>
        </View>
        
        <Text style={styles.title}>Public Access Expired</Text>
        
        <Text style={styles.description}>
          The public demo period for this application has ended.
        </Text>
        
        <Text style={styles.subDescription}>
          If you'd like to explore the Mobile Editor Demo, please request access below.
        </Text>
        
        <TouchableOpacity 
          style={styles.requestButton}
          onPress={handleRequestAccess}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Request Access</Text>
        </TouchableOpacity>
        
        <Text style={styles.contactInfo}>
          Or contact directly at{'\n'}
          <Text style={styles.email}>me@chrismerchant.work</Text>
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Mobile Editor Demo</Text>
        <Text style={styles.footerSubtext}>A cross-platform email editor demonstration</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  iconContainer: {
    marginBottom: 30,
  },
  lockIcon: {
    fontSize: 64,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  subDescription: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  requestButton: {
    backgroundColor: '#1976d2',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  contactInfo: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  email: {
    color: '#1976d2',
    fontWeight: '500',
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 14,
    color: '#888',
  },
});