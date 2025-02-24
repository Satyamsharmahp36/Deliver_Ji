import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const OrganizationForm = ({ organization, onClose, onSubmit }) => {
  const [orgName, setOrgName] = useState('');
  const [file, setFile] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFile(result);
      }
    } catch (error) {
      console.error('Error picking document:', error);
    }
  };

  const handleSubmit = async () => {
    if (!orgName || !file || !confirmed) {
      alert('Please fill all fields and confirm the information.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('organizationType', organization);
      formData.append('organizationName', orgName);
      formData.append('idProof', {
        uri: file.uri,
        name: file.name,
        type: 'application/octet-stream'
      });

      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        onSubmit();
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Fill Details :-</Text>
      <Text>{organization}</Text>
      <TextInput
        style={styles.input}
        placeholder="Organization Name"
        value={orgName}
        onChangeText={setOrgName}
      />
      <TouchableOpacity style={styles.fileButton} onPress={handleFileUpload}>
        <Text>Attach File</Text>
      </TouchableOpacity>
      {file && <Text>File attached: {file.name}</Text>}
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => setConfirmed(!confirmed)}
      >
        <Text>I confirm the above filled information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  fileButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default OrganizationForm;