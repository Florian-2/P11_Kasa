import { Accordion as TypeAccordion} from "../../interfaces";
import { Item } from "./Item/Item";


export default function Accordion({ items }: { items: TypeAccordion[] }) {
    const accordions = items.map((item) => <Item key={item.id} data={item}/>)

    return accordions;
}