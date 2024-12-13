export default function Tabutton({children,command,activeClass}){
    return<button className={activeClass}onClick={command}>{children}</button>

}