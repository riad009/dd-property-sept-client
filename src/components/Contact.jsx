import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('/contact', values);
      message.success('Message sent successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md mb-10'>
      <h2 className='text-2xl font-semibold mb-6'>Contact Us</h2>
      <Form form={form} layout='vertical' onFinish={onFinish}>
        <Form.Item
          name='name'
          label='Name'
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input
            placeholder='Your Name'
            className='p-2 border border-gray-300 rounded-md w-full'
          />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input
            placeholder='Your Email'
            className='p-2 border border-gray-300 rounded-md w-full'
          />
        </Form.Item>
        <Form.Item
          name='message'
          label='Message'
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <TextArea
            rows={4}
            placeholder='Your Message'
            className='p-2 border border-gray-300 rounded-md w-full'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md h-10'
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
