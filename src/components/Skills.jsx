import '../styles/Skills.css';

const Skills = () => {

    return (
        <div className="block">
            <h2 className="head">Mes compétences...</h2>
            <p className="head">HTML5</p>
            <div className="bar">
                <div className="html">90%</div>
            </div>
            <p className="head">CSS3</p>
            <div className="bar">
                <div className="css">80%</div>
            </div>
            <p className="head">Javascript</p>
            <div className="bar">
                <div className="js">60%</div>
            </div>
            <p className="head">PHP</p>
            <div className="bar">
                <div className="php">70%</div>
            </div>
            <p className="head">Java</p>
            <div className="bar">
                <div className="java">50%</div>
            </div>
            <p className="head">Adobe Illustrator</p>
            <div className="bar">
                <div className="illu">75%</div>
            </div>
        </div>
    )
    
}

export default Skills;