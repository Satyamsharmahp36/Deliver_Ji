import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import OrganizationForm from '../components/OrganizationForm';

const OrganizationDetailsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);

  const organizations = [
    'Government Organization',
    'Education Sector',
    'Media Sector',
    'Private Sector',
    'Others'
  ];

  const handleOrgSelect = (org) => {
    setSelectedOrg(org);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sahayog</Text>
      <Text style={styles.subtitle}>a support</Text>
      <Text style={styles.heading}>Organization Details</Text>
      
      <View style={styles.benefitsBox}>
        <Text style={styles.benefitsTitle}>Benefits:</Text>
        <Text>• Early Access: Receive the latest information before anyone else.</Text>
        <Text>• Recognition: Your contributions will be published on our platform, showcasing your input.</Text>
        <Text>• Verified Status: Gain verified user status, enhancing your credibility on our portal.</Text>
      </View>
      
      <Text style={styles.selectText}>Select Organization type :-</Text>
      {organizations.map((org, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.button}
          onPress={() => handleOrgSelect(org)}
        >
          <Text style={styles.buttonText}>{org}</Text>
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <OrganizationForm 
          organization={selectedOrg} 
          onClose={() => setModalVisible(false)}
          onSubmit={() => {
            setModalVisible(false);
            navigation.navigate('Login');
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  benefitsBox: {
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  benefitsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectText: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default OrganizationDetailsScreen;
