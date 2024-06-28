import { cn } from "@/lib/utils";
interface ArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

export const Article = ({ imgSrc, className, ...props }: ArticleProps) => {
  return (
    <div
      className={cn(
        " relative pinter-events-none z-50 overflow-hidden",
        className
      )}
      {...props}>
      <img
        src="logo.webp"
        className="pointer-events-none 
        absolute z-50 select-none"
        alt="photo"
      />
      <div className=" absolute -z-10 inset-0">
        <img src={imgSrc} className="object-cover" alt="photo" />
      </div>
    </div>
  );
};
