import { Preview } from "./Preview";
import { Navbar, Popover, Button, Tooltip, Menu, MenuTrigger, MenuContent, MenuItem, EmptyState, Timeline, TimelineItem } from "@florexlabs/ui";

export function NavbarPreview() {
  return (
    <Preview>
      <Navbar logo={<span style={{fontWeight:700,color:'#bdf146'}}>Florex</span>}>
        <a href="#" style={{color:'#b8c4ba',textDecoration:'none',fontSize:'0.875rem'}}>Docs</a>
        <a href="#" style={{color:'#b8c4ba',textDecoration:'none',fontSize:'0.875rem'}}>Pricing</a>
      </Navbar>
    </Preview>
  );
}

export function PopoverPreview() {
  return (
    <Preview>
      <Popover trigger={<Button variant="secondary">Click me</Button>}>
        <p style={{fontSize:'0.875rem',color:'#b8c4ba',margin:0}}>This is the popover content.</p>
      </Popover>
    </Preview>
  );
}

export function TooltipPreview() {
  return (
    <Preview>
      <Tooltip content="More info" side="top">
        <Button variant="ghost">Hover me</Button>
      </Tooltip>
      <Tooltip content="Bottom" side="bottom">
        <Button variant="ghost">Bottom</Button>
      </Tooltip>
    </Preview>
  );
}

export function MenuPreview() {
  return (
    <Preview>
      <Menu>
        <MenuTrigger>Options</MenuTrigger>
        <MenuContent>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Duplicate</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuContent>
      </Menu>
    </Preview>
  );
}

export function EmptyStatePreview() {
  return (
    <Preview>
      <EmptyState title="No results found" description="Try adjusting your search or filters." />
    </Preview>
  );
}

export function TimelinePreview() {
  return (
    <Preview>
      <Timeline>
        <TimelineItem title="Order placed">Your order has been confirmed.</TimelineItem>
        <TimelineItem title="Shipped">Package is on its way.</TimelineItem>
        <TimelineItem title="Delivered">Package delivered.</TimelineItem>
      </Timeline>
    </Preview>
  );
}
