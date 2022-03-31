import { getElement, insertElementInto } from "./utils";

const root = getElement('#root') as HTMLDivElement;

const ListComponent = (items: string[]) => {
    return `
        <ul>
            ${items.map(i => `<li>${i}</li>`).join('\n')}
        </ul>
    `;
}

insertElementInto(root, ListComponent(['Hi', 'My name is', 'Rohan']));