import AppNav from "../components/AppNav";

export default function AppLayout({ children }) {
  return (
    <div>
      <AppNav />
      <p>App</p>
    </div>
  );
}
