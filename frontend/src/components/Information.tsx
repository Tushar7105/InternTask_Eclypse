
import CollapsibleSection from "./Collapsible";

function Information() {
  const dummyData = [
    {
      title: "Size & Fit",
      children: "Some content to be shown here",
    },
    {
      title: "Delivery & Returns",
      children: "Some content to be shown here",
    },
    {
      title: "How It Was Made",
      children: "Some content to be shown here",
    },
  ];


  return (
    <div>
      {dummyData.map((item, index) => (
        <CollapsibleSection key={index} title={item.title}>
          {item.children}
        </CollapsibleSection>
      ))}
    </div>
  );
}

export default Information;
