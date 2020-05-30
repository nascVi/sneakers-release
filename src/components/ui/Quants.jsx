import React from 'react' 

const Quants = ({quants, clickHandler, selectedQuant}) => {
    return (
        <div className="quants">
            {quants.map((quant, i) =>
                <span key={i} className={`${quant === selectedQuant.toLowerCase()? 'selected' : ''}`} onClick={e => clickHandler(e)}>{quant}</span>
            )}
        </div>
    );
};

export default Quants;
