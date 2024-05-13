export interface Content {
    show?: boolean;
    title?: string;
    anchor?: string;
    /**
     * @format rich-text
     */
    content: string;
}
  
export interface Props {
    content: Content;
}

export default function ContentLoad({ content }: Props): Content {
    return content;
}