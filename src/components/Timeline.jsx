import '../styles/Timeline.css';

const Timeline = () => {
    
    return (
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <h2 className="date">Juin 2019</h2>
                    <h2 className="head"> - Baccalauréat S spé Maths</h2>
                    <p className="desc">Obtiention d'un BAC S spécialité Maths.</p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="date">Septembre 2019</h2>
                    <h2 className="head">- Entrée à l'IUT R&T de Sophia Antipolis</h2>
                    <p className="desc">Après le lycée, je me suis orienté vers les domaines de l'infomatique et des réseaux.</p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2 className="date">Depuis septembre 2019</h2>
                    <h2 className="head">- Apprentissage du développement web</h2>
                    <p className="desc">J'apprends le développement web seul et à l'IUT, je suis devenu bon dans plusieurs langages comme le PHP ou le Javascript.</p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="date">Depuis septembre 2020</h2>
                    <h2 className="head">- 2ème année d'IUT R&T</h2>
                    <p className="desc">Aujourd'hui, je suis toujours en 2ème année d'IUT R&T et je continue d'apprendre tous les jours.</p>
                </div>
            </div>
        </div>
    )

}

export default Timeline;