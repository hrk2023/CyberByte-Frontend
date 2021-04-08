import React from 'react';
import '../static/css/Docs.css';

function Docs({doc}){
    return(
        <React.Fragment>
            {doc.map((item) => 
                (
                    <a href={doc.doc_link} target="_blank">
                        {doc.doc_name}
                    </a>
                )
            )}
        </React.Fragment>
    );
}

export default Docs;