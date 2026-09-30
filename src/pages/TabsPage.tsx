import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { TabsComponent } from '../components/Tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsComponent tabs={tabs} activeTab={selectedTab} />
    </>
  );
};
