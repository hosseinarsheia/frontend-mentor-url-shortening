type Props = {
  title: string;
  className?: string | undefined;
};

const MyButton = ({ title, className }: Props) => {
  return (
    <a
      href='#/'
      className={`inline-block font-semibold text-center align-middle text-ce px-8 py-3 text-white rounded-full  bg-primary-myCyan ${className} border-[1px] border-transparent hover:border-primary-myCyan`}>
      {title}
    </a>
  );
};

export default MyButton;

MyButton.defaultProps = {
  title: 'prees me',
};
