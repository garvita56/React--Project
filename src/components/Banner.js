import Card from './Card';
import{card_details}from'./data';

export default function Banner(){
    return( 
        <div id="banner-container">
           {card_details.map((card_info) => <Card {...card_info}/>)}
        </div>
    );
}