import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

export default function ResetPasswordForm() {
  const translate = useLanguage();
  
  return (
    <>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min: 8,
            message: 'Password must be at least 8 characters long',
          },
          {
            max: 50,
            message: 'Password must be less than 50 characters long',
          },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="confirm_password"
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Confirm password"
          size="large"
        />
      </Form.Item>
    </>
  );
}
