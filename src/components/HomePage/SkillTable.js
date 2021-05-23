import React from 'react';
import { Table } from 'react-bootstrap';
import "./style.css"

 function TableSkills() {
    return (
        <div>
             <Table responsive="sm" className="table">
                <thead>
                    <tr>
                        <th>Languages</th>
                        <th>Library</th>
                        <th>Database</th>
                        <th>Others</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>        
                        <td>HTML</td>
                        <td>jQuery</td>
                        <td>MySQL</td>
                        <td>Express</td>
                                
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>Bootstrap</td>
                        <td>MongoDB</td>
                        <td>ES6</td>         
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        <td>React</td>
                        <td>NoSQL</td>
                        <td>API</td>
                    </tr>
                    <tr>
                        <td colespan="1">Nodejs</td>
                        <td></td>
                        <td>IndexedDB</td>
                        <td>Handlebars</td>
                                    
                    </tr>
                </tbody>

            </Table>
        </div>
    );
}

export default TableSkills;