export default function Banners({ theme, title, text = "" }) {
  const imageLinks = {
    success: "./src/assets/images/check-circle.png",
    warning: "./src/assets/images/exclamation.png",
    error: "./src/assets/images/x-circle.png",
    neutral: "./src/assets/images/icon.png",
  };

  let imageUrl = imageLinks[`${theme}`];

  return (
    <div className={`flex gap-x-1  rounded p-2 my-3 ${theme}`}>
      <div className="size-[25px]">
        <img src={imageUrl} alt={title} className="w-full" />
      </div>
      <div>
        <h1 className={`font-semibold text-lg`}>{title}</h1>
        <p className={`font-normal`}>{text}</p>
      </div>
    </div>
  );
}
