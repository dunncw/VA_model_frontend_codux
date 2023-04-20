import React, { useState } from 'react';
import styles from './ResourceAllocationForm.module.scss';

interface ResourceAllocationFormData {
  resourceId: string;
  allocatedAmount: number;
}

interface ResourceAllocationFormProps {
  onSubmit: (data: ResourceAllocationFormData) => void;
}

const ResourceAllocationForm: React.FC<ResourceAllocationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ResourceAllocationFormData>({
    resourceId: '',
    allocatedAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.resourceAllocationForm} onSubmit={handleSubmit}>
      <label htmlFor="resourceId">Resource ID</label>
      <input
        type="text"
        id="resourceId"
        name="resourceId"
        value={formData.resourceId}
        onChange={handleChange}
      />
      <label htmlFor="allocatedAmount">Allocated Amount</label>
      <input
        type="number"
        id="allocatedAmount"
        name="allocatedAmount"
        value={formData.allocatedAmount}
        onChange={handleChange}
      />
      <button type="submit">Allocate</button>
    </form>
  );
};

export default ResourceAllocationForm;
