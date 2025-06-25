import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    if (!name || !email || !message) {
      setError('Моля, попълнете всички задължителни полета.');
      setIsSubmitting(false);
      return;
    }

    try {
      if (onSubmit) {
        await onSubmit({ name, email, message });
      } else {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err: any) {
      setError('Неуспешно изпращане на съобщението. Моля, опитайте отново.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Име и фамилия*
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="Вашето име и фамилия"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Имейл адрес*
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="вашият@имейл.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="Вашият телефонен номер"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Съобщение*
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
          placeholder="Разкажете ни за вашия проект или запитване..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          Благодарим ви! Вашето съобщение е изпратено успешно.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        } text-white`}
      >
        {isSubmitting ? 'Изпращане...' : 'Изпрати съобщение'}
      </button>
    </form>
  );
};

export default ContactForm;