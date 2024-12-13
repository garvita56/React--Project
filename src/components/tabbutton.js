export default function Tabbutton({children,command,activeClass}){
    return<button className={activeClass}onClick={command}>{children}</button>

}