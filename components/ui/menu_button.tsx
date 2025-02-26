import Image from "next/image";


const MenuButton = () => {
    return (
      <div className="bg-transparent cursor-pointer">
         <Image className="cursor-pointer" src={"/menu.svg"} alt={"menu"} height={46} width={46} />
      </div>
    );
  };
  
  export default MenuButton;