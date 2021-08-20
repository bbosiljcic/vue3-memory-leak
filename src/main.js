import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import './theme/element.scss';

import MonitoringOverview from './components/MonitoringOverview';

// needed for webpack HRM
if (module && module.hot) {
    module.hot.accept();
}

const app = createApp(MonitoringOverview);

app.use(ElementPlus);
app.mount('#app');
