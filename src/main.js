import { createApp } from 'vue';
import './theme/element.scss';

import MonitoringOverview from './components/MonitoringOverview';

const app = createApp(MonitoringOverview);

app.mount('#app');
