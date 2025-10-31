import Item, { type AppNavigationItem } from "@/components/app/AppNavigation/Item";

type VerticalNavProps = {
  navigation: AppNavigationItem[];
  onSelect?: () => void;
};

const VerticalNav = ({ navigation, onSelect }: VerticalNavProps) => {
  return (
    <div className="relative flex grow flex-col gap-5 overflow-y-auto border-r border-muted bg-panel-1 px-6">
      <div className="flex h-16 shrink-0 flex-col justify-center font-heading text-heading-color">
        <div>
          <span className="font-heading text-lg font-bold">Grimwild</span>
          <span className="ml-2 text-base text-muted-color">Community Hub</span>
        </div>
      </div>
      <nav className="relative flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <Item key={`${item.name}-${item.href}`} item={item} onSelect={onSelect} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VerticalNav;
