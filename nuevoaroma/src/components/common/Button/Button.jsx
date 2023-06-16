import './Button.css';

const Button = (props) => {
    const {id, className, onClick, text} = props;

    return (
        <button 
        id= {id}
        clasname= {className}
        onClick= {onClick}
        >
        {text}
        </button>
    );
};

export default Button;