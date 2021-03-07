import '../styles/Projects.css';

const Projects = () => {

    return (
        <div className="block margin fade">
            <h2 className="head">Mes projets...</h2>
            <p className="desc">
                J'ai réalisé plusieurs projets en web notamment pour l'IUT comme un "mini-facebook". Le but était de recréer en PHP quelques
                fonctionalités du réseau social <a href="https://fr-fr.facebook.com/" title="facebook" className="link" target="_blank" rel="noreferrer">Facebook</a> comme par exemple l'ajout et la
                suppression d'amis ou même la publication de post que l'on pouvait commenter. J'ai réalisé le tout en une petite semaine et
                j'ai conservé le code source sur <a href="https://bitbucket.org/product/" title="bitbucket" className="link" target="_blank" rel="noreferrer">BitBucket</a>. 
                Il est accessible à tous depuis ce <a href="https://bitbucket.org/bernardnunu/trombinouc/src/master/" title="trombinouc" className="link" target="_blank" rel="noreferrer">lien</a>.<br/><br/>

                Un des gros projets que je n'ai pas réalisé seul mais qui m'a permis de gagner en maturité 
                est celui de <a href="https://www.myperfectlink.fr/" title="myperfectlink" className="link" target="_blank" rel="noreferrer">MyPerfectLink</a>, un site pour les
                associations et les bénévoles crée pour un client avec lequel, j'ai gagné un petit peu d'argent en créant une micro-entreprise. Le code source n'est pas accessible
                car une grosse partie du site n'a pas été faite par moi, et je n'ai donc aucun droit de le rendre publique.<br/><br/>

                J'ai également réalisé cette fois-ci en dehors de mes études, un site de critiques de films et séries sur lequel 
                l'utilisateur pouvait commenter, répondre et intéragir avec d'autres utilisateurs.
                Le tout était automatisé et l'administateur pouvait ajouter/modifier ou supprimer des films lui-même.<br/>
                Le nom du projet était "MediaCritic" mais j'ai finalement arrêté de l'améliorer et de le mettre à jour malgré le fait que le site fonctionnait 
                très bien. Le code source de MediaCritic est aussi accessible depuis 
                ce <a href="https://bitbucket.org/bernardnunu/mediacritic/src/master/" title="mediacritic" className="link" target="_blank" rel="noreferrer">lien</a>.<br/><br/>

                Il y a d'autres projets qui eux n'ont pas forcément aboutis mais qui m'ont énormement aidé dans ma progression 
                et ma compréhension de choses spécifiques notamment en Javascript.<br/>
                Finalement, mon dernier projet concret est ce portfolio que j'ai fait complétement 
                en <a href="https://fr.reactjs.org/" title="reactjs" className="link" target="_blank" rel="noreferrer">React</a> un framework Javascript
                crée par Facebook.<br/>
                Plus récemment, j'ai fortement progressé en <a href="https://www.java.com/fr/" title="java" className="link" target="_blank" rel="noreferrer">Java</a> grâce 
                à divers petits projets réalisés pour l'IUT comme la création 
                d'un <a href="https://github.com/Littchii/packet-tracer-java" title="mini packet tracer" className="link" target="_blank" rel="noreferrer">mini Packet Tracer</a> ou encore
                l'apprentissage du logiciel Android Studio pour le développement d'applications Android.<br/><br/>
                
                <strong>Dernière chose :</strong> J'ai regardé des dizaines d'heures les tutoriels incroyables 
                de <a href="https://grafikart.fr/" title="grafikart" className="link" target="_blank" rel="noreferrer">Grafikart</a>.
                Il m'a permis de comprendre beaucoup de choses en plus des documentations de technologies ou langages que j'utilisais.<br/>
                Je tenais particulièrement à le remercier sur cette page.
            </p>
        </div>
    )

}   

export default Projects;