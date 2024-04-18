// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'login-page',
      title: 'Login demo',
      type: 'item',
      url: '/login-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
