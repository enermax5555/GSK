import React, { useState } from 'react';
import { 
  TextField, 
  Grid, 
  Button, 
  Alert, 
  CircularProgress,
  Box
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:5001/api/contact';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    if (!firstName || !lastName || !email || !phone || !message) {
      setError('Моля, попълнете всички задължителни полета.');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Моля, въведете валиден имейл адрес.');
      setLoading(false);
      return;
    }

    // Phone validation - allow international format
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(phone)) {
      setError('Моля, въведете валиден телефонен номер.');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call with a delay (replace with actual API call in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Comment out the actual fetch for now, since we're simulating the API
      /*
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          firstName,
          lastName,
          email, 
          phone,
          message 
        }),
      });
      
      if (!res.ok) throw new Error('Неуспешно изпращане на съобщение.');
      */
      
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      setError('Възникна грешка при изпращането на съобщението. Моля, опитайте отново.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center justify-center items-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Grid item xs={12} sm={6} className="mt-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TextField 
              id="firstName" 
              label="Име" 
              variant="outlined" 
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="bg-gray-50"
            />
          </motion.div>
        </Grid>
        
        <Grid item xs={12} sm={6} className='mt-0 w-full sm:mt-4 w-full'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gray-50 "
          >
            <TextField   
              id="lastName" 
              label="Фамилия" 
              variant="outlined" 
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className=''
            />
          </motion.div>
        </Grid>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="w-full text-center justify-cente mt-4"
      >
        <TextField  
          id="email" 
          label="Имейл" 
          variant="outlined" 
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-50"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="mt-0 w-full sm:mt-4 "
      >
        <TextField  
          id="phone" 
          label="Телефон" 
          variant="outlined" 
          fullWidth
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="bg-gray-50"
        />
      </motion.div>
</div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mt-4"
      >
        <TextField 
          multiline 
          minRows={12} 
          id="message" 
          label="Съобщение" 
          variant="outlined" 
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-gray-50"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="mt-6"
      >
        {error && (
          <Alert severity="error" className="mb-4" variant="filled">
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" className="mb-4" variant="filled">
            Благодарим ви! Вашето съобщение е изпратено успешно.
          </Alert>
        )}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="mt-4 flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button 
            variant="contained" 
            type="submit"
            size="large"
            disabled={loading}
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            className="px-10 py-3"
          >
            {loading ? 'Изпращане...' : 'Изпрати'}
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <Box className="text-gray-600 space-y-3">
          <p>Оценяваме Вашия интерес и ще направим всичко възможно да Ви отговорим в рамките на 24 часа.</p>
          <p>Очакваме с нетърпение да Ви съдействаме!</p>
        </Box>
      </motion.div>
    </form>
  );
};

export default ContactForm;