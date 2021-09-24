import { readConfigFile } from "typescript";
import React from "react";
const EditTableRows = () => {
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder="Enter a name" name="fullName" />
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter a name" name="fullName" />
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter a name" name="fullName" />
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter a name" name="fullName" />
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter a name" name="fullName" />
            </td>
        </tr>
    )
}
export default EditTableRows