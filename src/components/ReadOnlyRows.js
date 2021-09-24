import { readConfigFile } from "typescript";
import react from 'react';

const ReadOnlyRows = ({contact}) => {
    return(
        <tr>
            <td>{contact.id}</td>
            <td>{contact.serviceName}</td>
            <td>{contact.category}</td> 
            <td>{contact.description}</td>
            <td>{contact.price}</td>
        </tr>
    );
};

export default ReadOnlyRows