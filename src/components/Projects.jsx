import '../styles/Projects.css';

const Projects = () => {

    return (
        <div className="block margin">
            <h2 className="head">Mes projets...</h2>
            <p className="desc">
                J'ai réalisé plusieurs projets en web notamment pour l'IUT comme un "mini-facebook". Le but était de recréer en PHP quelques
                fonctionalités du réseau social <a href="https://fr-fr.facebook.com/" title="facebook" className="link" target="_blank" rel="noreferrer">Facebook</a> comme par exemple l'ajout et la
                suppression d'amis ou même la publication de post que l'on pouvait commenter. J'ai réalisé le tout en une petite semaine et
                j'ai conservé le code source sur <a href="https://bitbucket.org/product/" title="bitbucket" className="link" target="_blank" rel="noreferrer">BitBucket</a>. Il est accessible à tous depuis
                ce <a href="https://bitbucket.org/bernardnunu/trombinouc/src/master/" title="trombinouc" className="link" target="_blank" rel="noreferrer">lien</a>.<br/>
                J'ai également réalisé cette fois-ci en dehors de mes études, un site où l'on pouvait attribuer une note à un film ou une série et commenter.
                Le tout était automatisé et l'administateur pouvait ajouter/modifier ou supprimer des films lui-même.
                Le nom du projet était "MediaCritic" mais j'ai finalement arrêté de l'améliorer et de le mettre à jour malgré le fait que le site fonctionnait 
                très bien. Le code source de MediaCritic est aussi accessible depuis 
                ce <a href="https://bitbucket.org/bernardnunu/mediacritic/src/master/" title="mediacritic" className="link" target="_blank" rel="noreferrer">lien</a>.
                <br />Il y a d'autres projets qui eux n'ont pas forcément aboutis mais qui m'ont énormement aidé dans ma progression 
                et ma compréhension de choses spécifiques notamment en Javascript.
                <br />Finalement, mon dernier projet concret est ce portfolio que j'ai fait complétement 
                en <a href="https://fr.reactjs.org/" title="reactjs" className="link" target="_blank" rel="noreferrer">React</a> un framework Javascript
                crée par Facebook.
                <br /><br /><strong>Dernière chose :</strong> J'ai regardé des dizaines d'heures les tutoriels incroyables 
                de <a href="https://grafikart.fr/" title="grafikart" className="link" target="_blank" rel="noreferrer">Grafikart</a>.
                Il m'a permis de comprendre beaucoup de choses en plus des documentations de technologies ou langages que j'utilisais.
                <br />Je tenais particulièrement à le remercier sur cette page.
            </p>
        </div>
    )

}   

export default Projects;