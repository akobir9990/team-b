import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Add new product",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Add new article",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Add new vacancies",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Add new offer",
    children: "Content of Tab Pane 4",
  },
];
const App = () => (
  <div className="container">
    <h1 className="adminTitle">Admin</h1>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>
);
export default App;
